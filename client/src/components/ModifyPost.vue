<template>
    <div>
      <h1> Modify post: {{ $route.params.id }} </h1>
      <div class="container">
        <form @submit.prevent="onSubmit" enctype="multipart/form-data" method="POST">
          <div class="form-group text-left">
            <label for="file" class="sr-only">Upload image</label>
            <input
              name="file"
              id="file"
              type="file"
              @change="onFileUpload"
            >
          </div>
          <div class="form-group text-left">
            <label for="text" class="sr-only"> Write text for your post </label>
            <input
              name="text"
              id="text"
              type="text"
              v-model="text"
              :placeholder="this.text"
              class="form-control"
            >
          </div>
          <div class="form-group">
            <button class="btn btn-secondary" role="button">Send</button>
          </div>
        </form>
      </div>
    </div>
</template>

<script>
import posts from '../services/postsService';

export default {
  name: 'ModifyPost',
  data() {
    return {
      text: '',
      file: null,
      id_user: 1,
      subject: 1

    }
  },
  methods: {
    onSubmit() {
      const formData = new FormData()

      if (this.file) formData.append('file', this.file, this.file.name)
      if (this.text) formData.append('text', JSON.stringify(this.text))
      formData.append('id_user', JSON.stringify(this.id_user))
      formData.append('subject', JSON.stringify(this.subject))

      for (let key of formData.entries()) {
        console.log(key)
      }

      posts.createPost(formData)
        .then(() => {
          console.log('Post modified')
          this.$router.push(`/posts/${this.$route.params.id}`)
        })
        .catch((err) => console.log(err));
    },
    onFileUpload(e) {
      this.file = e.target.files[0]
    }
  },
  mounted() {
    posts.getOnePost(this.$route.params.id)
      .then((res) => {
        console.log(res)
        this.text = res.data.text
        this.file = res.data.imageUrl
        this.id_user = 1
        this.subject = 1
      })
    .catch((err) => console.log(err))
  }
}
</script>

<style scoped>

</style>
