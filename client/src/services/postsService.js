import api from '@/services/api'

export default {
  getAllPosts() {
    return api().get('posts', {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  getOnePost(id) {
    return api().get(`posts/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  getAllComments(id) {
    return api().get(`posts/${id}/comments`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  createPost(body) {
    return api().post('posts', body, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  deletePost(id) {
    return api().delete(`posts/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  modifyPost(id) {
    return api().put(`posts/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  }
}
