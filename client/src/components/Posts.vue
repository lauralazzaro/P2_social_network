<template>
  <div class="">
    <h1> Posts page</h1>
    <b-list-group v-for="post in allPosts" :key="post.id_post">
      <b-list-group-item>
        {{ post }}
        <b-link :to="`${post.id_post}`">open</b-link>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
import posts from '../services/postsService';

export default {
  name: 'Posts',
  data() {
    return {
      allPosts: {}
    }
  },
  methods: {
    getPost() {
      posts.getAllPosts()
        .then((res) => {
          this.allPosts = res.data;
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
