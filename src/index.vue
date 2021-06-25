<template>
  <div id="index">
    <transition name="fade-router" mode="out-in">
      <router-view
        @update-user-info="updateUserInfo"
        @start-loading="loadRedirect = true"
        @end-loading="loadRedirect = false"
        ref="routerView"
      />
    </transition>

    <transition name="fade">
      <Loader class="left-0" v-if="loadRedirect"/>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Configuration of bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { BButton } from 'bootstrap-vue';
Vue.component('b-button', BButton);
import { ButtonPlugin } from 'bootstrap-vue';
Vue.use(ButtonPlugin);

import { BContainer, BRow, BCol } from 'bootstrap-vue';
Vue.component('b-container', BContainer);
Vue.component('b-row', BRow);
Vue.component('b-col', BCol);
import { LayoutPlugin } from 'bootstrap-vue';
Vue.use(LayoutPlugin);

import { BProgress, BProgressBar } from 'bootstrap-vue';
Vue.component('b-progress-bar', BProgressBar);
Vue.component('b-progress', BProgress);
import { ProgressPlugin } from 'bootstrap-vue';
Vue.use(ProgressPlugin);

import { BCard, BCardHeader, BCardText, BCardBody } from 'bootstrap-vue';
Vue.component('b-card', BCard);
Vue.component('b-card-header', BCardHeader);
Vue.component('b-card-text', BCardText);
Vue.component('b-card-body', BCardBody);
import { CardPlugin } from 'bootstrap-vue';
Vue.use(CardPlugin);

import { BCollapse } from 'bootstrap-vue';
Vue.component('b-collapse', BCollapse);
import { CollapsePlugin } from 'bootstrap-vue';
Vue.use(CollapsePlugin);

import { BFormInput, BFormCheckbox, BFormSelect } from 'bootstrap-vue';
Vue.component('b-form-input', BFormInput);
Vue.component('b-form-checkbox', BFormCheckbox);
Vue.component('b-form-select', BFormSelect);
import { FormPlugin } from 'bootstrap-vue';
Vue.use(FormPlugin);

import { BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav } from 'bootstrap-vue';
Vue.component('b-navbar', BNavbar);
Vue.component('b-navbar-brand', BNavbarBrand);
Vue.component('b-navbar-toggle', BNavbarToggle);
Vue.component('b-navbar-nav', BNavbarNav);
import { NavbarPlugin } from 'bootstrap-vue';
Vue.use(NavbarPlugin);

import { VBTooltip } from 'bootstrap-vue';
Vue.directive('b-tooltip', VBTooltip);
import { VBTooltipPlugin } from 'bootstrap-vue';
Vue.use(VBTooltipPlugin);

import { BNavItem, BNavItemDropdown } from 'bootstrap-vue';
Vue.component('b-nav-item', BNavItem);
Vue.component('b-nav-item-dd', BNavItemDropdown);
import { NavPlugin } from 'bootstrap-vue';
Vue.use(NavPlugin);

import { BDropdownItem } from 'bootstrap-vue';
Vue.component('b-dd-item', BDropdownItem);
import { DropdownPlugin } from 'bootstrap-vue';
Vue.use(DropdownPlugin);

import { VBModal } from 'bootstrap-vue';
Vue.directive('b-modal', VBModal);
import { ModalPlugin } from 'bootstrap-vue';
Vue.use(ModalPlugin);

import { BEmbed } from 'bootstrap-vue';
Vue.component('b-embed', BEmbed);
import { EmbedPlugin } from 'bootstrap-vue';
Vue.use(EmbedPlugin);


import Loader from "@/components/Loader";

