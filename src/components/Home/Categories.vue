<template>
  <div class="categoryBlock">
    <div class="categoryArea" v-if="insureStatus">
      <router-link tag="div" :to="category.url" class="category" v-for="(category, index) in categories" :key="index" @click.native="insureFunction(category.status)">
        <i class="material-icons icon">{{category.icon}}</i>
        <h5>{{category.title}}</h5>
        <i class="material-icons">done</i>
      </router-link>
    </div>
    <div class="categoryArea" v-else>
      <i @click="insureFunction('insurance')" class="material-icons back">{{ width &lt; 768 ? 'keyboard_arrow_up' : 'keyboard_arrow_left' }}</i>
      <a href="https://gpp.az/GPEWebPortal/Infosite/RedirectFromSc/982000/aHR0cHM6Ly9ncHAuYXo=" class="category" target="_blank">
        <i class="material-icons icon">security</i>
        <h5>{{insurance.title}}</h5>
        <i class="material-icons">done</i>
      </a>
      <router-link tag="div" :to="insurance.url" class="category" v-for="(insurance, index) in insuranceArea" :key="index">
        <i class="material-icons icon">security</i>
        <h5>İcbari</h5>
        <i class="material-icons">done</i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      insureStatus: true,
      width: 0
    }
  },
  computed: {
    categories () {
      return [
        { icon: 'local_atm', title: this.$t('category.deposit'), url: '/deposits' },
        { icon: 'monetization_on', title: this.$t('category.loans'), url: '/loans' },
        { icon: 'house', title: this.$t('category.mortgage'), url: '/mortgage' },
        { icon: 'security', title: this.$t('category.insurance'), url: '', status: 'insurance' },
        { icon: 'credit_card', title: this.$t('category.credit_cards'), url: '/credit_cards' },
        { icon: 'credit_card', title: this.$t('category.bokt'), url: '/' }
      ]
    },
    insuranceArea () {
      return [
        { title: 'Kasko', url: '/kasko' },
        { title: 'Səyahət', url: '' }
      ]
    }
  },
  methods: {
    insureFunction (value) {
      if (value === 'insurance') this.insureStatus = !this.insureStatus
    }
  },
  created () {
    this.width = window.innerWidth
    window.addEventListener('resize', () => {
      this.width = window.innerWidth
    })
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.categoryBlock {
  width: 100%;
  border-bottom: 1px solid lightgray;
}
.back {
  font-size: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: $base-color;
  cursor: pointer;
  @include media(960px) {
    height: 80px;
  }
}
.back:hover {
  color: #7cb6d4;
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
  width: 305px;
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
