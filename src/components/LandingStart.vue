<template>
  <section class="startScreen align-items-center justify-content-center d-flex flex-column position-relative">

    <b-col cols="auto" class="keyboard_top d-flex align-items-center flex-column w-100 order-1">
      <div class="topic">
        <h2 class="keyboardTopic">Освойте слепую печать</h2>
      </div>

      <div class="dynamicText d-none d-md-flex flex-row"><span class="dynamic"></span></div>
      <div class="dynamicText d-flex d-md-none flex-row dynamic text-center">и станьте продуктивнее</div>
    </b-col>

    <b-col cols="auto" class="mt-4 p-0 order-4 order-md-2">
      <PrimaryButton
          data-size="sm"
          @click.native="$router.push('/signup_with')"
      >
        Попробовать Typing School
        <svg class="ml-1 mb-1" width="12" height="12" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)"><path d="M2.21292 12.5C2.01143 12.4996 1.81351 12.4471 1.63862 12.3477C1.24482 12.126 1 11.6955 1 11.2283V1.77179C1 1.30321 1.24482 0.874077 1.63862 0.652339C1.81767 0.550091 2.02108 0.497509 2.22757 0.500091C2.43407 0.502672 2.63608 0.560321 2.81249 0.667013L10.9462 5.50482C11.1157 5.61043 11.2555 5.7571 11.3523 5.93105C11.4492 6.10501 11.5 6.30057 11.5 6.49938C11.5 6.69819 11.4492 6.89374 11.3523 7.0677C11.2555 7.24166 11.1157 7.38832 10.9462 7.49394L2.81117 12.333C2.63065 12.4415 2.42387 12.4992 2.21292 12.5Z" fill="white"/></g><defs><clipPath id="clip0"><rect width="12" height="12" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
      </PrimaryButton>
    </b-col>

    <div class="d-flex justify-content-center w-100 order-2 order-md-3" id="keyboardWrapper">
      <!-- Here will be keyboard image -->
    </div>

    <div class="scrollMouse order-4" @click="scrollIntoView">
      <span></span>
    </div>

  </section>
</template>

<script>
import Typed from "typed.js";

import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: "ladingStart",
  components: {
    PrimaryButton
  },
  methods: {
    scrollIntoView() {
      scrollTo(0, document.documentElement.clientHeight || document.body.clientHeight);
    },
  },
  mounted() {
    const options = {
      strings: [
        'и станьте продуктивнее',
        'и набирайте текст со скоростью мысли',
        'и поразите друзей и коллег',
      ],
      loop: true,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 1500,
      smartBackspace: true,
    };
    if (window.innerWidth >= 768) {
      new Typed('.dynamic', options);
    }

    // Keyboard image
    const keyboardImage = new Image();
    keyboardImage.onload = () => this.$emit("image-load");
    keyboardImage.src = require("../../img/Landing/b_key.png");
    keyboardImage.alt = "Картинка клавиатуры из тренажёра Typing School";

    keyboardImage.style.marginTop = "72px";
    keyboardImage.style.maxWidth = "830px";
    keyboardImage.style.minWidth = "650px";
    keyboardImage.style.maxHeight = "220px";

    const mediaQueryMd = window.matchMedia('(max-width: 1400px)');
    const mediaQueryLg = window.matchMedia('(max-width: 768px)');

    if (mediaQueryMd.matches) {
      keyboardImage.style.maxWidth = "100%";
      keyboardImage.style.minWidth = "280px";
      keyboardImage.style.marginTop = "48px";
    } else if (mediaQueryLg.matches) {
      keyboardImage.style.maxWidth = "645px";
      keyboardImage.style.minWidth = "560px";
    }

    const keyboardWrapper = document.getElementById("keyboardWrapper");
    keyboardWrapper.appendChild(keyboardImage);
  }
}
</script>

<style scoped>
.startScreen {
  margin-top: 76px;
  min-height: calc(100vh - 76px);
}

.keyboardTopic {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  text-align: center;
  font-size: 70px;
  line-height: 80px;
  display: inline-block;
  background: linear-gradient(93.41deg, #464A51 20.16%, #18181C 67.98%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

img {
  user-select: none;
}

.dynamicText {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 45px;
  line-height: 52px;
  min-height: 52px;
  text-align: center;
}

.dynamic {
  background: linear-gradient(45deg, #408BE1 0%,  #4D9DE7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  list-style: none;
  display: inline-block;
}

.scrollMouse {
  width: 26px;
  height: 40px;
  border: 1px solid #B0B0B0;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10px;
  padding-bottom: 10px;
  cursor: pointer;
  margin-top: 24px;
}

.scrollMouse span {
  background-color: #B0B0B0;
  border-radius: 50%;
  width: 4px;
  height: 4px;
  animation-name: scrollMouse;
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@media (max-width: 1024px) {
  .keyboardTopic {
    font-size: 60px;
    line-height: 70px;
  }

  .dynamicText {
    font-size: 34px;
    line-height: 44px;
  }
}

@media (max-width: 768px) {
  .keyboardTopic {
    font-size: 44px;
    line-height: 48px;
    text-align: center;
  }

  .dynamicText {
    font-size: 26px;
    line-height: 30px;
    min-height: 0;
  }
}

@media (max-width: 576px) {
  .keyboardTopic {
    font-size: 34px;
    line-height: 38px;
    text-align: center;
  }

  .dynamicText {
    font-size: 22px;
    line-height: 26px;
  }
}

@media (max-width: 320px) {
  .scrollMouse {
    width: 16px;
    height: 30px;
    padding-top: 8px;
    padding-bottom: 8px;
  }
}

@keyframes scrollMouse {
  0% {
    opacity: 1;
    margin-top: 0;
  }

  50% {
    opacity: 0;
    margin-top: 14px;
  }

  75% {
    opacity: 0;
    margin-top: 0;
  }

  100% {
    opacity: 1;
    margin-top: 0;
  }
}

@media (max-height: 650px) and (min-width: 576px) {
  .scrollMouse {
    display: none;
  }
}
</style>
