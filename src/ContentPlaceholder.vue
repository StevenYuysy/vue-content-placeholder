<template>
  <div class="animated-background" :style="{backgroundSize: size}">
    <div class="row" :style="{height: row.height}" v-for="row in formatedRows">
      <div :style="box.style" v-for="box in row.boxes">
        <div v-if="box.subClass" :class="box.subClass"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatRows } from './utils'

export default {
  data () {
    return {
    }
  },
  props: {
    rows: {
      type: Array,
      required: true
    },
    size: {
      type: String,
      default: '250%'
    }
  },
  computed: {
    formatedRows () {
      return formatRows(this.rows)
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
    background-position: 100% 0
  }
  100%{
    background-position: -100% 0
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
  position: relative;
}
</style>
