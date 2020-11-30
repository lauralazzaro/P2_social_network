<template>
  <div id="app" class="container">
    <Navbar
    :nav-links="navLinks"
    :image-path="require('./assets/icon.png')"
    />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  components: {Navbar},
  name: 'App',
  data: () => ({
    navLinks: [
      {
        text: 'Home',
        path: '/'
      },
      {
        text: 'Create Post',
        path: '/posts/createPost'
      }
    ]
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 900px;
}

input {
  margin-top: 20px;
  margin-bottom: 20px;

}

button {
  margin-top: 30px
}

body {
  padding-top: 65px;
}

</style>
