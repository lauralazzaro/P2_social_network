<template>
  <nav
    :style="{background: background || '#333'}"
    class="navbar fixed-top navbar-expand-lg ">
    <div class="nav navbar-nav mr-auto">
      <ul
        :style="{background: background || '#333'}"
      >
        <figure class="image-logo">
          <img
            :src="imagePath"
            alt="logo"
            height="50px"
            width="50px">

        </figure>
        <li
          class="nav-item"
          v-for="(link, index) in navLinks"
          :key="index"
          @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999' "
          @mouseleave="$event.currentTarget.style.background = background || '#333' "
        >
          <router-link
            class="nav-link"
            :to="link.path"
            :style="{color: linkColor || '#FFF'}"
          >
            {{ link.text }}
          </router-link>
        </li>
      </ul>
     </div>
    <div class="nav navbar-nav ml-auto">
      <ul
        :style="{background: background || '#333'}"
      >
         <li
          class="nav-item"
          @mouseenter="$event.currentTarget.style.background = hoverBackground || '#999' "
          @mouseleave="$event.currentTarget.style.background = background || '#333' "
        >
           <a href="/" @click.prevent="logout">Logout</a>
        </li>
      </ul>
     </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['navLinks', 'background', 'linkColor', 'hoverBackground', 'imagePath'],
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/login')
    }
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
  padding: 10px 20px;
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
  margin-top: 15px;
}

</style>
