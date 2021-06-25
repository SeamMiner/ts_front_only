<template>
  <section class="whyTypingSchoolBlock">
    <b-row class="w-100 flex-column-reverse flex-sm-row headingBlock align-content-between">
      <div>
        <h1 class="gradientHeading">Почему<br>Typing School?</h1>
      </div>
      <div class="d-flex mb-3 mt-3 mt-md-0 mb-sm-0 justify-content-sm-end align-items-sm-end">
        <!-- <img class="keyboardImg user-select-none " v-scroll src="../../img/WhyTypingSchool/keyboard.svg" alt="Логотип курса по слепой печати Typing School"> -->
      </div>
    </b-row>

    <b-row>
      <b-col cols="12" md="10" lg="9">
        <p class="informationParagraph" v-scroll>В{{'\xa0'}}классическом курсе слепой печати приходится набирать искусственные последовательности вроде &laquo;ппрр&raquo;. Но{{'\xa0'}}гораздо эффективнее пальцы запоминают сочетания, встречающиеся в{{'\xa0'}}реальных словах, например: &laquo;про&raquo;, &laquo;пре&raquo;. Искусственные последовательности полезны только на{{'\xa0'}}этапе знакомства с{{'\xa0'}}новой клавишей, поэтому в{{'\xa0'}}Typing{{'\xa0'}}School они сведены к{{'\xa0'}}минимуму, большая{{'\xa0'}}же часть уроков в{{'\xa0'}}клавиатурном тренажёре построена из{{'\xa0'}}наиболее встречаемых сочетаний и{{'\xa0'}}реальных слов.</p>
      </b-col>
    </b-row>

    <b-row class="flex-column tutorialVideoBlock align-items-center" no-gutters>
      <b-col cols="12" class="tutorialVideo">
        <b-embed
          type="iframe"
          aspect="16by9"
          src="https://player.vimeo.com/video/479517063?title=0&byline=0&portrait=0&autoplay=1&loop=1&muted=1&nocontrols=1"
          allow="autoplay"
          frameborder="0"
        ></b-embed>
      </b-col>
      <b-col cols="12" class="d-flex justify-content-center">
        <small class="videoDescriptionText" v-scroll>Прохождение урока в{{'\xa0'}}онлайн тренажёре слепой печати</small>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" md="6" class="d-flex flex-column pr-80">
        <img class="informationImage user-select-none" src="../../img/WhyTypingSchool/education.svg" alt="Обучение слепой печати - картинка">
        <h3 class="informationTitle">Проработка опечаток</h3>
        <p class="informationParagraph">Пока вы{{'\xa0'}}занимаетесь в{{'\xa0'}}тренажёре слепой печати, наш алгоритм анализирует каждое нажатие и{{'\xa0'}}выявляет самые проблемные клавиши, чтобы вы{{'\xa0'}}могли отдельно над ними поработать. Благодаря{{'\xa0'}}такой системе, вы{{'\xa0'}}быстрее закрепите навык скоропечатания и{{'\xa0'}}увеличите точность и{{'\xa0'}}скорость ввода.</p>
      </b-col>
      <b-col cols="12" md="6" class="d-flex flex-column pl-80">
        <img class="informationImage user-select-none" src="../../img/WhyTypingSchool/joystick.svg" alt="Игровой формат обучения - картинка">
        <h3 class="informationTitle">Игровой формат</h3>
        <p class="informationParagraph mb-0 mb-md-auto">В{{'\xa0'}}Typing School монотонный ввод текста превращается в{{'\xa0'}}увлекательную игру: можно открывать различные достижения, получать бонусы за{{'\xa0'}}высокую точность ввода и{{'\xa0'}}выполнение цели дня, пробиваться наверх в{{'\xa0'}}общем рейтинге пользователей.</p>
      </b-col>
    </b-row>

    <b-row class="landingDivider"></b-row>

    <b-row>
      <b-col cols="12" class="d-flex justify-content-center">
        <PrimaryButton
            data-size="sm"
            @click.native="$router.push('/registration_options')"
            class="mt-5"
        >
          Попробовать Typing School
          <svg class="ml-1 mb-1" width="12" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M2.21292 12.5C2.01143 12.4996 1.81351 12.4471 1.63862 12.3477C1.24482 12.126 1 11.6955 1 11.2283V1.77179C1 1.30321 1.24482 0.874077 1.63862 0.652339C1.81767 0.550091 2.02108 0.497509 2.22757 0.500091C2.43407 0.502672 2.63608 0.560321 2.81249 0.667013L10.9462 5.50482C11.1157 5.61043 11.2555 5.7571 11.3523 5.93105C11.4492 6.10501 11.5 6.30057 11.5 6.49938C11.5 6.69819 11.4492 6.89374 11.3523 7.0677C11.2555 7.24166 11.1157 7.38832 10.9462 7.49394L2.81117 12.333C2.63065 12.4415 2.42387 12.4992 2.21292 12.5Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="12" height="12" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
        </PrimaryButton>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: "WhyTypingSchool",
  components: {
    PrimaryButton
  }
}
</script>

<style scoped>
.whyTypingSchoolBlock {
  margin-top: 120px;
  padding-top: 80px;
  padding-bottom: 80px;
}

.headingBlock {
  display: flex;
  margin: 0 0 50px 0;
}

.headingBlock div:first-child {
  flex: 0 0 85%;
}

.headingBlock div:last-child {
  flex: 0 0 15%;
}

.gradientHeading {
  font-family: GT Walsheim Pro, sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 110px;
  line-height: 1.1;
  margin-bottom: 0;
  background: linear-gradient(94.64deg, #0077FF 8.06%, #FC52FF 76.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
}

.keyboardImg {
  width: 78px;
  height: 39px;
  margin-bottom: 23px;
}

.informationParagraph {
  font-family: GT Walsheim Pro, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 60px;
}

.tutorialVideoBlock {
  margin-bottom: 90px;
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

.informationImage {
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
}

.informationTitle {
  margin-bottom: 32px;
  font-family: "GT Walsheim Pro", sans-serif;
  font-weight: 700;
}

.landingDivider {
  margin-top: 70px;
  border-top: 1px solid #D9D9D9;
}

.pl-80 {
  padding-left: 80px;
}

.pr-80 {
  padding-right: 80px;
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
    line-height: 1.1;
  }

  .pl-80 {
    padding-left: 60px;
  }

  .pr-80 {
    padding-right: 60px;
  }
}

@media (max-width: 768px) {
  .whyTypingSchoolBlock {
    margin-top: 40px;
    padding-top: 80px;
    padding-bottom: 40px;
  }

  .headingBlock, .informationParagraph {
    margin-bottom: 40px;
  }

  .gradientHeading {
    font-size: 50px;
  }

  .tutorialVideoBlock {
    margin-bottom: 50px;
  }

  .informationTitle {
    font-size: 24px;
    line-height: 27px;
  }

  .informationParagraph {
    font-size: 18px;
    line-height: 26px;
  }

  .landingDivider {
    margin-top: 50px;
  }

  .primaryButton[data-size="sm"] {
    margin-top: 30px!important;
  }

  .videoDescriptionText {
    font-size: 20px;
  }

  .pl-80 {
    padding-left: 15px;
  }

  .pr-80 {
    padding-right: 15px;
  }
}

@media (max-width: 576px) {
  .gradientHeading {
    font-size: 40px;
    line-height: 1.1;
  }

  .keyboardImg {
    width: 48px;
    height: 24px;
  }
}
</style>