export default {
  name: 'Index',
  data() {
    return {
      loadRedirect: false,
      paymentStatus: "",
      detail: "",
      buttonText: "",
      buttonUrl: "",
      userInfo: null,
      wantsStudent: false,
      lessonsLimitExceeded: false,
      achievementAchieved: false,
      speedTestResults: null,
    }
  },
  components: {
    Loader
  },
  watch: {
    '$route': {
      handler: 'processTransition',
      immediate: true
    },
    userInfo: {
      handler: 'refreshingUserInfo',
      deep: true
    }
  },
  methods: {
    processTransition(to, from) {
      // Fix changing hash on one page (otherwise appear loader)
      if (from && to.name === from.name && to.hash !== from.hash) {
        return;
      }

      this.loadRedirect = true;

      // Fix lazy load error with redirect (meta will load after component - need loader)
      if (!to.name) {
        return;
      }

      document.title = to.meta.title || 'Typing school';

      // Disabling customerly widget on simulator
      let stylizationTag = document.getElementById('customerlyStylization');

      if (to.name === 'lesson' && !stylizationTag) {
        let stylizationWidget = document.createElement('style');
        stylizationWidget.id = "customerlyStylization";

        document.head.appendChild(stylizationWidget);

        let cssStylizationWidget = "#customerly-container {  display: none!important;  }";

        stylizationWidget.appendChild(document.createTextNode(cssStylizationWidget));
      } else if (stylizationTag) {
        stylizationTag.remove();
      }

      // Authorization block
      let isPublic = to.meta.isPublic;

      if (isPublic && !localStorage.getItem('UTMData')) {
        localStorage.setItem('UTMData', JSON.stringify(this.$route.query));
      }

      this.refreshingUserInfo();
    },
    refreshingUserInfo() {
      let header = this.$refs.routerView && this.$refs.routerView.$refs && this.$refs.routerView.$refs.header;

      if (header) {
        header.updateHeaderInfo();
      }
    },
    async updateUserInfo({updateSettingsUserStorage} = {}) {
      let email = localStorage.getItem('email');
      let name = localStorage.getItem('name');
      let subscriptionCode = localStorage.getItem('subscriptionCode');
      let subscriptionExpiresIn = localStorage.getItem('subscriptionExpiresIn');
      let restOfLessons = localStorage.getItem('restOfLessons');
      let registeredWithGoogle = localStorage.getItem('registeredWithGoogle');

      this.userInfo = {
        name,
        email,
        restOfLessons,
        registeredWithGoogle,
        subscription: {
          subscriptionCode,
          subscriptionExpiresIn
        }
      };

      if (updateSettingsUserStorage && this.$refs.routerView) {
        this.$refs.routerView.updateUserInfoStorage();
      }
    },
  }
}
</script>

<style>
#index {
  min-height: calc(100vh - 80px);
  min-width: 100%;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  font-variant-ligatures: common-ligatures;
  font-size: 20px;
  font-weight: 400;
}

body {
  background-color: #fff;
}

img, svg {
  user-select: none;
}

.fade-router-enter-active {
  animation: opacity .3s ease-in-out;
}

