import axios from 'axios'
import { ref } from 'vue' 

const error = ref(null)

const validate = async () => {
  error.value = null
  try {
    const res = await axios.get('http://localhost:3000/auth/validate_token', {
      headers: {
        uid: window.localStorage.getItem('uid'),
        "access-token": window.localStorage.getItem('access-token'),
        client:window.localStorage.getItem('client'),
      }
    })

    if (!res) {
      throw new Error('認証に失敗しました')
    }

    error.value = null

    return res
  } catch (err) {
    error.value = '認証できませんでした'

    window.localStorage.removeItem('uid')
    window.localStorage.removeItem('access-token')
    window.localStorage.removeItem('client')
    window.localStorage.removeItem('name')

  }
}

const useValidate = () => {
  return { error, validate }
}

export default useValidate