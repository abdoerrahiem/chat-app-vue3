<template>
  <form @submit.prevent="handleSubmit">
    <h4>Masuk Sekarang!</h4>
    <input type="email" placeholder="Email" v-model="email" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <div class="error">{{ error }}</div>
    <div v-if="loading">Loading...</div>
    <button>Masuk</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../hooks/useLogin'

export default {
  setup(props, context) {
    const email = ref('')
    const password = ref('')

    const { error, loading, login } = useLogin()

    const handleSubmit = async () => {
      await login(email.value, password.value)

      if (!error.value) {
        context.emit('login')
      }
    }

    return {
      email,
      password,
      handleSubmit,
      error,
      loading,
    }
  },
}
</script>

<style>
</style>