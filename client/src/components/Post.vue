<template>
  <div class="container">
    <div class="row card text-left">
      <div class="col">
        <h2 class="card-text" v-if="`${post.text}` !== 'null'">
          {{ post.text }}
        </h2>
        <div v-if="`${post.imageUrl}` !== 'null'">
          <img
            :src="`${post.imageUrl}`"
            alt="image"
          >
        </div>
      </div>
    </div>
    <div
      v-if="`${owner}` === 'true'">
      <button
        class="btn btn-danger" @click="deletePost">
        Delete Post
      </button>
      <button class="btn btn-primary" @click="$router.push(`/posts/${$route.params.id}/modifyPost`)">
        Modify Post
      </button>
    </div>
    <div
      class="card row text-left"
      v-for="comment in comments"
      :key="comment.id_comment"
      style="margin-bottom: 30px; margin-top: 30px"
    >
      <div class="col">
        <p class="card-text" v-if="`${comment.text}` !== 'null'">
          {{ comment.text }}
        </p>
        <div>
          <img
            v-if="`${comment.imageUrl}` !== 'null'"
            :src="`${comment.imageUrl}`"
            alt="image"
            class="card-img-right"
          >
        </div>
      </div>
      <div class="col">
        Comment by {{ comment.user.username }}
      </div>
    </div>
  </div>
</template>

<script>
import post from '../services/postsService'

export default {
  name: 'Post',
  data() {
    return {
      post: {},
      username: '',
      comments: {},
      owner: false
    }
  },
  methods: {
    getPost() {
      post.getOnePost(this.$route.params.id)
        .then((res) => {
          this.post = res.data
          this.username = res.data.user.username
          if (parseInt(localStorage.getItem('id_user')) === this.post.id_user) {
            this.owner = true;
          }
        }).catch((err) => console.log(err))
    },
    getComment() {
      post.getAllComments(this.$route.params.id)
        .then((res) => {
          this.comments = res.data
        }).catch((err) => console.log(err))
    },
    deletePost() {
      post.deletePost(this.$route.params.id)
        .then(() => {
          console.log('Post deleted')
          this.$router.push('/posts')
        })
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    } else {
      this.getPost()
      this.getComment()
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 20rem;
}

button {
  margin-top: 20px;
}
</style>
