<template>
  <div class="container home">
    <div>
      <h2>Selamat datang di Chat App!</h2>
      <div v-if="showLogin">
        <Login @login="enterChat" />
        <p>
          Belum punya akun?
          <span @click="showLogin = false">Daftar disini</span>
        </p>
      </div>
      <div v-else>
        <Signup @signup="enterChat" />
        <p>
          Sudah punya akun? <span @click="showLogin = true">Masuk disini</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Signup from '../components/Signup'
import Login from '../components/Login'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  components: {
    Signup,
    Login,
  },
  setup() {
    const showLogin = ref(true)
    const { push } = useRouter()

    const enterChat = () => push({ name: 'Chat' })

    return {
      showLogin,
      enterChat,
    }
  },
}
</script>

<style>
.home {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.home > div {
  border-radius: 20px;
  box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
  background: white;
  padding: 20px;
}
.home form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.home p,
.home h2 {
  text-align: center;
  margin: 10px 0;
}
.home label {
  display: block;
  margin: 20px 0 10px;
}
.home input {
  padding: 10px 20px;
  border-radius: 20px;
  border: 1px solid #ff3f80;
  outline: none;
  color: #999;
  margin: 10px 0;
  width: 80%;
}
.home span {
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
}
.home button {
  margin: 20px 0;
  outline: none;
}
</style>