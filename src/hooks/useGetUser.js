import { ref } from 'vue'
import { auth } from '../firebase/config'

const user = ref(auth.currentUser)

auth.onAuthStateChanged((data) => {
  user.value = data
})

const useGetUser = () => {
  return { user }
}

export default useGetUser
