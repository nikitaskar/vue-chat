<template>
  <div>
    <div class="user">
      <img :src='user.image' >
      <h1>{{user.username}}</h1>
    </div>

    <ul>
      <user v-for="user in users" :data="user"></user>
    </ul>
  </div>
</template>

<script type="text/javascript">
  import User from './User'

  export default {
    props: ['users', 'user'],
    components: {
      User
    }
  }
</script>

<style lang="stylus">
  ul
    list-style-type none
    padding 0

  .userlist
    display inline-block
    width 25%
    background #0C1D32
    color white
    border-radius 5px 0 0 5px

    .user
      color white
      text-align center
      padding-top 20px
      h1
        color white
        margin 8px 0
        font-size 22px

      img
        width 50px
        border-radius 50%

</style>
