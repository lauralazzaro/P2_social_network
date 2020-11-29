<template>
  <div>
    <h1> Create new post </h1>
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
            placeholder="text"
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
  name: 'PostForm',
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
          console.log('Post Created')
          this.$router.push('/posts')
        })
        .catch((err) => console.log(err));
    },
    onFileUpload(e) {
      this.file = e.target.files[0]
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>
