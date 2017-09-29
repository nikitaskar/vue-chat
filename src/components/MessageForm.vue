<template>
  <form @submit.prevent="onSend">
    <input type="text" placeholder="Tatché avec les autres " v-model="message">
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

<style lang="stylus" scoped>
  form
    position absolute
    bottom 15px
    width 70%

  input
    border-radius 30px
    box-shadow 1px 1px 17px #B4B4B4
    padding 14px
    border 0
    width 82%

  input:focus
    outline-width 0
</style>
