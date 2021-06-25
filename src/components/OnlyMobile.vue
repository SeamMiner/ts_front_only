<template>
  <div class="onlyMobile d-sm-flex d-md-none">
    <b-container fluid class="p-0">
      <div class="closeButton" @click="$emit('close-modal')" tabindex="1" v-if="closable">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.0203 5.97966C18.4825 6.44181 18.4825 7.19111 18.0203 7.65326L13.6736 12L18.0203 16.3467C18.4825 16.8089 18.4825 17.5582 18.0203 18.0203C17.5582 18.4825 16.8089 18.4825 16.3467 18.0203L12 13.6736L7.65326 18.0203C7.19111 18.4825 6.44181 18.4825 5.97966 18.0203C5.51751 17.5582 5.51751 16.8089 5.97966 16.3467L10.3264 12L5.97966 7.65327C5.51751 7.19112 5.51751 6.44182 5.97966 5.97967C6.44181 5.51751 7.19111 5.51751 7.65326 5.97967L12 10.3264L16.3467 5.97966C16.8089 5.5175 17.5582 5.51751 18.0203 5.97966Z"/></svg>
      </div>
      <!-- <img class="keyboardImageMobile" src="../../img/Simulator/Bitmap-m.png" alt="Piece of keyboard"> -->
      <!-- <img class="keyboardImageI" src="../../img/Simulator/i.png" alt="Key image"> -->
      <!-- <img class="keyboardImage4" src="../../img/Simulator/4.png" alt="Key image"> -->
      <!-- <img class="keyboardImageE" src="../../img/Simulator/ee.png" alt="Key image"> -->
      <b-col id="titleMobile" cols="12" class="p-0">
        <p class="titleSettings pauseTitle">
          <!-- <img src="../../img/Simulator/desktop.png" alt="Computer icon"> -->
          Лучше с{{'\xa0'}}компьютера
        </p>
      </b-col>
      <b-col cols="12" class="d-flex justify-content-between align-items-center pauseSettings mobileSettings">
        <span>
          К{{'\xa0'}}сожалению, с{{'\xa0'}}телефона скоропечатание не{{'\xa0'}}освоить. Отправь себе ссылку на{{'\xa0'}}Email и{{'\xa0'}}заходи с{{'\xa0'}}компьютера в{{'\xa0'}}любое удобное время.
        </span>
      </b-col>
      <b-col cols="12" class="p-0">
        <PrimaryButton
            @click.native="sendEmail"
            :data-variant="clicked ? 'secondary' : ''"
        >
          {{ clicked ? 'Ссылка отправлена' : 'Получить ссылку' }}
        </PrimaryButton>
      </b-col>
    </b-container>
  </div>
</template>

<script>
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: "OnlyMobile",
  components: {
    PrimaryButton
  },
  props: {
    closable: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      clicked: false
    }
  },
}
</script>

<style scoped>
.onlyMobile {
  position: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  top: 0;
  z-index: 1000;
  background-color: #FFFFFF;
}

.mobileSettings {
  border-bottom: 1px solid #ededef;
  font-size: 17px;
  line-height: 1.4;
  padding: 0 0 15px 0;
  margin-bottom: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
}

.pauseTitle {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-top: 0;
  font-weight: 500;
  column-gap: 24px;
  font-size: 25px;
  line-height: 25px;
  font-family: "Gotham Pro", sans-serif;
}

.pauseTitle img {
  margin-right: 0!important;
  height: 60px;
}

.keyboardImageMobile {
  position: fixed;
  top: -15%;
  right: 0;
}

.keyboardImage4 {
  position: fixed;
  top: 10%;
}

.keyboardImageI {
  position: fixed;
  height: 40px;
  width: 40px;
  top: 2%;
  left: 35%;
}

.keyboardImageE {
  position: fixed;
  height: 80px;
  width: 80px;
  bottom: 4%;
  right: 2%;
}
</style>
