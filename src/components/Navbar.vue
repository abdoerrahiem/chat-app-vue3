<template>
  <nav v-if="user">
    <div>
      <p class="name">Hai, {{ user.displayName }}</p>
      <p class="email">({{ user.email }})</p>
    </div>
    <button @click="handleClick">Keluar</button>
  </nav>
</template>

<script>
import useLogout from '../hooks/useLogout'
import useGetUser from '../hooks/useGetUser'
export default {
  setup() {
    const { logout, error } = useLogout()
    const { user } = useGetUser()

    const handleClick = async () => {
      await logout()

      if (!error.value) {
        console.log('User logged out')
      }
    }

    return {
      handleClick,
      user,
    }
  },
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  padding: 10px;
  width: 500px;
  border-top-right-radius: 10px;
}

nav .name {
  font-weight: bold;
}
</style>