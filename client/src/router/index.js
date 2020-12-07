import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Posts from '../components/Posts'
import Post from '../components/Post'
import Signup from '../components/Signup'
import PostForm from '../components/PostForm'
import ModifyPost from '../components/ModifyPost'
import ModifyComment from '../components/ModifyComment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Posts',
      component: Posts,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresAuth: false
      }
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/posts/modifyComment/:id',
      name: 'ModifyComment',
      component: ModifyComment,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/posts/createPost',
      name: 'PostForm',
      component: PostForm,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/posts/:id/modifyPost',
      name: 'ModifyPost',
      component: ModifyPost,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
