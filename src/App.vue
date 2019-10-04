<template>
  <div id="app" :scroll="onScrole" >
    <div class="navbarBlock" :class="{shadow : scrolling}" >
      <img src="@/assets/img/logo_shadow.png" alt="vaxtimaz" width="200px">
      <div class="openCloseNavbar">
        <i class="material-icons openNavbar" @click="mobileNavbar" v-if="navbar === false">sort</i>
        <i class="material-icons openNavbar" @click="mobileNavbar" v-else>clear</i>
      </div>
      <div class="navbarContent">
        <ul class="navbar">
          <router-link to="/" tag="li">{{$t('hamburgerMenu.home')}}</router-link>
          <router-link to="/loans" tag="li">{{$t('hamburgerMenu.loans')}}</router-link>
          <router-link to="/" tag="li">{{$t('hamburgerMenu.mortgage')}}</router-link>
          <router-link to="/" tag="li">{{$t('hamburgerMenu.deposit')}}</router-link>
          <router-link to="/" tag="li">{{$t('hamburgerMenu.insurance')}}</router-link>
          <router-link to="/" tag="li">{{$t('hamburgerMenu.more')}}</router-link>
        </ul>
        <ul class="language">
          <li @click="languaces('az')" :class="{ activeLanguages : $i18n.locale === 'az'}">AZ</li>
          <li @click="languaces('ru')" :class="{ activeLanguages : $i18n.locale === 'ru'}">RU</li>
          <li @click="languaces('en')" :class="{ activeLanguages : $i18n.locale === 'en'}">EN</li>
        </ul>
      </div>
    </div>
    <div class="mobileNavbarBlock" :class="{showMobileNavbar : navbar}">
      <ul class="languageMobile">
        <li @click="languaces('az')" :class="{ activeLanguages : $i18n.locale === 'az'}">AZ</li>
        <li @click="languaces('ru')" :class="{ activeLanguages : $i18n.locale === 'ru'}">RU</li>
        <li @click="languaces('en')" :class="{ activeLanguages : $i18n.locale === 'en'}">EN</li>
      </ul>
      <hr>
      <ul class="navbarMobile">
          <router-link to="/" tag="li">{{$t('hamburgerMenu.home')}}</router-link>
          <router-link to="/loans" tag="li">{{$t('hamburgerMenu.loans')}}</router-link>
          <router-link to="/" tag="li">{{$t('hamburgerMenu.mortgage')}}</router-link>
          <router-link to="/" tag="li">{{$t('hamburgerMenu.deposit')}}</router-link>
          <router-link to="/" tag="li">{{$t('hamburgerMenu.insurance')}}</router-link>
          <router-link to="/" tag="li">{{$t('hamburgerMenu.more')}}</router-link>
        </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolling: false,
      navbar: false
    }
  },
  methods: {
    languaces(locale) {
      this.$i18n.locale = locale
    },
    onScrole(evt){
      if(window.scrollY > 60){
        this.scrolling = true;
        this.navbar = false
      } else {
        this.scrolling=false;
      }
    },
    mobileNavbar(){
      this.navbar = !this.navbar;
    }
  },
  created () {
    window.addEventListener('scroll', this.onScrole);
  }
}
</script>

<style lang="scss">
@import "src/assets/css/_utils.scss";

body {
  font-family: 'Verdana';
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
.navbarMobile li {
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
  }
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
</style>
