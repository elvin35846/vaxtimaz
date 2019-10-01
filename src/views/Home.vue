<template>
  <div class="homeContainer">
    <div class="navbarBlock">
      <img src="../assets/img/logo.png" alt="vaxtimaz" width="170px">
      <div class="navbarBlock">
        <ul class="navbar">
          <router-link to="/" tag="li">Ana səhifə</router-link>
          <router-link to="/" tag="li">Kreditlər</router-link>
          <router-link to="/" tag="li">İpoteka</router-link>
          <router-link to="/" tag="li">Əmanət</router-link>
          <router-link to="/" tag="li">Sığorta</router-link>
          <router-link to="/" tag="li">Ətraflı</router-link>
        </ul>
        <ul class="language">
          <router-link to="/" tag="li">AZ</router-link>
          <router-link to="/" tag="li">RU</router-link>
          <router-link to="/" tag="li">EN</router-link>
        </ul>
      </div>
    </div>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="slide1">
            <div class="slideContent">
              <h1>Ipoteka kreditləri</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore totam corporis nulla eveniet iste odit esse cupiditate.</p>
              <router-link to="/" class="allBtn">Ətraflı</router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="slide2">
            <div class="slideContent">
              <h1>Pul kreditləri</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore totam corporis nulla eveniet iste odit esse cupiditate.</p>
              <router-link tag="button" to="/" class="allBtn">Ətraflı</router-link>
            </div>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <div class="categoryBlock">
      <div class="category">
        <i class="material-icons">money</i>
        <h5>Əmanətlər</h5>
        <i class="material-icons">done</i>
      </div>
      <div class="category">
        <i class="material-icons">money</i>
        <h5>Kreditlər</h5>
        <i class="material-icons">done</i>
      </div>
      <div class="category">
        <i class="material-icons">money</i>
        <h5>İpoteka</h5>
        <i class="material-icons">done</i>
      </div>
      <div class="category">
        <i class="material-icons">money</i>
        <h5>Kasko</h5>
        <i class="material-icons">done</i>
      </div>
      <div class="category">
        <i class="material-icons">money</i>
        <h5>Kredit kartları</h5>
        <i class="material-icons">done</i>
      </div>
      <div class="category">
        <i class="material-icons">money</i>
        <h5>Debit kartları</h5>
        <i class="material-icons">done</i>
      </div>
    </div>
    <div class="valyutaBlock">
      <ul class="valyutaList">
        <li><router-link to="/">USD</router-link>1.7 azn</li>
        <li><router-link to="/">EUR</router-link>1.8592 azn</li>
        <li><router-link to="/">RUB</router-link>0.0263 azn</li>
        <li><router-link to="/">TRY</router-link>0.3 azn</li>
      </ul>
      <div class="allValyutaLink">
        <router-link to="/">Bütün valyuta kursları</router-link>
      </div>
    </div>
    <div class="bestDeal">
      <h2>Ən yaxşı təklif</h2>
      <ul>
        <li>Yatırımlar</li>
        <li>Kreditlər</li>
        <li>İpoteka</li>
        <li>Kredit kartları</li>
        <li>Debit kartları</li>
        <li>Bütün təkliflər</li>
      </ul>
      <div class="dealBox">
        <div class="deal">
          <h6>Kapital Bank</h6>
          <p>Lorem ipsum dolor sit</p>
          <hr>
          <div class="d1">
            <div class="c1">
              <p>18%</p>
              <span>illik</span>
            </div>
            <div class="c2">
              <p>156 gün</p>
              <span>depozit müddəti</span>
            </div>
          </div>
          <router-link to="/" tag="botton" class="grayBtn ">Ətraflı</router-link>
        </div>
        <div class="deal">
          <h6>Ata Bank</h6>
          <p>Lorem ipsum dolor sit</p>
          <hr>
          <div class="d1">
            <div class="c1">
              <p>20%</p>
              <span>illik</span>
            </div>
            <div class="c2">
              <p>199 gün</p>
              <span>depozit müddəti</span>
            </div>
          </div>
          <router-link to="/" tag="botton" class="grayBtn ">Ətraflı</router-link>
        </div>
        <div class="deal">
          <h6>UniBank</h6>
          <p>Lorem ipsum dolor sit</p>
          <hr>
          <div class="d1">
            <div class="c1">
              <p>25%</p>
              <span>illik</span>
            </div>
            <div class="c2">
              <p>230 gün</p>
              <span>depozit müddəti</span>
            </div>
          </div>
          <router-link to="/" tag="botton" class="grayBtn ">Ətraflı</router-link>
        </div>
      </div>
    </div>
    <div class="partnersBlock">
      <h2>Tərəfdaşlarımız</h2>
      <ul>
        <li>Banklar</li>
        <li>Sığorta şirkətləri</li>
        <li>Daha 215 bank</li>
      </ul>
      <div class="partners">
        <div v-for="(bank, index) in banks" :key="index" class="baknLogo">
          <img :src="bank.url" alt="bank_name">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banks: [
        { url: require('../assets/img/banks/access.webp') },
        { url: require('../assets/img/banks/ag.webp') },
        { url: require('../assets/img/banks/amrah.webp') },
        { url: require('../assets/img/banks/asb.webp') },
        { url: require('../assets/img/banks/ata.webp') },
        { url: require('../assets/img/banks/aztr.webp') },
        { url: require('../assets/img/banks/bankofbaku.webp') },
        { url: require('../assets/img/banks/beynalxalq.webp') },
        { url: require('../assets/img/banks/express.webp') },
        { url: require('../assets/img/banks/kapital.jpg') },
        { url: require('../assets/img/banks/nikoil.webp') },
        { url: require('../assets/img/banks/pasha.webp') },
        { url: require('../assets/img/banks/respublika.webp') },
        { url: require('../assets/img/banks/tbt.webp') },
        { url: require('../assets/img/banks/uni.webp') } 
      ]
    }
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";
  
