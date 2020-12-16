<template>
  <div>
    <figure>
      <img
        src="../assets/icon-left-font-monochrome-black.svg"
        alt="image groupomania"
      >
    </figure>
    <h3> Create new post </h3>
    <div class="container">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data" method="POST">
        <img
          v-bind:src="imagePreview"
          v-show="showPreview"
          alt="preview image upload"
        />
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
          <label for="text" class="sr-only"> Write text for your post </label>
          <textarea
            name="text"
            id="text"
            type="text"
            v-model="text"
            placeholder="Write the text for your post here"
            class="form-control"
            rows="3"
            wrap="hard"
          ></textarea>
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
      id_user: '',
      subject: 1,
      showPreview: false,
      imagePreview: ''
    }
  },
  methods: {
    onSubmit() {
      const formData = new FormData()

      if (this.file) formData.append('file', this.file, this.file.name)
      if (this.text) formData.append('text', JSON.stringify(this.text))
      formData.append('id_user', this.id_user)
      formData.append('subject', JSON.stringify(this.subject))

      posts.createPost(formData)
        .then(() => {
          console.log('Post Created')
          this.$router.push('/posts')
        })
        .catch((err) => console.log(err));
    },
    onFileUpload(e) {
      this.file = e.target.files[0]
      const reader  = new FileReader()

      reader.addEventListener("load", function () {
        this.showPreview = true;
        this.imagePreview = reader.result
      }.bind(this), false)
      if( this.file ){
        if ( /\.(jpe?g|png|gif)$/i.test( this.file.name ) ) {
          reader.readAsDataURL( this.file );
        }
      }
    }
  },
  mounted() {
    if (!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
    else {
      this.id_user = localStorage.getItem('id_user')
    }
  }
}
</script>

<style scoped>

</style>
