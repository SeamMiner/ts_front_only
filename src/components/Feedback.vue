<template>
<section id="testimonials">
  <b-row>
    <b-col cols="12" class="d-flex justify-content-center">
      <h2 class="landingThirdHeading mb-5">Отзывы пользователей</h2>
    </b-col>
  </b-row>

  <b-row class="flex-nowrap flex-row feedbacks position-relative">
    <b-col cols="12" class="feedbackWrapper position-relative">
      <div class="feedbackBlock d-flex justify-content-center flex-wrap" id="feedbackBlock">
        <transition name="slide-fade" mode="out-in">
          <div class="d-flex align-self-center flex-column justify-content-center align-items-center" :key="currentFeedback">
            <div class="feedbackAvatar d-flex justify-content-center align-items-center mb-4"
                 :style="{'backgroundImage': 'url(' +
                 require(`../../img/Feedback/${ feedbacks[currentFeedbackIndex].imgSrc || 'avatarEvgenyaMegryan.png' }`) + ')'}">
            </div>
            <div class="feedbackDate">
              {{ feedbacks[currentFeedbackIndex].feedbackDate }}
            </div>
            <div class="feedbackText">
              {{ feedbacks[currentFeedbackIndex].feedbackText }}
            </div>
            <a target="_blank" class="feedbackSocialNetworkLink d-flex align-items-center mb-4" :href="feedbacks[currentFeedbackIndex].socialNetworkLink">
              <img class="feedbackSocialNetworkIcon" :src="require(`../../img/Feedback/${ feedbacks[currentFeedbackIndex].socialNetworkName }.svg`)" alt="Картинка социальной сети">
              {{ feedbacks[currentFeedbackIndex].socialNetworkLinkTitle || "Евгения Мегрян" }}
            </a>
          </div>
        </transition>

        <div class="d-flex justify-content-center align-self-end">
          <div class="feedbackSliderPositionInfo d-flex justify-content-between" :style="{'minWidth': feedbacks.length * 10 + (feedbacks.length - 1) * 12 + 'px'}">
            <div class="slidePoint" v-for="index in feedbacks.length" :key="index" :class="index - 1 === currentFeedbackIndex ? 'active' : ''"></div>
          </div>
        </div>
      </div>

      <img class="overflow-hidden user-select-none position-absolute smallCircle" src="../../img/Feedback/smallCircle.svg" alt="Картинка декораций для блока отзывов об онлайн тренажёре слепой печати">
      <img class="overflow-hidden user-select-none position-absolute bigCircle" src="../../img/Feedback/bigCircle.svg" alt="Картинка декораций для блока отзывов о Typing School">
      <img class="overflow-hidden user-select-none position-absolute circlesRect" src="../../img/Feedback/circlesRect.svg" alt="Картинка декораций для блока отзывов об онлайн тренажёре печати">
      <img class="user-select-none position-absolute quoteTopLeft d-none d-md-flex" src="../../img/Feedback/quoteTopLeft.svg" alt="Картинка декораций для блока отзывов о Typing School">
      <img class="user-select-none position-absolute quoteBottomRight d-none d-md-flex" src="../../img/Feedback/quoteBottomRight.svg" alt="Картинка декораций для блока отзывов об онлайн тренажёре слепой печати">
    </b-col>

    <div @click="slideToLeft" class="feedbackToSlide feedbackToSlideLeft position-absolute d-none d-md-flex justify-content-center align-items-center">
      <img src="../../img/Feedback/slideArrow.svg" alt="Картинка стрелки для перехода между отзывами - стрелка назад">
    </div>
    <div @click="slideToRight" class="feedbackToSlide feedbackToSlideRight position-absolute d-none d-md-flex justify-content-center align-items-center">
      <img src="../../img/Feedback/slideArrow.svg" alt="Картинка стрелки для перехода между отзывами - стрелка вперёд">
    </div>
  </b-row>
</section>
</template>

