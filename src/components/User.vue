<template>
  <li>
    <img src="https://freeiconshop.com/wp-content/uploads/edd/person-flat.png" alt="">
    <span>{{data.username}}</span>

  </li>
</template>

<script type="text/javascript">
  export default {
    props: ['data']
  }
</script>

<style  lang="stylus" scoped>
  @import url('https://fonts.googleapis.com/css?family=Montserrat')
  li
    padding 6px 18px
    position relative

    img
      width 40px
      display inline-block
      border-radius 50%
      border 1px solid
      margin-right 15px

    span
      diplay inline-block
      margin 0
      position absolute
      top 50%
      margin-top -11px
      font-family arial
      font-size 12px
      font-family Montserrat
      letter-spacing 1px
      color #1b2d4d
      font-weight 400
</style>
