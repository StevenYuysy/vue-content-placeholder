<template>
  <div class="container">
    <div class="animated-background">
      <div class="row" :style="{height: row.height}" v-for="row in formatedRows">
        <div :style="box.style" v-for="box in row.boxes">
          <div v-if="box.subClass" :class="box.subClass"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import formateRows from '../utils.js'

export default {
  data () {
    return {
    }
  },
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  computed: {
    formatedRows () {
      return formateRows(this.rows)
    }
  }
}
</script>

<style scoped>
.box {
  box-sizing: border-box;
  position: relative;
  height: 100%;
  margin-bottom: 0;
  background-color: white;
  overflow: hidden;
}

.container {
  margin-right: auto;
  margin-left: auto;
  height: 500px;
  padding: 1rem;
}

.row{
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
}

@keyframes placeHolderShimmer{
  0%{
    background-position: -400px 0
  }
  100%{
    background-position: 450px 0
  }
}

.animated-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  position: relative;
}
</style>