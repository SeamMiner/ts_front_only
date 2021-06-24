<template>
  <section class="whatIsTouchTyping">
    <b-row class="w-100 flex-column-reverse flex-sm-row headingBlock align-content-between">
        <div>
          <h1 class="gradientHeading">Что такое<br>слепая печать?</h1>
        </div>
        <div class="d-flex mb-3 mb-md-0 justify-content-sm-end align-items-sm-end">
          <img class="fingerPrint user-select-none" v-scroll src="../../img/WhatIsTouchTyping/fingerprint.svg" alt="Отпечаток пальца">
        </div>
    </b-row>

    <b-row>
      <b-col cols="12" md="7" lg="6">
        <p class="informationParagraph" v-scroll>Это набор текста десятью пальцами не{{'\xa0'}}глядя на{{'\xa0'}}клавиатуру. За{{'\xa0'}}счёт мышечной памяти тексты вводятся быстро и{{'\xa0'}}точно, что позволяет сконцентрироваться на{{'\xa0'}}смысле набираемого текста и{{'\xa0'}}ускорить работу.</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12">
        <router-link to="/signup_with" class="landingLink landingText" v-scroll>
          <span>Научиться слепой печати{{'\xa0'}}</span>
          <svg class="landingCTAsvg" width="18" height="19" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M17.6562 10.3301C18.1146 9.87164 18.1146 9.12836 17.6562 8.66992L9.83008 0.843831C9.37164 0.385389 8.62836 0.385389 8.16992 0.843831C7.71148 1.30227 7.71148 2.04555 8.16992 2.50399L13.992 8.32609L1.17391 8.32609C0.525579 8.32609 -3.65063e-07 8.85166 -3.93402e-07 9.5C-4.21742e-07 10.1483 0.525579 10.6739 1.17391 10.6739L13.992 10.6739L8.16992 16.496C7.71148 16.9544 7.71148 17.6977 8.16992 18.1562C8.62836 18.6146 9.37164 18.6146 9.83008 18.1562L17.6562 10.3301Z"/></svg>
        </router-link>
      </b-col>
    </b-row>

<!--    <b-row class="flex-column tutorialVideoBlock align-items-center" no-gutters>-->
<!--      <b-col cols="12" class="tutorialVideo">-->
<!--        <b-embed-->
<!--          type="iframe"-->
<!--          aspect="16by9"-->
<!--          src="https://player.vimeo.com/video/472311033?title=0&byline=0&portrait=0"-->
<!--          allow="autoplay"-->
<!--        ></b-embed>-->
<!--      </b-col>-->
<!--      <b-col cols="12" class="d-flex justify-content-center">-->
<!--        <small class="videoDescriptionText" v-scroll>Работа за компьютером, когда владеешь слепой печатью</small>-->
<!--      </b-col>-->
<!--    </b-row>-->
  </section>
</template>

<script>
export default {
  name: "WhatIsTouchTyping"
}
</script>

<style scoped>
.whatIsTouchTyping {
  padding-top: 120px;
}

.headingBlock {
  display: flex;
  margin: 0 0 50px 0;
}

.headingBlock div:first-child {
  flex: 0 0 90%;
}

.headingBlock div:last-child {
  flex: 0 0 10%;
}

.gradientHeading {
  font-family: GT Walsheim Pro, sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 110px;
  line-height: 80px;
  margin-bottom: 0;
  background: linear-gradient(94.64deg, #408BE1 8.06%, #CE44FF 76.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
}

.fingerPrint {
  width: 51px;
  height: 58px;
}

.informationParagraph {
  font-family: GT Walsheim Pro, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 50px;
}

.landingLink {
  color: #0082FF;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  transition: box-shadow .15s ease-in-out;
}

.landingLink:focus {
  outline: none;
  box-shadow: 0 0 0 4px #87ABF9;
}

.landingLink:hover {
  color: #3DA0FF;
}

.landingLink:active {
  color: #0073E2;
}

.landingText {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
}

.tutorialVideoBlock {
  margin-top: 130px;
}

.tutorialVideo {
  margin-bottom: 40px;
}

.tutorialVideo iframe {
  cursor: pointer;
  width: 100%;
  border-radius: 12px;
  border: none;
}

.tutorialVideo:focus iframe {
  outline: none;
  box-shadow: 0 0 0 4px #87ABF9;
}

.videoDescriptionText {
  font-family: GT Walsheim Pro, sans-serif;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  font-size: 24px;
  line-height: 32px;
  color: rgba(51, 51, 51, .4);
}

@media (max-width: 992px) {
  .gradientHeading {
    font-size: 80px;
    line-height: 72px;
  }
}

@media (max-width: 768px) {
  .whatIsTouchTyping {
    padding-top: 80px;
  }

  .headingBlock, .informationParagraph {
    margin-bottom: 40px;
  }

  .gradientHeading {
    font-size: 50px;
    line-height: 45px;
  }

  .fingerPrint {
    width: 37px;
    height: 42px;
  }

  .informationParagraph {
    font-size: 18px;
    line-height: 26px;
  }

  .tutorialVideoBlock {
    margin: 60px 0;
  }

  .tutorialVideo {
    margin-bottom: 20px;
  }

  .videoDescriptionText {
    font-size: 20px;
  }
}

@media (max-width: 576px) {
  .gradientHeading {
    font-size: 40px;
    line-height: 36px;
  }

  .fingerPrint {
    width: 30px;
    height: 34px;
  }

  .landingLink {
    font-size: 20px;
  }

  .landingCTAsvg {
    width: 14px;
    height: 15px;
  }
}
</style>
