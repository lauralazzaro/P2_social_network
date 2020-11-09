import api from '@/services/api'

export default {
  register (credential) {
    return api().post('auth', credential)
  }
}
