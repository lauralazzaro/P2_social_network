import api from '@/services/api'

export default {
  signup (credential) {
    return api().post('auth', credential)
  }
}
