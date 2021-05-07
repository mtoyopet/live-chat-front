<template>
  <div class="container">
    <navbar @logout="redirectToWelcome" />
    <test />
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

