<template>
  <div>
    <h1>Signup</h1>
    <form @submit.prevent="onSubmit" class="form text-left">
      <label for="username" class="sr-only"></label>
      <input
        id="username"
        name="username"
        label="username"
        v-model="body.username"
        placeholder="username"
        class="form-control w-25"
      >
      <label for="email" class="sr-only"></label>
      <input
        id="email"
        type="email"
        name="email"
        label="email"
        v-model="body.email"
        placeholder="email"
        class="form-control w-25"
      >
      <label for="password" class="sr-only"></label>
      <input
        id="password"
        type="password"
        name="password"
        label="password"
        v-model="body.password"
        placeholder="password"
        class="form-control w-25"
      >
      <button class="btn btn-secondary mt-auto">Signup</button>
    </form>
  </div>
</template>

<script>
import auth from '../services/authService'

export default {
  name: 'signup',
  data() {
    return {
      body: {
        email: '',
        password: '',
        username: ''
      }
    }
  },
  methods: {
    onSubmit() {
      if (this.body.email !== '' && this.body.username !== '' && this.body.password !== '') {
        auth.signup(this.body)
          .then(() => this.$router.push('/posts'))
          .catch((err) => console.log(err))
      } else {
        throw new Error('You must insert all fields')
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
