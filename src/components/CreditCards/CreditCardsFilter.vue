<template>
  <div class="CreditCardsFilterComponent">
    <h1>Kredit kartları</h1>
    <div class="cardCategory">
      <p>Kartları seçin</p>
      <ul class="categories">
        <li class="categoriesList" :class="{activeFilter : filter == 'all'}" @click="OnFilter('all')">Hamısı</li>
        <li class="categoriesList" :class="{activeFilter : filter == 'CashBack'}" @click="OnFilter('CashBack')">CashBack</li>
        <li class="categoriesList" :class="{activeFilter : filter == 'travel'}" @click="OnFilter('travel')">Miles</li>
        <li class="categoriesList" :class="{activeFilter : filter == 'grace'}" @click="OnFilter('grace')">Güzəşt müddəti ilə</li>
        <li class="categoriesList" :class="{activeFilter : filter == 'bonus'}" @click="OnFilter('bonus')">Bonuslar və endirimlər</li>
      </ul>
      <p>Kartın mebleği</p>
      <span class="rangeValue">{{rangeValue}} azn</span>
      <input type="range" step="100"  min="0" max="50000" v-model="rangeValue" class="rangeClass" >
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rangeValue: 0,
      filter: '',
      filterArray: []
    }
  },
  methods: {
    OnFilter (val) {
      if (!this.filterArray.includes(val)) {
        this.filterArray.push(val)
      }
      else {
        this.filterArray = this.filterArray.filter(item => item !== val);
      }
      this.$emit("setFilter", this.filterArray)
      console.log(this.filterArray)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.CreditCardsFilterComponent {
  background: $base-color;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
}
.CreditCardsFilterComponent h1 {
  font-weight: bold;
  margin-bottom: 20px;
}
.cardCategory {
  display: flex;
  flex-direction: column;
}
.cardCategory p{
  margin-bottom: 3px;
}
.categories {
  list-style: none;
}
.categoriesList {
  display: inline-block;
  margin-right: 20px;
  padding: 2px 8px;
  cursor: pointer;
  border: 1px solid $base-color;
  transition: 0.3s;
}
.categoriesList:hover {
  border: 1px solid white;
  border-radius: 5px;
}
.activeFilter {
  border: 1px solid white;
  border-radius: 5px;
}
.rangeClass {
  appearance: none;
  width: 500px;
  height: 2px;
  background: #ffffff;
}
.rangeClass::-webkit-slider-thumb:hover {
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.75);
}
.rangeClass::-webkit-slider-thumb {
  appearance: none;
  width: 20px;
  height: 20px;
  background: #ffffff;
  border-radius: 50%;
  cursor: pointer;
}
.rangeValue {
  margin: 0 0 15px;
  font-size: 22px;
}
</style>
