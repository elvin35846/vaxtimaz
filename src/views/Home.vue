<template>
  <div class="homeContainer">
    
    <Slider />
    <Categories />
    <Currency />
    <BestDeal />
    <Partners />
  </div>
</template>

<script>
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Currency from '../components/Currency'
import BestDeal from '../components/BestDeal'
import Partners from '../components/Partners'

export default {
  components: {
    Slider,
    Categories,
    Currency,
    BestDeal,
    Partners
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
  
.homeContainer {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}


</style>