.homeContainer {
  display: flex;
  flex-direction: column;
}
.border {
  border: 1px solid;
}
.navbarBlock {
  height: 60px;
  padding: 0 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.navbarBlock {
  display: flex;
  flex-direction: row;
}
.language,
.navbar {
  list-style-type: none;
  margin: 0;
}
.language li,
.navbar li {
  display: inline;
  cursor: pointer;
  margin-left: 15px;
}
.language li:hover,
.navbar li:hover {
  color: $base-color;
}
.language {
  margin-left: 10px;
}
.slide1 {
  background: url('../assets/img/slide1.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 360px;
  display: flex;
  align-items: center;
}
.slide2 {
  background: url('../assets/img/slide2.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 360px;
  display: flex;
  align-items: center;
}
.slideContent {
  width: 500px;
  color: white;
  margin-left: 210px;
}
.slideContent h1 {
  font-weight: bold;
}
.allBtn {
  border: 1px solid white;
  font-size: 14px;
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  background: none;
  cursor: pointer;
}
.allBtn:hover {
  background-color: white;
  color: black;
  text-decoration: none;
}
.categoryBlock {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 40px 100px;
  border-bottom: 1px solid lightgray;
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
.category:hover i,
.category:hover h5 {
  color: $base-color;
}
.valyutaBlock {
  margin: 0 auto;
  width: 960px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 0;
}
.allValyutaLink a{
  color: $base-color;
  font-size: 16px;
}
.valyutaList {
  list-style-type: none;
  margin: 0;
}
.valyutaList li {
  display: inline;
  margin-right: 30px;
  font-size: 16px;
}
.valyutaList li a {
  margin-right: 5px;
  color: gray;
  font-weight: bold;
  transition: 0.3s;
}
.valyutaList li a:hover {
  color: $base-color;
  text-decoration: none;
}
.bestDeal {
  height: 460px;
  background: $base-bg-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.partnersBlock h2,
.bestDeal h2 {
  font-weight: bold;
  width: 960px;
  margin-bottom: 20px;
}
.partnersBlock ul,
.bestDeal ul {
  list-style-type: none;
  margin: 0;
  width: 960px;
}
.partnersBlock ul li,
.bestDeal ul li {
  display: inline;
  margin-right: 30px;
  font-size: 16px;
  padding: 10px 0;
  cursor: pointer;
}
.partnersBlock ul li:hover,
.bestDeal ul li:hover {
  color: $base-color;
}
.partnersBlock ul li:first-child,
.bestDeal ul li:first-child {
  border-bottom: 3px solid;
}
.partnersBlock ul li:last-child,
.bestDeal ul li:last-child {
  float: right;
  padding: 0;
  margin: 0;
  color: $base-color;
}
.dealBox {
  width: 960px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.deal {
  width: 32%;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 20px;
  background: #FFFFFF;
}
.deal h6 {
  font-weight: bold;
}

.grayBtn {
  border: 1px solid lightgray;
  font-size: 14px;
  color: gray;
  padding: 5px 15px;
  border-radius: 5px;
  background: none;
  cursor: pointer;
}
.grayBtn:hover {
  box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.3);
  text-decoration: none;
}
.d1 {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  margin-bottom: 20px;
}
.c1 p,
.c2 p {
  margin: 0;
  font-weight: bold;
}
.c1 p {
  font-size: 22px;
}
.c2 p {
  font-size: 18px;
}
.c1 span,
.c2 span {
  font-size: 14px;
}
.c1, .c2 {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.partnersBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
}
.partners {
  width: 960px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: center;
}

.baknLogo {
  width: 192px;
  height: 90px;
  border: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.5s;
}
.baknLogo:hover {
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.5);
}
.baknLogo img {
  width: 150px;
}
</style>