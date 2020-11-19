import api from '@/services/api'

export default {
  getAllPosts () {
    return api().get('posts')
  },
  getOnePost (id) {
    return api().get(`posts/${id}`)
  },
  getAllComments (id) {
    return api().get(`posts/${id}/comments`)
  }
}
