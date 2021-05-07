<template>
  <div class="container">
    <navbar @logout="redirectToWelcome" />
  </div>
</template>

<script>
import navbar from '../components/Navbar'
import { useRouter } from 'vue-router'

export default {
  components: { navbar },
  setup() {
    const router = useRouter()
    const redirectToWelcome = () => {
      router.push({ name: 'Welcome' })
    }
    return { redirectToWelcome }
  }
}
</script>
