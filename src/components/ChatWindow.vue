<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="messages" class="messages" ref="messages">
      <div v-for="message in messages" :key="message.id" class="single">
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.content }}</span>
        <span class="created-at">{{ message.created_at }}前</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['messages', 'error'],
  updated () {
    const element = this.$refs.messages
    element.scrollTop = element.scrollHeight
  }
}
</script>

<style scoped>
  .chat-window {
    background: #f5f3f3;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }

  .name {
    position: relative; 
    font-weight: bold;
    margin-right: 6px;
    display: block;
  }
  .message {    
    display: inline-block;
    position: relative;
    background-color:#51b392;
    border-radius: 10px;
    padding: 10px;
    margin: 0;
    max-width: 320px;
    color: white;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
    margin-left: 4px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>