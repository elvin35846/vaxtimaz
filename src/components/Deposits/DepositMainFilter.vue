<template>
  <div class="mainFilterBlock">
    <h1 class="mainTitle">Əmanət</h1>
    <div class="mainBody">
      <div class="moneyInput">
        <span class="inputTitle">Əmanətin məbləgi</span>
          <div class="inputSelect">
            <input type="text" class="inputStyle">
            <select class="selectStyle">
              <option value="AZN">AZN</option>
              <option value="AZN">USD</option>
              <option value="AZN">EUR</option>
              <option value="AZN">RUB</option>
            </select>
          </div>
      </div>
      <div class="periodSelect">
        <span class="inputTitle">Əmanətin müddəti</span>
        <select class="selectDurationStyle">
              <option >1 ay</option>
              <option >3 ay</option>
              <option >6 ay</option>
              <option >9 ay</option>
              <option >1 il</option>
              <option >1.5 il</option>
              <option >2 il</option>
              <option >3 il</option>
              <option >4 il</option>
              <option >5 il</option>
            </select>
      </div>
      <button class="AllBtnStyle extensiveFilterBtn">+ Geniş filter</button>
      <button class="AllBtnStyle pickUpBtn whiteText">Axtar</button>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
  
.mainFilterBlock {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $base-color;
  height: 340px;
  text-align: center;
}
.mainTitle {
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 50px;
}
.mainBody {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
}
.periodSelect,
.moneyInput {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.pickUpBtn,
.extensiveFilterBtn,
.periodSelect {
  margin-left: 10px;
}
.inputTitle {
  color: #ffffff;
  font-size: 14px;
}
.inputSelect {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.inputStyle {
  width: 500px;
  height: 40px;
  padding: 5px 10px;
  font-size: 18px;
  border: none;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.selectStyle {
  width: 80px;
  height: 40px;
  padding: 6px 10px;
  font-size: 18px;
  border: none;
  color: gray;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.selectDurationStyle {
  width: 180px;
  height: 40px;
  padding: 6px 10px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  color: gray;
}
.AllBtnStyle {
  width: 150px;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}
.AllBtnStyle:hover {
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
}
.extensiveFilterBtn {
  background: #fff;
}
.pickUpBtn {
  background: #57b7eb;
}
.whiteText {
  color: white;
}
</style>