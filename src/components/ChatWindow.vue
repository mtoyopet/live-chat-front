<template>
  <div>
    {{ messages }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      messages: [],
      error: null
    }
  },
  methods: {
    async getMessages () {
      try {
        const res = await axios.get('http://localhost:3000/messages', {
          headers: {
            uid: window.localStorage.getItem('uid'),
            "access-token": window.localStorage.getItem('access-token'),
            client:window.localStorage.getItem('client')
          }
        })

        if (!res) {
          throw new Error('メッセージの受け取りに失敗しました')
        }
        this.messages = res.data
      } catch (err) {
        this.error = 'メッセージの受け取りに失敗しました'
      }
    }
  },
  mounted () {
    this.getMessages()
  }
}
</script>

<style>

</style>