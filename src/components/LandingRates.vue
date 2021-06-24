<template>
<section class="d-flex flex-column" id="pricing">

  <b-col cols="auto" class="landingSecondTopic p-md-0"><span>Стоимость</span></b-col>

  <b-row v-scroll>

    <b-col cols="12" class="d-lg-flex my-0 my-md-5 p-md-0">

      <b-col cols="12" lg="auto" class="p-0">
        <button class="rateButton mt-4 mt-md-0 month" :class="month ? '' : 'active'" @click="month = 0; year=once=1">
          Покупка на{{'\xa0'}}месяц
        </button>
      </b-col>
      <b-col cols="12" lg="auto" class="p-0">
        <button class="rateButton year" :class="year ? '' : 'active'" @click="year = 0; month=once=1">
          Покупка на{{'\xa0'}}год
        </button>
      </b-col>
      <b-col cols="12" lg="auto" class="p-0">
        <button class="rateButton mb-4 mb-md-0 once" :class="once ? '' : 'active'" @click="once = 0; year=month=1">
          Покупка навсегда
        </button>
      </b-col>

    </b-col>

    <b-col cols="12" md="6" lg="4" class="LandingRate position-relative free mt-4 mt-md-auto">
      <div class="rateBackground position-absolute">
        <div class="rateBlock justify-content-between flex-column position-absolute">
          <div class="topic">Бесплатная</div>

          <div class="price mb-0">0 руб</div>

          <div class="features">
            <div class="lessons d-flex align-items-center my-2">
              <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 16.5C14.4853 16.5 16.5 14.4853 16.5 12C16.5 9.51472 14.4853 7.5 12 7.5C9.51472 7.5 7.5 9.51472 7.5 12C7.5 14.4853 9.51472 16.5 12 16.5ZM12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill="#0082FF"/></svg>
              До{{'\xa0'}}5{{'\xa0'}}уроков в{{'\xa0'}}день
            </div>
            <div class="mistakes d-flex align-items-center my-3">
              <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 5.1966L18.8034 3L12 9.8034L5.1966 3.00001L3 5.19661L9.80339 12L3 18.8034L5.1966 21L12 14.1966L18.8034 21L21 18.8034L14.1966 12L21 5.1966Z" fill="#DDDDDD"/></svg>
              Без работы над опечатками
            </div>
            <div class="practice d-flex align-items-center my-2">
              <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 5.1966L18.8034 3L12 9.8034L5.1966 3.00001L3 5.19661L9.80339 12L3 18.8034L5.1966 21L12 14.1966L18.8034 21L21 18.8034L14.1966 12L21 5.1966Z" fill="#DDDDDD"/></svg>
              Без текстов для практики
            </div>
          </div>

          <PrimaryButton
              data-size="sm"
              @click.native="signUpWithTag"
          >
            Попробовать
          </PrimaryButton>
        </div>
      </div>
    </b-col>

    <b-col cols="12" md="6" lg="4" class="LandingRate position-relative pro">

      <div class="rateBackground position-absolute">
        <div class="rateBlock justify-content-between flex-column position-absolute">
          <div class="topic">PRO</div>

          <div class="price mb-3 mb-xl-0">
            {{ !month ? '499 р/мес' : !year  ? "2399 руб" : "4999 руб" }}
            <div
                class="description"
                :class="{
                  'descriptionBorder': !year
                }"
            >
              <div class="signature">
                {{ signature('pro') }}
              </div>
            </div>
          </div>

          <div class="features">
            <div class="lessons d-flex align-items-center my-2">
              <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
              Безлимит на{{'\xa0'}}уроки
            </div>
            <div class="mistakes d-flex align-items-center my-3">
              <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
              Работа над опечатками
            </div>
            <div class="practice d-flex align-items-center my-2">
              <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
              Тексты для практики
            </div>
          </div>

          <PrimaryButton
              data-size="sm"
              @click.native="signUpWithTag('pro')"
          >
            Попробовать
          </PrimaryButton>

        </div>
      </div>

    </b-col>
    <b-col cols="12" md="6" lg="4" class="LandingRate position-relative student">

      <div class="rateBackground position-absolute">
        <div class="rateBlock justify-content-between flex-column position-absolute">
          <div class="topic">Студенческая</div>

          <div class="price mb-3 mb-xl-0 position-relative">
            {{ !month ? '249 р/мес' : !year  ? "1199 руб" : "2499 руб" }}
            <div
                class="description"
                :class="{
                  'descriptionBorder': !year
                }"
            >
              <div class="signature">
                {{ signature('student') }}
              </div>
            </div>
          </div>

          <div class="features">
            <div class="lessons d-flex align-items-center my-2">
              <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
              Безлимит на{{'\xa0'}}уроки
            </div>
            <div class="mistakes d-flex align-items-center my-3">
              <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
              Работа над опечатками
            </div>
            <div class="practice d-flex align-items-center my-2">
              <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
              Тексты для практики
            </div>
          </div>

          <PrimaryButton
              data-size="sm"
              @click.native="signUpWithTag('student')"
          >
            Получить скидку
          </PrimaryButton>

        </div>
      </div>

    </b-col>

  </b-row>

