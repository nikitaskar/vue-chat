<template>
  <li v-bind:class="[classUser ? 'me' : 'him']">
    {{ data.body }}
  </li>
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
    padding 15px;
    border-radius 30px;
    margin-bottom 2px;
    width auto;
    max-width 200px
    font-family Arial
    color white
    background #ffc12d
    padding 10px
    border-radius 5px
    float left
   //float
  .me
    float right

  .him
    float left

</style>
