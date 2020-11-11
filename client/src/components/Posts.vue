<template>
  <div>
    <h1> Posts page</h1>
    <div v-for="post in allPosts">
    {{ post }} -
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

// export default {
//   name: 'Posts',
//   data() {
//     return {
//       allPosts: {
//         id_post: null,
//         id_user: null,
//         text: null,
//         id_image: null,
//         id_category: null,
//         createdAt: null,
//         updatedAt: null
//       }
//     }
//   },
//   created: function () {
//     posts.getAllPosts()
//       .then(res => {
//         this.data = res.data
//         console.log(this.data)
//       })
//       .catch(err => console.log(err))
//   }
//
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
