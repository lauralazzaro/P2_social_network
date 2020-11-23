<template>
  <div>
    <div class="container">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data" method="POST">
        <div class="form-group">
          <input type="file" @change="onFileUpload">
        </div>
        <div class="form-group">
          <input type="text" v-model="text" placeholder="text" class="form-control">
        </div>
        <div class="form-group">
          <button class="btn btn-primary btn-block btn-lg">Send</button>
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
      text: null,
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
        .then(() => console.log('Post Created'))
        .catch((err) => console.log(err));
    },
    onFileUpload(e) {
      this.file = e.target.files[0]
    }
  }
}
</script>

<style scoped>

</style>
