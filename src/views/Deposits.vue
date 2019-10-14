<template>
  <div class="depositsContainer">
    <DepositMainFilter />
    <DepositOffers />
  </div>
</template>

<script>
import DepositMainFilter from '../components/Deposits/DepositMainFilter'
import DepositOffers from '../components/Deposits/DepositOffers'

export default {
  components: {
    DepositMainFilter,
    DepositOffers
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
  
.depositsContainer {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
</style>
