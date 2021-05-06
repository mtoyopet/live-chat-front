<template>
  <h2>ログイン</h2>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="メールアドレス" v-model="email">
    <input type="password" required placeholder="パスワード" v-model="password">
    <div class="error">{{ error }}</div>
    <button>ログインする</button>    
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const { error, login } = useLogin()

    const handleSubmit = async () => {
      const res = await login(email.value, password.value)

      console.log(res)
    }

    return { email, password, handleSubmit, error }
  }
}
</script>
