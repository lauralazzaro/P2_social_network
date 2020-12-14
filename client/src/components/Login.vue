<template>
    <div>
      <h1> Login </h1>
      <form @submit.prevent="onSubmit" class="form text-left ">
        <label for="email" class="sr-only"></label>
        <input
          id="email"
          type="email"
          label="email"
          v-model="body.email"
          placeholder="email"
          class="form-control col-md-6"
        >
        <label for="password" class="sr-only"></label>
        <input
          id="password"
          type="password"
          label="password"
          v-model="body.password"
          placeholder="password"
          class="form-control col-md-6"
        >
        <button class="btn btn-secondary">Login</button>
      </form>
    </div>
</template>

<script>
import auth from '../services/authService'


export default {
  name: 'login',
  data() {
    return {
      body: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      auth.login(this.body)
        .then((res) => {
          if (res.data != null) {
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id_user', res.data.id_user)
            localStorage.setItem('isLogged', 'true')
            localStorage.setItem('role', res.data.role)
           this.$router.push('/')
          } else {
            throw Error('Username or password incorrect')
          }
        }).catch((err) => console.log(err))
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
