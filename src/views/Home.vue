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
import Slider from '../components/Home/Slider'
import Categories from '../components/Home/Categories'
import Currency from '../components/Home/Currency'
import BestDeal from '../components/Home/BestDeal'
import Partners from '../components/Home/Partners'

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