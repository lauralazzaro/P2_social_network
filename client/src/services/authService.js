import api from '@/services/api'

export default {
  login(credential) {
    return api().post('auth/login', credential)
  },
  signup(credential) {
    return api().post('auth/signup', credential)
  }
}
