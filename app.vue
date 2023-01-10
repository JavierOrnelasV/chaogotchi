<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="registerUser">
      <label>Email</label>
      <input type="text" v-model="email" />
      <label>Password</label>
      <input type="password" v-model="password" />
      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
const email = ref('')
const password = ref('')

// const supabase = useSupabaseClient()

// const registerUser = async () => {
//   let { data, error } = await supabase.auth.signUp({
//     email: email.value,
//     password: password.value
//   })
// }

const registerUser = async () => {
  const response = await $fetch('/api/user', {
    method: 'POST',
    body: {
      email: email.value,
      password: password.value
    }
  })
}
</script>
