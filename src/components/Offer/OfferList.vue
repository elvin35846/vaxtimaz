<template>
  <div class="offerBlock">
    <h4 class="offerTitle">Sizin üçün xüsusi təklif</h4>
    <p class="offerSubtitle">Məbləğ: 15000 azn, müddət: 3 il, şəhər: Bakı </p>
    <OfferTable :offer = 'offer'/>
    <br><br>
    <h4 class="offerTitle">Bəlkə sizə uyğun olar</h4>
    <p class="offerSubtitle">Biz sizin üçün və mümkün qədər yaxın bir müddət üçün kreditlər seçdik</p>
    <OfferTable :offer = 'offer2'/>
  </div>
</template>

<script>
import OfferTable from './OfferTable'
export default {
  components: {
    OfferTable
  },
  data () {
    return {
      offer: [
        { logo: require('../../assets/img/banks/access.jpg'), sum: '15000 azn', data: '3 il', percent: '15%', returnsum: '16875 azn', probability: '90' },
        { logo: require('../../assets/img/banks/ata.jpg'), sum: '15000 azn', data: '3 il', percent: '15%', returnsum: '16875 azn', probability: '75' },
        { logo: require('../../assets/img/banks/bankofbaku.jpg'), sum: '15000 azn', data: '3 il', percent: '15%', returnsum: '16875 azn', probability: '65' }
      ],
      offer2: [
        { logo: require('../../assets/img/banks/kapital.jpg'), sum: '15000 azn', data: '2 il', percent: '28%', returnsum: '16875 azn', probability: '45' },
        { logo: require('../../assets/img/banks/uni.jpg'), sum: '15000 azn', data: '4 il', percent: '32%', returnsum: '16875 azn', probability: '38' },
        { logo: require('../../assets/img/banks/express.jpg'), sum: '15000 azn', data: '3 il', percent: '34%', returnsum: '16875 azn', probability: '37' }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
.offerTitle {
    font-weight: bold;
    font-size: 16px;
    text-align: center;
  @include media(960px) {
    font-size: 20px;
    text-align: left;
  }
}
.offerSubtitle {
    font-size: 12px;
    text-align: center;
    margin: 5px 0;
  @include media(960px) {
    font-size: 14px;
    text-align: left;
  }
}

</style>
