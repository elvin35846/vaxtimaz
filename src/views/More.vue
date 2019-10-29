<template>
  <div class="moreContainer">
    <div class="moreHeader">
      <h1>
        <p>Vaxtim.az</p>
          insanlara düzgün seçim etmək və maliyyə məqsədlərinə çatmaqda kömək edin
      </h1>
    </div>
    <table class="infoTable">
      <tr>
        <td v-for="(info, index) in usersInfo" :key="index">
          <p class="count">{{info.count}}</p>
          <span class="text">{{info.text}}</span>
        </td>
      </tr>
    </table>
    <div class="about">
      <div class="aboutImg">
        <img src="" alt="saving_money">
      </div>
      <div class="aboutContent">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      usersInfo: [
        { count: '5 mln', text: 'ayda unikal istifadəçilər' },
        { count: '10 000', text: 'banklardan və sığorta şirkətlərindən təkliflər' },
        { count: '50 000', text: 'bankların və sığorta şirkətlərinin rəyləri' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/assets/css/_utils.scss";

.about {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid;
}


.moreContainer {
  display: flex;
  flex-direction: column;
  padding-top: 60px;
}
.moreHeader {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: $base-color;
  height: 340px;
  text-align: center;
  padding: 0 200px;
}
.moreHeader h1 {
  color: white;
  font-weight: bold;
  font-size: 35px;
}
.moreHeader h1 p {
  font-size: 60px;
}
.infoTable {
  width: 700px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
  margin: auto;
  position: relative;
  top: -30px;
  background: #fff;
}
.infoTable tr td {
  padding: 25px;
}
.count {
  font-weight: bold;
  color: $base-color;
  font-size: 35px;
  margin-bottom: 0;
}
.text {
  font-size: 20px;
}
</style>