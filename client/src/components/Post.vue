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
    <div style="margin-top: 20px;" class="container text-justify">
      <h5 style="font-weight: bold"> Insert Comment </h5>
      <div>
        <form @submit.prevent="onSubmitComment" enctype="multipart/form-data" method="POST">
          <div class="custom-file">
            <label for="file" class="custom-file-label">Upload image</label>
            <input
              name="file"
              id="file"
              type="file"
              @change="onFileUpload"
              class="custom-file-input"
            >
          </div>
          <div class="form-group text-left">
            <label for="text" class="sr-only"> Write text for your comment </label>
            <input
              name="text"
              id="text"
              type="text"
              v-model="text"
              placeholder="Insert text for comment"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <button class="btn btn-secondary" role="button">Send Comment</button>
          </div>
        </form>
      </div>
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
      <div
        v-if="`${comment.id_user}` === `${id_user}`">
        <button
          class="btn btn-danger" @click="deleteComment(comment.id_comment)">
          Delete Post
        </button>
        <button class="btn btn-primary" @click="">
          Modify Post
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import posts from '../services/postsService'

export default {
  name: 'Post',
  data() {
    return {
      post: {},
      username: '',
      comments: {},
      owner: false,
      file: '',
      text: '',
      subject: 1,
      id_post: null,
      id_user: '',
      newComment: {}
    }
  },
  methods: {
    getPost() {
      posts.getOnePost(this.$route.params.id)
        .then((res) => {
          this.post = res.data
          this.username = res.data.user.username
          if (parseInt(localStorage.getItem('id_user')) === this.post.id_user) {
            this.owner = true;
          }
        }).catch((err) => console.log(err))
    },
    getComment() {
      posts.getAllComments(this.$route.params.id)
        .then((res) => {
          this.comments = res.data
        }).catch((err) => console.log(err))
    },
    deletePost() {
      posts.deletePost(this.$route.params.id)
        .then(() => {
          console.log('Post deleted')
          this.$router.push('/posts')
        })
        .catch((err) => console.log(err))
    },
    deleteComment(id) {
      console.log(id)
      posts.deleteComment(parseInt(id))
        .then(() => {
          console.log('Comment deleted')
          location.reload()
        })
        .catch((err) => console.log(err))
    },
    onFileUpload(e) {
      this.file = e.target.files[0]
    },
    onSubmitComment() {
      const formData = new FormData()

      if (this.file) formData.append('file', this.file, this.file.name)
      if (this.text) formData.append('text', this.text)
      formData.append('id_post', this.id_post)
      formData.append('id_user', this.id_user)
      formData.append('subject', JSON.stringify(this.subject))

      for (let key of formData.entries()) {
        console.log(key)
      }

      posts.createComment(formData)
        .then(() => {
          location.reload()
        })
        .catch((err) => console.log(err))

      console.log('comment sent')
    },
  },
  mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    } else {
      this.getPost()
      this.getComment()
      this.id_user = parseInt(localStorage.getItem('id_user'))
      this.id_post = `${this.$route.params.id}`
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
