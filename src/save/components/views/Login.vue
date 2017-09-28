<template>
  <main>
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
  .error
    background red
</style>
