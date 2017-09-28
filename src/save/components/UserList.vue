<template>
  <ul>
    <user v-for="user in users" :data="user"></user>
  </ul>
</template>

<script type="text/javascript">
  import User from './User'

  export default {
    props: ['users'],
    components: {
      User
    }
  }
</script>
