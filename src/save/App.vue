<template>
  <div id="app">
    <h1 v-if="store.user.name">Bienvenue {{store.user.name}} </h1>
    <router-view :store="store" @login="onLogin"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      store: {
        user: {},
        users: ['Franco', 'Inch'],
        messages: ['Hello', 'Bonjour']
      }
    }
  },
  methods: {
    onLogin (username) {
      this.store.user = {
        name: username
      }
    }
  }
}
</script>

<style lang="stylus">
@import "styles/theme"

html
  +below(600px) // rupture
    font-size 50%

#app
  align() // jeet
  text-align center

.icon-logo
  margin-bottom 2.5rem
</style>
