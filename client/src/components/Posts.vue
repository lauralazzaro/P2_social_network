<template>
  <div class="container">
    <figure>
      <img
        src="../assets/icon-left-font-monochrome-black.svg"
        alt="image groupomania"
      >
    </figure>
      <div
        class="row border-secondary text-justify"
        v-for="post in allPosts"
        :key="post.id_post"
      >
        <div class="col">
          <div class="card-body">
            <div class="card-text" v-if="`${post.text}` !== 'null'">
              {{ post.text }} <i>created by</i> <b>{{ user(post) }}</b>
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
              View post
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
      allPosts: {},
      username: 'Account Deleted'
    }
  },
  methods: {
    getPosts() {
      posts.getAllPosts()
        .then((res) => {
          this.allPosts = res.data
        })
        .catch((err) => console.log(err))
    },
    user(post) {
      if(post.user != null) {
        return post.user.username
      } else return this.username
    }
  },
  mounted() {
    if(!localStorage.getItem('token')) {
      this.$router.push('/login')
    }
    else {
      this.getPosts()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  border-bottom: 1px solid #000;
}
img{
  max-width: 200px;
  margin-top: 20px;
}
</style>
