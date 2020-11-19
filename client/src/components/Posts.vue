<template>
  <div class="container">
    <h1> Posts page</h1>
    <b-container>
      <b-row v-for="post in allPosts" :key="post.id_post">
        <b-col>
          <b-card>
            <b-card-text>
              {{ post.text }} <i>created by</i> <b>{{ post.user.username }}</b>
            </b-card-text>
            <div v-if="`${post.imageUrl}`">
              <img
                :src="`${post.imageUrl}`"
                alt="image"
              >
            </div>
            <router-link :to="`${post.id_post}`">
              open
            </router-link>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
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
    return this.getPosts()
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  max-width: 30rem;
}

</style>
