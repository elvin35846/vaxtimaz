<template>
  <div class="offerTableBox">
      <div class="offerTable" v-for="(item, index) in offer" :key="index">
          <div class="boxs b">
            <img :src="item.logo" alt="bank_logo" class="bankLogo">
          </div>
          <div class="boxs b">
            <span class="title">Məbləğ, müddət</span>
            <p class="subtitle">{{item.sum}} - {{item.data}}</p>
          </div>
          <div class="boxs b">
            <span class="title">Dərəcəsi</span>
            <p class="subtitle">{{item.percent}}</p>
          </div>
          <div class="boxs b">
            <span class="title">Qaytarılacaq məbləğ</span>
            <p class="subtitle">{{item.returnsum}}</p>
          </div>
          <div class="boxs b">
            <div class="blockbox">
              <percent :percent="item.probability" />
              <span class="title2">
                Təsdiqləmə ehtimalı yüksəkdir
              </span>
            </div>
            <router-link to="/" tag="span" class="offerBtn" :style="{background: item.probability>50 ? '#2294d1' : '#fa2121'}">
            Ətraflı
            </router-link>
          </div>
    </div>
    </div>
</template>

<script>
import percent from './percent'

export default {
  props: {
    offer: Array
  },
  components: {
    percent
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
.offerTableBox {
  background: #fff;
  padding: 5px 20px;
  border-radius: 5px;
}
.offerTable {
  border-bottom: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin: 20px 0;
  @include media(960px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
.boxs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @include media(960px) {
  margin-top: 0;
  }
}
.bankLogo {
  width: 140px;
}
.title {
  font-size: 14px;
  color: gray;
  margin-bottom: 5px;
}
.title2 {
  font-size: 14px;
  color: gray;
  text-align: left;
  margin-left: 5px;
  width: 100%;
  @include media(960px) {
    width: 62px;
    font-size: 11px;
  }
}
.subtitle {
  font-size: 14px;
  font-weight: bold;
  margin: 0;
}
.blockbox {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;

  }
.offerBtn {
  // background: $base-color;
  color: white;
  border-radius: 5px;
  font-size: 12px;
  width: 200px;
  margin: 20px auto;
  text-align: center;
  padding: 5px;
  cursor: pointer;
  @include media(960px) {
    width: 80px;
    margin: 10px 0;
    padding: 2px;
  }
}

</style>
