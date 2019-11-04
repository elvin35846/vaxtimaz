<template>
  <div class="cardsOffersComponent">
    <div class="offersContent">
      <div class="offer" v-for="(cardData, index) in cards" :key="index">
        <div class="cardImgBox">
          <img :src="cardData.cardImg" alt="cardImg" width="200px">
        </div>
        <div class="cardContentBox">
          <h3>{{cardData.cardTitle}}</h3>
          <p class="cardContent" v-if="cardData.cardPercent"><i class="fas fa-percent font_awesome"></i>{{cardData.cardPercent}}%<span> faiz derecesi</span></p>
          <p class="cardContent" v-if="cardData.gracePeriod"><i class="far fa-calendar-alt font_awesome"></i>{{cardData.gracePeriod}} gün<span> güzəşt müddəti</span></p>
          <p class="cardContent" v-if="cardData.initialLimit && cardData.finalLimit"><i class="fas fa-money-check-alt font_awesome"></i>{{cardData.initialLimit}}-dən {{cardData.finalLimit}}-kimi<span> limit</span></p>
          <p class="cardContent"><i class="fas fa-hand-holding-usd font_awesome"></i>{{cardData.price}} azn ayda<span> xidmət haqqı</span></p>
          <p class="cardContent" v-if="cardData.initialMilesLimit && cardData.finalMilesLimit"><i class="fas fa-map-signs font_awesome"></i>{{cardData.initialMilesLimit}}-dən {{cardData.finalMilesLimit}}-kimi miles<span> ildə</span></p>
          <p class="cardContent" v-if="cardData.initialCashBackLimit && cardData.finalCashBackLimit"><i class="fas fa-undo-alt font_awesome"></i>{{cardData.initialCashBackLimit}}-{{cardData.finalCashBackLimit}}%<span> cashback</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    filter: Array
  },
  computed: {
    cards () {
      return [
        { cardImg: require('../../assets/img/cards/bank_of_baku_diamond.png'), cardTitle: 'Bank of Baku - Diamond Card', cardPercent: 32.9, initialLimit: 1000, finalLimit: 5000, price: 18, initialMilesLimit: 3000, finalMilesLimit: 50000, initialCashBackLimit: 1, finalCashBackLimit: 10, bonuses_discounts: true },
        { cardImg: require('../../assets/img/cards/bank_of_baku_gold.jpg'), cardTitle: 'Bank of Baku - Gold Card', cardPercent: 32.9, gracePeriod: 60, initialLimit: 1000, finalLimit: 5000, price: 18, initialMilesLimit: 3000, finalMilesLimit: 50000, initialCashBackLimit: 1, finalCashBackLimit: 10 },
        { cardImg: require('../../assets/img/cards/bank_of_baku_visa_classic.jpg'), cardTitle: 'Bank of Baku - Visa Classic', cardPercent: 32.9, gracePeriod: 60, initialLimit: 1000, finalLimit: 5000, price: 18, initialMilesLimit: 3000, finalMilesLimit: 50000 },
        { cardImg: require('../../assets/img/cards/kapital_visa_classic.jpg'), cardTitle: 'Kapital - Visa Classic', cardPercent: 32.9, gracePeriod: 60, initialLimit: 1000, finalLimit: 5000, price: 18, initialMilesLimit: 3000, finalMilesLimit: 50000 },
        { cardImg: require('../../assets/img/cards/kapital_visa_electron.jpg'), cardTitle: 'Kapital - Visa Electron', cardPercent: 32.9, gracePeriod: 60, initialLimit: 1000, finalLimit: 5000, price: 18, initialCashBackLimit: 1, finalCashBackLimit: 10 },
        { cardImg: require('../../assets/img/cards/kapital_visa_gold.png'), cardTitle: 'Kapital - Visa Gold', cardPercent: 32.9, gracePeriod: 60, initialLimit: 1000, finalLimit: 5000, price: 18, initialMilesLimit: 3000, finalMilesLimit: 50000, initialCashBackLimit: 1, cashBackLimit: 10 },
        { cardImg: require('../../assets/img/cards/kapital_world_elite.jpg'), cardTitle: 'Kapital - World Elite', cardPercent: 32.9, initialLimit: 1000, finalLimit: 5000, price: 18, initialMilesLimit: 3000, finalMilesLimit: 50000, initialCashBackLimit: 1, finalCashBackLimit: 10 }
      ].filter(card => {
        let bool = true
        if (this.filter.includes('CashBack') && !card.finalCashBackLimit) bool = false
        if (this.filter.includes('travel') && !card.finalMilesLimit) bool = false
        if (this.filter.includes('grace') && !card.gracePeriod) bool = false
        if (this.filter.includes('bonus') && !card.bonuses_discounts) bool = false
        return bool
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.cardsOffersComponent {
  background: $base-bg-color;
  padding: 30px;
}
.cardImgBox {
  display: flex;
  justify-content: center;
  align-items: center;
}
.offersContent {
  width: 960px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
}
.offer {
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 30px;
  margin: 0 auto;
  background: white;
  transition: 0.5s;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
}
.offer:hover {
  box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.5);
  z-index: 10;
  border-bottom: 1px solid white;
}
.cardContentBox {
  margin-left: 30px;
}
.cardContentBox h3 {
  color: $base-color;
  font-weight: bold;
}
.cardContent {
  font-size: 16px;
  margin-bottom: 3px;
}
.cardContent span {
  font-size: 14px;
  color: gray;
  font-style: italic;
}
.font_awesome {
  font-size: 12px;
  margin-right: 5px;
  color: gray;
}
</style>
