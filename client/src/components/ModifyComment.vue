<template>
  <div>
    <figure>
      <img
        src="../assets/icon-left-font-monochrome-black.svg"
        alt="image groupomania"
      >
    </figure>
    <h3> Modify comment</h3>
    <div class="container">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <img
          v-bind:src="imagePreview"
          v-if="showPreview"
        />
        <img
          v-bind:src="imgUrl"
          v-if="!showPreview"
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
          <label for="text" class="sr-only"> Update the text of your comment </label>
          <textarea
            name="text"
            id="text"
            type="text"
            v-model="text"
            :placeholder="text"
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
  name: 'ModifyComment',
  data() {
    return {
      text: '',
      file: null,
      subject: 1,
      id_post: null,
      imgUrl: null,
      showPreview: false,
      imagePreview: ''
    }
  },
  methods: {
    onSubmit() {
      const formData = new FormData()

      if (this.file) formData.append('file', this.file, this.file.name)
      if (this.text) formData.append('text', this.text)
      if (this.imgUrl) formData.append('imageUrl', this.imgUrl)
      formData.append('subject', JSON.stringify(this.subject))

      posts.modifyComment(`${this.$route.params.id}`, formData)
        .then(() => {
          this.$router.push(`/posts/${this.id_post}`)
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
    } else {
      this.id_user = parseInt(localStorage.getItem('id_user'))
      posts.getOneComment(this.$route.params.id)
        .then((res) => {
          this.text = res.data.text
          if(res.data.imageUrl !== 'null') this.imgUrl = res.data.imageUrl
          this.id_post = res.data.id_post
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
