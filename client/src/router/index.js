import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Authentication from '@/components/Authentication'
import Posts from '../components/Posts';
import Post from '../components/Post';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/auth',
      name: 'Authentication',
      component: Authentication
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
