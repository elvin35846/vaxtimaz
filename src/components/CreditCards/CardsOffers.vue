<template>
  <div class="cardsOffersComponent">
    <div class="offersContent">
      <div class="offer" v-for="(cardData, index) in cards" :key="index">
        <div class="cardImgBox">
          <img :src="cardData.cardImg" alt="cardImg" width="200px">
        </div>
        <div class="cardContentBox">
          <h3>{{cardData.cardTitle}}</h3>
          <p>{{cardData.cardPercent}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { cardImg: require('../../assets/img/creditCard.png'), cardTitle: 'Master Card', cardPercent: '32,9% faiz derecesi' },
        { cardImg: require('../../assets/img/creditCard.png'), cardTitle: 'Master Card', cardPercent: '32,9% faiz derecesi' },
        { cardImg: require('../../assets/img/creditCard.png'), cardTitle: 'Master Card', cardPercent: '32,9% faiz derecesi' },
        { cardImg: require('../../assets/img/creditCard.png'), cardTitle: 'Master Card', cardPercent: '32,9% faiz derecesi' }
      ]
    }
  },
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
</style>