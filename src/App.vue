<template>
  <div id="app" :scroll="onScrole" >
    <div class="navbarBlock" :class="{shadow : scrolling}" >
      <router-link to="/">
      <img src="@/assets/img/logo_shadow.png" alt="vaxtimaz" width="200px">
      </router-link>
      <div class="openCloseNavbar">
        <i class="material-icons openNavbar" @click="mobileNavbar" v-if="navbar === false">sort</i>
        <i class="material-icons openNavbar" @click="mobileNavbar" v-else>clear</i>
      </div>
      <div class="navbarContent">
        <ul class="navbar">
          <router-link to="/" tag="li" class="navbarListe" :class="{ activeLanguages : $route.path === '/'}">{{$t('hamburgerMenu.home')}}</router-link>
          <router-link to="/loans" tag="li" class="navbarListe" :class="{ activeLanguages : $route.path === '/loans'}">{{$t('hamburgerMenu.loans')}}</router-link>
          <router-link to="/mortgage" tag="li" class="navbarListe" :class="{ activeLanguages : $route.path === '/mortgage'}">{{$t('hamburgerMenu.mortgage')}}</router-link>
          <router-link to="/deposits" tag="li" class="navbarListe" :class="{ activeLanguages : $route.path === '/deposits'}">{{$t('hamburgerMenu.deposit')}}</router-link>
          <li class="navbarListe" @mouseover="upDownStatus=false" @mouseleave="upDownStatus=true">
            {{$t('hamburgerMenu.insurance')}}
            <img src="https://ik.imagekit.io/pr/baseline_keyboard_arrow_down_black_18dp_4PzpEsw5d.png" alt="down" class="downUpIcon" v-if="upDownStatus">
             <img src="https://ik.imagekit.io/pr/baseline_keyboard_arrow_up_blue_18dp_rxZnRjZYZ.png" alt="down" class="downUpIcon" v-else>
            <ul class="innermenu">
              <router-link class="innerlist" to="/kasko" tag="li" :class="{ activeLanguages : $route.path === '/kasko'}">Kasko</router-link>
              <li><a href="https://gpp.az/GPEWebPortal/Infosite/RedirectFromSc/982000/aHR0cHM6Ly9ncHAuYXo=" target="_blank">İcbari</a></li>
              <li class="innerlist">Səyahət</li>
            </ul>
          </li>
          <router-link to="/more" tag="li" class="navbarListe" :class="{ activeLanguages : $route.path === '/more'}">{{$t('hamburgerMenu.more')}}</router-link>
        </ul>
        <ul class="language">
          <li @click="languaces('az')" :class="{ activeLanguages : $i18n.locale === 'az'}">AZ</li>
          <li @click="languaces('ru')" :class="{ activeLanguages : $i18n.locale === 'ru'}">RU</li>
        </ul>
      </div>
    </div>
    <div class="mobileNavbarBlock" :class="{showMobileNavbar : navbar}">
      <ul class="languageMobile">
        <li @click="languaces('az')" :class="{ activeLanguages : $i18n.locale === 'az'}">AZ</li>
        <li @click="languaces('ru')" :class="{ activeLanguages : $i18n.locale === 'ru'}">RU</li>
      </ul>
      <hr>
      <ul class="navbarMobile">
          <router-link to="/" class="navbarMobileList" tag="li" :class="{ activeLanguages : $route.path === '/'}">{{$t('hamburgerMenu.home')}}</router-link>
          <router-link to="/loans" tag="li" class="navbarMobileList" :class="{ activeLanguages : $route.path === '/loans'}">{{$t('hamburgerMenu.loans')}}</router-link>
          <router-link to="/mortgage" tag="li" class="navbarMobileList" :class="{ activeLanguages : $route.path === '/mortgage'}">{{$t('hamburgerMenu.mortgage')}}</router-link>
          <router-link to="/deposits" tag="li" class="navbarMobileList" :class="{ activeLanguages : $route.path === '/deposits'}">{{$t('hamburgerMenu.deposit')}}</router-link>
          <li class="navbarMobileList" :class="{ activeLanguages: !upDownStatus}" >
            <div @click="upDownStatus = !upDownStatus">
            {{$t('hamburgerMenu.insurance')}}
            <img src="https://ik.imagekit.io/pr/baseline_keyboard_arrow_down_black_18dp_4PzpEsw5d.png" alt="down" class="downUpIcon" v-if="upDownStatus">
             <img src="https://ik.imagekit.io/pr/baseline_keyboard_arrow_up_blue_18dp_rxZnRjZYZ.png" alt="down" class="downUpIcon" v-else>
             </div>
            <ul class="innermenuMobile" :class="{innermenuMobileShow: !upDownStatus}">
              <router-link class="innerlistMobile" to="/kasko" tag="li" :class="{ activeLanguages : $route.path === '/kasko'}" >Kasko</router-link>
              <li><a href="https://gpp.az/GPEWebPortal/Infosite/RedirectFromSc/982000/aHR0cHM6Ly9ncHAuYXo=" target="_blank">İcbari</a></li>
              <li class="innerlistMobile">Səyahət</li>
            </ul>
          </li>
          <router-link to="/more" class="navbarMobileList" :class="{ activeLanguages : $route.path === '/more'}" tag="li">{{$t('hamburgerMenu.more')}}</router-link>
        </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scrolling: false,
      navbar: false,
      upDownStatus: true
    }
  },
  methods: {
    languaces (locale) {
      this.$i18n.locale = locale
    },
    onScrole (evt) {
      if (window.scrollY > 60) {
        this.scrolling = true
        this.navbar = false
        this.upDownStatus = true
      } else {
        this.scrolling = false
      }
    },
    mobileNavbar () {
      this.navbar = !this.navbar
      this.upDownStatus = true
    }
  },
  created () {
    window.addEventListener('scroll', this.onScrole)
  }
}
</script>

