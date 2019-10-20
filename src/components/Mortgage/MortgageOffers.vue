<template>
  <div class="offerContainer">
    <ul class="offerFilter">
      <li
        v-for="(data, index) in offerFilter"
        :key="index"
        @click="filter(data)"
        :class="{activeFilter: selectFilter === data}"
        >{{data}}</li>
    </ul>
    <div class="OfferResult">
      <div class="resultHeader">
        <div class="resultHeaderSection">Bank</div>
        <div class="resultHeaderSection">Faiz dərəcəsi</div>
        <div class="resultHeaderSection">Məbləğ</div>
        <div class="resultHeaderSection">Şərtlər</div>
        <div class="resultHeaderSection"></div>
      </div>
      <div class="offerNotFound" v-if="!newOfferList.length">
        <p class="notFoundText">Uyğun məlumat tapılmadı</p>
      </div>
      <div class="resultContent" v-for="(offer, index) in newOfferList" :key="index" v-else>
        <div class="resultContentSection">
          <div class="smallSection">
            <img :src="offer.imgLink" alt="Logo" class="bankLogo">
          </div>
          <div class="smallSection">
            <p class="offerPercent"> {{offer.offerPercent}} %</p>
          </div>
        </div>
        <div class="resultContentSection">
          <div class="smallSection">
            <p class="offerAmount">{{offer.offerAmount}} {{offer.offerCurrency}}</p>
            <p class="offerPeriod">{{offer.offerPeriod}}</p>
          </div>
          <div class="smallSection hideSection">
            <p class="offerConditions">{{offer.offerConditions}}</p>
          </div>
          <div class="smallSection">
            <router-link to="/" tag="div" class="webLink">DAHA ƏTRAFLI</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      offerFilter: [
        'İstənilən',
        'Mənzil',
        'Həyət evi',
        'Təmir tikinti',
        'Maşın'
      ],
      selectFilter: 'İstənilən',
      offerList: [
        { imgLink: require('../../assets/img/banks/access.jpg'), offerPercent: 18, offerAmount: 20000, offerCurrency: 'Həyət evi', offerPeriod: '2 illik', offerConditions: '18 yaşdan, 3 aydan bəri təcrübə, 4 sənəd' },
        { imgLink: require('../../assets/img/banks/amrah.jpg'), offerPercent: 20, offerAmount: 22000, offerCurrency: 'Maşın', offerPeriod: '3 illik', offerConditions: '18 yaşdan, 3 aydan bəri təcrübə, 4 sənəd' },
        { imgLink: require('../../assets/img/banks/beynalxalq.jpg'), offerPercent: 22, offerAmount: 25000, offerCurrency: 'Mənzil', offerPeriod: '1 illik', offerConditions: '18 yaşdan, 3 aydan bəri təcrübə, 4 sənəd' },
        { imgLink: require('../../assets/img/banks/uni.jpg'), offerPercent: 19, offerAmount: 19000, offerCurrency: 'Həyət evi', offerPeriod: '3 illik', offerConditions: '18 yaşdan, 3 aydan bəri təcrübə, 4 sənəd' },
        { imgLink: require('../../assets/img/banks/ag.jpg'), offerPercent: 20, offerAmount: 28000, offerCurrency: 'Təmir tikinti', offerPeriod: '4 illik', offerConditions: '18 yaşdan, 3 aydan bəri təcrübə, 4 sənəd' },
        { imgLink: require('../../assets/img/banks/kapital.jpg'), offerPercent: 24, offerAmount: 20000, offerCurrency: 'Mənzil', offerPeriod: '5 illik', offerConditions: '18 yaşdan, 3 aydan bəri təcrübə, 4 sənəd' },
        { imgLink: require('../../assets/img/banks/express.jpg'), offerPercent: 28, offerAmount: 23000, offerCurrency: 'Təmir tikinti', offerPeriod: '2 illik', offerConditions: '18 yaşdan, 3 aydan bəri təcrübə, 4 sənəd' },
        { imgLink: require('../../assets/img/banks/aztr.jpg'), offerPercent: 18, offerAmount: 28000, offerCurrency: 'Maşın', offerPeriod: '3 illik', offerConditions: '18 yaşdan, 3 aydan bəri təcrübə, 4 sənəd' }
      ],
      newOfferList: []
    }
  },
  mounted () {
    this.newOfferList = this.offerList.filter(element => {
      return element.offerCurrency
    })
  },
  methods: {
    filter (value) {
      this.newOfferList = this.offerList.filter(element => {
        if (value === 'İstənilən') {
          return element.offerCurrency
        } else if (element.offerPeriod === value) {
          return element.offerPeriod === value
        } else if (element.offerCurrency === value) {
          return element.offerCurrency === value
        }
      })
      this.selectFilter = value
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.offerContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ebeff0;
  margin-bottom: 60px;
  @include media(960px) {
    margin-bottom: 0;
  }
}
.offerFilter {
  list-style: none;
  margin: 20px 0;
  border: 1px solid lightgray;
  background: #fff;
  border-radius: 5px;
  text-align: center;
}
.offerFilter li {
  border: 1px solid lightgray;
  padding: 2px 15px;
  cursor: pointer;
  margin: 3px;
  display: inline-block;
  border-radius: 5px;
  @include media(960px) {
    border: none;
    border-left: 1px solid lightgray;
    margin: 0;
  }
}
.offerFilter li:first-child {
  border-left: none;
}
.activeFilter {
  background: $base-color;
  color: #fff;
}
.OfferResult {
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: none;
  border: none;
  @include media(960px) {
    width: 1250px;
    background: #fff;
    border: 1px solid lightgray;
    margin: 20px auto;
  }
}
.resultHeader {
  display: none;
  @include media(960px) {
  display: flex;
  flex-direction: row;
  }
}
.resultHeaderSection:first-child {
  border-left: none;
}
.resultHeaderSection {
  width: 250px;
  height: 40px;
  border-left: 1px solid lightgray;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: gray;
}
.resultContent {
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 10px;
  margin-top: 10px;
  background: #fff;
  @include media(960px) {
    border-radius: 0;
    border: none;
    background: none;
    border-top: 1px solid lightgray;
    flex-direction: row;
  }
}
.resultContentSection {
  display: flex;
  flex-direction: row;
}
.smallSection {
  width: 250px;
  padding: 0 30px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  @include media(960px) {
    height: 90px;
  }
}
.hideSection {
  display: none;
  @include media(960px) {
    display: flex;
  }
}
.bankLogo {
  width: 120px;
}
.offerPercent {
  margin: 0;
  font-size: 25px;
  font-weight: bold;
}
.offerAmount {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}
.offerPeriod {
  margin: 0;
  font-size: 14px;
  color: gray;
}
.offerConditions {
  margin: 0;
  font-size: 14px;
  color: gray;
}
.webLink {
  padding: 5px 15px;
  color: #fff;
  background: $base-color;
  border-radius: 5px;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
}
.webLink:hover {
  box-shadow: 0px 5px 3px 0px rgba(0,0,0,0.3);
}
.offerNotFound {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 10px;
  background: #fff;
  text-align: center;
  @include media(960px) {
    height: 90px;
    border: none;
    background: none;
    border-radius: 0;
    border-top: 1px solid lightgray;
  }
}
.notFoundText {
  margin: 0;
  font-size: 20px;
  color: gray;
  font-weight: bold;
  @include media(960px) {
    font-size: 30px;
  }
}
</style>
