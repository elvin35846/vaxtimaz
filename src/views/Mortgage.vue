<template>
  <div class="mortgageContainer">
    <MortgageMainFilter />
    <MortgageOffers />
  </div>
</template>

<script>
import MortgageMainFilter from '../components/Mortgage/MortgageMainFilter'
import MortgageOffers from '../components/Mortgage/MortgageOffers'

export default {
  components: {
    MortgageMainFilter,
    MortgageOffers
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
  
.mortgageContainer {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
</style>
