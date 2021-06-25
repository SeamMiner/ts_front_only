<template>
  <section class="d-flex flex-column" id="Health">

    <b-row>
      <b-col cols="12" lg="6" class="heartTopic overflow-hidden d-flex align-items-center align-items-lg-start px-3" v-scroll>
        <div class="d-flex flex-column line-height-1"><span class="landingSecondTopic">Чтобы<br>улучшить<br></span><span class="landingHealth">здоровье</span></div>
        <img src="../../img/Landing/Heart.svg" class="position-absolute heart1 heart" alt="Сердечко 1 - слепая печать улучшает здоровье">
        <img src="../../img/Landing/Heart.svg" class="position-absolute heart2 heart" alt="Сердечко 2 - слепая печать улучшает здоровье">
        <img src="../../img/Landing/Heart.svg" class="position-absolute heart3 heart" alt="Сердечко 3 - слепая печать улучшает здоровье">
        <img src="../../img/Landing/Heart.svg" class="position-absolute heart4 heart" alt="Сердечко 4 - слепая печать улучшает здоровье">
        <img src="../../img/Landing/Heart.svg" class="position-absolute heart5 heart" alt="Сердечко 5 - слепая печать улучшает здоровье">
        <img src="../../img/Landing/Heart.svg" class="position-absolute heart6 heart" alt="Сердечко 6 - слепая печать улучшает здоровье">
        <img src="../../img/Landing/Heart.svg" class="position-absolute heart7 heart" alt="Сердечко 7 - слепая печать улучшает здоровье">
      </b-col>

      <b-col cols="12" lg="6" class="landingText px-3 mt-5 mt-lg-0 h-100 " v-scroll>
        При слепой печати нет необходимости переводит взгляд между монитором и{{'\xa0'}}клавиатурой, что помогает держать осанку и{{'\xa0'}}дает отдых глазам. Также, набор десятью пальцами{{'\xa0'}}&mdash; это идеальный способ тренировки мелкой моторики.
        <b-button class="likeButton d-flex align-items-center text-decoration-none" @click="increaseLikes">
          <svg width="40" height="40" class="mr-3" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.128296 11.255C0.80554 23.5575 12.4713 32.981 18.5693 38.7402C19.3852 39.5107 20.6729 39.5107 21.4888 38.7402C27.5867 32.981 39.2525 23.5575 39.9297 11.255C39.9297 6.63615 35.8247 1.63242 30.3738 1.29032C26.5603 1.05098 23.3867 2.04301 19.9852 7.96192C16.5837 2.04301 13.4977 1.05098 9.68417 1.29032C4.2333 1.63242 0.128279 6.63615 0.128296 11.255Z" fill="url(#paint0_radial)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M19.5383 7.20956C16.3109 1.95817 13.3301 1.0615 9.68417 1.29032C4.2333 1.63242 0.128279 6.63615 0.128296 11.255C0.737134 22.3149 10.2268 31.0479 16.5681 36.8837C20.5268 40.5267 19.5312 40.5268 23.4899 36.8837C29.8312 31.0479 39.3209 22.3149 39.9297 11.255C39.9297 6.63615 35.8247 1.63242 30.3738 1.29032C26.7279 1.06149 23.6669 1.9582 20.4324 7.20988C20.2837 7.45125 20.1347 7.70183 19.9852 7.96192C19.8356 7.70172 19.6867 7.45103 19.5383 7.20956ZM39.1659 11.234C39.1534 7.01201 35.3514 2.37379 30.3264 2.05842C28.5011 1.94386 26.9187 2.12907 25.3986 2.98802C23.8662 3.85393 22.3085 5.45503 20.6461 8.34757L19.9852 9.49769L19.3242 8.34757C17.6598 5.45141 16.1226 3.85078 14.6119 2.98591C13.1154 2.12925 11.557 1.94386 9.73165 2.05842C4.70663 2.37379 0.904652 7.012 0.892107 11.234C1.25298 17.6604 4.73552 23.3299 8.89234 28.1361C10.9676 30.5356 13.1931 32.6998 15.2491 34.6192C15.8701 35.1989 16.4791 35.7593 17.0645 36.2981C20.0698 39.0639 19.9882 39.0639 22.9935 36.2981C23.579 35.7593 24.1879 35.1989 24.8089 34.6192C26.865 32.6998 29.0904 30.5356 31.1657 28.1361C35.3225 23.3299 38.805 17.6605 39.1659 11.234Z" fill="#F41E0E"/><path d="M0 9.9752C0.682594 22.2878 12.4074 32.8157 18.5295 38.743C19.3318 39.5197 20.6103 39.5198 21.4131 38.7435C27.5428 32.8163 39.3174 22.2881 40 9.9752C40 5.35931 35.8685 0.35874 30.3825 0.0168553C26.5444 -0.222334 23.3504 2.06707 19.9269 7.98224C16.5035 2.06707 13.4556 -0.222334 9.61746 0.016855C4.13146 0.35874 -1.70183e-05 5.35931 0 9.9752Z" fill="url(#paint1_linear)"/><path fill-rule="evenodd" clip-rule="evenodd" d="M18.8598 6.23793C15.8548 1.61426 13.0526 -0.197224 9.61746 0.016855C4.13146 0.35874 -1.70183e-05 5.35931 0 9.9752C0.642107 21.5575 11.0553 31.5605 17.3845 37.6403C20.0162 40.1683 19.9686 40.1255 22.6008 37.6016C28.9454 31.5181 39.3593 21.533 40 9.9752C40 5.35931 35.8685 0.35874 30.3825 0.0168553C26.9467 -0.197265 24.027 1.61496 20.9968 6.2406C20.642 6.78216 20.2857 7.36229 19.9269 7.98224C19.5676 7.36127 19.2123 6.78025 18.8598 6.23793ZM38.1913 9.92724C38.1619 6.24181 34.7472 2.10085 30.2701 1.82184C27.493 1.64878 24.8143 3.14806 21.4922 8.88813L19.9269 11.5926L18.3617 8.88813C16.6996 6.01636 15.2236 4.19878 13.8264 3.12616C12.4923 2.10195 11.1993 1.73027 9.72995 1.82184C5.25276 2.10085 1.83809 6.24181 1.80868 9.92724C2.16371 16.023 5.4954 21.7958 9.61483 26.8586C12.6277 30.5615 15.8967 33.7016 18.5581 36.2581C19.3466 37.0155 20.5966 37.0158 21.3858 36.2591C21.4009 36.2447 21.416 36.2302 21.4311 36.2157C24.0902 33.6662 27.3494 30.5413 30.3582 26.8563C34.4924 21.7926 37.8363 16.0207 38.1913 9.92724Z" fill="url(#paint2_linear)"/><defs><radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.029 14.0027) rotate(90) scale(26.1732 26.7749)"><stop stop-color="#FF281C"/><stop offset="0.356209" stop-color="#FD4133"/><stop offset="1" stop-color="#C00F03"/></radialGradient><linearGradient id="paint1_linear" x1="19.971" y1="1.28279" x2="19.971" y2="40.1652" gradientUnits="userSpaceOnUse"><stop offset="0.0185185" stop-color="#FFE0DB"/><stop offset="0.481395" stop-color="#FF4237" stop-opacity="0.141509"/><stop offset="1" stop-color="#CB1002"/></linearGradient><linearGradient id="paint2_linear" x1="19.971" y1="1.28279" x2="19.971" y2="40.1652" gradientUnits="userSpaceOnUse"><stop stop-color="white"/><stop offset="0.319444" stop-color="white" stop-opacity="0"/></linearGradient></defs></svg>
          {{ (likeAmount + localLikeAmount).toLocaleString('ru-RU') }}
        </b-button>
      </b-col>
    </b-row>

  </section>
</template>

<script>
export default {
  name: "LandingLiker",
  props: {
    likeAmount: Number
  },
  data() {
    return {
      localLikeAmount: 0
    }
  },
  mounted() {
    this.localLikeAmount = +localStorage.getItem("likeAmount");

    setTimeout(() => this.checkLocalLikesInterval = setInterval(this.checkLocalLikes, 3000), 3000);
  },
  methods: {
    increaseLikes() {
      this.localLikeAmount = +localStorage.getItem("likeAmount");
      localStorage.setItem("likeAmount", `${++this.localLikeAmount}`);
    },
    checkLocalLikes() {
      this.$emit("update-like-amount", +localStorage.getItem("likeAmount"));
    }
  }
}
</script>

<style scoped>
.heartBlock {
  overflow-x: hidden;
  overflow-y: visible;
}

.heartTopic {
  height: 300px;
  transition-delay: .2s;
}

.heartTopic img {
  user-select: none;
}

.likeButton {
  margin-top: 48px;
  background: #F8F8FA;
  border-radius: 12px;
  padding: 17.5px;
  cursor: pointer;
  transition: box-shadow .15s ease-in-out;
  text-decoration: none;
  font-family: "Gotham Pro", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 27px;
  color: #FE5E52;
  text-align: center;
  width: fit-content;
  border: none;
}

.likeButton:hover {
  background-color: #EBEBEB!important;
  color: #FE5E52!important;

}

.likeButton:active {
  background-color: #FFDEDB!important;
  color: #FE5E52!important;

}

.likeButton:focus {
  box-shadow: 0 0 0 4px #FFDEDB!important;
  outline: none!important;
}

.landingText {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
}

.landingSecondTopic {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 60px;
  background: linear-gradient(93.41deg, #464A51 20.16%, #18181C 67.98%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.landingHealth {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 60px;
  background: linear-gradient(#FE8881 0%, #F66C62 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.heartCloud {
  top: -162px;
  left: 258px;
}

.heart1 {
  width: 60px;
  height: 60px;
  left: 485.23px;
  top: 154.09px;
  transform: rotate(15deg);
}

.heart2 {
  width: 37px;
  height: 37px;
  left: 485.03px;
  top: 59.67px;

  transform: rotate(15deg);
}

.heart3 {
  width: 50px;
  height: 50px;
  left: 407.26px;
  top: 110.22px;

  transform: rotate(-15deg);
}

.heart4 {
  width: 75px;
  height: 75px;
  left: 258px;
  top: 226.6px;

  transform: rotate(-15deg);
}

.heart5 {
  width: 33px;
  height: 33px;
  left: 274.96px;
  top: 22.26px;

  transform: rotate(-15deg);
}

.heart6 {
  width: 50px;
  height: 50px;
  left: 347.84px;
  top: 144.6px;

  transform: rotate(15deg);
}

.heart7 {
  width: 80px;
  height: 80px;
  left: 352.89px;
  top: 5.8px;
  transform: rotate(-4.14deg);
}

@media screen and (min-width:992px) {
  .heartTopic {
    flex-flow: column!important;
  }
}

@media (max-width: 992px) {
  .heart1 {
    transform: scale(0.8) rotate(15deg);
  }
  .heart2 {
    transform: scale(0.8) rotate(15deg);
  }
  .heart3 {
    transform: scale(0.8) rotate(-15deg);
  }
  .heart4 {
    transform: scale(0.8) rotate(-15deg);
  }
  .heart5 {
    transform: scale(0.8) rotate(-15deg);
  }
  .heart6 {
    transform: scale(0.8) rotate(15deg);
  }
  .heart7 {
    transform: scale(0.8) rotate(-4.14deg);
  }
}

@media screen and (max-width: 768px) {
  .landingSecondTopic, .landingHealth {
    font-size: 36px;
    line-height: 34px;
  }

  .landingText {
    font-size: 18px;
    line-height: 26px;
  }

  .heart1 {
    left: 385.23px;
    top: 184.09px;
  }

  .heart2 {
    left: 385.03px;
    top: 59.67px;
  }

  .heart3 {
    left: 307.26px;
    top: 110.22px;
  }

  .heart4 {
    left: 158px;
    top: 226.6px;
  }

  .heart5 {
    left: 174.96px;
    top: 52.26px;
  }

  .heart6 {
    left: 247.84px;
    top: 174.6px;
  }

  .heart7 {
    left: 252.89px;
    top: 5.8px;
  }
}

</style>
