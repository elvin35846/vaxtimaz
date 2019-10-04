<template>
  <div class="requestBlock" id="requestBlock">
    <div class="requestContainer">
      <h1>Kredit müraciəti</h1>
      <p>Xidmətimiz və tərəfdaş banklarımız müraciətlərə baxılması və kredit verməsi üçün rüsum almır.</p>
      <h4>Parametrlər</h4>
      <div class="optionBlock">
        <fieldset>
          <legend>Kreditin məqsədi</legend>
          <select class="selectBox">
            <option value="" v-for="(data, index) in loanType" :key="index">{{data}}</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>İstədiyiniz məbləğ</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Şəhər</legend>
          <input type="text" class="inputBox">
        </fieldset>
      </div>
      <hr>
      <h4>Əlaqə məlumatları</h4>
      <div class="optionBlock">
        <fieldset>
          <legend>Soyadınız</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Adınız</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Ata adı</legend>
          <input type="text" class="inputBox">
        </fieldset>
        </div>
        <div class="optionBlock">
        <fieldset>
          <legend>Elektron ünvanınız</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Əlaqə nömrəniz</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Şifrə</legend>
          <input type="text" class="inputBox">
        </fieldset>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loanType: [
        'Təmir',
        'Yeni maşın almaq',
        'Təhsil'
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.requestContainer {
  width: 90%;
  padding: 50px 0;
  margin: auto;
  @include media(960px) {
    width: 960px;
  }
}
.requestContainer h1 {
  text-align: center;
  font-weight: bold;
}
.requestContainer p {
  text-align: center;
  margin: 20px 0;
}
.requestContainer h4 {
  text-align: center;
  font-weight: bold;
  margin: 20px 0;
  @include media(960px) {
    text-align: left;
  }
}
.optionBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @include media(960px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
.optionBlock legend{
  font-size: 14px;
}
.selectBox,
.inputBox {
  width: 310px;
  padding: 5px 10px;
  font-size: 16px;
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
.inputBox {
  border-radius: 5px;
}
.selectBox {
  padding: 6px;
}
legend {
  color: gray;
}
</style>
