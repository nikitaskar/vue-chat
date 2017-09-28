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
  body
    background #00b09b;  /* fallback for old browsers */
    background -webkit-linear-gradient(to left, #96c93d, #00b09b);  /* Chrome 10-25, Safari 5.1-6 */
    background linear-gradient(to left, #96c93d, #00b09b); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  #app
    align() // jeet

  h1
    color blue
    font-family Arial

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
