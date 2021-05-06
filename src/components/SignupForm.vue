<template>
  <h2>アカウントを登録</h2>
  <form @submit.prevent="handleSubmit">
    <input type="text" required placeholder="名前" v-model="name">
    <input type="email" required placeholder="メールアドレス" v-model="email">
    <input type="password" required placeholder="パスワード" v-model="password">
    <input type="password" required placeholder="パスワード（確認用）" v-model="passwordConfirmation">
    <button>登録する</button>    
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const passwordConfirmation = ref('')

    const { error, signup } = useSignup()

    const handleSubmit = async () => {
      await signup(name.value, email.value, password.value, passwordConfirmation.value)

      if (!error.value) {
        console.log(11111, error.value)
        // context.emit('signup')
      }
    }

    return { name, email, password, passwordConfirmation, handleSubmit }
  },
}
</script>
