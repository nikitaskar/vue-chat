<template>
  <main class="login">
    <h1>Login</h1>
    <p v-if="error" class="error">{{error}}</p>
    <form @submit.prevent="onSubmit">
      <input type="text" v-model="username">
      <button>Enter the chat</button>
    </form>
  </main>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        error: false,
        username: ''
      }
    },
    created () {
      this.$store.$watch('user', (user) => {
        if (user.id) {
          this.$router.push('/')
        }
      })
    },
    methods: {
      onSubmit (e) {
        if (!this.username.match(/^\w{1,15}$/)) {
          this.error = 'The answer is invalid'
        } else {
          this.error = false
          this.$emit('login', this.username)
        }
      }
    }
  }
</script>

<style lang="stylus">
  #app
    align() // jeet

  h1
    color blue
    font-family Arial
    margin-top 0

  input
    border-radius 5px
    border 1px solid blue
    padding 8px

  button
    border-radius 3px
    padding 8px
    border 0

  .login
    align()
    text-align center

    form
      position relative
</style>
