<template>
  <section class="LandingBuyArea d-flex flex-column justify-content-center">
    <b-row fluid class="h-100">
      <b-col cols="12" md="7" class="d-flex flex-column justify-content-between align-items-center align-items-md-start text-center text-md-left">
        <h3 class="LandingBuyAreaTopic mb-4">Не откладывайте<br>на завтра</h3>

        <p class="d-block d-md-none LandingBuyAreaText">Начните заниматься прямо сейчас. Всего 15{{'\xa0'}}минут в{{'\xa0'}}день, и{{'\xa0'}}совсем скоро работа за{{'\xa0'}}компьютером станет в{{'\xa0'}}разы быстрее и{{'\xa0'}}приятнее.</p>

        <router-link to="/signup_with" class="landingBuyAreaButton d-flex align-items-center mb-4">
          Попробовать
        </router-link>
      </b-col>
      <b-col cols="5" class="d-none d-md-block">
        <h3 class="d-none d-md-block LandingBuyAreaText">Начните заниматься прямо сейчас. Всего 15{{'\xa0'}}минут в{{'\xa0'}}день, и{{'\xa0'}}совсем скоро работа за{{'\xa0'}}компьютером станет в{{'\xa0'}}разы быстрее и{{'\xa0'}}приятнее.</h3>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: "LandingBuyArea"
}
</script>

<style scoped>
.LandingBuyArea {
  background-image: url("../../img/Landing/bgIllustrations.svg");
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 24px;
  font-family: 'GT Walsheim Pro',sans-serif;
  padding: 66px;
  margin: 120px 0 90px 0;
}

.LandingBuyAreaTopic {
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 53px;
  color: #FFFFFF;
}

.LandingBuyAreaText {
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 26px;
  color: #FFFFFF;
}

.landingBuyAreaButton {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 12px 24px;
  text-decoration: none;
  color: white;
  transition: all .15s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 501;
  line-height: 28px;
}

.landingBuyAreaButton:focus {
  outline: none;
  box-shadow: 0 0 0 4px white;
}

.landingBuyAreaButton:hover, .landingBuyAreaButton:active {
  background: rgba(255, 255, 255, 0.5);
}

@media (max-width: 768px) {
  .LandingBuyArea {
    padding: 40px 30px;
    margin: 40px 0;
  }

  .LandingBuyAreaTopic {
    font-size: 28px;
    line-height: 32px;
  }

  .LandingBuyAreaText {
    font-size: 21px;
    line-height: 26px;
  }
}
</style>
