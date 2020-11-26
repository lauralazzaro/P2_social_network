import api from '@/services/api'

export default {
  getAllPosts() {
    return api().get('posts')
  },
  getOnePost(id) {
    return api().get(`posts/${id}`)
  },
  getAllComments(id) {
    return api().get(`posts/${id}/comments`)
  },
  createPost(body) {
    return api().post('posts', body)
  },
  deletePost(id){
    return api().delete(`posts/${id}`)
  }
}
