<template>
  <div class="loansContainer">
    <LoansHeader/>
    <HowWork/>
    <LoanRequest/>
  </div>
</template>

<script>
import LoansHeader from '../components/Loans/LoansHeader'
import HowWork from '../components//Loans/HowWork'
import LoanRequest from '../components//Loans/LoanRequest'

export default {
  components: {
    LoansHeader,
    HowWork,
    LoanRequest
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
  
.loansContainer {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
</style>