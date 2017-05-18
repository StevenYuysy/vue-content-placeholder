<template>
  <div id="app">
    <github></github>
    <h1>vue-content-placeholder x vue-mugen-scroll</h1>
    <h2>Placeholder component for Vue.js</h2>
    <div class="wrap" ref="scrollContainer">
      <div class="users" v-if="users.length > 0">
        <div class="user" v-for="user in users">
          <img class="avatar" :src="user.avatar_url" height="40" alt="">
          <h2>{{ user.login }}</h2>
        </div>
      </div>
      <mugen-scroll
        :handler="fetchUsers"
        :should-handle="!loading"
        scroll-container="scrollContainer">
        <content-placeholder :rows="placeholderRows"></content-placeholder>
      </mugen-scroll>
    </div>

    <div class="count">loaded {{ count }} time{{ count > 1 ? 's' : '' }}</div>
  </div>
</template>

<script>
  import http from 'axios'
  import ContentPlaceholder from 'dist/vue-content-placeholder.min.js'
  import MugenScroll from 'vue-mugen-scroll'
  import Github from '../utils/Github.vue'

  const ROWS = [
    {
      height: '5px',
      boxes: [[0, '40px']]
    },
    {
      height: '30px',
      boxes:[[0, '40px'], ['10px', '80%']]
    },
    {
      height: '5px',
      boxes: [[0, '40px']]
    }
  ]

  export default {
    name: 'app',
    data() {
      return {
        users: [], count: 0, loading: false, placeholderRows: ROWS
      }
    },
    methods: {
      async fetchUsers() {
        this.loading = true
        const result = await http.get('https://api.github.com/users', {
          params: {
            since: (this.users.length > 0 && this.users[this.users.length - 1].id) || null
          }
        }).then(res => res.data)
        this.users = [...this.users, ...result]
        this.count++
        this.loading = false
      }
    },
    components: {
      ContentPlaceholder,
      MugenScroll,
      Github
    }
  }
</script>

<style>
  body {
    margin: 0;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont,
               'avenir next', avenir,
               helvetica, 'helvetica neue',
               Ubuntu,
               'segoe ui', arial,
               sans-serif;
  }
  .users {
    border: 10px;
  }
  .users .user {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 70px;
    padding: 1rem;
    border-bottom: 1px solid #e2e2e2;
  }
  .users .user .avatar {
    margin-right: 10px;
  }
  .mugen-scroll {
    padding: 0;
    height: 70px;
    border-bottom: 1px solid #e2e2e2;
  }
  .count {
    position: fixed;
    bottom: 10px;
    right: 10px;
    font-size: 18px;
  }
  .wrap {
    max-width: 400px;
    height: 300px;
    margin: 0 auto;
    overflow-y: auto;
  }
</style>
