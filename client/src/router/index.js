import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/Login'
import Posts from '../components/Posts'
import Post from '../components/Post'
import Signup from '../components/Signup'
import PostForm from '../components/PostForm'
import ModifyPost from '../components/ModifyPost';

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
      path: '/posts/createPost',
      name: 'PostForm',
      component: PostForm
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    },
    {
      path: '/posts/:id/modifyPost',
      name: 'ModifyPost',
      component: ModifyPost
    },
    ,
    {
      path: '/posts/:id',
      name: 'Post',
      component: Post
    },
    {
      path: '*',
      redirect: '/posts'
    }
  ]
})
