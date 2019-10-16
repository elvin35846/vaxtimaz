<template>
  <div class="percentBlock">
              <svg class="percent">
                <circle  class="circle_under" cx="25" cy="25" r="22"/>
                <circle cx="25" cy="25" r="22" class="circle" :style="{'stroke-dashoffset': (138.16 - (val/100 * 138.16)), stroke: percent>50 ? '#2294d1' : '#fa2121'}"/>
              </svg>
              <div class="percentIn">{{percent}}<span class="percentSpan">%</span></div>
            </div>
</template>

<script>
export default {
  props: {
    percent: String
  },
  data () {
    return {
      val: 0
    }
  },
  mounted () {
    setInterval(() => {
	  if (this.val < this.percent) {
        this.val++
      }
    }, 20)
  }
}

</script>
<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
  .percentBlock {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: relative;
}
.percent {
  width: 50px;
  height: 50px;
  transform-origin: center;
  transform: rotate(-90deg);
}
.percentIn {
  position: absolute;
  transform-origin: center;
  top: calc(50% - 8px);
  left: calc(50% - 15px);
  z-index: 3;
  font-size: 12px;
  font-weight: bold;
}
.percentIn .percentSpan {
  color: black;
}
.circle_under {
  stroke: lightgray;
  stroke-width: 5px;
  fill: transparent;
  z-index: 0;
}
.circle {
  stroke-width: 5px;
  fill: transparent;
  stroke-dasharray: 138.16 138.16;
  stroke-linecap: round;
  z-index: 2;
}
</style>