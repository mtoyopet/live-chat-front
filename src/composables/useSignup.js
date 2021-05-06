import axios from 'axios'
import { ref } from 'vue'

const error = ref(null)

const signup = async (name, email, password, passwordConfirmation) => {
  error.value = null

  try {
    const res = await axios.post('http://localhost:3000/auth', { 
      name: name,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation
      }
    )

    if (!res) {
      throw new Error('アカウント登録に失敗しました')
    }
    error.value = null

    console.log("成功！")
    console.log(res.headers)

    return res
  } catch (err) {
    console.log(err)
    error.value = 'アカウントを登録できませんでした'
  }
}

const useSignup = () => {

  return { error, signup }
}

export default useSignup 