<script>
export default {
  name: "Feedback",
  data() {
    return {
      currentFeedbackIndex: 0,
      touchStartPositionX: null,
      touchStartPositionY: null,
      touchEndPositionX: null,
      feedbacks: [
        {
          imgSrc: "example.jpg",
          feedbackDate: "10 ноября 2020 г.",
          feedbackText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis placeat molestias. Facere necessitatibus sunt voluptatibus dolorem exercitationem ipsum officia, laudantium fuga beatae consequatur, error odit ad, omnis qui aliquam?",
          socialNetworkLink: "https://typing.school",
          socialNetworkLinkTitle: "Tova Yaniv",
          socialNetworkName: "telegram"
        },
        {
          imgSrc: "example.jpg",
          feedbackDate: "25 октября 2020 г.",
          feedbackText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis placeat molestias. Facere necessitatibus sunt voluptatibus dolorem exercitationem ipsum officia, laudantium fuga beatae consequatur, error odit ad, omnis qui aliquam?",
          socialNetworkLink: "https://typing.school",
          socialNetworkLinkTitle: "Beracha Hed",
          socialNetworkName: "telegram"
        },
        {
          imgSrc: "example.jpg",
          feedbackDate: "8 октября 2020 г.",
          feedbackText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis placeat molestias. Facere necessitatibus sunt voluptatibus dolorem exercitationem ipsum officia, laudantium fuga beatae consequatur, error odit ad, omnis qui aliquam?",
          socialNetworkLink: "https://typing.school",
          socialNetworkLinkTitle: "Tamir Romi",
          socialNetworkName: "telegram"
        },
        {
          imgSrc: "example.jpg",
          feedbackDate: "24 сентября 2020 г.",
          feedbackText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis placeat molestias. Facere necessitatibus sunt voluptatibus dolorem exercitationem ipsum officia, laudantium fuga beatae consequatur, error odit ad, omnis qui aliquam?",
          socialNetworkLink: "https://typing.school",
          socialNetworkLinkTitle: "Adam Sigal",
          socialNetworkName: "telegram"
        },
        {
          imgSrc: "example.jpg",
          feedbackDate: "20 сентября 2020 г.",
          feedbackText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis placeat molestias. Facere necessitatibus sunt voluptatibus dolorem exercitationem ipsum officia, laudantium fuga beatae consequatur, error odit ad, omnis qui aliquam?",
          socialNetworkLink: "https://typing.school",
          socialNetworkLinkTitle: "Avidan Dror",
          socialNetworkName: "telegram"
        },
        {
          imgSrc: "example.jpg",
          feedbackDate: "18 сентября 2020 г.",
          feedbackText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis placeat molestias. Facere necessitatibus sunt voluptatibus dolorem exercitationem ipsum officia, laudantium fuga beatae consequatur, error odit ad, omnis qui aliquam?",
          socialNetworkLink: "https://typing.school",
          socialNetworkLinkTitle: "Tzion Alma",
          socialNetworkName: "telegram"
        },
        {
          imgSrc: "example.jpg",
          feedbackDate: "11 сентября 2020 г.",
          feedbackText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium veritatis placeat molestias. Facere necessitatibus sunt voluptatibus dolorem exercitationem ipsum officia, laudantium fuga beatae consequatur, error odit ad, omnis qui aliquam?",
          socialNetworkLink: "https://typing.school",
          socialNetworkLinkTitle: "Yona Ofra",
          socialNetworkName: "telegram"
        },
      ],
    }
  },
  mounted() {
    this.feedbackBlock = document.getElementById('feedbackBlock');

    window.addEventListener('touchstart', this.touchStart);
    window.addEventListener('touchend', this.touchEnd);
  },
  computed: {
    currentFeedback() {
      return 'feedback' + this.currentFeedbackIndex;
    }
  },
  methods: {
    cleanEvents() {
      window.removeEventListener('touchstart', this.touchStart);
      window.removeEventListener('touchend', this.touchEnd);
    },
    slideToLeft() {
      if (this.currentFeedbackIndex !== 0) {
        this.currentFeedbackIndex--;
      } else {
        this.currentFeedbackIndex = this.feedbacks.length - 1;
      }
    },
    slideToRight() {
      if (this.currentFeedbackIndex !== this.feedbacks.length - 1) {
        this.currentFeedbackIndex++;
      } else {
        this.currentFeedbackIndex = 0;
      }
    },
    touchStart(event) {
      if ( event.path.includes(this.feedbackBlock) ) {
        this.touchStartPositionX = event.changedTouches[0].clientX;
        this.touchStartPositionY = event.changedTouches[0].clientY;
      }
    },
    touchEnd(event) {
      if ( event.path.includes(this.feedbackBlock) ) {
        this.touchEndPositionX = event.changedTouches[0].clientX;
        this.touchEndPositionY = event.changedTouches[0].clientY;
        const touchDifferenceX = this.touchStartPositionX - this.touchEndPositionX;
        const touchDifferenceY = this.touchStartPositionY - this.touchEndPositionY;

        if ( Math.abs(touchDifferenceX) > this.feedbackBlock.clientWidth / 5 &&
          window.innerHeight / 6 > Math.abs(touchDifferenceY)) {
          if (touchDifferenceX < 0) {
            this.slideToLeft();
          } else {
            this.slideToRight();
          }
        }
      }
    },
  }
}
</script>

