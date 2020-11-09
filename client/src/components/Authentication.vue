<template>
  <div>
    <h1> Authentication page</h1>

    <input
      type="email"
      name="email"
      v-model="email"
      placeholder="email"/>
    <br>
    <input
      type="password"
      name="password"
      v-model="password"
      placeholder="password"/>
    <br>
    <button @click="login()">Login</button>
  </div>
</template>

<script>
import auth from '../services/authService'

export default {
  name: 'Authentication',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const response = await auth.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
