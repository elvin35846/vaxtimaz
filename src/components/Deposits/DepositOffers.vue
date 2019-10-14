<template>
  <div class="offerContainer">
    <ul class="offerFilter">
      <li 
        v-for="(data, index) in offerList" 
        :key="index"
        @click="selectFilter = data"
        :class="{activeFilter: selectFilter === data}"
        >{{data}}</li>
    </ul>
    <div class="OfferResult">
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      offerList: [
        'Bütün əmanətlər',
        'AZN',
        'USD',
        'EURO',
        '3 aylıq',
        '6 aylıq',
        '9 aylıq',
        '1 illik',
        '2 illik',
        '3 illik',
        '4 illik',
        '5 illik',
      ],
      selectFilter: 'Bütün əmanətlər'
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
}
.offerFilter {
  list-style: none;
  margin: 20px 0;
  border: 1px solid gray;
  background: #fff;
  border-radius: 5px;
}
.offerFilter li:first-child {
  border-left: none;
}
.offerFilter li {
  display: inline-block;
  padding: 2px 15px;
  border-left: 1px solid gray;
  cursor: pointer;
}
.activeFilter {
  background: $base-color;
  color: #fff;
}
.OfferResult {
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  background: #fff;
}
</style>