.fade-router-leave-active {
  animation: opacity .3s ease-in-out;
  animation-direction: reverse;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to {
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

.typed-cursor {
  font-weight: normal;
  color: #454545;
}

.dropdown-toggle {
  transition: box-shadow .15s ease-in-out;
  border-radius: 6px;
}

.dropdown-toggle:focus, .dropdown-item:focus .ddItem  {
  box-shadow: 0 0 0 4px #87ABF9;
  outline: none;
}

.dropdown-toggle[aria-expanded="true"] .userName svg {
  transform: rotate(180deg);
  fill: #0082FF;
}

.navigation-link[aria-expanded="true"] svg {
  transform: rotate(180deg);
  fill: #0082FF;
}

.dropdown-toggle[aria-expanded="true"] .userName {
  color: #0082FF!important;
}

.navigation-link[aria-expanded="true"], .dropdown-item.router-link-active .ddItem {
  color: #0082FF!important;
  background-color: #E3F1FF!important;
}

.dropdown-menu {
  background: #FFFFFF;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  border: none;
  width: 275px;
  margin-top: 8px;
}

.dropdown-item:hover, .dropdown-item:active, .dropdown-item:focus {
  background: none;
}

.dropdown-item:hover .ddItem {
  background: #F5F5F5;
}

.dropdown-item:hover .ddIconElement, .dropdown-item:active .ddIconElement,
.dropdown-item:focus .ddIconElement, .dropdown-item.router-link-active .ddItem .ddIconElement {
  fill: #0082FF;
  opacity: 1;
}

.dropdown-item:focus {
  outline: none;
}

.dropdown-item:active .ddItem, .dropdown-item:focus .ddItem {
  background: #DCEEFF;
}

.dropdown-item:active .ddIcon,.dropdown-item:focus .ddIcon,
.dropdown-item.router-link-active .ddItem .ddIcon {
  fill: #BDDBF9;
}

.tooltip-inner {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.154px;
  color: #FFFFFF;
  background-color: #0082FF;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 4px 32px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  padding: 8px 12px;
}

.tooltip.fail .tooltip-inner {
  background-color: #FA4242;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.04), 0 4px 32px rgba(0, 0, 0, 0.16);
}

.tooltip .arrow::before {
  border-bottom-color: #0082FF;
  border-top-color: #0082FF;
  left: 20px;
}

.tooltip.fail .arrow::before {
  border-bottom-color: #FA4242;
  border-top-color: #FA4242;
  left: 20px;
}

.tooltip.standardArrow .arrow::before {
  left: 0;
}

.tooltip {
  z-index: 949;
}

.closeButton {
  color: #8d8d8d;
  position: absolute;
  top: 4%;
  z-index: 1;
  right: 4%;
  cursor: pointer;
  transition: all .15s ease-in-out;
}

.closeButton:hover, .closeButton:focus {
  box-shadow: none;
  color: #C8C8C8;
}

/* Stylization of customerly widget */

#customerly-close-button, #customerly-back-button {
  display: flex!important;
}

#customerly-container .customerly-sheet, #customerly-container .customerly-launcher {
  z-index: 990!important;
}

.reveal:not(.reveal-no-transform).show {
  opacity: 1;
  transform: translateY(0);
}

.reveal:not(.reveal-no-transform) {
  opacity: 0;
  transform: translateY(40px);
  transition: transform 1.5s cubic-bezier(.19,1,.22,1),opacity 1s cubic-bezier(.19,1,.22,1);
  transition-delay: .2s;
  will-change: transform;
}

/*@media (prefers-color-scheme: dark) {*/
/*  body {*/
/*    background-color: #2D2D2D!important;*/
/*  }*/
/*}*/




/* TODO decompose */
#Simulator {
  min-width: 100%;
  min-height: 100vh;
}

/*Header styles*/

#Simulator header .container .row {
  min-height: 50px;
}

#header.simulatorHeader {  /* TODO fix scoped */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
  min-height: 80px;
  background-image: linear-gradient(to bottom,#fff 0,rgba(237,237,239,.4) 100%);
  backdrop-filter: blur(136px);
  font-family: "Gotham Pro", "Arial",sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;
}

.simulatorStatistics {  /* TODO fix scoped */
  width: 50%;
  min-width: 360px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #D9D9D9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  padding: 8px 16px 6px;
  transition: opacity .4s;
  background: white;
  color: #b2b2b2;
  position: relative;
}

.editableValue {  /* TODO fix scoped */
  font-weight: 500;
  color: #444;
  font-size: 17.5px;
  line-height: 17.5px;
  font-family: "Gotham Pro", "Arial", sans-serif;
}

.indicatorDescription {  /* TODO fix scoped */
  font-size: 12.5px;
  line-height: 12.5px;
  margin-left: 5px;
}

.speedometer, .accuracyMeter {  /* TODO fix scoped */
  padding-left: 24px;
  width: 156px;
}

.verticalDivider {  /* TODO fix scoped */
  border-left: 1px solid #D9D9D9;
  position: absolute;
  height: 19px;
  left: 50%;
}

.simulatorIcon {  /* TODO fix scoped */
  position: relative;
  right: 12px;
  bottom: 2px;
}

