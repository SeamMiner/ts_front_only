<template>
  <transition name="fade-popup">
    <div class="wrapper" :id="id" v-show="showPopup">
      <section class="popup">
        <slot></slot>
      </section>
    </div>
  </transition>
</template>

<script>
export default {
name: "mobilePopup",
  props: {
    id: String,
  },
  data() {
    return {
      showPopup: false,
      offsetY: 0,
    }
  },
  methods: {
   openPopup() {
     // let wrapper = document.getElementById(this.id);

     document.addEventListener("click", this.closePopup);
     document.addEventListener("touchstart", this.startPosition);
     document.addEventListener("touchmove", this.changePopup);
     document.addEventListener("touchend", this.returnPopup);

     this.showPopup = true;

     document.body.style.overflow = "hidden";
   },
    closePopup(evt, click = false) {
     if (this.showPopup) {
       let wrapper = document.getElementById(this.id);

       if(click || evt.composedPath()[0] === wrapper) {
         this.showPopup = false;
         document.body.style.overflow = "auto";
         document.removeEventListener("click", this.closePopup);
         document.removeEventListener("touchstart", this.startPosition);
         document.removeEventListener("touchmove", this.changePopup);
         document.removeEventListener("touchend", this.returnPopup);
       }
     }
    },
    changePopup(evt) {
      let wrapper = document.getElementById(this.id);
      let popup = wrapper.firstChild;

      if(evt.touches[0].clientY) {
        let offset = this.offsetY - evt.touches[0].clientY;

        if (offset < 0) {
          popup.style.transitionDuration = ".1s"
          popup.style.bottom = offset + "px";
        }

        if ((window.innerHeight - evt.touches[0].clientY) < 100) {
          this.showPopup = false;
          document.body.style.overflow = "auto";
          document.removeEventListener("click", this.closePopup);
          document.removeEventListener("touchstart", this.startPosition);
          document.removeEventListener("touchmove", this.changePopup);
          document.removeEventListener("touchend", this.returnPopup);
        }
      }
    },
    startPosition(evt) {
     this.offsetY = evt.touches[0].clientY;
    },
    returnPopup() {
     let popup = document.getElementById(this.id).firstChild;
     popup.style.transitionDuration = ".5s"
     popup.style.bottom = "0";
    }
  },

}
</script>

<style scoped>
.wrapper {
  position: fixed;
  height: 100vh;
  width: 100%;
  top:0;
  left: 0;
  background-color: rgba(0,0,0, .3);
  z-index: 1200;

  /*  filter: blur(40px);*/
}

.popup {
  border-radius: 24px 24px 0 0;
  background: #FFFFFF;
  position: fixed;
  padding: 44px 24px 40px;
  width: 100%;
  transition: all .5s ease-in-out;
  bottom: 0;
  /*box-shadow: 0 0 0  rgba(0,0,0, .3) ;*/
}

.popup:before {
  content: "";
  width: 32px;
  height: 4px;
  background: #B7B7B7;
  border-radius: 10px;
  position: absolute;
  left: calc( 50% - 16px );
  top: 8px;
}

.fade-popup-enter-active {
  animation: opacity .5s ease-in-out;
}

/*
.fade-popup-enter-active .popup {
  bottom: 0;
  !*transition-delay: .3s;*!
}
*/

.fade-popup-leave-active {
  animation: opacity .5s ease-in-out;
  animation-direction: reverse;
}

.fade-popup-enter-active, .fade-popup-leave-active {
  transition: opacity .5s;
}

.fade-popup-enter-active .popup, .fade-popup-enter-to .popup, .fade-popup-enter .popup,
.fade-popup-leave-active .popup, .fade-popup-leave-to .popup, .fade-popup-leave .popup {
  bottom: -100% !important;
}

.fade-popup-enter-to, .fade-popup-leave-to {
  opacity: 0;
}

@keyframes opacity {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

</style>