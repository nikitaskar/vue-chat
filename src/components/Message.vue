<template>
  <transition name="message">
    <li v-bind:class="[classUser ? 'me' : 'him']">
      <span>{{ data.author.username }}</span>
      <p>{{ data.body }}</p>
    </li>
  </transition>
</template>

<script type="text/javascript">
  export default {
    props: ['data'],
    data () {
      return {
        classUser: false
      }
    },
    created () {
      this.me()
    },
    mounted () {
      this.$nextTick(() => {
        // this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight
        let messageList = document.querySelector('.messageList')
        messageList.scrollTop = messageList.scrollHeight
      })
    },
    methods: {
      me () {
        console.log(this.data)
        if (this.data.author.id === this.$store.user.id) {
          console.log('ok')
          this.classUser = true
        } else {
          this.classUser = false
        }
      }
    }
  }

</script>

<style lang="stylus" scoped>
  li
    display inline-block;
    clear both;
    border-radius 30px;
    margin-bottom 2px;
    font-size 13px
    margin 3px 0

    p
      width auto;
      max-width 320px
      font-family Arial
      color white
      padding 10px
      margin-top 17px
      margin-bottom 5px
      border-radius 20px
      word-wrap break-word
      height auto


    span
      color #696868
      font-family Arial
      font-size 11px

   //float
  .me
    float right
    margin-right 7px
    p
      background #df4c44

    span
      float right


  .him
    float left
    p
      background #3ebddd
      color white
    span
      float left

.message-enter-active
  transition: all .5s ease-out

.message-enter
  opacity 0
  transform translateX(-10px)



</style>
