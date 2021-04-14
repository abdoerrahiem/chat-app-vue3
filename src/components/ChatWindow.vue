<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages" ref="messages">
      <div
        v-for="message in formattedDocuments"
        :key="message.id"
        class="single"
      >
        <span class="created-at">{{ message.createdAt }}</span>
        <span class="name">{{ message.name }}</span>
        <span class="message">{{ message.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import useGetCollection from '../hooks/useGetCollections'
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from 'vue'

export default {
  setup() {
    const { documents, error } = useGetCollection('messages')

    const formattedDocuments = computed(() => {
      if (documents.value) {
        return documents.value.map((msg) => {
          let time = formatDistanceToNow(msg.createdAt.toDate())
          return { ...msg, createdAt: time }
        })
      }
    })

    const messages = ref(null)

    onUpdated(() => (messages.value.scrollTop = messages.value.scrollHeight))

    return {
      documents,
      error,
      formattedDocuments,
      messages,
    }
  },
}
</script>

<style>
.chat-window {
  background: #fafafa;
  padding-left: 20px;
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