<!--  <b-col cols="12" lg="6" class="my-2 my-lg-0 pr-lg-3">-->
<!--    <div class="rateBlock flex-column flex-sm-row justify-content-sm-between">-->
<!--      <div class="d-flex flex-column justify-content-between">-->
<!--        <div class="topic mb-4">PRO</div>-->

<!--        <div class="price mb-5 text-right d-block d-sm-none">-->
<!--          {{!month ? Math.trunc(initialRates) : !year  ? Math.trunc(initialRates*.25) : Math.trunc(initialRates*.1) }}-->
<!--          <br>-->
<!--          <div class="description" :class="month ? 'descriptionBorder' : ''">руб/мес-->
<!--            <div class="signature">-->
<!--              {{!month ? '' : !year  ? Math.trunc(initialRates*.25)*12 + ' руб' : Math.trunc(initialRates*2.4)+' руб' }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="features">-->
<!--          <div class="lessons d-flex align-items-center my-2">-->
<!--            <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/>-->
<!--            </svg>-->
<!--            Безлимит на{{'\xa0'}}уроки-->
<!--          </div>-->
<!--          <div class="mistakes d-flex align-items-center my-3">-->
<!--            <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/>-->
<!--            </svg>-->
<!--            Работа над опечатками-->
<!--          </div>-->
<!--          <div class="practice d-flex align-items-center my-2">-->
<!--            <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/>-->
<!--            </svg>-->
<!--            Тексты для практики-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
<!--      <div class="d-flex flex-column justify-content-between mt-4 mt-sm-auto align-items-end">-->
<!--        <div class="price mb-5 text-right d-none d-sm-block">-->
<!--          {{!month ? Math.trunc(initialRates) : !year  ? Math.trunc(initialRates*.25) : Math.trunc(initialRates*.1) }}-->
<!--          <br>-->
<!--          <div class="description" :class="month ? 'descriptionBorder' : ''">руб/мес-->
<!--            <div class="signature">-->
<!--              {{!month ? '' : !year  ? Math.trunc(initialRates*.25)*12 + ' руб' : Math.trunc(initialRates*2.4)+' руб' }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <router-link to="/" class="tryButton mt-4 mt-xl-0 w-100">Приобрести</router-link>-->
<!--      </div>-->
<!--    </div>-->
<!--  </b-col>-->

<!--  <b-col cols="12" lg="6" class="my-2 my-lg-0 pl-lg-3">-->
<!--    <div class="rateBlock flex-column flex-sm-row justify-content-sm-between">-->
<!--      <div class="d-flex flex-column justify-content-between">-->
<!--        <div class="topic mb-4">Студенческая <span class="greyText"> = PRO</span></div>-->

<!--        <div class="price mb-5 text-right d-block d-sm-none">-->
<!--          {{!month ? parseInt(initialRates/2) : !year ? parseInt(initialRates/2*.25) : parseInt(initialRates/2*.1) }}-->
<!--          <br>-->
<!--          <div class="description promocode" :class="month ? 'descriptionBorder' : ''">руб/мес-->
<!--            <div class="signature">-->
<!--              {{!month ? '' : !year  ? Math.trunc(initialRates*.25)*6+' руб' : Math.trunc(initialRates*1.2)+' руб' }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <div class="features">-->
<!--          <div class="lessons d-flex align-items-center my-2">-->
<!--            <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/>-->
<!--            </svg>-->
<!--            Безлимит на{{'\xa0'}}уроки-->
<!--          </div>-->
<!--          <div class="mistakes d-flex align-items-center my-3">-->
<!--            <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/>-->
<!--            </svg>-->
<!--            Работа над опечатками-->
<!--          </div>-->
<!--          <div class="practice d-flex align-items-center my-2">-->
<!--            <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--              <path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/>-->
<!--            </svg>-->
<!--            Тексты для практики-->
<!--          </div>-->
<!--        </div>-->

<!--      </div>-->
<!--      <div class="d-flex flex-column justify-content-between mt-4 mt-sm-auto align-items-end">-->
<!--        <div class="price mb-5 text-right d-none d-sm-block">-->
<!--          {{!month ? parseInt(initialRates/2) : !year ? parseInt(initialRates/2*.25) : parseInt(initialRates/2*.1) }}-->
<!--          <br>-->
<!--          <div class="description promocode" :class="month ? 'descriptionBorder' : ''">руб/мес-->
<!--            <div class="signature">-->
<!--              {{!month ? '' : !year  ? Math.trunc(initialRates*.25)*6+' руб' : Math.trunc(initialRates*1.2)+' руб' }}-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->

<!--        <button @click="$bvModal.show('confirm_student_status')" class="tryButton mt-4 mt-xl-0 w-100">Я студент</button>-->
<!--      </div>-->
<!--    </div>-->
<!--  </b-col>-->
</section>
</template>

<script>
import PrimaryButton from "@/components/buttons/PrimaryButton";
export default {
  name: "LandingRates",
  components: {
    PrimaryButton,
  },
  props: {
    initialRates: Number
  },
  data() {
    return {
      month: 0,
      year: 1,
      once: 1,
      chosenTag: ""
    }
  },
  methods: {
    signUpWithTag(tag) {
      if (tag) {
        localStorage.setItem('signupTag', tag);
      }

      this.$router.push('/signup_with');
    },
    signature(plan) {
      if (!this.year) {
        let yearPrice = plan === 'student' ? 1199 : 2399;

        return '≈ ' + Math.floor(yearPrice / 12) + ' руб/мес';
      }
      return '';
    },
  }
}
</script>

<style scoped>
#pricing {
  padding-top: 80px;
}

.landingSecondTopic {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 76px;
  line-height: 70px;
  display: inline-block;
  margin: 0 -15px;
  background: linear-gradient(270deg, #464A51 20.16%, #18181C 67.98%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.LandingRate {
  height: 520px;
  display: flex;
}

.rateBackground {
  background: linear-gradient(180deg, #F2F2F5 0%, #F8F8FA 100%);
  border-radius: 12px;
  width: 280px;
  left: 60px;
  height: 530px;
  transition: all .15s ease-in-out;
  top: 0;
}

.rateBlock {
  padding: 32px 40px;
  background: #FFFFFF;
  border: 1px solid #E5E6EB;
  border-radius: 12px;
  height: 495px;
  width: 360px;
  top: 18px;
  left: -40px;
  display: flex;
  align-items: center;
  transition: all .15s ease-in-out;
}

.rateButton {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  color: #1D1D1D;
  opacity: 0.9;
  padding: 14px 40px;
  background: #FFFFFF;
  border-radius: 6px;
  border: 1px solid #E5E6EB;
  transition: box-shadow .15s ease-in-out;
  position: relative;
}

.rateButton span {
  color: #959393;
}

.rateButton:focus {
  box-shadow: 0 0 0 4px #87ABF9;
  outline: none;
}

.month {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.year {
  border-radius: 0;
}

.once {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.active, .active span {
  color: #FFFFFF;
  background-color: #0082FF!important;
  border-color: #046DFF!important;
}

.free .rateBackground {
  left: 40px;
}

.pro .rateBackground {
  left: 50px;
}

.topic {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #959393;
}

.price {
  font-family: GT Walsheim Pro, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 32px;
  color: #1D1D1D;
  z-index: 5;
}

.description {
  font-size: 32px;
  line-height: 16px;
  position: relative;
}

.signature {
   font-style: normal;
   font-weight: 500;
   font-size: 24px;
   line-height: 29px;
   color: #00bfff;
   position: absolute;
   right: 0;
   top: 12px;
 }

.descriptionBorder .signature::before {
  content: "";
  background-color: #00bfff;
  width: 100%;
  height: 12px;
  position: absolute;
  top: -10px;
  z-index: -1;
}

.features {
  width: 100%;
}

.features div {
  font-family: GT Walsheim Pro, sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #333333;
  font-size: 18px;
  line-height: 30px;
}
/*
.tryButton {
  text-decoration: none;
  font-family: "Gotham Pro", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  color: #FFFFFF;
  text-align: center;
  background: #0082FF;
  border-radius: 100px;
  border: none;
  padding: 14px 32px;
  cursor: pointer;
  transition: box-shadow .15s ease-in-out;
}

.tryButton:hover {
  background: #0073E2;
}

.tryButton:active {
  background: #3DA0FF;
}

.tryButton:focus {
  box-shadow: 0 0 0 4px #87ABF9;
  outline: none;
}
*/

.primaryButton[data-size="sm"] {
  font-size: 18px;
  padding: 14px 32px 15px;
  line-height: 14px;
}

.pro .rateBackground {
  background: #0082FF;
}

.rateBackground:hover, .rateBlock:hover .rateBackground {
  top: -18px;
}

.rateBlock:hover, .rateBackground:hover .rateBlock {
  top: 36px;
}

@media (max-width: 1200px) {
  .rateBackground {
    width: 245px;
    height: 450px;
    top: 0;
    left: calc( 50% - 123px)!important;
  }

  .rateBlock {
    width: 310px;
    height: 425px;
    top: 13px;
    left: -32px;
  }

  .rateBackground:hover, .rateBlock:hover .rateBackground {
    top: -13px;
  }

  .rateBlock:hover, .rateBackground:hover .rateBlock {
    top: 26px;
  }

  .topic {
    font-size: 19px;
    line-height: 24px;
  }

  .price {
    font-size: 40px;
    line-height: 28px;
    margin-bottom: 16px;
  }

  .descriptionBorder .signature::before {
    height: 10px;
  }

  .features {
    font-size: 16px;
    line-height: 26px;
  }

  .tryButton {
    font-size: 14px;
    line-height: 14px;
  }

  .student .price::after {
    top: 36px;
  }
}

@media (max-width: 1024px) {
  .landingSecondTopic {
    font-size: 60px;
    line-height: 70px;
  }
}

@media (min-width: 993px) {
  .month {
    border-right: none;
  }

  .year {
    margin-left: 4px;
    border-left: none;
    border-right: none;
  }

  .once {
    border-left: none;
    margin-left: 4px;
  }

  .year::after, .month::after {
    content: "";
    position: absolute;
    right: -4px;
    top: -1px;
    width: 4px;
    height: calc(100% + 2px);
    background-color: inherit;
    border: 1px solid #E5E6EB;
    border-left: none;
    transition: none;
  }

  .year.active::after, .month.active::after {
    border-left: none;
    border-top-color: #046DFF;
    border-bottom-color: #046DFF;
  }

  .year:focus::after, .month:focus::after {
    transition: background-color .08s linear;
    transition-delay: .04s;
    background-color: #87ABF9;
    border: none;
  }
}

@media (max-width: 992px) {
  .rateButton {
    margin: 4px 0;
    border-radius: 6px !important;
  }
}

@media (max-width: 768px) {
  #rates {
    padding-top: 90px;
  }

  .landingSecondTopic {
    font-size: 40px;
    line-height: 36px;
    width: 100% !important;
  }
}
</style>
