<template>
  <div id="app">
    <router-view :store="$store" @login="onLogin"></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    onLogin (user) {
      this.connect(user)
    }
  }
}
</script>

<style lang="stylus">
@import "styles/theme"

html
  +below(600px) // rupture
    font-size 70%

#app
  width 80%
  height 90%
  background white
  border-radius 5px
  display flex;
  flex-direction column;

main
  overflow hidden

.icon-logo
  margin-bottom 2.5rem

.welcome
  background #0C1A36
  margin 0
  border-radius 5px 5px 0 0
  height 15px
  width 100%

  span
    color green
    font-weight 600
    border-bottom 2px solid green
    padding-bottom 2px
    line-height 10px
</style>
