<template>
  <form>
    <textarea
      placeholder="メッセージを入力してEnterを押してください"
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
  <div class="error">{{ error }}</div>
</template>

<script>
import ActionCable from 'actioncable'

export default {
  emits: ['getMessages'],
  data () {
    return {
      message: '',
      error: null,
    }
  },
  created () {
    const cable = ActionCable.createConsumer('ws://localhost:3000/cable')

    this.messageChannel = cable.subscriptions.create('RoomChannel', {
      received: (data) => {
        // Called when there's incoming data on the websocket for this channel
        this.$emit('getMessages')
      }
    })
  },
  methods: {
    handleSubmit () {
      this.messageChannel.perform('receive', {
        message: this.message,
        uid: window.localStorage.getItem('uid')
      })

      this.message = ''
    }
  }
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>
