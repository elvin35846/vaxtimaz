<template>
  <div class="categoryBlock">
    <div class="categoryArea">
      <router-link tag="div" :to="category.url" class="category" v-for="(category, index) in categories" :key="index">
        <i class="material-icons icon">{{category.icon}}</i>
        <h5>{{category.title}}</h5>
        <i class="material-icons">done</i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories () {
      return [
        { icon: 'local_atm', title: this.$t('category.deposit'), url: '/deposits' },
        { icon: 'monetization_on', title: this.$t('category.loans'), url: '/loans' },
        { icon: 'house', title: this.$t('category.mortgage'), url: '/mortgage' },
        { icon: 'security', title: this.$t('category.kasko'), url: '/kasko' },
        { icon: 'credit_card', title: this.$t('category.credit_cards'), url: '/credit_cards' },
        { icon: 'credit_card', title: this.$t('category.bokt'), url: '/' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.categoryBlock {
  width: 100%;
  border-bottom: 1px solid lightgray;
}
.categoryArea {
  width: 320px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px auto;
  @include media(768px) {
    width: 640px;
  }
  @include media(960px) {
    width: 960px;
  }
}
.category {
  border: 1px solid lightgray;
  width: 320px;
  height: 80px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  cursor: pointer;
  transition: 0.5s;
}
.category i,
.category h5 {
  transition: 0.5s;
}
.category:hover {
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
}
.category:hover .icon,
.category:hover h5 {
  color: $base-color;
}
.category:hover .done {
  color: black;
}
</style>
