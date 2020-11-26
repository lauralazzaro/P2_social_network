<template>
  <div class="container">
    <h1> Created by: {{ username }}</h1>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
            <b-card-text v-if="`${post.text}` !== 'null'">
              {{ post.text }}
            </b-card-text>
            <div v-if="`${post.imageUrl}` !== 'null'">
              <img
                :src="`${post.imageUrl}`"
                alt="image"
              >
            </div>
          </b-card>
        </b-col>
      </b-row>
      <button class="btn btn-danger mt-auto" @click="deletePost">
        Delete Post
      </button>
      <b-row v-for="comment in comments" :key="comment.id_comment">
        <b-col cols="3">
          Comment by {{ comment.user.username }}
        </b-col>
        <b-col>
          <b-card>
            <b-card-text v-if="`${comment.text}` !== 'null'">
              {{ comment.text }}
            </b-card-text>
            <div >
              <img
                v-if="`${comment.imageUrl}` !== 'null'"
                :src="`${comment.imageUrl}`"
                alt="image"
              >
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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
      comments: {}
    }
  },
  methods: {
    getPost() {
      post.getOnePost(this.$route.params.id)
        .then((res) => {
          this.post = res.data
          this.username = res.data.user.username
        }).catch((err) => console.log(err))
    },
    getComment() {
      post.getAllComments(this.$route.params.id)
        .then((res) => {
          this.comments = res.data
        }).catch((err) => console.log(err))
    },
    deletePost(){
      post.deletePost(this.$route.params.id)
      .then(() => {
        console.log('Post deleted')
        this.$router.push('/posts')
      })
      .catch((err) => console.log(err))
    }
  },
  mounted() {
    this.getPost()
    this.getComment()
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 20rem;
}
</style>
