<template>
  <div class="chat">
    <div>
      <Navbar />
      <ChatWindow />
      <ChatForm />
    </div>
  </div>
</template>

<script>
import { watch } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar'
import ChatForm from '../components/ChatForm'
import ChatWindow from '../components/ChatWindow'
import useGetUser from '../hooks/useGetUser'

export default {
  components: {
    Navbar,
    ChatForm,
    ChatWindow,
  },
  setup() {
    const { user } = useGetUser()
    const router = useRouter()

    watch(user, () => !user.value && router.push({ name: 'Home' }))
  },
}
</script>

<style>
.chat {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>