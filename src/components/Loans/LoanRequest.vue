<template>
  <div class="requestBlock">
    <div class="requestCategoriesBlock" >
      <a class="requestCategories"  href="#scroll" :class="{selectCategory : selectStatus === item.status}" v-for="(item, index) in requestCategories" :key="index" @click="clicked(item.status)">
        <i class="fas myIcon" :class="item.icon"></i>
        <span>{{item.title}}</span>
      </a>
    </div>
    <div class="requestContainer" id="scroll" v-if="selectStatus === 'cash' || selectStatus === 'gold' || selectStatus === 'deposit' || selectStatus === 'auto'">
      <h1>{{ selectStatus === 'gold' ? 'Qızıl' : selectStatus === 'cash' ? 'Nəğd' : selectStatus === 'auto' ? 'Avto' : 'Girovlu' }} krediti </h1>
      <p>Xidmətimiz və tərəfdaş banklarımız müraciətlərə baxılması və kredit verməsi üçün rüsum almır.</p>
      <h4>Parametrlər</h4>
      <div class="optionBlock">
        <fieldset>
          <legend>Kreditin təyinatı</legend>
          <select class="selectBox">
            <option value="" v-for="(data, index) in loanType" :key="index">{{data}}</option>
          </select>
        </fieldset>
        <fieldset>
          <legend>İstədiyiniz məbləğ</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Müddət</legend>
          <input type="date" class="inputBox">
        </fieldset>
      </div>
      <hr>
      <div class="withDeposit" v-if="selectStatus === 'deposit'">
        <h4>Mülkün məlumatları</h4>
        <div class="optionBlock">
          <fieldset>
            <legend>Mülkün sahibi</legend>
            <input type="text" class="inputBox">
          </fieldset>
          <fieldset>
            <legend>Sənəd növü</legend>
            <input type="text" class="inputBox">
          </fieldset>
          <fieldset>
            <legend>Bazar qiyməti</legend>
            <input type="text" class="inputBox">
          </fieldset>
        </div>
        <div class="optionBlock">
          <fieldset>
            <legend>Yerləşdiyi ünvan</legend>
            <input type="text" class="inputBox">
          </fieldset>
          <fieldset>
            <legend>Həyət</legend>
            <input type="text" class="inputBox">
          </fieldset>
          <fieldset>
            <legend>Bina</legend>
            <input type="text" class="inputBox">
          </fieldset>
        </div>
      </div>
      <div class="auto" v-if="selectStatus === 'auto'">
        <h4>Avto məlumatları</h4>
        <div class="optionBlock">
          <fieldset>
            <legend>Avtomobilin vəziyəti</legend>
            <select class="inputBox">
              <option value="new">Yeni</option>
              <option value="old">İşlənmiş</option>
            </select>
          </fieldset>
          <fieldset>
            <legend>Markası və modeli</legend>
            <input type="text" class="inputBox">
          </fieldset>
          <fieldset>
            <legend>İlkin ödəniş məbləği</legend>
            <input type="text" class="inputBox">
          </fieldset>
        </div>
      </div>
      <hr v-if="selectStatus === 'deposit' || selectStatus === 'auto'">
      <h4>Əlaqə məlumatları</h4>
      <div class="optionBlock">
        <fieldset>
          <legend>Soyadınız</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Adınız</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Ata adı</legend>
          <input type="text" class="inputBox">
        </fieldset>
      </div>
      <div class="optionBlock">
        <fieldset>
          <legend>Doğum tarixi</legend>
          <input type="date" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Ailə üzvlərin sayı</legend>
          <input type="number" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Cinsi</legend>
          <select class="inputBox">
            <option value="male">Kişi</option>
            <option value="famale">Qadın</option>
          </select>
        </fieldset>
      </div>
      <div class="optionBlock">
        <fieldset>
          <legend>Faktiki yaşadığı ünvan</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Mobil</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input type="text" class="inputBox">
        </fieldset>
      </div>
      <div class="optionBlock">
        <fieldset>
          <legend>Rəsmi iş yeri</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Rəsmi maaş</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>İş yerinin ünvanı</legend>
          <input type="text" class="inputBox">
        </fieldset>
      </div>
      <div class="optionBlock">
        <fieldset>
          <legend>Tutduğu vəzifə</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Ümumi iş təcrübəsi (il)</legend>
          <input type="text" class="inputBox">
        </fieldset>
        <fieldset>
          <legend>Son iş yeri</legend>
          <input type="text" class="inputBox">
        </fieldset>
      </div>
      <div class="btnBox">
      <router-link to="/offer" class="btnBlue">Təklif alın</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      height: 0,
      selectStatus: 'cash',
      loanType: [
        'Təmir',
        'Yeni maşın almaq',
        'Təhsil'
      ],
      requestCategories: [
        { status: 'cash', title: 'Nəğd', icon: 'fa-money-bill-wave' },
        { status: 'deposit', title: 'Girovlu', icon: 'fa-home' },
        { status: 'auto', title: 'Avto', icon: 'fa-car' },
        { status: 'gold', title: 'Qızıl', icon: 'fa-coins' }
      ]
    }
  },
  methods: {
    clicked (status) {
      this.selectStatus = status
      setTimeout(() => {
        history.pushState(null, null, ' ')
      }, 0)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.requestCategoriesBlock {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 30px auto;
  @include media(960px) {
    width: 960px;
  }
}
.requestCategories {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 48%;
  padding: 0px 0;
  border: 1px solid lightgrey;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  text-decoration: none;
  color: black;
  @include media(960px) {
    width: 23%;
    margin-top: 0;
    padding: 30px 0;
  }
}
.requestCategories:hover {
  box-shadow: 0px 0px 5px 4px rgba($color: #000000, $alpha: 0.2);
}
.myIcon {
  font-size: 50px;
  color: $base-color;
}
.selectCategory {
  color: $base-color;
  box-shadow: 0px 0px 4px 0px rgba($color: #000000, $alpha: 0.5);
}
.requestCategories span {
  font-size: 30px;
  font-weight: bold;
}
.requestContainer {
  width: 90%;
  padding: 50px 0;
  margin: auto;
  @include media(960px) {
    width: 960px;
  }
}
.requestContainer h1 {
  text-align: center;
  font-weight: bold;
}
.requestContainer p {
  text-align: center;
  margin: 20px 0;
}
.requestContainer h4 {
  text-align: center;
  font-weight: bold;
  margin: 20px 0;
  @include media(960px) {
    text-align: left;
  }
}
.optionBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  @include media(960px) {
    flex-direction: row;
    justify-content: space-between;
  }
}
.selectBox,
.inputBox {
  width: 310px;
  padding: 5px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid gray;
  cursor: pointer;
}
.selectBox:hover,
.inputBox:hover,
.selectBox:focus,
 .inputBox:focus {
  border-color: $base-color;
}

legend {
  font-size: 14px;
  color: gray;
  padding-top: 10px;
  margin-bottom: 0;
}
.btnBox {
  display: flex;
  justify-content: center;
  @include media(960px) {
    justify-content: flex-end;
  }
}
.btnBlue {
  width: 200px;
  padding: 6px 25px;
  background: $base-color;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  margin-bottom: 20px;
  @include media(960px) {
    width: auto;
  }
}
.btnBlue:hover {
  background: #32a5e2;
}
</style>
