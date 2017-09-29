<template>
  <main class="chat">
    <user-list :user="store.user" :users="store.users" class="userlist"></user-list>
    <div class="messageInterface">
      <message-list :messages="store.messages"></message-list>
      <message-form @send="showMessage"></message-form>
    </div>
  </main>
</template>

<script type="text/javascript">
  import UserList from '../UserList'
  import MessageList from '../MessageList'
  import MessageForm from '../MessageForm'

  export default {
    props: ['store'],
    components: {
      UserList,
      MessageList,
      MessageForm
    },

    methods: {
      showMessage (message) {
        console.log(this.store)
        this.store.messages.push(message)
      }
    }

  }
</script>

<style lang="stylus">
  .messageInterface
    display inline-block
    flex-grow inherit
    padding 15px 20px

  main.chat
    flex-grow 1
    display flex
</style>
