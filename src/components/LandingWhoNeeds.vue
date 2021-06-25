<template>
  <section class="d-flex flex-column landingWhoNeeds">

    <b-col cols="auto" class="landingSecondTopic p-0"><span>Кому нужна<br>слепая печать?</span></b-col>

    <b-row class="personLineBlock" v-scroll no-gutters>
      <b-col cols="12" md="6" class="landingText">В{{'\xa0'}}наш цифровой век скоропечатание нужно практически всем, но{{'\xa0'}}особенно пригодится:</b-col>
      <b-col cols="12" md="6" class="mt-5 mt-md-0  d-flex justify-content-center justify-content-md-start personImage">
        <a href="#freelancer" @click.prevent="scrollIntoView('freelancer')">
          <img src="../../img/Landing/freelancer.svg" class="smallAnimoji" alt="Слепая печать нужна фрилансерам картинка">
        </a>
        <a href="#officeWorker" @click.prevent="scrollIntoView('officeWorker')">
          <img src="../../img/Landing/officeWorker.svg" class="smallAnimoji" alt="Слепая печать нужна офисным работникам картинка">
        </a>
        <a href="#editor" @click.prevent="scrollIntoView('editor')">
          <img src="../../img/Landing/editor.svg" class="smallAnimoji" alt="Слепая печать нужна редакторам картинка">
        </a>
        <a href="#student" @click.prevent="scrollIntoView('student')">
          <img src="../../img/Landing/student.svg" class="smallAnimoji" alt="Слепая печать нужна студентам картинка">
        </a>
      </b-col>
    </b-row>

    <b-row
      ref="content"
    >

      <b-col cols="12" md="6" class="p-2 " v-scroll id="freelancer">
        <div class="personBlock flex-column">
          <img src="../../img/Landing/freelancer.svg" class="personBigImage" height="220" width="220" alt="Слепая печать нужна фрилансерам картинка">

          <span class="mt-4 mb-5 personTopic">Фрилансерам</span>
          <p class="landingText">Быстрое общение в{{'\xa0'}}чатах, продуктивная и{{'\xa0'}}комфортная работа, больше свободного времени.</p>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="p-2" v-scroll id="officeWorker">
        <div class="personBlock flex-column">
          <img src="../../img/Landing/officeWorker.svg" class="personBigImage" height="220" width="220" alt="Слепая печать нужна офисным работникам картинка">

          <span class="mt-4 mb-5 personTopic">Офисным работникам</span>
          <p class="landingText">Продвинутое редактирование документов и{{'\xa0'}}работа с{{'\xa0'}}офисными программами, быстрая техническая поддержка.</p>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="p-2" v-scroll id="editor">
        <div class="personBlock flex-column">
          <img src="../../img/Landing/editor.svg" class="personBigImage" height="220" width="220" alt="Слепая печать нужна редакторам картинка">

          <span class="mt-4 mb-5 personTopic">Редакторам</span>
          <p class="landingText">Легче генерировать креатив, не{{'\xa0'}}упускать важные мысли{{'\xa0'}}{{'\u2014'}} пальцы на{{'\xa0'}}автомате быстро записывают всё, что{{'\xa0'}}нужно.</p>
        </div>
      </b-col>

      <b-col cols="12" md="6" class="p-2" v-scroll id="student">
        <div class="personBlock flex-column">
          <img src="../../img/Landing/student.svg" class="personBigImage" height="220" width="220" alt="Слепая печать нужна студентам картинка">

          <span class="mt-4 mb-5 personTopic">Студентам</span>
          <p class="landingText">Быстрое написание работ, скоростное конспектирование{{'\xa0'}}{{'\u2014'}} в{{'\xa0'}}2{{'\xa0'}}раза быстрее, чем{{'\xa0'}}запись от{{'\xa0'}}руки.</p>
          <b-col cols="12" class="px-0 py-2">
            <router-link to="/signup_with" class="landingLink landingText" id="signUpForStudent">
              <span @click="signUpForStudent">Получить студенческую <br class="d-md-none">скидку{{'\xa0'}}<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#studentLink)"><path d="M10.3318 2.68582V9.10929C10.3318 9.56996 10.7053 9.9434 11.1659 9.9434C11.6266 9.9434 12.0001 9.56996 12.0001 9.10929V0.972884C12.0001 0.435575 11.5645 -5.64632e-09 11.0272 0L3.17552 8.25091e-08C2.70437 8.74602e-08 2.32242 0.381946 2.32242 0.8531C2.32242 1.32425 2.70437 1.7062 3.17552 1.7062H8.83994L0.598706 10.135C0.265926 10.4754 0.265926 11.0192 0.598706 11.3595C0.942247 11.7109 1.50758 11.7109 1.85112 11.3595L10.3318 2.68582Z" fill="currentColor"/></g><defs><clipPath id="studentLink"><rect width="12" height="12" fill="currentColor"/></clipPath></defs></svg></span>
            </router-link>
          </b-col>
        </div>
      </b-col>
    </b-row>
  </section>

</template>

<script>
export default {
  name: "LandingWhoNeeds",
  methods: {
    scrollIntoView(href) {
      const el = href ? document.getElementById(href) : null;
      scrollTo(0, el.offsetTop - 80);
    },
    signUpForStudent() {
      localStorage.setItem('signupTag', 'student');
    }
  }
}
</script>

<style scoped>
.landingWhoNeeds {
  padding-top: 200px;
}

.landingSecondTopic {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 76px;
  line-height: 70px;
  display: inline-block;
  background: linear-gradient(93.41deg, #464A51 20.16%, #18181C 67.98%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

img {
  user-select: none;
}

.personBlock {
  background: #F8F8FA;
  border-radius: 12px;
  padding: 32px 48px;
  display: flex;
  height: 100%;
}

.personTopic {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 29px;
  color: #1D1D1D;
}

.personBlock:hover {
  background: #F5F5F5;
}

.personImage a img {
  filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
  transition: all .15s ease-in-out ;
}

.personImage a {
  transition: all .15s ease-in-out ;
}

.personImage:hover a img {
  filter: drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25));
}

.personBlock:hover .personBigImage {
  filter: drop-shadow(0px 4px 32px rgba(0, 0, 0, 0.25))!important;
}

.personImage a img:hover, .personImage a:focus {
  filter: drop-shadow(0px 4px 32px rgba(0, 0, 0, 0.25))!important;
  transform: scale(1.1);
  outline: none;
}

.smallAnimoji {
  width: 84px;
  height: 84px;
}

.landingLink {
  color: #0082FF;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  transition: all 0.15s ease-in-out;
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

.personLineBlock {
  margin-top: 58px;
  margin-bottom: 80px;
}

@media (max-width: 1024px) {
  .landingSecondTopic {
    font-size: 60px;
    line-height: 70px;
  }

  .landingText {
    font-size: 18px;
    line-height: 26px;
  }

  .personImage {
    height: 78px;
    width: 78px;
  }

  .personBigImage {
    height: 116px;
    width: 116px;
  }

  .personTopic {
    font-size: 24px ;
    line-height: 23px;
  }
}

@media (max-width: 768px) {
  .landingWhoNeeds {
    padding-top: 90px;
  }

  .landingSecondTopic {
    font-size: 40px;
    line-height: 36px;
    width: 100% !important;
  }

  .personTopic {
    font-size: 18px;
    line-height: 16px;
  }

  .personLineBlock {
    margin: 49px 0 92px;
  }
}

@media (max-width: 320px) {
  .smallAnimoji {
    width: 72px;
    height: 72px;
  }
}
</style>
