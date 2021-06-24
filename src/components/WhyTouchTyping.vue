<template>
  <section class="whyTouchTypingBlock">
    <h1 class="gradientHeading">Зачем нужна<br>слепая печать?</h1>

    <b-row class="landingDivider"></b-row>

    <b-row>
      <b-col cols="12" md="6" class="special-mb-5 " v-scroll>
        <h2 class="baseSubHeading blackSubHeading mb-0">Чтобы<br>работать<br></h2><h2 class="baseSubHeading colorfulPurple">эффективнее</h2>
      </b-col>
      <b-col class="d-none d-md-flex" md="6">
        <p class="informationParagraph" v-scroll>Средняя скорость печати у{{'\xa0'}}продвинутого пользователя составляет 150-200 знаков в{{'\xa0'}}минуту, у{{'\xa0'}}владеющих{{'\xa0'}}же слепой печатью примерно в{{'\xa0'}}2{{'\xa0'}}раза выше. Если часто приходится работать за{{'\xa0'}}компьютером, слепая печать значительно ускоряет работу и{{'\xa0'}}высвобождает больше свободного времени.</p>
      </b-col>
    </b-row>

    <b-row class="special-mb-7">
      <b-col cols="12" md="6" class="d-flex justify-content-center justify-content-md-start">
        <p id="timer" class="blackSubHeading timer">
          00:<span id="editableMinutes">00</span>:<span id="editableSeconds">00</span>
        </p>
      </b-col>

      <b-col cols="12" md="6" class="special-mb-5 mt-3" v-scroll>
        <div class="descriptionTimer">
          <p class="descriptionTimerText">
            Примерно за{{'\xa0'}}такое время вы{{'\xa0'}}бы набрали 2{{'\xa0'}}листа{{'\xa0'}}А4, именно столько текста на{{'\xa0'}}этой странице.
          </p>
          <router-link to="/speed_test" class="smallLandingLink">
            <span>Узнать свою скорость{{'\xa0'}}</span>
            <svg width="12" height="12" viewBox="0 0 18 19" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M17.6562 10.3301C18.1146 9.87164 18.1146 9.12836 17.6562 8.66992L9.83008 0.843831C9.37164 0.385389 8.62836 0.385389 8.16992 0.843831C7.71148 1.30227 7.71148 2.04555 8.16992 2.50399L13.992 8.32609L1.17391 8.32609C0.525579 8.32609 -3.65063e-07 8.85166 -3.93402e-07 9.5C-4.21742e-07 10.1483 0.525579 10.6739 1.17391 10.6739L13.992 10.6739L8.16992 16.496C7.71148 16.9544 7.71148 17.6977 8.16992 18.1562C8.62836 18.6146 9.37164 18.6146 9.83008 18.1562L17.6562 10.3301Z"/></svg>
          </router-link>
        </div>
      </b-col>
      <b-col cols="12" class="d-md-none">
        <p class="informationParagraph mb-0 mb-md-auto" v-scroll>Средняя скорость печати у{{'\xa0'}}продвинутого пользователя составляет 150-200 знаков в{{'\xa0'}}минуту, у{{'\xa0'}}владеющих{{'\xa0'}}же слепой печатью примерно в{{'\xa0'}}два раза выше. Если часто приходится работать за{{'\xa0'}}компьютером, слепая печать значительно ускоряет работу и{{'\xa0'}}высвобождает больше свободного времени.</p>
      </b-col>
    </b-row>

    <b-row>
      <b-col cols="12" md="6" class="special-mb-6 enjoyBlock">
          <span class="baseSubHeading mb-0 d-flex flex-column position-relative" v-scroll>
            <span class="blackSubHeading">Чтобы<br>не{{'\xa0'}}отвлекаться<br>от{{'\xa0'}}<span class="baseSubHeading colorfulBlue">мыслей</span></span>

            <svg class="arrows user-select-none" width="171" height="90" viewBox="0 0 171 90" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M113.244 3.13722C112.767 3.27868 112.496 3.77964 112.637 4.25614L114.942 12.0212C115.084 12.4977 115.585 12.7693 116.061 12.6278C116.538 12.4864 116.809 11.9854 116.668 11.5089L114.619 4.60664L121.521 2.55754C121.998 2.41607 122.269 1.91512 122.128 1.43862C121.986 0.962114 121.485 0.69051 121.009 0.831972L113.244 3.13722ZM170.815 58.118C165.737 47.2846 147.305 21.3043 113.929 3.2088L113.071 4.7912C146.095 22.6957 164.263 48.382 169.185 58.882L170.815 58.118Z" fill="#45B4FE"/><path d="M84.5599 21.602C84.0639 21.5689 83.6351 21.9442 83.602 22.4401L83.0632 30.5222C83.0301 31.0181 83.4054 31.447 83.9013 31.4801C84.3973 31.5131 84.8261 31.1379 84.8592 30.6419L85.3381 23.4579L92.5222 23.9368C93.0181 23.9699 93.447 23.5946 93.4801 23.0987C93.5131 22.6027 93.1379 22.1739 92.6419 22.1408L84.5599 21.602ZM98.3633 89.7545C100.312 83.1464 101.974 71.8785 100.683 59.4321C99.3903 46.9793 95.133 33.2853 85.1773 21.9073L83.8227 23.0927C93.467 34.1147 97.6264 47.4207 98.8923 59.6179C100.159 71.8215 98.5215 82.8536 96.6367 89.2455L98.3633 89.7545Z" fill="#45B4FE"/><path d="M35.2381 27.485C34.9537 27.0774 34.3927 26.9775 33.985 27.2619L27.342 31.8966C26.9344 32.181 26.8345 32.742 27.1189 33.1496C27.4033 33.5573 27.9643 33.6572 28.3719 33.3728L34.2768 29.2531L38.3966 35.158C38.681 35.5656 39.242 35.6655 39.6496 35.3811C40.0573 35.0967 40.1572 34.5357 39.8728 34.1281L35.2381 27.485ZM2.00569 83.2445C10.9966 77.1375 30.1352 57.6435 35.3861 28.1578L33.6139 27.8422C28.4648 56.7565 9.67011 75.8625 0.994305 81.7555L2.00569 83.2445Z" fill="#45B4FE"/></svg>
          </span>
      </b-col>
      <b-col class="d-flex special-mb-6" cols="12" md="6">
        <span class="informationParagraph my-auto" v-scroll>Благодаря слепой печати не{{'\xa0'}}нужно следить за{{'\xa0'}}нажатием клавиш, мышечная память сделает всё за{{'\xa0'}}вас. Вместо этого можно сконцентрироваться на{{'\xa0'}}мыслях и{{'\xa0'}}не{{'\xa0'}}прерывать творческий процесс.</span>
      </b-col>

      <div class="keyboardWrapper special-mb-6">
        <!-- <Keyboard id="keyboard" :animation-mode="true" style="position: absolute;"/> -->
      </div>
    </b-row>
  </section>
