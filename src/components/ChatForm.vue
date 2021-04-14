<template>
  <div class="chat-form">
    <div class="error">{{ error }}</div>
    <form @submit.prevent="handleSubmit">
      <input placeholder="Ketik pesan..." v-model="message" />
      <button type="submit"><i class="fas fa-paper-plane" /></button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import useGetUser from '../hooks/useGetUser'
import useCollection from '../hooks/useCollection'
import { timestamp } from '../firebase/config'

export default {
  setup() {
    const message = ref('')
    const { user } = useGetUser()
    const { error, addDoc } = useCollection('messages')

    const handleSubmit = async () => {
      const chat = {
        name: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      }

      await addDoc(chat)

      if (!error.value) {
        message.value = ''
      }
    }

    return {
      message,
      handleSubmit,
      error,
    }
  },
}
</script>

<style scoped>
.chat-form {
  padding: 20px;
  background: #fff;
  border-bottom-left-radius: 10px;
}
form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  width: 100%;
}
input {
  width: 100%;
  margin-right: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-family: inherit;
  outline: none;
}
button {
  border-radius: 100%;
  padding: 10px 15px;
  text-align: center;
}
.error {
  text-align: center;
  color: #ff2a58;
  font-size: 12px;
  padding: 10px 0;
}
</style>