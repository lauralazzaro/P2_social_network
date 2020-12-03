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
  createComment(body) {
    return api().post('posts/createComment', body, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  },
  deleteComment(id) {
    return api().delete(`posts/deleteComment/${id}`, {
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
  modifyPost(id, body) {
    return api().put(`posts/${id}`, body, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    })
  }
}
