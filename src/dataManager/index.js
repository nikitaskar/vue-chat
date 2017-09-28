import io from 'socket.io-client'
import Vue from 'vue'

export const store = new Vue({
  data: {
    user: {},
    messages: []
  }
})

export default {
  install (Vue, options) {
    const socket = io(options.api)

    Vue.prototype.$store = store

    socket.on('connect', () => {
      console.log('connect')
    })

    socket.on('new message', (message) => {
      console.log(message)
      store.messages.push(message)
    })

    socket.on('user connected', (user) => {
      console.log(user)
      store.user = user
    })

    socket.on('getUsers', (users) => {
      store.users = users
    })

    socket.on('user left', (userId) => {
      console.log(userId)
      let newUsers = store.users.filter(user => user.id !== userId)
      store.users = newUsers
    })

    socket.on('user joined', (users) => {
      store.users = users.clients
    })

    Vue.mixin({
      methods: {
        connect (username, avatarUrl) {
          socket.emit('user connected', {
            username
          })
        },
        sendMessage (text) {
          socket.emit('new message', text)
        }
      }
    })
  }
}
