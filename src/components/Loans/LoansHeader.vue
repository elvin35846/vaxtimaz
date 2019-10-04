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
    <img src="../../assets/img/credit_img.png" alt="credit_img">
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
        { url: require('../../assets/img/banks/access.webp') },
        { url: require('../../assets/img/banks/bankofbaku.webp') },
        { url: require('../../assets/img/banks/beynalxalq.webp') },
        { url: require('../../assets/img/banks/express.webp') },
        { url: require('../../assets/img/banks/kapital.jpg') },
        { url: require('../../assets/img/banks/pasha.webp') },
        { url: require('../../assets/img/banks/uni.webp') }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
  
.loansHeader {
  height: 500px;
  background: url('../../assets/img/credit_bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
.b {
  border: 1px solid;
}
.allBtn {
  border: 1px solid white;
  font-size: 14px;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  background: none;
  cursor: pointer;
}
.allBtn:hover {
  background-color: white;
  color: black;
  text-decoration: none;
}
.loansTitleBlock {
  width: 960px;
  height: 430px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
}
.loansTitle {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  height: 70px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
  background: #fff;
}
.bankLogo {
  width: 130px;
}
</style>