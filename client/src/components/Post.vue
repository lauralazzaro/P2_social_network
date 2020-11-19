<template>
  <div class="container">
    <h1> Created by: {{ username }}</h1>
    <b-container>
      <b-row>
        <b-col>
          <b-card>
            <b-card-text>
              {{ post.text }}
            </b-card-text>
            <div v-if="`${post.imageUrl}`">
              <img
                :src="`${post.imageUrl}`"
                alt="image"
              >
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import post from '../services/postsService';

export default {
  name: 'Post',
  data() {
    return {
      post: {},
      username: ''
    }
  },
  methods: {
    getPost() {
      post.getOnePost(this.$route.params.id)
        .then((res) => {
          this.post = res.data;
          this.username = res.data.user.username;
          console.log(this.username);
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
img{
  max-width: 30rem;
}
</style>
