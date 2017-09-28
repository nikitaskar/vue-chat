<template>
  <form @submit.prevent="onSend">
    <input type="text" placeholder="message" v-model="message">
    <button>Envoyer</button>
  </form>
</template>

<script type="text/javascript">
  export default {
    data () {
      return {
        message: '',
        error: false
      }
    },
    methods: {
      onSend () {
        if (this.message > 0) {
          this.error = true
        } else {
          this.sendMessage(this.message)
          this.message = ''
        }
      }
    }
  }
</script>

<style lang="stylus">
  form
    position absolute
    bottom 15px
</style>
