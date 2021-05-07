<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="messages" class="messages" ref="messages">
      <div v-for="message in messages" :key="message.id" class="single">
        <span class="created-at">{{ message.created_at }}前</span>
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.content }}</span>
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