</template>

<script>
// import Keyboard from "@/components/Keyboard";

export default {
  name: "WhyTouchTyping",

  data () {
    return {
      needleMinutes: 10,
      needleSeconds: 58,
      animationDurationMS: 3000,
      timerAnimationDone: false,
      animationTextToType: "не отвлекаться от мыслей",
      oneSymbolTypingTime: 300,
      typingTimeModification: 100,
      typingTimings: null,
      keyboardAnimationStarted: false,
      timeouts: []
    }
  },
  mounted() {
    window.addEventListener("scroll", this.positionMonitoring);

    window.onblur = () => {
      for (let timeoutId of this.timeouts) {
        clearTimeout(timeoutId--);
      }

      this.timeouts = [];

      this.keyboardAnimationStarted = false;
    };

    window.onfocus = () => {
      this.startKeyboardAnimation();

      this.keyboardAnimationStarted = true;
    };
  },
  methods: {
    cleanEvents() {
      window.removeEventListener("scroll", this.positionMonitoring);
      window.onblur = () => {};
      window.onfocus = () => {};
    },
    positionMonitoring() {
      let clientScreenHeight = document.documentElement.clientHeight;
      let timerElement = document.getElementById("timer");

      if (timerElement) {
        let timerPosition = timerElement.getBoundingClientRect();

        let timerHeight = timerElement.offsetHeight;

        if (timerPosition.y - clientScreenHeight + timerHeight < 0 && !this.timerAnimationDone) {
          this.startTimerAnimation();

          this.timerAnimationDone = true;
        }
      }

      let keyboardElement = document.getElementById("keyboard");

      if (keyboardElement) {
        let keyboardPosition = keyboardElement.getBoundingClientRect();

        let keyboardHeight = keyboardElement.offsetHeight;

        if (keyboardPosition.y - clientScreenHeight + keyboardHeight < 0 && !this.keyboardAnimationStarted) {
          this.startKeyboardAnimation();

          this.keyboardAnimationStarted = true;
        }
      }
    },
    startTimerAnimation () {
      let timerElement = document.getElementById("timer");
      timerElement.classList.add("opacityUpClass");

      let minutesIndicator = document.getElementById("editableMinutes");
      let secondsIndicator = document.getElementById("editableSeconds");

      let timeoutsMinutesTimings = this.getNeedleSteps( this.needleMinutes );

      timeoutsMinutesTimings.forEach((timing, index) => {
        setTimeout(() => {
          if (minutesIndicator) {
            minutesIndicator.innerText = String(index + 1).length < 2 ? "0" + (index + 1) : String(index + 1);
          }
        }, timing);
      })

      let timeoutsSecondsTimings = this.getNeedleSteps( this.needleSeconds );

      timeoutsSecondsTimings.forEach((timing, index) => {
        setTimeout(() => {
          if (secondsIndicator) {
            secondsIndicator.innerText = String(index + 1).length < 2 ? "0" + (index + 1) : String(index + 1);
          }
        }, timing);
      })
    },
    getNeedleSteps ( needleNumber ) {
      let timingsSteps = [];
      let totalStepsQuantity = 0;

      let halfSteps = (Math.ceil(needleNumber / 2) + 1) / 2 * Math.ceil(needleNumber / 2);
      totalStepsQuantity += halfSteps;

      if ( needleNumber % 2 ) {
        halfSteps--;
      }

      totalStepsQuantity += halfSteps;

      let currentSteps = Math.ceil(needleNumber / 2);
      let descending = true;

      for (let i = 0; i < needleNumber; i++) {
        timingsSteps.push(currentSteps);

        if ( !(currentSteps - 1) ) {
          if ( !(needleNumber % 2) ) {
            timingsSteps.push(currentSteps);
            i++;
          }
          descending = !descending;
        }
        currentSteps += 1 - 2 * descending;
      }


      let stepTime = this.animationDurationMS / totalStepsQuantity;
      let lastTime = 0;

      timingsSteps.forEach((steps, index, arr) => {
        lastTime += stepTime * steps;
        arr[index] = Math.floor(lastTime);
      });

      return timingsSteps;
    },
    startKeyboardAnimation () {
      if ( !this.typingTimings ) {
        let currentTime = this.oneSymbolTypingTime + Math.floor(this.typingTimeModification * Math.random());

        this.typingTimings = [];

        let newTypeTiming;

        for (let i = 0; i < this.animationTextToType.length; i++) {
          this.typingTimings.push(currentTime);

          newTypeTiming = this.oneSymbolTypingTime + Math.floor(this.typingTimeModification * Math.random());

          currentTime += newTypeTiming;
        }
      }

      for (let i = 0; i < this.typingTimings.length; i++) {
        // let needleToTypeKeyElement = this.getNeedleKey( this.animationTextToType[i] );
        let currentTiming = this.typingTimings[i];

        if (i + 1 === this.typingTimings.length) {
          this.timeouts.push(setTimeout(this.startKeyboardAnimation, currentTiming + 3000));
        }

        // this.createTimeout(needleToTypeKeyElement, currentTiming);
      }
    },
    // createTimeout (needleToTypeKeyElement, currentTiming) {
    //   this.timeouts.push(setTimeout(() => {
    //     if (needleToTypeKeyElement.classList.contains("keyboardKeyCorrect")) {
    //       needleToTypeKeyElement.classList.remove("keyboardKeyCorrect");
    //     }

    //     this.timeouts.push(setTimeout(() => {
    //       needleToTypeKeyElement.classList.add("keyboardKeyCorrect");
    //     }, 100));
    //   }, currentTiming));
    // },
    getNeedleKey(needleKey) {
      let possibleKeyboardKeys = (document.querySelectorAll('[data-char]'));
      let possibleShiftKeyboardKeys = (document.querySelectorAll('[data-shift-char]'));

      return Array.prototype.find.call(possibleKeyboardKeys, (el) => el.dataset.char === needleKey) ||
        Array.prototype.find.call(possibleShiftKeyboardKeys, (el) => el.dataset.shiftChar === needleKey);
    },
  }
}
</script>

