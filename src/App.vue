<template>
  <div>
    <content-holder :rows="rows"></content-holder>
    <button @click="addRow">Add row</button>
    <button @click="addWhiteRow">Add white row</button>
    <div class="action-container">
      <div v-for="(row, rowIndex) in rows">
        <span>row {{rowIndex}}</span>
        <label>height</label><input type="text" v-model="row.height">
        <button @click="addBox(rowIndex)">Add box</button>
        <div v-for="(box, boxIndex) in row.boxes">
          <span>box {{boxIndex}}</span>
          <label>boxes leftGutter</label><input type="text" v-model="box[0]">
          <label>boxes width</label><input type="text" v-model="box[1]">
        </div>
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
      rows: [
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
    ContentHolder
  },
  methods: {
    addBox (index) {
      this.rows[index].boxes.push([1, 1])
    },
    addRow () {
      this.rows.push({boxes: [[0, 1]]})
    },
    addWhiteRow () {
      this.rows.push({boxes: [[0, 0]]})
    }
  }
}
</script>

<style>
</style>