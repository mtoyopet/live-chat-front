<template>
  <div class="container">
    <navbar @redirectToWelcome="redirectToWelcome" />
    <chat-window />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ChatWindow from '../components/ChatWindow'
import { useRouter } from 'vue-router'

export default {
  components: { Navbar, ChatWindow },
  setup() {
    const router = useRouter()
    const redirectToWelcome = () => {
      router.push({ name: 'Welcome' })
    }
    return { redirectToWelcome }
  }
}
</script>
