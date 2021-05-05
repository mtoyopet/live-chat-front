<template>
  <div class="container welcome">
    <p>ようこそ</p>
    <signup-form />
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue"

export default  {
  components: { SignupForm },
}
</script>

<style scoped>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
</style>