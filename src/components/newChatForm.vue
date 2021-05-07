<template>
  <form>
    <textarea 
      placeholder="メッセージを入力してEnterを押してください"
      v-model="message"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const message = ref('')

    const handleSubmit = async () => {
      
    }
  }
}
</script>

<style>

</style>