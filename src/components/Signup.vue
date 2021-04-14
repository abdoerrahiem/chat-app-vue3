<template>
  <form @submit.prevent="handleSubmit">
    <h4>Daftarkan dirimu sekarang!</h4>
    <input type="text" placeholder="Nama" v-model="name" required />
    <input type="email" placeholder="Email" v-model="email" required />
    <input type="password" placeholder="Password" v-model="password" required />
    <div class="error">{{ error }}</div>
    <div v-if="loading">Loading...</div>
    <button>Daftar</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../hooks/useSignup'

export default {
  setup(props, context) {
    const name = ref('')
    const email = ref('')
    const password = ref('')

    const { error, loading, signup } = useSignup()

    const handleSubmit = async () => {
      await signup(name.value, email.value, password.value)

      if (!error.value) {
        context.emit('signup')
      }
    }

    return {
      name,
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