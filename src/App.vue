<template>
  <div id="app">
    <github></github>
    <content-placeholder :rows="placeholderRows"></content-placeholder>
  </div>
</template>

<script>
import ContentPlaceholder from 'vue-content-placeholder'
import Github from './Github.vue'

export default {
  name: 'app',
  data () {
    return {
      placeholderRows: [
        {
          height: '25px',
          boxes: [[0, '100px']]
        },
        {
          height: '25px',
          boxes:[[0, '100px'], ['10%', 1]]
        },
        {
          height: '25px',
          boxes: [[0, '100px']]
        },
        {
          height: '25px',
          boxes:[[0, '100px'], ['10%', 2]]
        },
        { height: '2rem',
          boxes: [[0, 0]]
        },
        { height: '1rem',
          boxes: [[0, 5]]
        },
        { height: '1rem',
          boxes: [[0, 0]]
        },
        { height: '1rem',
          boxes: [[0, '50%']]
        },
        { height: '1rem',
          boxes: [[0, 0]]
        },
        { height: '1rem',
          boxes: [[0, '10em']]
        }
      ]
    }
  },
  components: {
    ContentPlaceholder,
    Github
  }
}
</script>

<style>

</style>
