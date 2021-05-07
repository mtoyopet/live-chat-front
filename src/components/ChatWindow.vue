<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="messages" ref="messages" class="messages">
      <div v-for="message in messages" :key="message.id" class="single">
        <span class="created-at">{{ message.created_at }}</span>
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.content }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
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
          new Error('メッセージ一覧を取得できませんでした')
        }

        console.log(res)

        this.messages = res.data 
      } catch (err) {
        this.error = 'メッセージ一覧を取得できませんでした'
      }
    }
  },
  mounted () {
    this.getMessages()
  }
}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>