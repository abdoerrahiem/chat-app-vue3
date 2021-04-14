import { ref } from 'vue'
import { auth } from '../firebase/config'

const error = ref(null)
const loading = ref(false)

const signup = async (name, email, password) => {
  error.value = null
  loading.value = true

  try {
    const res = await auth.createUserWithEmailAndPassword(email, password)

    if (!res) {
      error.value = 'Terjadi kesalahan saat mendaftarkan akun'
      return
    }

    await res.user.updateProfile({
      displayName: name,
    })

    loading.value = false

    return res
  } catch (err) {
    loading.value = false

    error.value = err.message
  }
}

const useSignup = () => {
  return { loading, error, signup }
}

export default useSignup
