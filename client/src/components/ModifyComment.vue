<template>
  <div>
    <h1> Modify comment: {{ $route.params.id }} </h1>
    <div class="container">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
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
          <label for="text" class="sr-only"> Update the text of your comment </label>
          <input
            name="text"
            id="text"
            type="text"
            v-model="text"
            :placeholder="text"
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
  name: 'ModifyComment',
  data() {
    return {
      text: '',
      file: null,
      subject: 1,
      id_post: null

    }
  },
  methods: {
    onSubmit() {
      const formData = new FormData()

      if (this.file) formData.append('file', this.file, this.file.name)
      if (this.text) formData.append('text', this.text)
      formData.append('subject', JSON.stringify(this.subject))

      for (let key of formData.entries()) {
        console.log(key)
      }

      posts.modifyComment(`${this.$route.params.id}`, formData)
        .then(() => {
          this.$router.push(`/posts/${this.id_post}`)
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
    } else {
      this.id_user = parseInt(localStorage.getItem('id_user'))
      posts.getOneComment(this.$route.params.id)
        .then((res) => {
          console.log(res)
          this.text = res.data.text
          this.file = res.data.imageUrl
          this.id_post = res.data.id_post
          this.subject = 1
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