.pauseButton {
  width: 50px;
}

/* Modal displays */

.hintSettings {
  border-top: 1px solid #ededef;
  border-bottom: 1px solid #ededef;
  padding: 15px 0;
  margin-bottom: 25px;
}

.hintSettings p {
  font-size: 17px!important;
  line-height: 1.4!important;
}

.keyboardImg {
  position: absolute;
  right: 1%;
  top: 1%;
  width: 24px;
  height: 24px;
  border: 0;
  border-radius: 50%;
  padding: 0;
  outline: 0;
  cursor: pointer;
  color: #C8C8C8;
  z-index: 1;
  transition: all .15s ease-in-out;
}

.custom-control {
  min-height: 30px;
}

.switcher {
  margin-right: 5px;
}

.switcher input {
  height: 30px;
}

.custom-switch.b-custom-control-lg .custom-control-label::before {
  border-radius: 30px;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px #ededef;
  background-color: #f8f8f8;
  top: 0!important;
  width: 50px;
  height: 30px;
  border: none;
}

.custom-control-input:active ~ .custom-control-label::before,
.custom-control-input:not(:disabled):active ~ .custom-control-label::before {
  background-color: #f8f8f8;
  border: none;
  box-shadow: inset 0 0 0 1px #ededef;
}

.custom-switch .custom-control-input:disabled:not(:checked) ~ .custom-control-label::before {
  opacity: .6;
}

.custom-control-input:disabled:not(:checked) ~ .custom-control-label::before,
.custom-switch.b-custom-control-lg .custom-control-input:disabled:not(:checked) ~ .custom-control-label::after {
  cursor: default;
}

.custom-control-input:focus ~ .custom-control-label::before,
.custom-control-input:focus:not(:checked) ~ .custom-control-label::before,
.custom-control-input:hover:not(:disabled) ~ .custom-control-label::before {
  background-color: #ededef;
  box-shadow: inset 0 0 0 1px #d0d0d0;
  border: none;
}

.custom-control-input:checked ~ .custom-control-label::before {
  background-color: #4cd864;
  box-shadow: none;
  border: none;
}

.custom-control-input:checked:focus ~ .custom-control-label::before,
.custom-control-input:checked:not(:disabled):focus ~ .custom-control-label::before,
.custom-control-input:checked:hover ~ .custom-control-label::before {
  background-color: #3eb452;
  box-shadow: none;
  border: none;
}

.custom-control-input:checked:active ~ .custom-control-label::before,
.custom-control-input:checked:not(:disabled):active ~ .custom-control-label::before {
  background-color: #4cd864;
  box-shadow: none;
  border: none;
}

.custom-switch .custom-control-input:disabled:checked ~ .custom-control-label::before {
  background-color: #4cd864;
  opacity: .6;
}

.custom-control-input:disabled:checked ~ .custom-control-label::before,
.custom-switch.b-custom-control-lg .custom-control-input:disabled:checked ~ .custom-control-label::after {
  cursor: default;
}

.custom-switch.b-custom-control-lg .custom-control-label::after {
  cursor: pointer;
  border-radius: 50%;
  top: 0.15rem!important;
  width: 25px;
  height: 25px;
  background-color: #fff;
  box-shadow: 0 0 2.5px rgba(0,0,0,.2);
}

.custom-switch.b-custom-control-lg .custom-control-input ~ .custom-control-label::after {
  transform: translateX(0.1rem);
}

.custom-switch.b-custom-control-lg .custom-control-input:checked ~ .custom-control-label::after {
  transform: translateX(1.3rem);
}

.pauseTitle {
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-top: 0;
  font-weight: 500;
  column-gap: 24px;
  font-size: 25px;
  line-height: 25px;
  font-family: "Gotham Pro", sans-serif;
}

.pauseTitle img {
  margin-right: 0!important;
  height: 60px;
}

.pauseMenu {
  width: 400px;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 24px 48px rgba(0,0,0,.34);
  margin: auto;
}

