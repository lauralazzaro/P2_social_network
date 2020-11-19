import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Posts from '../components/Posts'
import Post from '../components/Post'
import Signup from '../components/Signup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post
    }
  ]
})
