<template>
  <div id="app" class="container">
    <Navbar
    :nav-links="navLinks"
    :image-path="require('./assets/icon.png')"
    :key="$route.fullPath"
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
  margin-top: 60px;
  max-width: 900px;
}

input {
  margin-top: 20px;
  margin-bottom: 20px;
}

button {
  margin-top: 20px;
  margin-bottom: 20px;
}

body {
  padding-top: 65px;
  background-color: rgba(175, 175, 178, 0.6);
}

.container {
  background-color: #FFFFFF;
  border-radius: 5px;
  padding: 15px;
}

img{
  max-width: 100%;
  margin-bottom: 20px;
}

textarea{
  margin-top: 10px;
}

a, a:hover{
  color: #FFFFFF;
}

</style>
