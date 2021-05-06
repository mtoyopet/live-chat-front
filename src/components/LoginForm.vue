<template>
  <h2>ログイン</h2>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="メールアドレス" v-model="email">
    <input type="password" required placeholder="パスワード" v-model="password">
    <button>ログインする</button>    
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const email = ref('')
    const password = ref('')

    const handleSubmit = () => {
      console.log({ email, password })
    }

    return { email, password, handleSubmit }
  }
}
</script>
