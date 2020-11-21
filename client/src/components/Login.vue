<template>
  <div>
    <b-form>
      <b-form-group>
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
          if (res.data != null) this.$router.push('/posts')
          else throw Error('Username or password incorrect')
          console.log(res.data)
        }).catch((err) => console.log(err))
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
