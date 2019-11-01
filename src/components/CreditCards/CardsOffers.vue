<template>
  <div class="cardsOffersComponent">
    <div class="offersContent">
      <div class="offer" v-for="(cardData, index) in cards" :key="index">
        <div class="cardImgBox">
          <img :src="cardData.cardImg" alt="cardImg" width="200px">
        </div>
        <div class="cardContentBox">
          <h3>{{cardData.cardTitle}}</h3>
          <p class="cardContent"><i class="fas fa-percent font_awesome"></i>{{cardData.cardPercent}}%<span> faiz derecesi</span></p>
          <p class="cardContent"><i class="far fa-calendar-alt font_awesome"></i>{{cardData.gracePeriod}} gün<span> güzəşt müddəti</span></p>
          <p class="cardContent"><i class="far fa-calendar-alt font_awesome"></i>{{cardData.initialLimit}}-dən {{cardData.finalLimit}}-kimi<span> limit</span></i></p>
          <p class="cardContent"><i class="far fa-calendar-alt font_awesome"></i>{{cardData.price}} azn ayda<span> xidmət haqqı</span></p>
          <p class="cardContent"><i class="far fa-calendar-alt font_awesome"></i>{{cardData.milesLimit}}-dən {{cardData.milesLimit}}-kimi miles<span> ildə</span></p>
          <p class="cardContent"><i class="far fa-calendar-alt font_awesome"></i>{{cardData.cashBackLimit}}-{{cardData.cashBackLimit}}%<span> cashback</span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        { cardImg: require('../../assets/img/cards/bank_of_baku_diamond.png'), cardTitle: 'Master Card', cardPercent: 32.9, gracePeriod: 60, initialLimit: 1000, finalLimit: 5000, price: 18, milesLimit: 3000, milesLimit: 50000, cashBackLimit: 1, cashBackLimit: 10, },
      ]
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
  margin-left: 15px;
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
