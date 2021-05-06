<template>
  <div class="container welcome">
    <p>ようこそ</p>
    <div v-if="shouldShowLoginForm">
      <login-form />
      <p>アカウントがありませんか？アカウント登録は<span @click="shouldShowLoginForm = false">こちら</span>をクリック</p>
    </div>
    <div v-if="!shouldShowLoginForm">
      <signup-form />
      <p>アカウントをお持ちですか？ログインは<span @click="shouldShowLoginForm = true">こちら</span>をクリック</p>
    </div>
  </div>
</template>

<script>
import LoginForm from '../components/LoginForm.vue'
import SignupForm from "../components/SignupForm.vue"
import { ref } from 'vue'

export default  {
  components: { SignupForm, LoginForm },
  setup() {
    const shouldShowLoginForm = ref(true)

    return { shouldShowLoginForm }
  }
}
</script>


<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }

  /* フォームのスタイル */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>