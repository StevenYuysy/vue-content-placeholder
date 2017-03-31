<template>
  <div>
    <h1>{{ msg }}</h1>
    <content-holder :rows="rows"></content-holder>
    <button @click="addRow">Add row</button>
    <div v-for="(row, rowIndex) in rows">
      <h1>row {{rowIndex}}</h1>
      <label>height</label><input type="text" v-model="row.height">
      <div v-for="(box, boxIndex) in row.boxes">
        <button @click="addBox(boxIndex)">Add box</button>
        <h2>box {{boxIndex}}</h2>
        <label>boxes leftGutter</label><input type="text" v-model="box[0]">
        <label>boxes width</label><input type="text" v-model="box[1]">
      </div>
    </div>
  </div>
</template>

<script>
import ContentHolder from './components/ContentHolder.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'hello world',
      rows: [
        {
          height: '25px', 
          boxes: [[0, '100px']]
        },
        {
          height: '25px',
          boxes:[[0, '100px'], [1, 1]]
        },
        {
          height: '25px', 
          boxes: [[0, '100px']]
        },
        {
          height: '25px',
          boxes:[[0, '100px'], [1, 2]]
        },
        {
          boxes: [[0, 0]]
        },
        {
          boxes: [[0, 0]]
        },
        {
          boxes: [[1, 5]]
        },
        {
          boxes: [[0, 0]]
        },
        {
          boxes: [[0, '50%']]
        },
        {
          boxes: [[0, 0]]
        },
        {
          boxes: [[0, '10rem']]
        }
      ]
    }
  },
  components: {
    ContentHolder
  },
  methods: {
    addBox (index) {
      this.rows[index].boxes.push([1, 1])
    },
    addRow () {
      this.rows.push({boxes: [[0, 0]]})
    }
  }
}
</script>

<style>

</style>