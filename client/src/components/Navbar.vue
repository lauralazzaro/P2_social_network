<template>
  <nav
    :style="{background: background || '#122542'}"
    class="navbar fixed-top navbar-expand-md navbar-dark">
    <div class="nav navbar-nav">
      <figure class="image-logo">
      <img
        :src="imagePath"
        alt="logo"
        height="100%"
      >
    </figure>

      <ul
        :style="{background: background || '#122542'}"
        class="navbar-nav"
      >

        <li
          v-if="`${isLogged}` === 'true'"
          class="nav-item"
          v-for="(link, index) in navLinks"
          :key="index"
          @mouseenter="$event.currentTarget.style.background = hoverBackground || '#AFAFB2' "
          @mouseleave="$event.currentTarget.style.background = background || '#122542' "
        >
          <router-link
            class="nav-link"
            :to="link.path"
            :style="{color: linkColor || '#FFF'}"
          >
            {{ link.text }}
          </router-link>
        </li>
        <li
          v-if="`${isLogged}` === 'true'"
          class="nav-item"
          @mouseenter="$event.currentTarget.style.background = hoverBackground || '#AFAFB2' "
          @mouseleave="$event.currentTarget.style.background = background || '#122542' "
        >
          <a
            class="nav-link"
            href="/" @click.prevent="deleteAccount(id_user)">Delete Account</a>
        </li>
        <li
          v-if="`${isLogged}` === 'true'"
          class="nav-item"
          @mouseenter="$event.currentTarget.style.background = hoverBackground || '#AFAFB2' "
          @mouseleave="$event.currentTarget.style.background = background || '#122542' "
        >
          <a
            class="nav-link"
            href="/" @click.prevent="logout">Logout</a>
        </li>
        <li
          v-if="`${isLogged}` === 'false'"
          class="nav-item"
          @mouseenter="$event.currentTarget.style.background = hoverBackground || '#AFAFB2' "
          @mouseleave="$event.currentTarget.style.background = background || '#122542' "
        >
          <router-link
            class="nav-link"
            to="Login">Login</router-link>
        </li>
        <li
          v-if="`${isLogged}` === 'false'"
          class="nav-item"
          @mouseenter="$event.currentTarget.style.background = hoverBackground || '#AFAFB2' "
          @mouseleave="$event.currentTarget.style.background = background || '#122542' "
        >
          <router-link
            class="nav-link"
            to="Signup">Signup</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import auth from '../services/authService';

export default {
  data() {
    return {
      isLogged: 'false',
      id_user: null
    }
  },
  name: 'Navbar',
  props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
  methods: {
    logout() {
      localStorage.clear()
      this.isLogged = 'false'
      this.$router.push('/login')
    },
    deleteAccount(id) {
      auth.deleteAccount(id)
        .then(() => {
          this.logout()
          this.$router.push('/signup')
        })
        .catch((err) => console.log(err))
    }
  },
  mounted() {
    if (localStorage.getItem('isLogged') === 'true') {
      this.isLogged = 'true'
    }
    this.id_user = parseInt(localStorage.getItem('id_user'))
  }
}
</script>

<style scoped>
nav {
  width: 100%;
}

ul {
  display: flex;
  height: 100%;
  align-items: center;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  list-style-type: none;
}

li {
  padding: 10px 10px;
  border-radius: 5px;
  margin-left: 5px;
}

a {
  text-decoration: none;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  color: #FFF;
}

figure {
  cursor: pointer;
  margin: auto;
  height: 50px;
}

.navbar-nav {
  flex-flow: row;
}

.navbar {
  flex-flow: row;
  display: inline-flex;
}

</style>