<style scoped>
#testimonials {
  padding-top: 80px;
  padding-bottom: 120px;
}

.landingThirdHeading {
  background: linear-gradient(93.41deg, #464A51 20.16%, #18181C 67.98%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: GT Walsheim Pro, sans-serif;
  font-size: 46px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
}

.feedbackBlock {
  color: white;
  padding: 72px 144px;
  background: radial-gradient(94.68% 99.6% at 0% 28.39%, #6CB3FA 0%, #067DFF 71.1%);
  filter: drop-shadow(0px 4px 16px rgba(12, 0, 84, 0.25));
  border-radius: 48px;
  text-align: center;
  font-family: GT Walsheim Pro, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  min-height: 750px;
}

.feedbackAvatar {
  overflow: hidden;
  width: 142px;
  height: 142px;
  border: 6px solid #FFFFFF;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.feedbackDate {
  font-weight: 500;
}

.feedbackText {
  margin: 40px 0;
}

.feedbackSocialNetworkLink {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 12px 24px;
  text-decoration: none;
  color: white;
  transition: all .15s ease-in-out;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
}

.feedbackSocialNetworkLink:focus {
  outline: none;
  box-shadow: 0 0 0 4px white;
}

.feedbackSocialNetworkLink:hover, .feedbackSocialNetworkLink:active {
  background: rgba(255, 255, 255, 0.5);
}

.feedbackSocialNetworkIcon {
  width: 20px;
  height: 20px;
  margin-right: 16px;
}

.slidePoint {
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background: rgba(255, 255, 255, 0.2);
}

.slidePoint.active {
  background: white;
}

.feedbackToSlide {
  background: #FFFFFF;
  box-shadow: -2px 4px 16px rgba(12, 0, 84, 0.25);
  width: 84px;
  height: 84px;
  border-radius: 50%;
  cursor: pointer;
  top: calc(50% - 42px);
}

.feedbackToSlideLeft {
  left: -2.5%;
}

.feedbackToSlideLeft img {
  transform: rotate(180deg);
}

.feedbackToSlideRight {
  right: -2.5%;
}

.smallCircle {
  top: 0;
  right: 30px;
}

.bigCircle {
  bottom: 0;
  left: 15px;
}

.circlesRect {
  top: 30%;
  right: 15px;
}

.quoteTopLeft {
  top: 72px;
  left: 56px;
}

.quoteBottomRight {
  bottom: 72px;
  right: 56px;
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: opacity .5s;
}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

@media (max-width: 1200px) {
  .feedbackBlock {
    min-height: 800px;
  }

  .feedbackToSlideLeft {
    left: -0.5%;
  }

  .feedbackToSlideRight {
    right: -0.5%;
  }
}

@media (max-width: 992px) {
  .feedbackBlock {
    padding: 72px 96px;
    min-height: 850px;
  }
}

@media (max-width: 768px) {
  #testimonials {
    padding-bottom: 0;
  }

  .landingThirdHeading {
    font-size: 40px;
    line-height: 40px;
  }

  .feedbackBlock {
    padding: 56px;
    min-height: 850px;
  }

  .feedbackToSlide {
    width: 52px;
    height: 52px;
  }

  .feedbackToSlideLeft {
    left: 0;
  }

  .feedbackToSlideRight {
    right: 0;
  }
}

@media (max-width: 576px) {
  .feedbackBlock {
    padding: 32px 40px;
    min-height: 1000px;
  }
}
</style>
