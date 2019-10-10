<template>
  <div class="myOfferBlock">
    <fieldset>
      <legend>İstədiyiniz məbləğ</legend>
      <input type="text" class="inputBox">
    </fieldset>
    <fieldset>
          <legend>Kreditin müddəti</legend>
          <select class="selectBox">
            <option value="" v-for="(year, index) in years" :key="index">{{year}}</option>
          </select>
        </fieldset>
    <fieldset>
          <legend>Şəhər</legend>
          <input type="text" class="inputBox">
        </fieldset>
  </div>
</template>

<script>
export default {
  data () {
    return {
      years: [
        '1 il',
        '2 il',
        '3 il',
        '4 il',
        '5 il'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "src/assets/css/_utils.scss";

.myOfferBlock {
  background: #fff;
  padding: 0 15px 15px 15px;
  border-radius: 5px;
  position: fixed;
  width: 210px;
}
.selectBox,
.inputBox {
  width: 100%;
  padding: 3px 10px;
  font-size: 14px;
  border-radius: 5px;
  border: 1px solid gray;
  cursor: pointer;
}
.selectBox:hover,
.inputBox:hover,
.selectBox:focus,
 .inputBox:focus {
  border-color: $base-color;
}
legend {
  font-size: 14px;
  color: gray;
  padding-top: 15px;
  margin-bottom: 0;
}
</style>