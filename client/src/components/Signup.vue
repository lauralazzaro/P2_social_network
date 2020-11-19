<template>
  <div>
    <h1>Signup</h1>
    <b-form>
      <b-form-group>
        <b-form-input
          id="username"
          name="username"
          label="username"
          v-model="body.username"
          placeholder="username">
        </b-form-input>
        <b-form-input
          id="email"
          type="email"
          name="email"
          label="email"
          v-model="body.email"
          placeholder="email">
        </b-form-input>
        <b-form-input
          id="password"
          type="password"
          name="password"
          label="password"
          v-model="body.password"
          placeholder="password">
        </b-form-input>
        <b-button @click="onSubmit()">Login</b-button>
      </b-form-group>
    </b-form>
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
      auth.signup(this.body)
        .then((res) => {
          console.log(res.data)
        }).catch((err) => console.log(err))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
