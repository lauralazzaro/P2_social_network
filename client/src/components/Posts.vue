<template>
  <div class="container">
    <h1> Posts page</h1>
      <div class="row" v-for="post in allPosts" :key="post.id_post">
        <div class="col">
          <div class="card-body">
            <div class="card-text" v-if="`${post.text}` !== 'null'">
              {{ post.text }} <i>created by</i> <b>{{ post.user.username }}</b>
            </div>
            <div>
              <img
                v-if="`${post.imageUrl}` !== 'null'"
                :src="`${post.imageUrl}`"
                alt="image"
                class="img-fluid"
              >
            </div>
            <button @click="$router.push(`posts/${post.id_post}`)" class="btn btn-secondary">
              View posts
            </button>
          </div>
        </div>
      </div>
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
    getPosts() {
      posts.getAllPosts()
        .then((res) => {
          this.allPosts = res.data
        })
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    if(!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
    else {
      return this.getPosts()
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 30rem;
}

</style>
