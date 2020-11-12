<template>
  <div>
    <h1> Single Posts page</h1>
    <div>
      {{ post }}
    </div>
  </div>
</template>

<script>
import post from '../services/postsService';

export default {
  name: 'Post',
  data() {
    return {
      post: {}
    }
  },
  methods: {
    getPost() {
      post.getOnePost(this.$route.params.id)
        .then((res) => {
          this.post = res.data;
        })
        .catch((err) => console.log(err));
    }
  },
  mounted() {
    return this.getPost();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
