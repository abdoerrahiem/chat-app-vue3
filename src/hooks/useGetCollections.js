import { ref, watchEffect } from 'vue'
import { firestore } from '../firebase/config'

const useGetCollection = (collection) => {
  const documents = ref(null)
  const error = ref(null)

  let collectionRef = firestore.collection(collection).orderBy('createdAt')

  const unsubscribe = collectionRef.onSnapshot(
    (snap) => {
      let results = []
      snap.docs.forEach(
        (doc) =>
          doc.data().createdAt && results.push({ ...doc.data(), id: doc.id })
      )

      documents.value = results
      error.value = null
    },
    (err) => {
      console.log(err.message)
      documents.value = null
      error.value = 'Terjadi kesalahan saat pengambilan data'
    }
  )

  watchEffect((onInvalidate) => {
    onInvalidate(() => unsubscribe())
  })

  return {
    documents,
    error,
  }
}

export default useGetCollection
