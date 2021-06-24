<template>
<div id="Landing">

  <StandardHeader />

  <b-container>

    <LandingStart
      @image-load="loadLanding"
    />

    <WhatIsTouchTyping id="touch-typing"/>

    <WhyTouchTyping
      ref="whyTouchTyping"
    />

    <LandingLiker
      ref="landingLiker"
      @update-like-amount="updateLikeAmount"
      :like-amount="likeAmount"
    />

    <LandingWhoNeeds/>

    <WhyTypingSchool id="about"/>

    <Feedback
      id="testimonials"
      ref="testimonials"
    />

    <LandingRates
        id="pricing"
        :initial-rates="initialRates"
    />

    <FAQ id="faq"/>

    <LandingBuyArea/>

    <span class="ourLove loveAnim">С{{'\xa0'}}любовью из{{'\xa0'}}Санкт-Петербурга</span>

  </b-container>

  <Footer class="position-absolute bottom-0"></Footer>
</div>
</template>

<script>
import StandardHeader from "@/components/StandardHeader";
import LandingStart from "@/components/LandingStart";
import WhatIsTouchTyping from "@/components/WhatIsTouchTyping";
import WhyTouchTyping from "@/components/WhyTouchTyping";
import LandingLiker from "@/components/LandingLiker";
import LandingWhoNeeds from "@/components/LandingWhoNeeds";
import WhyTypingSchool from "@/components/WhyTypingSchool";
import Feedback from "@/components/Feedback";
import LandingRates from "@/components/LandingRates";
import FAQ from "@/components/FAQ";
import LandingBuyArea from "@/components/LandingBuyArea";
import Footer from "@/components/Footer";

export default {
  name: "Landing",
  components: {
    StandardHeader,
    LandingStart,
    WhatIsTouchTyping,
    WhyTouchTyping,
    LandingLiker,
    LandingWhoNeeds,
    WhyTypingSchool,
    Feedback,
    LandingRates,
    FAQ,
    LandingBuyArea,
    Footer,
  },
  data() {
    return {
      likeAmount: 1511,
      initialRates: 499
    }
  },
  beforeRouteLeave (to, from, next) {
    this.$refs.whyTouchTyping.cleanEvents();

    this.$refs.testimonials.cleanEvents();

    let lastTimeoutId = setTimeout(() => {}, 0);

    while (lastTimeoutId--) {
      clearTimeout(lastTimeoutId);
    }

    if (document.activeElement.id === 'signUpForStudent') {
      localStorage.setItem('signupTag', 'student');
    }

    next();
  },
  methods: {
    loadLanding() {
      if (!localStorage.getItem('refresh')) {
        this.$emit('end-loading')
      }
    },
    updateLikeAmount(likeAmount) {
      if (likeAmount > 0) {
        this.likeAmount += +localStorage.getItem("likeAmount");
        localStorage.setItem("likeAmount", "0");
        this.$refs.landingLiker.localLikeAmount = 0;
      }
    }
  }
}
</script>

<style scoped>
#Landing {
  min-width: 100%;
  min-height: 100vh;
}

.ourLove {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 27px;
  color: #B9B7B7;
  margin-bottom: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.loveAnim {
  animation: OurLove 90s linear infinite;
  background: linear-gradient(to right, #B9B7B7 10%, #C4A0FF, #8C46FE 35%, #B9B7B7 45%, #98D6FF, #44B4FE 60%, #B9B7B7 70%, #FE8881, #F66C62 95%, #B9B7B7);
  background: -webkit-linear-gradient(to right, #B9B7B7 10%, #C4A0FF, #8C46FE 35%, #B9B7B7 45%, #98D6FF, #44B4FE 60%, #B9B7B7 70%, #FE8881, #F66C62 95%, #B9B7B7);
  background: -moz-linear-gradient(to right, #B9B7B7 10%, #C4A0FF, #8C46FE 35%, #B9B7B7 45%, #98D6FF, #44B4FE 60%, #B9B7B7 70%, #FE8881, #F66C62 95%, #B9B7B7);
  background-size: 1000% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

@keyframes OurLove {
  to {
    background-position: 1000% center;
  }
}
</style>
