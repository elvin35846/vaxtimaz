<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="slide1">
            <div class="slideContent">
              <h1>{{$t('carousel.mortgage_loans')}}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore totam corporis nulla eveniet iste odit esse cupiditate.</p>
              <router-link to="/mortgage" class="allBtn">{{$t('btn.more')}}</router-link>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="slide2">
            <div class="slideContent">
              <h1>{{$t('carousel.money_loans')}}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempore totam corporis nulla eveniet iste odit esse cupiditate.</p>
              <router-link tag="button" to="/loans" class="allBtn">{{$t('btn.more')}}</router-link>
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
</template>

<style scoped lang="scss">
@import "src/assets/css/_utils.scss";

.slide1 {
  background: url('../../assets/img/slide1.jpg');
}
.slide2 {
  background: url('../../assets/img/slide2.jpg');
}
.slide1,
.slide2 {
  background-repeat: no-repeat;
  background-size: auto;
  height: 360px;
  display: flex;
  align-items: center;
  @include media(960px) {
    background-size: cover;
  }
}
.slideContent {
  width: 70%;
  color: white;
  margin-left: 0px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include media(960px){
    width: 500px;
    margin-left: 210px;
    align-items: flex-start;
  }
}
.slideContent h1 {
  font-weight: bold;
  font-size: 35px;
  text-align: center;
  @include media(960px){
    font-size: 50px;
    text-align: left;
  }
}
.slideContent p {
  text-align: center;
  @include media(960px){
    text-align: left;
  }
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
</style>