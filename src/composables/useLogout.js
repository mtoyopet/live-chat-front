import axios from 'axios'
import { ref } from 'vue'

const error = ref('')

const logout = async () => {
  error.value = null

  try {
    const res = await axios.delete('http://localhost:3000/auth/sign_out', {
      headers: {
        uid: window.localStorage.getItem('uid'),
        "access-token": window.localStorage.getItem('access-token'),
        client:window.localStorage.getItem('client')
      }
    })
  
    if (!res) { 
      new Error('ログアウトできませんでした')
    }
  
    window.localStorage.removeItem('access-token')
    window.localStorage.removeItem('client')
    window.localStorage.removeItem('uid')
    window.localStorage.removeItem('name')  

  } catch (err) {
    error.value = err.message
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout