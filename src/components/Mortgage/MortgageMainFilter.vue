<template>
  <div class="mainFilterBlock">
    <h1 class="mainTitle">İpoteka kalkulyatoru</h1>
    <div class="mainBody">
      <div class="moneyInput">
        <span class="inputTitle">İpotekanın məqsədi</span>
            <select class="selectStyle">
              <option value="any">İstənilən</option>
              <option value="home">Mənzil</option>
              <option value="house">Həyət evi</option>
              <option value="repairs">Təmir tikinti</option>
              <option value="auto">Maşın</option>
            </select>
      </div>
      <div class="moneyInput">
        <span class="inputTitle">Mülkiyyət dəyəri</span>
        <input type="text" class="inputStyle">
      </div>
      <div class="moneyInput">
        <span class="inputTitle">İlkin ödəniş</span>
        <input type="text" class="inputStyle">
      </div>
      <div class="moneyInput">
        <span class="inputTitle">Əmanətin müddəti</span>
        <select class="selectStyle">
              <option >1 il</option>
              <option >2 il</option>
              <option >3 il</option>
              <option >4 il</option>
              <option >5 il</option>
              <option >6 il</option>
              <option >7 il</option>
              <option >8 il</option>
              <option >9 il</option>
              <option >10 il</option>
              <option >12 il</option>
              <option >15 il</option>
              <option >20 il</option>
              <option >25 il</option>
              <option >30 il</option>
            </select>
      </div>
      <button name="1" class="AllBtnStyle extensiveFilterBtn">+ Geniş filter</button>
      <button name="2" class="AllBtnStyle pickUpBtn whiteText">Axtar</button>
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
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $base-color;
  min-height: 340px;
  text-align: center;
  padding: 20px 10px 30px;
}
.mainTitle {
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 10px;
  @include media(960px) {
    margin-bottom: 50px;
  }
}
.mainBody {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @include media(960px) {
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }
}
.inputTitle {
  color: #ffffff;
  font-size: 14px;
}
.moneyInput {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 5px 0 0 0;
  @include media(960px) {
    width: 20%;
    margin: 0 0 0 10px;
  }
}
.selectStyle,
.inputStyle {
  width: 100%;
  height: 40px;
  padding: 6px 10px;
  font-size: 18px;
  color: gray;
  border: none;
  border-radius: 5px;
}

.AllBtnStyle {
  width: 90%;
  height: 40px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  margin: 15px 0 0 0;
  @include media(960px) {
    width: 23%;
    margin: 0 0 0 10px;
  }
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