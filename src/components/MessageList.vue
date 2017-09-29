<template>
  <div class="messageList">
    <ul ref="chat">
      <message v-for="message in messages" :data="message"></message>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import Message from './Message'

  export default {
    props: ['messages'],
    components: {
      Message
    }
  }
</script>

<style lang="stylus">
.messageList
  height 90%
  overflow auto

  ul
    display inline

</style>
