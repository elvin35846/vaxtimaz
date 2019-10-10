<template>
  <div class="offerContainer">
    <div class="offerInnerBlock">
      <div class="offerLeft">
        <OfferFilter/>
      </div>
      <div class="offerRight">
        <OfferList/>
      </div>
    </div>
  </div>
</template>

<script>
import OfferFilter from '../components/Offer/OfferFilter'
import OfferList from '../components/Offer/OfferList'
export default {
  components: {
    OfferFilter,
    OfferList
  }
}
</script>

<style scoped lang="scss">
  @import "src/assets/css/_utils.scss";

.offerContainer {
  padding-top: 80px;
  background: $base-bg-color;
}
.offerInnerBlock {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  margin: auto;
  @include media(960px) {
    width: 960px;
  }
}
.offerLeft {
  display: none;
  @include media(960px) {
    display: block;
    width: 220px;
    padding: 5px;
  }
}
.offerRight {
  width: 90%;
  padding: 10px;
  @include media(960px) {
    width: 740px;
  }
}
</style>
