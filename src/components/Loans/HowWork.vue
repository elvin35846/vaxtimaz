<template>
  <div class="howWorkBlock">
    <h1>Bu necə işləyir?</h1>
    <div class="howWork">
      <div class="howWorkCards" v-for="(data, index) in howWork" :key="index">
        <img :src="data.url" alt="">
        <h5>{{data.title}}</h5>
        <p>{{data.content}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      howWork: [
        { url: require('../../assets/img/howWorkIcon/icon-list.jpg'), title: 'Kredit ərizəsini doldurun', content: 'Özünüz haqqında: haradansınız, kimlə işləyirsiniz, hansı növ kredit almaq istəyirsiniz' },
        { url: require('../../assets/img/howWorkIcon/icon-scoring.jpg'), title: 'Kredit reytinqinizi öyrənin', content: 'Kredit reytinqinizi hesablayacağıq - bu, bankların kredit vermək qərarına təsir göstərir' },
        { url: require('../../assets/img/howWorkIcon/icon-relevant.jpg'), title: 'Ən yaxşı təklifi seçin', content: 'Hansı bankların krediti təsdiqlədiyini və başqalarının niyə uyğun olmadığını görəcəksiniz.' },
        { url: require('../../assets/img/howWorkIcon/icon-phone.jpg'), title: 'Krediti onlayn təsdiq edin', content: 'İstədiyiniz banka bir ərizə göndərin və cavabını bir neçə dəqiqədən sonra tapın' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  @import "src/assets/css/_utils.scss";

.howWorkBlock {
  background: $base-bg-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 50px 0;
}
.howWorkBlock h1 {
  font-weight: bold;
  margin-bottom: 40px;
}
.howWork {
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  @include media(960px) {
    width: 960px;
    flex-wrap: nowrap;
  }
}

.howWorkCards {
  width: 60%;
  background: #fff;
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin: 5px auto;
  @include media(960px) {
    width: 220px;
    margin: 0;
  }
}
.howWorkCards h5 {
  font-weight: bold;
  font-size: 14px;
  margin: 10px 0;
  @include media(960px) {
    font-size: 16px;
  }
}
.howWorkCards p {
  font-size: 12px;
  margin: 0;
  @include media(960px) {
    font-size: 14px;
  }
}
</style>
