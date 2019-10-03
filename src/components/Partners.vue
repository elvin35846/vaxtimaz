<template>
  <div class="partnersBlock">
      <h2>{{$t('partners.our_partners')}}</h2>
      <div class="banksBox">
        <span class="banks">{{$t('partners.banks')}}</span>
        <router-link to="/" class="more_banks">{{$t('partners.more_banks')}}</router-link>
      </div>
      <div class="partners">
        <div v-for="(bank, index) in banks" :key="index" class="bankLogo">
          <img :src="bank.url" alt="bank_name">
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      banks: [
        { url: require('../assets/img/banks/access.webp') },
        { url: require('../assets/img/banks/ag.webp') },
        { url: require('../assets/img/banks/amrah.webp') },
        { url: require('../assets/img/banks/asb.webp') },
        { url: require('../assets/img/banks/ata.webp') },
        { url: require('../assets/img/banks/aztr.webp') },
        { url: require('../assets/img/banks/bankofbaku.webp') },
        { url: require('../assets/img/banks/beynalxalq.webp') },
        { url: require('../assets/img/banks/express.webp') },
        { url: require('../assets/img/banks/kapital.jpg') },
        { url: require('../assets/img/banks/nikoil.webp') },
        { url: require('../assets/img/banks/pasha.webp') },
        { url: require('../assets/img/banks/respublika.webp') },
        { url: require('../assets/img/banks/tbt.webp') },
        { url: require('../assets/img/banks/uni.webp') }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
.partnersBlock {
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @include media(960px){
    width: 960px
  }
}
.partnersBlock h2 {
  font-weight: bold;
  margin-bottom: 20px;
}
.banksBox {
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @include media(960px){
    width: 960px;
    flex-direction: row;
    justify-content: space-between;
  }
}
.partnersBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
}
.partners {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: center;
  @include media(960px){
    width: 960px;
  }
}
.bankLogo {
  width: 50%;
  height: 90px;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
  @include media(768px){
    width: 30%;
  }
  @include media(960px){
    width: 192px;
  }
}
.bankLogo:hover {
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
}
.bankLogo img {
  width: 80%;
  @include media(960px){
    width: 150px;
  }
}
</style>
