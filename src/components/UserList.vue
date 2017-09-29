<template>
  <div>
    <div class="user">
      <img src='../assets/img/avatar1.png'>
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

<style lang="stylus" scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat')

  ul
    list-style-type none
    padding 0
    height 73%
    overflow auto
    margin 0
    padding-top 10px

  .userlist
    display inline-block
    width 25%
    background #eaeaf4
    color white
    border-radius 5px 0 0 5px

    .user
      color white
      text-align center
      padding 20px 0
      background #1B2D4D
      border-radius 5px 0 0 0
      h1
        color white
        margin 8px 0
        font-size 22px
        margin-bottom 0
        font-family Montserrat
        letter-spacing 1px

      img
        width 50px
        border-radius 50%
        border 2px solid
        box-shadow 1px 1px 3px #BCBCBC

</style>
