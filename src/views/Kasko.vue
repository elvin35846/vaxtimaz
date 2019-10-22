<template>
<div class="kaskoContainer">
  <h3 class="kaskoH3">Kasko sığortası</h3>
  <div class="kaskoBlock">
    <div class="Info">
      <p class="kaskoTitle">Sığortalı (avtomobilin sahibi) barədə məlumat</p>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Fin" class="kaskoInput">
        <input type="text" placeholder="Şəxsiyyət vəsiqəsinin seriya və nömrəsi" class="kaskoInput ">
      </div>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Ad" class="kaskoInput">
        <input type="text" placeholder="Soyad" class="kaskoInput ">
      </div>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Ata adı" class="kaskoInput">
        <input type="date" placeholder="Doğum tarixi" class="kaskoInput ">
      </div>
      <div class="kaskoInputBox">
        <input type="number" placeholder="Əlaqə telefonu" class="kaskoInput">
        <input type="text" placeholder="Ölkə" class="kaskoInput ">
      </div>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Ünvan" class="kaskoInput">
        <select name="" id="" class="kaskoInput">
          <option value="Male">Kişi</option>
          <option value="Female">Qadın</option>
        </select>
      </div>
    </div>
    <hr>
    <div class="Info">
      <p class="kaskoTitle">Avtomobil barədə məlumat</p>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Marka" class="kaskoInput">
        <input type="text" placeholder="Model" class="kaskoInput ">
      </div>
      <div class="kaskoInputBox">
        <input type="text" placeholder="BAN" class="kaskoInput">
        <input type="text" placeholder="Şassi nömrəsi" class="kaskoInput ">
      </div>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Dövlət qeydiyyat nişanı" class="kaskoInput">
        <input type="text" placeholder="Mühərrik nömrəsi" class="kaskoInput ">
      </div>
      <div class="kaskoInputBox">
        <input type="text" placeholder="İstehsal ili" class="kaskoInput">
        <input type="text" placeholder="Mühərrik həcmi (cm3)" class="kaskoInput ">
      </div>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Növü" class="kaskoInput leftAlign">
      </div>
    </div>
    <hr>
    <div class="Info">
      <p class="kaskoTitle">Əsas sığorta təminatı - Avtomobilin maddi zərərdən sığortası</p>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Təminat başlama tarixi" class="kaskoInput">
        <input type="text" placeholder="Sığorta məbləği" class="kaskoInput ">
      </div>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Şərtsiz azadolma" class="kaskoInput">
        <input type="text" placeholder="Təmir emalatxanasının seçimi" class="kaskoInput ">
      </div>
    </div>
    <hr>
    <div class="Info">
      <p class="kaskoTitle">Əlavə sığorta təminatı - Üçüncü şəxslər qarşısında mülki məsuliyyətinin könüllü sığortası</p>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Sığorta məbləği" class="kaskoInput leftAlign">
      </div>
    </div>
    <hr>
    <div class="Info">
      <p class="kaskoTitle">Əlavə sığorta təminatı - Sürücü və sərnişinlərin fərdi qəza sığortası</p>
      <div class="kaskoInputBox">
        <input type="text" placeholder="Sığortalanacaq yerlərin sayı" class="kaskoInput">
        <input type="text" placeholder="Bir sərnişin üzrə sığorta məbləği" class="kaskoInput ">
      </div>
    </div>
    <div class="calculateBtnBox">
      <button class="calculateBtn">Hesabla</button>
    </div>
  </div>
  
</div>
</template>
<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.kaskoContainer {
  padding-top: 60px;
}
.kaskoH3 {
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
}

.kaskoBlock {
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
  width: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: $base-bg-color;
  padding: 10px 20px;
  margin: 20px auto 20px;
  @include media(960px) {
    width: 960px;
    padding: 20px 40px;
  }
}
.Info {
  display: flex;
  flex-direction: column;
}
.kaskoTitle {
  margin: 0;
  font-weight: bold;
  font-size: 16px;
}
.kaskoInputBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px 0;
  @include media(960px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
.leftAlign {
  align-items: flex-start;
  @include media(960px) {
    justify-content: flex-start;
  }
}
.kaskoInput {
  width: 100%;
  padding: 5px 10px;
  border: 1px solid lightgray;
  border-radius: 5px;
  color: gray;
  outline:none;
  @include media(960px) {
    width: 49%;
  }
}
.kaskoInput:first-child {
  margin-bottom: 10px;
  @include media(960px) {
    margin-bottom: 0;
  }
}
.calculateBtnBox {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.calculateBtn {
  width: 150px;
  background: $base-color;
  color: white;
  border: 1px solid lightgrey;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 10px;
  padding: 3px;
}
</style>