<style >
body {
  font-family: 'Verdana';
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
</style>
<style lang="scss" scoped>
@import "src/assets/css/_utils.scss";

.innermenuMobile {
  background: #fff;
  margin-top: 5px;
  display: none;
  color: black;
}
.innerlistMobile {
  padding: 8px 0;
  border-top: 1px solid lightgray;
}
.innermenuMobileShow {
  display: block;
}
.downUpIcon {
  width: 10px;
}
.innermenu {
  list-style: none;
  position: fixed;
  right: 200px;
  top: 60px;
  background: #fff;
  display: none;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.4);
  color: black;
}
.innerlist{
  margin: 0;
  padding: 2px 15px;
}
.innerlist:hover {
  color: $base-color;
}
.navbarListe:hover .innermenu{
  display: flex;
}

.downUpIconHide {
  display: inline-block;
}
.downUpIconShow {
  display: inline-block;
}

.activeLanguages {
  color: $base-color;
}
.openCloseNavbar {
  display: flex;
  justify-content: center;
  align-items: center;
  @include media(960px){
    display: none;
  }
}
.openNavbar {
  cursor: pointer;
  font-size: 40px;
  color: $base-color;
  transition: 0.3s;
}
.mobileNavbarBlock {
  width: 100%;
  background: $base-bg-color;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
  position: fixed;
  top: -350px;
  z-index: 90;
  transition: 0.5s;
  padding-top: 80px;
  @include media(960px){
    display: none;
  }
}
.showMobileNavbar {
  top: 0;
}
.languageMobile {
  width: 150px;
  list-style-type: none;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.languageMobile li {
  display: inline-block;
  cursor: pointer;
}
.navbarMobile {
  list-style-type: none;
  margin: 0 auto;
  text-align: center;
}
.navbarMobileList {
  padding: 8px 0;
  border-bottom: 1px solid lightgray;
  cursor: pointer;
}
hr {
  margin: 10px;
}

.navbarBlock {
  position: fixed;
  z-index: 100;
  width: 100%;
  background: #fff;
  height: 60px;
  padding: 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @include media(960px){
    padding: 0 45px;
  }
}
.shadow {
box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.5);
}
.navbarContent {
  display: none;
  @include media(960px){
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 60px;
  }
}
.language,
.navbar {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}
.language li,
.navbarListe {
  cursor: pointer;
  margin-left: 20px;
  height: 60px;
  padding-top: 20px;
}
.language li:hover,
.navbarListe:hover {
  color: $base-color;
}
.language {
  margin-left: 10px;
}
</style>