.pauseSettings {
  margin-bottom: 12px;
  color: #444;
}

.pauseSettings p {
  font-family: "Gotham Pro", sans-serif;
  font-weight: 400;
  font-size: 15px;
  margin: 0;
  line-height: 15px;
}

/* The second modal */

.keyboardMenu {
  max-width: 400px;
  border-radius: 12px;
  padding: 8px;
  box-shadow: 0 16px 32px rgba(0, 0, 0, .34);
  margin: auto;
}

#keyboardMenu .settingsBlockTitle {
  font-family: "Gotham Pro", sans-serif;
  font-weight: 500;
  margin-bottom: 18px;
  font-size: 17px;
  line-height: 17px;
  color: rgba(0, 0, 0, .6);
}

.labelBlock {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-weight: 500;
  text-align: center;
  font-size: 12.5px;
  line-height: 1.25;
  padding-top: 8px;
}

.titleSettings {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  margin-top: 0;
  margin-bottom: 36px;
  font-weight: 500;
}

.titleSettings img {
  height: 60px;
  border-radius: 12px;
  background-size: 60px;
  background-color: #ededef;
  padding: 12px;
  margin-right: 24px;
}

.keyboardSettings {
  border-bottom: 1px inset;
  grid-template-columns: auto 1fr;
  text-align: center;
  margin-bottom: 24px;
}

.keyboardOptions {
  position: relative;
  display: grid;
  place-items: center;
  color: black;
  opacity: .6;
  cursor: pointer;
  user-select: none;
  text-align: center;
  padding: 10px 5px 16px!important;
  transition: box-shadow .15s ease-in-out;
}

.keyboardOptions:hover:not(.active) {
  opacity: .8;
}

#OSInputBlock .keyboardOptions.active {
  margin-bottom: -1px;
  border-bottom: 3px solid #4ca6ff;
}

.keyboardOptions:focus {
  opacity: .8;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 0 0 4px #87ABF9;
}

.keyboardOptions.active {
  color: #4ca6ff;
  fill: currentColor;
}

.RUS {
  font-family: "Gotham Pro", "Arial", sans-serif;
  font-weight: 500;
  box-shadow: inset 0 0 0 2px rgba(0, 0, 0, .6);
  border-radius: 24px;
  padding: 6px 8px 5px;
  font-size: 12.5px;
  line-height: 12.5px;
  color: rgba(0, 0, 0, .6);
  text-align: center;
}

.keyboardOptions.active .RUS{
  color: #fff;
  background-image: linear-gradient(to bottom,#02b7ff 0,#0080ff 100%);
  box-shadow: none;
}

.layoutOptions {
  justify-items: center;
  cursor: pointer;
}

.layoutOptions.active {
  opacity: 1;
  color: rgb(0,0,0);
}

/* Main */

#Simulator main {
  min-height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
}

#Simulator main:not(.mainOnlyText) {
  justify-content: space-between;
}

.mainOnlyText {
  justify-content: center;
}

.typingHintBlock:not(.onlyText) {
  padding-top: 5vh;
}

.typingHintBlock.onlyText {
  padding-bottom: 2vh;
  padding-top: 0;
  min-height: 300px;
}

.typingHintBlock.onlyText .startKeys {
  height: 100px;
}

.keyboardOptions.active .inputIcon {
  fill: currentColor;
  color: #4CA6FF;
}

.keyboardOptions.active {
  opacity: 1!important;
}

.OSOptionIcon {
  width: calc( 16vh );
  height: calc( 16vh );
  max-width: 50px;
  max-height: 50px;
}

.enterOptionIcon {
  width: calc( 10vh );
  height: calc( 12vh );
  max-width: 90px;
  max-height: 108px;
}

@media (min-height: 720px) {
  .RUS {
    border-radius: 30px;
    padding: 7.5px 10px 6.5px;
  }
}

@media (min-height: 860px) {
  .RUS {
    border-radius: 36px;
    padding: 9px 12px 8px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s!important;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
