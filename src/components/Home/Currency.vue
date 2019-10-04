<template>
  <div class="currencyBlock">
      <ul class="currencyList">
        <li><router-link to="/">USD</router-link>1.7 azn</li>
        <li><router-link to="/">EUR</router-link>1.8592 azn</li>
        <li><router-link to="/">RUB</router-link>0.0263 azn</li>
        <li><router-link to="/">TRY</router-link>0.3 azn</li>
      </ul>
      <div class="allCurrencyLink">
        <router-link to="/">{{$t('all_exchange_rates')}}</router-link>
      </div>
    </div>
</template>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.currencyBlock {
  margin: 0 auto;
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  @include media(768px) {
    width: 640px;
  }
  @include media(960px) {
    width: 960px;
    flex-direction: row;
    justify-content: space-between;
  }
}
.allCurrencyLink a{
  color: $base-color;
  font-size: 16px;
  margin: auto;
  @include media(960px) {
    text-align: right;
  }
}
.currencyList {
  list-style-type: none;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  @include media(960px) {
    margin: 0;
  }
}
.currencyList li {
  display: inline;
  font-size: 16px;
  margin: 0;
  @include media(768px) {
    margin-right: 15px;
  }
}
.currencyList li a {
  margin-right: 5px;
  color: gray;
  font-weight: bold;
  transition: 0.3s;
}
.currencyList li a:hover {
  color: $base-color;
  text-decoration: none;
}
</style>