<style scoped>
@keyframes opacityUp {
  from {
    opacity: .1;
  }

  to {
    opacity: 1;
  }
}

.opacityUpClass {
  animation: opacityUp ease-in-out 3s;
  animation-fill-mode: forwards;
}

.whyTouchTypingBlock {
  padding-top: 200px;
}

.gradientHeading {
  font-family: GT Walsheim Pro, sans-serif;
  font-weight: bold;
  font-style: normal;
  font-size: 110px;
  line-height: 100px;
  margin-bottom: 0;
  background: linear-gradient(94.64deg, #2E8DFB 8.06%, #E6A0FF 76.68%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent
}

.landingDivider {
  margin-top: 32px;
  border-top: 1px solid #D9D9D9;
  margin-bottom: 100px;
}

.special-mb-5 {
  margin-bottom: 3.5rem;
}

.special-mb-6 {
  margin-bottom: 140px;
}

.special-mb-7 {
  margin-bottom: 12rem;
}

.baseSubHeading {
  font-family: GT Walsheim Pro, sans-serif;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
}

.blackSubHeading:not:last-child {
  background: linear-gradient(93.41deg, #1D1D1D 20.16%, #5B5B5B 67.98%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.colorfulPurple {
  background: linear-gradient(93.41deg, #C4A0FF 20.16%, #8C46FE 67.98%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.colorfulBlue {
  color: rgba(0, 0, 0, 0);
  background: linear-gradient(92.5deg, #98D6FF 26.56%, #44B4FE 70.14%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.informationParagraph {
  font-family: GT Walsheim Pro, sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 60px;
}

.timer {
  font-family: GT Walsheim Pro, sans-serif;
  font-size: 110px;
  font-style: normal;
  font-weight: 700;
  line-height: 126px;
  display: inline-block;
  opacity: 0.1;
}

.descriptionTimerText {
  font-family: GT Walsheim Pro, sans-serif;
  font-size: 24px;
  line-height: 32px;
  font-style: normal;
  font-weight: 500;
  color: #333333;
  position: relative;
}

.descriptionTimerText::before {
  content: "";
  width: 24px;
  height: 24px;
  position: absolute;
  left: -40px;
  top: calc(50% - 12px);
  background-image: url("../../img/WhyTouchTyping/timer.svg");
  user-select: none;
  background-repeat: no-repeat;
  background-size: cover;
}

.smallLandingLink {
  color: #0082FF;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  font-family: GT Walsheim Pro, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  transition: box-shadow .15s ease-in-out;
}

.smallLandingLink:focus {
  outline: none;
  box-shadow: 0 0 0 4px #87ABF9;
}

.smallLandingLink:hover {
  color: #3DA0FF;
}

.smallLandingLink:active {
  color: #0073E2;
}

.enjoyBlock {
  position: relative;
}

.arrows {
  position: absolute;
  top: 100%;
  left: calc(100% - 330px);
}

.keyboardWrapper {
  overflow: hidden;
  min-height: 371px;
  min-width: 100%;
  position: relative;
}

@media (max-width: 1200px) {
  .timer {
    font-size: 90px;
    line-height: 100px;
  }

  .arrows {
    left: calc(100% - 230px);
  }
}

@media screen and (max-width: 992px) {
  .gradientHeading {
    font-size: 80px;
    line-height: 72px;
  }

  .baseSubHeading {
    font-size: 48px;
  }

  .timer {
    font-size: 64px;
    line-height: 82px;
  }

  .smallLandingLink {
    font-family: GT Walsheim Pro, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
  }

  .keyboardWrapper {
    min-height: 226px;
  }

  .arrows {
    left: calc(100% - 175px);
  }
}

@media screen and (max-width: 768px) {
  .whyTouchTypingBlock {
    padding-top: 90px;
  }

  .gradientHeading {
    font-size: 50px;
    line-height: 45px;
  }

  .baseSubHeading {
    font-family: GT Walsheim Pro, sans-serif;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 44px;
  }

  .landingDivider {
    margin-top: 24px;
    margin-bottom: 60px;
  }

  .timer {
    font-size: 70px;
    line-height: 76px;
  }

  .descriptionTimerText {
    padding-left: 42px;
  }

  .smallLandingLink {
    margin-left: 42px;
  }

  .descriptionTimerText::before {
    left: 0;
  }

  .informationParagraph {
    font-size: 18px;
    line-height: 26px;
  }

  .keyboard {
    padding-bottom: 0;
  }

  .special-mb-6 {
    margin-bottom: 110px;
  }

  .special-mb-7 {
    margin-bottom: 6rem;
  }

  .arrows {
    left: calc(100% - 380px);
  }
}

@media screen and (max-width: 576px) {
  .gradientHeading {
    font-size: 44px;
    line-height: 40px;
  }

  .arrows {
    left: 130px;
  }
}
</style>
