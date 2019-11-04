<template>
  <div class="creditCardsPage">
    <CreditCardsFilter />
    <CardsOffers />
  </div>
</template>

<script>
import CreditCardsFilter from '../components/CreditCards/CreditCardsFilter'
import CardsOffers from '../components/CreditCards/CardsOffers'
export default {
  components: {
    CreditCardsFilter,
    CardsOffers
  },

}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.creditCardsPage {
  padding-top: 60px;
}
</style>
