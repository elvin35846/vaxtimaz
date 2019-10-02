<template>
  <div class="bestDeal">
      <h2>{{$t('category.best_offer')}}</h2>
      <div class="linkListBox">
        <ul class="linkList">
          <li class="link" v-for="(item, i) in dealCategory" :key="i" :class="{ activeDeal : activeLink === item.link}" @click="activeLink = item.link">{{item.link}}</li>
        </ul>
        <router-link to="/" class="all_offers">
        {{$t('category.all_offers')}}
        </router-link>
      </div>
      <div class="dealBox">
        <div class="deal" v-for="(cont, index) in dealContent" :key="index">
          <h6>{{cont.title}}</h6>
          <p>{{cont.content}}</p>
          <hr>
          <div class="d1">
            <div class="c1">
              <p>{{cont.percent}}</p>
              <span>{{cont.text1}}</span>
            </div>
            <div class="c2">
              <p>{{cont.period}}</p>
              <span>{{cont.text2}}</span>
            </div>
          </div>
          <router-link :to="cont.link" tag="botton" class="grayBtn ">{{$t('btn.more')}}</router-link>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeLink: this.$t('category.loans')
    }
  },
  computed: {
      dealCategory() {
        return [
        {link: this.$t('category.loans')},
        {link: this.$t('category.mortgage')},
        {link: this.$t('category.credit_cards')},
        {link: this.$t('category.debit_cards')}
        ]
      },
      dealContent() {
        return [
        {
          title: 'Kapital Bank',
          content: 'Lorem ipsum dolor sit',
          percent: '18%',
          text1: this.$t('category.yearly'),
          period: '156 '+this.$t('category.day'),
          text2: this.$t('category.deposit_period'),
          link: '/'
        },
        {
          title: 'Ata Bank',
          content: 'Lorem ipsum dolor sit',
          percent: '22%',
          text1: this.$t('category.yearly'),
          period: '198 '+this.$t('category.day'),
          text2: this.$t('category.deposit_period'),
          link: '/'
        },
        {
          title: 'UniBank',
          content: 'Lorem ipsum dolor sit',
          percent: '17%',
          text1: this.$t('category.yearly'),
          period: '105 '+this.$t('category.day'),
          text2: this.$t('category.deposit_period'),
          link: '/'
        }
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.bestDeal {
  padding: 50px 0;
  background: $base-bg-color;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  @include media(960px) {
    text-align: left;
  }
}
.bestDeal h2 {
  font-weight: bold;
  width: 320px;
  margin-bottom: 20px;
  @include media(768px) {
    width: 640px;
  }
  @include media(960px) {
    width: 960px;
  }
}
.linkListBox {
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @include media(960px) {
    width: 960px;
    flex-direction: row;
    justify-content: space-between;
  }
}
.linkList {
  list-style-type: none;
  @include media(960px) {
    margin: 0;
  }
}
.link {
  display: inline-block;
  margin: 0 15px 10px 15px;
  font-size: 16px;
  padding: 10px 0;
  cursor: pointer;
  @include media(960px) {
    margin: 0 30px 0 0;
  }
}
.link:hover {
  color: $base-color;
}
.activeDeal {
  border-bottom: 3px solid;
}
.activeDeal:hover {
  color: black;
}
.all_offers {
  color: $base-color;
}
.dealBox {
  width: 320px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  @include media(768px){
    width: 768px;
    flex-direction: row; 
  }
  @include media(960px){
    width: 960px;
    flex-direction: row;
    flex-wrap: nowrap;
  }
}
.deal {
  width: 80%;
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 20px;
  background: #FFFFFF;
  margin: 10px auto;
  @include media(768px){
    width: 40%;
    margin: 10px;
  }
  @include media(960px){
    width: 32%;
    margin: 10px;
  }
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
</style>
