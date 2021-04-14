import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)
const loading = ref(false)

const login = async (email, password) => {
  error.value = null
  loading.value = true

  try {
    const res = await auth.signInWithEmailAndPassword(email, password)

    if (!res) {
      error.value = 'Terjadi kesalahan saat mendaftarkan akun'
      return
    }

    loading.value = false

    return res
  } catch (err) {
    loading.value = false

    if (err.code === 'auth/user-not-found') {
      error.value = 'User tidak ditemukan'
    } else {
      error.value = err.message
    }
  }
}

const useLogin = () => {
  return { loading, error, login }
}

export default useLogin
