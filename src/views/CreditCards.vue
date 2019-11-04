<template>
  <div class="creditCardsPage">
    <CreditCardsFilter @setFilter="setFilter"/>
    <CardsOffers :filter="filter"/>
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
  data() {
    return {
      filter: []
    }
  },
  methods: {
    setFilter(filter) {
      this.filter = filter;
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.creditCardsPage {
  padding-top: 60px;
}
</style>
