<template>
  <div>
    <b-form>
      <b-form-group>
        <b-form-input
          id="text"
          name="text"
          label="text"
          v-model="body.text"
          placeholder="text">
        </b-form-input>
        <b-form-input
          id="imageUrl"
          name="imageUrl"
          label="imageUrl"
          v-model="body.imageUrl"
          placeholder="imageUrl">
        </b-form-input>
        <b-button @click="createPost()">Send</b-button>
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import posts from '../services/postsService';

export default {
  name: 'PostForm',
  data() {
    return {
      body: {
        text: '',
        imageUrl: '',
        id_user: 1,
        subject: 1
      }
    }
  },
  methods: {
    createPost() {
      posts.createPost(this.body)
        .then(() => console.log('Post Created'))
        .catch((err) => console.log(err));
    }
  }
}
</script>

<style scoped>

</style>
