<template>
  <div>
    <message v-for="message in messages" :data="message"></message>
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
