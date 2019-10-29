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
      <div class="aboutImgBlock">
        <img src="../assets/img/saving_money.png" alt="saving_money" class="aboutImg">
      </div>
      <div class="aboutContet">
        <p>
          <b>Vaxtım.az</b> - əmanətlər, ipoteka kreditləri, kredit kartları, sığorta və digər maliyyə məhsulları ilə bağlı ən yaxşı sövdələşmələri asanlaşdırır. Yalnız pula deyil, həm də vaxtınıza qənaət etməyə kömək edəcəyik. Əvvəllər insanlar bankların və sığorta şirkətlərinin veb saytlarında məlumat axtarmalı və bütün incəlikləri tam anlamadan vacib qərarlar qəbul etməli idilər. 
        </p>
        <p>
          Bunu dəyişdirməyə qərar verdik. Sadə alətlərimiz və vicdanlı məsləhətlərimiz artıq borclara girməməyinizə, kredit ödənişlərini dəqiq hesablamağa, ən yaxşı əmanəti seçməyə və özünüzü çətinliklərdən sığortalamağa kömək edəcəkdir.
        </p>
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  @include media(960px) {
    flex-direction: row;
  }
}
.aboutContet {
  border: 1px solid lightgray;
  border-radius: 10px;
  width: 80%;
  padding: 20px;
  @include media(960px) {
    width: 700px;
  }
}
.aboutContet p {
  text-indent: 1.5em;
  line-height: 2em;
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
  padding: 0 50px;
  @include media(960px) {
    padding: 0 200px;
  }
}
.moreHeader h1 {
  color: white;
  font-weight: bold;
  font-size: 30px;
  @include media(960px) {
    font-size: 35px;
  }
}
.moreHeader h1 p {
  font-size: 50px;
  @include media(960px) {
    font-size: 60px;
  }
}
.infoTable {
  width: 85%;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.4);
  margin: auto;
  position: relative;
  top: -30px;
  background: #fff;
  @include media(960px) {
    width: 700px;
  }
}
.infoTable tr {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.infoTable tr td {
  padding: 15px;
  @include media(960px) {
    padding: 25px;
  }
}
.count {
  font-weight: bold;
  color: $base-color;
  font-size: 25px;
  margin-bottom: 0;
  @include media(960px) {
    font-size: 35px;
  }
}
.text {
  font-size: 16px;
  @include media(960px) {
    font-size: 20px;
  }
}
</style>