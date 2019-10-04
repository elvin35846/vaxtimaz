<template>
  <div class="loansHeader">
    <div class="loansTitleBlock">
      <div class="loansTitle">
      <h1>Şəxsi kredit seçimi</h1>
      <p>
        Kredit almaq üçün bir ərizə doldurun və sizə hansı bankların təsdiqlənəcəyini göstərəcəyik
      </p>
      <a class="allBtn" href="#requestBlock">Müraciət et</a>
    </div>
    <img src="../../assets/img/credit_img.png" alt="credit_img" class="creditIimg">
    </div>
    <div class="bankPartners">
      <img v-for="(bank, index) in banks" :key="index" :src="bank.url" alt="bank_name" class="bankLogo">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      banks: [
        { url: require('../../assets/img/banks/access.jpg') },
        { url: require('../../assets/img/banks/bankofbaku.jpg') },
        { url: require('../../assets/img/banks/beynalxalq.jpg') },
        { url: require('../../assets/img/banks/express.jpg') },
        { url: require('../../assets/img/banks/kapital.jpg') },
        { url: require('../../assets/img/banks/aztr.jpg') },
        { url: require('../../assets/img/banks/uni.jpg') }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "src/assets/css/_utils.scss";

.loansHeader {
  height: 530px;
  background: url('../../assets/img/credit_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  @include media(960px) {
    height: 500px;
  }
}
.creditIimg {
  display: none;
  @include media(960px) {
    display: block;
  }
}
.allBtn {
  border: 1px solid white;
  font-size: 14px;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  background: none;
  cursor: pointer;
  margin: auto;
  @include media(960px) {
    margin: 0;
  }
}
.allBtn:hover {
  background-color: white;
  color: black;
  text-decoration: none;
}
.loansTitleBlock {
  width: 90%;
  height: 430px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  text-align: center;
  @include media(960px) {
    width: 960px;
    text-align: left;
  }
}
.loansTitle {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @include media(960px) {
    width: 50%;
  }
}
.loansTitle h1 {
  color: white;
  font-size: 55px;
  font-weight: bold;
  margin: 0;
}
.loansTitle p {
  color: white;
  margin: 20px 0;
}
.bankPartners {
  height: 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  background: #fff;
  @include media(960px){
    flex-wrap: nowrap;
    height: 70px;
  }
}
.bankLogo {
  width: 100px;
  @include media(960px){
    width: 130px;
  }
}
</style>
