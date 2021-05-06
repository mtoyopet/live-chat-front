import axios from 'axios'
import { ref } from 'vue'
import setItem from '../auth/setItem'

const error = ref(null)

const login = async (email, password) => {
  error.value = null

  try {
    const res = await axios.post('http://localhost:3000/auth/sign_in', { 
      email: email,
      password: password,
      }
    )

    if (!res) {
      throw new Error('ログインに失敗しました')
    }
    error.value = null

    console.log("成功！")
    setItem(res.headers, res.data.data.name)

    return res
  } catch (err) {
    console.log(err)
    error.value = 'メールアドレスかパスワードが違います'
  }
}

const useLogin = () => {

  return { error, login }
}

export default useLogin 