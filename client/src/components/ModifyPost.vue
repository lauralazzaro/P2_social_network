<template>
  <div>
    <h1> Modify post  </h1>
    <div class="container">
      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        <img
          v-bind:src="imagePreview"
          v-show="showPreview"
          style="max-width: 500px; margin-bottom: 30px"
        />
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
      subject: 1,
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

      posts.modifyPost(`${this.$route.params.id}`, formData)
        .then(() => {
          console.log('Post modified')
          this.$router.push(`/posts/${this.$route.params.id}`)
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
      this.id_user = localStorage.getItem('id_user')
      posts.getOnePost(this.$route.params.id)
        .then((res) => {
          console.log(res)
          if(res.data.imageUrl !== 'null') this.imgUrl = res.data.imageUrl
          this.text = res.data.text
          this.subject = 1
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
