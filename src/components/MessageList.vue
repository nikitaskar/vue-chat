<template>
  <div>
    <ul>
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

</style>
