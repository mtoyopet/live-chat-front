<template>
  <div class="container">
    <navbar @redirectToWelcome="redirectToWelcome" />
    <chat-window :messages="formattedMessages" :error="error" />
    <new-chat-form @getMessages="getMessages" />
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import ChatWindow from '../components/ChatWindow'
import NewChatForm from '../components/NewChatForm'
import axios from 'axios'
import { formatDistanceToNow } from 'date-fns'
import { ja } from 'date-fns/locale'

export default {
  components: { Navbar, ChatWindow, NewChatForm },
  data () {
    return {
      messages: [],
      error: null
    }
  },
  computed: {
    formattedMessages () {
      if (!this.messages.length) { return [] }

      return this.messages.map(message => {
        let time = formatDistanceToNow(new Date(message.created_at), { locale: ja })
        return { ...message, created_at: time }
      })
    }
  },
  methods: {
    redirectToWelcome () {
      this.$router.push({ name: 'Welcome' })
    },
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
          new Error('メッセージ一覧を取得できませんでした')
        }

        this.messages = res.data 
      } catch (err) {
        console.log(err)
        this.error = 'メッセージ一覧を取得できませんでした'
      }
    },
  },
  mounted () {
    this.getMessages()
  }
}
</script>
