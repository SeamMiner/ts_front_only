<template>
  <b-navbar toggleable="xl" align-v="center" class="headerMain" id="header">
    <b-container>

      <div class="d-flex">
        <b-navbar-brand to="/profile/" class="logoLink d-flex align-items-center">
          <!-- <img src="../../img/WhyTypingSchool/keyboard.svg" alt="Логотип курса по слепой печати Typing School"> -->
          <!--Event logo-->
<!--          <img src="../../img/Events/christmasLogo.svg" alt="Новогодний логотип курса по слепой печати Typing School">-->
<!--          /Event logo-->
          {{'\xa0'}}Typing School
          <span class="pro d-none d-sm-flex ml-1" v-if="hasPro">{{ proOption }}</span>
        </b-navbar-brand>

        <b-row v-if="!hasPro" class="free ml-2 pl-2 my-auto d-none d-md-flex" id="lessons" no-gutters>
          <b-row class="no-gutters lessons">
            <b-col cols="auto" class="available" v-for="n in (lessonsLeft <= 5 && lessonsLeft >= 0 ? +lessonsLeft : 5)" :key="'restLessonIndicator' + n">
              <div class="lessonMiniBlock lessonMiniBlockActive"></div>
            </b-col>
            <b-col cols="auto" class="passed" v-for="a in ((5 - lessonsLeft) <= 5 && (5 - lessonsLeft) >= 0 ? 5 - lessonsLeft : 0)" :key="'expiresLessonIndicator' + a">
              <div class="lessonMiniBlock"></div>
            </b-col>
          </b-row>
          <b-col cols="auto" class="description px-2">На сегодня {{+lessonsLeft === 1 ? "остался" : 'осталось'}} <br> {{ lessonsLeft}} {{ !lessonsLeft || +lessonsLeft === 5 ?  'бесплатных уроков' : +lessonsLeft === 1 ? "бесплатный урок" : 'бесплатных урока'}}</b-col>
        </b-row>
        <b-tooltip target="lessons" triggers="hover focus" placement="bottomright" v-if="!+lessonsLeft && !hasPro">
          Попробуй перейти на{{'\xa0'}}PRO, чтобы
          заниматься без{{'\xa0'}}ограничений
        </b-tooltip>
      </div>


      <div class="d-flex accordion">
        <button class="navigation-link text-decoration-none pointer-event d-none d-lg-block d-xl-none py-2 px-2 px-xl-0 username my-2 mr-2" v-b-toggle.collapseMenuLg>
          {{ username }}
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.68"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.608523 2.68306C0.864224 2.43898 1.2788 2.43898 1.5345 2.68306L5.00008 5.99112L8.46567 2.68306C8.72137 2.43898 9.13594 2.43898 9.39164 2.68306C9.64734 2.92714 9.64734 3.32286 9.39164 3.56694L5.46307 7.31694C5.20737 7.56102 4.7928 7.56102 4.53709 7.31694L0.608523 3.56694C0.352823 3.32286 0.352823 2.92714 0.608523 2.68306Z" fill="currentColor"/></g></svg>
        </button>
        <b-navbar-toggle class="toggleButton" target="nav-collapse">
          <template #default="{ expanded }">
          <span v-if="expanded" class="collapsed">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 5.1966L18.8034 3L12 9.8034L5.1966 3.00001L3 5.19661L9.80339 12L3 18.8034L5.1966 21L12 14.1966L18.8034 21L21 18.8034L14.1966 12L21 5.1966Z" fill="#1D1D1D"/>
            </svg>
          </span>
            <span v-else class="notCollapsed">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H22V7.21053H2V5Z" fill="#1D1D1D"/><path d="M2 10.8947H22V13.1053H2V10.8947Z" fill="#1D1D1D"/><path d="M2 16.7895H22V19H2V16.7895Z" fill="#1D1D1D"/></svg>
          </span>
          </template>
        </b-navbar-toggle>
      </div>

      <b-collapse id="nav-collapse" class="justify-content-end collapseHeader d-xl-none" accordion="profile" is-nav>
        <b-navbar-nav align-v="center" class="landingTopics">
          <b-nav-item class="mr-xl-3 my-md-2 my-xl-0 navigation-link ie-properties" to="/profile/">
            Профиль
          </b-nav-item>
          <b-nav-item class="mr-xl-3 my-md-2 my-xl-0 navigation-link ie-properties" to="/course/1">
            Курс
          </b-nav-item>
          <!--          <b-nav-item class="navigation-link mr-xl-3 my-md-2 my-xl-0 ie-properties" to="/profile/">-->
          <!--            Рейтинг-->
          <!--          </b-nav-item>-->
          <b-nav-item-dd class="dropdownButton d-none d-xl-block p-0" variant="link" id="userMenu" toggle-class="text-decoration-none p-0 dropdownButton" no-caret right>
            <template #button-content>
              <a class="username">
                {{ username }}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg"><g opacity="0.68"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.608523 2.68306C0.864224 2.43898 1.2788 2.43898 1.5345 2.68306L5.00008 5.99112L8.46567 2.68306C8.72137 2.43898 9.13594 2.43898 9.39164 2.68306C9.64734 2.92714 9.64734 3.32286 9.39164 3.56694L5.46307 7.31694C5.20737 7.56102 4.7928 7.56102 4.53709 7.31694L0.608523 3.56694C0.352823 3.32286 0.352823 2.92714 0.608523 2.68306Z" fill="currentColor"/></g></svg>
              </a>
            </template>
            <b-dd-item to="/payment/">
              <b-row class="ddItem py-1">
                <b-col cols="auto" class="d-flex justify-content-center pl-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32ZM15.9222 20.4751C15.645 20.1979 15.645 19.7485 15.9222 19.4713L19.4713 15.9222C19.7485 15.645 20.1979 15.645 20.4751 15.9222L24.0242 19.4713C24.3014 19.7485 24.3014 20.1979 24.0242 20.4751C23.747 20.7523 23.2976 20.7523 23.0204 20.4751L20.683 18.1378V24.2054C20.683 24.5974 20.3652 24.9152 19.9732 24.9152C19.5812 24.9152 19.2634 24.5974 19.2634 24.2054L19.2634 18.1378L16.926 20.4751C16.6488 20.7523 16.1994 20.7523 15.9222 20.4751Z" fill="currentColor" class="ddIconElement"/></svg>
                </b-col>

                <b-col class="p-0 d-flex flex-column justify-content-between">
                  <div class="ddMenuTopic">{{ hasPro ? "PRO подписка" : "Перейти на PRO" }}</div>
                  <div class="ddMenuText">{{ hasPro ? proDaysRest : "499 руб/мес" }}</div>
                </b-col>
              </b-row>
            </b-dd-item>
            <b-dd-item :href="`https://typingschool.typeform.com/to/ucjLxq5e#email=${email}`" target="_blank">
              <b-row class="ddItem py-1">
                <b-col cols="auto" class="d-flex justify-content-center pl-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M8 18.5295C8 4.57757 32 4.40303 32 18.5295C32 27.2516 24.2487 30.5016 16.7539 28.9305C14.9239 31.0787 11.6805 31.8719 10.2857 32C11.8353 30.4345 12.0353 28.2057 11.9057 26.8593C9.47653 25.0728 8 22.3023 8 18.5295ZM19.5653 20.0733C19.3573 20.3933 19.2533 20.7293 19.2533 21.0813H20.9093C20.9093 20.8893 20.9773 20.6973 21.1133 20.5053C21.2573 20.3133 21.4253 20.1293 21.6173 19.9533C21.8173 19.7693 22.0133 19.5773 22.2053 19.3773C22.4053 19.1693 22.5733 18.9213 22.7093 18.6333C22.8533 18.3453 22.9253 18.0333 22.9253 17.6973C22.9253 16.9613 22.6573 16.3853 22.1213 15.9693C21.5933 15.5453 20.9653 15.3333 20.2373 15.3333C19.5893 15.3333 19.0013 15.4973 18.4733 15.8253C17.9533 16.1453 17.5733 16.6013 17.3333 17.1933L18.7493 18.0093C19.0293 17.2973 19.5053 16.9413 20.1773 16.9413C20.5213 16.9413 20.7893 17.0173 20.9813 17.1693C21.1733 17.3213 21.2693 17.5373 21.2693 17.8173C21.2693 18.0813 21.1613 18.3453 20.9453 18.6093C20.7373 18.8733 20.5093 19.1053 20.2613 19.3053C20.0133 19.4973 19.7813 19.7533 19.5653 20.0733ZM20.0813 24.0573C20.3613 24.0573 20.6013 23.9573 20.8013 23.7573C21.0013 23.5573 21.1013 23.3173 21.1013 23.0373C21.1013 22.7573 21.0013 22.5173 20.8013 22.3173C20.6013 22.1173 20.3613 22.0173 20.0813 22.0173C19.8013 22.0173 19.5613 22.1173 19.3613 22.3173C19.1613 22.5173 19.0613 22.7573 19.0613 23.0373C19.0613 23.3173 19.1613 23.5573 19.3613 23.7573C19.5613 23.9573 19.8013 24.0573 20.0813 24.0573Z" fill="currentColor" class="ddIconElement"/></svg>
                </b-col>

                <b-col class="p-0 d-flex flex-column justify-content-between">
                  <div class="ddMenuTopic">Оставить отзыв</div>
                  <div class="ddMenuText">Помогите нам стать лучше</div>
                </b-col>
              </b-row>
            </b-dd-item>
            <b-dd-item to="/settings/">
              <b-row class="ddItem py-1">
                <b-col cols="auto" class="d-flex justify-content-center pl-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M18.0598 8.52568C18.1095 8.22233 18.3673 8 18.6695 8H21.3305C21.6327 8 21.8905 8.22233 21.9401 8.52568L22.3794 11.2084C23.1562 11.4257 23.8909 11.7466 24.568 12.1559L26.6502 10.6419C26.8961 10.4632 27.2328 10.4915 27.4464 10.709L29.3281 12.6244C29.5417 12.8418 29.5696 13.1846 29.394 13.4349L27.8602 15.6207C28.1858 16.2244 28.4464 16.8697 28.6321 17.5467L31.4836 18.0305C31.7816 18.081 32 18.3435 32 18.651V21.3598C32 21.6673 31.7816 21.9298 31.4836 21.9803L28.6321 22.4641C28.4461 23.142 28.1852 23.7881 27.8589 24.3925L29.3834 26.5651C29.559 26.8154 29.5311 27.1582 29.3175 27.3756L27.4358 29.291C27.2222 29.5085 26.8854 29.5368 26.6396 29.3581L24.5703 27.8535C23.8888 28.2657 23.1489 28.5885 22.3664 28.806L21.9295 31.4743C21.8799 31.7777 21.622 32 21.3199 32H18.6589C18.3567 32 18.0989 31.7777 18.0492 31.4743L17.6113 28.7998C16.8326 28.5811 16.0964 28.2581 15.4181 27.8465L13.3392 29.3581C13.0933 29.5368 12.7566 29.5085 12.543 29.291L10.6613 27.3756C10.4477 27.1582 10.4198 26.8154 10.5954 26.5651L12.1319 24.3754C11.8099 23.7759 11.5521 23.1356 11.3679 22.4641L8.51643 21.9803C8.21841 21.9298 8 21.6673 8 21.3598V18.651C8 18.3435 8.21841 18.081 8.51643 18.0305L11.3679 17.5467C11.5527 16.8729 11.8117 16.2305 12.1352 15.6293L10.5954 13.4349C10.4198 13.1846 10.4477 12.8418 10.6613 12.6244L12.543 10.709C12.7566 10.4915 13.0933 10.4632 13.3392 10.6419L15.4262 12.1594C16.1049 11.7485 16.8415 11.4263 17.6206 11.2084L18.0598 8.52568ZM19.9742 24.6188C22.3493 24.6188 24.2747 22.6589 24.2747 20.2413C24.2747 17.8237 22.3493 15.8638 19.9742 15.8638C17.5992 15.8638 15.6738 17.8237 15.6738 20.2413C15.6738 22.6589 17.5992 24.6188 19.9742 24.6188Z" fill="currentColor" class="ddIconElement"/></svg>
                </b-col>

                <b-col class="p-0 d-flex flex-column justify-content-center">
                  <div class="ddMenuTopic">Настройки</div>
                </b-col>
              </b-row>
            </b-dd-item>
            <b-dd-item @click="logout">
              <b-row class="ddItem py-1">
                <b-col cols="auto" class="d-flex justify-content-center pl-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" d="M11.0517 11.8822C11.2795 10.8068 12.2332 10 13.375 10H22.4792C23.7908 10 24.8542 11.0647 24.8542 12.3781V17.9272C24.8542 18.365 24.4997 18.7199 24.0625 18.7199C23.6253 18.7199 23.2708 18.365 23.2708 17.9272V12.3781C23.2708 11.9403 22.9164 11.5854 22.4792 11.5854H14.0394L18.4173 13.0127C19.0692 13.2252 19.5104 13.8337 19.5104 14.5202V27.8361H22.4792C22.9164 27.8361 23.2708 27.4812 23.2708 27.0434V22.6835C23.2708 22.2457 23.6253 21.8907 24.0625 21.8907C24.4997 21.8907 24.8542 22.2457 24.8542 22.6835V27.0434C24.8542 28.3568 23.7908 29.4215 22.4792 29.4215H19.5104V30.2069C19.5104 30.7173 19.0358 31.0946 18.5394 30.979L12.837 29.6512C11.7613 29.4007 11 28.4407 11 27.3348V12.2322C11 12.1094 11.0182 11.9921 11.0517 11.8822Z" fill="currentColor" class="ddIconElement"/><path opacity="0.6" d="M26.2719 16.5352C26.5581 16.2772 27.0221 16.2772 27.3084 16.5352L29.7853 19.8382C30.0716 20.0962 30.0716 20.5144 29.7853 20.7724L27.3084 24.0754C27.0221 24.3334 26.5581 24.3334 26.2719 24.0754C25.9857 23.8174 25.9857 23.3992 26.2719 23.1412L27.8936 20.9659H22.4204C22.0156 20.9659 21.6875 20.6701 21.6875 20.3053C21.6875 19.9405 22.0156 19.6447 22.4204 19.6447H27.8936L26.2719 17.4694C25.9857 17.2115 25.9857 16.7932 26.2719 16.5352Z" fill="currentColor" class="ddIconElement"/></svg>
                </b-col>

                <b-col class="p-0 d-flex flex-column justify-content-center">
                  <div class="ddMenuTopic">Выйти</div>
                </b-col>
              </b-row>
            </b-dd-item>

          </b-nav-item-dd>

          <button class="navigation-link d-block d-lg-none py-4 px-2 px-xl-0 my-md-2 my-xl-0 username" v-b-toggle.collapseMenu>
            {{ username }}
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.68">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.608523 2.68306C0.864224 2.43898 1.2788 2.43898 1.5345 2.68306L5.00008 5.99112L8.46567 2.68306C8.72137 2.43898 9.13594 2.43898 9.39164 2.68306C9.64734 2.92714 9.64734 3.32286 9.39164 3.56694L5.46307 7.31694C5.20737 7.56102 4.7928 7.56102 4.53709 7.31694L0.608523 3.56694C0.352823 3.32286 0.352823 2.92714 0.608523 2.68306Z" fill="currentColor"/>
              </g>
            </svg>
          </button>
          <b-collapse id="collapseMenu" class="mt-2 d-lg-none">
            <b-dd-item to="/payment/">
              <b-row class="ddItem py-1">
                <b-col cols="auto" class="d-flex justify-content-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32ZM15.9222 20.4751C15.645 20.1979 15.645 19.7485 15.9222 19.4713L19.4713 15.9222C19.7485 15.645 20.1979 15.645 20.4751 15.9222L24.0242 19.4713C24.3014 19.7485 24.3014 20.1979 24.0242 20.4751C23.747 20.7523 23.2976 20.7523 23.0204 20.4751L20.683 18.1378V24.2054C20.683 24.5974 20.3652 24.9152 19.9732 24.9152C19.5812 24.9152 19.2634 24.5974 19.2634 24.2054L19.2634 18.1378L16.926 20.4751C16.6488 20.7523 16.1994 20.7523 15.9222 20.4751Z" fill="currentColor" class="ddIconElement"/></svg>
                </b-col>

                <b-col class="p-0 d-flex flex-column justify-content-between">
                  <div class="ddMenuTopic">{{ hasPro ? "PRO подписка" :  "Перейти на PRO" }}</div>
                  <div class="ddMenuText">{{ hasPro ? proDaysRest : "499 руб/мес" }}</div>
                </b-col>
              </b-row>
            </b-dd-item>
            <b-dd-item :href="`https://typingschool.typeform.com/to/ucjLxq5e#email=${email}`" target="_blank">
              <b-row class="ddItem py-1">
                <b-col cols="auto" class="d-flex justify-content-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M8 18.5295C8 4.57757 32 4.40303 32 18.5295C32 27.2516 24.2487 30.5016 16.7539 28.9305C14.9239 31.0787 11.6805 31.8719 10.2857 32C11.8353 30.4345 12.0353 28.2057 11.9057 26.8593C9.47653 25.0728 8 22.3023 8 18.5295ZM19.5653 20.0733C19.3573 20.3933 19.2533 20.7293 19.2533 21.0813H20.9093C20.9093 20.8893 20.9773 20.6973 21.1133 20.5053C21.2573 20.3133 21.4253 20.1293 21.6173 19.9533C21.8173 19.7693 22.0133 19.5773 22.2053 19.3773C22.4053 19.1693 22.5733 18.9213 22.7093 18.6333C22.8533 18.3453 22.9253 18.0333 22.9253 17.6973C22.9253 16.9613 22.6573 16.3853 22.1213 15.9693C21.5933 15.5453 20.9653 15.3333 20.2373 15.3333C19.5893 15.3333 19.0013 15.4973 18.4733 15.8253C17.9533 16.1453 17.5733 16.6013 17.3333 17.1933L18.7493 18.0093C19.0293 17.2973 19.5053 16.9413 20.1773 16.9413C20.5213 16.9413 20.7893 17.0173 20.9813 17.1693C21.1733 17.3213 21.2693 17.5373 21.2693 17.8173C21.2693 18.0813 21.1613 18.3453 20.9453 18.6093C20.7373 18.8733 20.5093 19.1053 20.2613 19.3053C20.0133 19.4973 19.7813 19.7533 19.5653 20.0733ZM20.0813 24.0573C20.3613 24.0573 20.6013 23.9573 20.8013 23.7573C21.0013 23.5573 21.1013 23.3173 21.1013 23.0373C21.1013 22.7573 21.0013 22.5173 20.8013 22.3173C20.6013 22.1173 20.3613 22.0173 20.0813 22.0173C19.8013 22.0173 19.5613 22.1173 19.3613 22.3173C19.1613 22.5173 19.0613 22.7573 19.0613 23.0373C19.0613 23.3173 19.1613 23.5573 19.3613 23.7573C19.5613 23.9573 19.8013 24.0573 20.0813 24.0573Z" fill="currentColor" class="ddIconElement"/></svg>
                </b-col>

                <b-col class="p-0 d-flex flex-column justify-content-between">
                  <div class="ddMenuTopic">Оставить отзыв</div>
                  <div class="ddMenuText">Помогите нам стать лучше</div>
                </b-col>
              </b-row>
            </b-dd-item>
            <b-dd-item to="/settings/">
              <b-row class="ddItem py-1">
                <b-col cols="auto" class="d-flex justify-content-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M18.0598 8.52568C18.1095 8.22233 18.3673 8 18.6695 8H21.3305C21.6327 8 21.8905 8.22233 21.9401 8.52568L22.3794 11.2084C23.1562 11.4257 23.8909 11.7466 24.568 12.1559L26.6502 10.6419C26.8961 10.4632 27.2328 10.4915 27.4464 10.709L29.3281 12.6244C29.5417 12.8418 29.5696 13.1846 29.394 13.4349L27.8602 15.6207C28.1858 16.2244 28.4464 16.8697 28.6321 17.5467L31.4836 18.0305C31.7816 18.081 32 18.3435 32 18.651V21.3598C32 21.6673 31.7816 21.9298 31.4836 21.9803L28.6321 22.4641C28.4461 23.142 28.1852 23.7881 27.8589 24.3925L29.3834 26.5651C29.559 26.8154 29.5311 27.1582 29.3175 27.3756L27.4358 29.291C27.2222 29.5085 26.8854 29.5368 26.6396 29.3581L24.5703 27.8535C23.8888 28.2657 23.1489 28.5885 22.3664 28.806L21.9295 31.4743C21.8799 31.7777 21.622 32 21.3199 32H18.6589C18.3567 32 18.0989 31.7777 18.0492 31.4743L17.6113 28.7998C16.8326 28.5811 16.0964 28.2581 15.4181 27.8465L13.3392 29.3581C13.0933 29.5368 12.7566 29.5085 12.543 29.291L10.6613 27.3756C10.4477 27.1582 10.4198 26.8154 10.5954 26.5651L12.1319 24.3754C11.8099 23.7759 11.5521 23.1356 11.3679 22.4641L8.51643 21.9803C8.21841 21.9298 8 21.6673 8 21.3598V18.651C8 18.3435 8.21841 18.081 8.51643 18.0305L11.3679 17.5467C11.5527 16.8729 11.8117 16.2305 12.1352 15.6293L10.5954 13.4349C10.4198 13.1846 10.4477 12.8418 10.6613 12.6244L12.543 10.709C12.7566 10.4915 13.0933 10.4632 13.3392 10.6419L15.4262 12.1594C16.1049 11.7485 16.8415 11.4263 17.6206 11.2084L18.0598 8.52568ZM19.9742 24.6188C22.3493 24.6188 24.2747 22.6589 24.2747 20.2413C24.2747 17.8237 22.3493 15.8638 19.9742 15.8638C17.5992 15.8638 15.6738 17.8237 15.6738 20.2413C15.6738 22.6589 17.5992 24.6188 19.9742 24.6188Z" fill="currentColor" class="ddIconElement"/></svg>
                </b-col>

                <b-col class="p-0 d-flex flex-column justify-content-center">
                  <div class="ddMenuTopic">Настройки</div>
                </b-col>
              </b-row>
            </b-dd-item>
            <b-dd-item @click="logout">
              <b-row class="ddItem py-1">
                <b-col cols="auto" class="d-flex justify-content-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" d="M11.0517 11.8822C11.2795 10.8068 12.2332 10 13.375 10H22.4792C23.7908 10 24.8542 11.0647 24.8542 12.3781V17.9272C24.8542 18.365 24.4997 18.7199 24.0625 18.7199C23.6253 18.7199 23.2708 18.365 23.2708 17.9272V12.3781C23.2708 11.9403 22.9164 11.5854 22.4792 11.5854H14.0394L18.4173 13.0127C19.0692 13.2252 19.5104 13.8337 19.5104 14.5202V27.8361H22.4792C22.9164 27.8361 23.2708 27.4812 23.2708 27.0434V22.6835C23.2708 22.2457 23.6253 21.8907 24.0625 21.8907C24.4997 21.8907 24.8542 22.2457 24.8542 22.6835V27.0434C24.8542 28.3568 23.7908 29.4215 22.4792 29.4215H19.5104V30.2069C19.5104 30.7173 19.0358 31.0946 18.5394 30.979L12.837 29.6512C11.7613 29.4007 11 28.4407 11 27.3348V12.2322C11 12.1094 11.0182 11.9921 11.0517 11.8822Z" fill="currentColor" class="ddIconElement"/><path opacity="0.6" d="M26.2719 16.5352C26.5581 16.2772 27.0221 16.2772 27.3084 16.5352L29.7853 19.8382C30.0716 20.0962 30.0716 20.5144 29.7853 20.7724L27.3084 24.0754C27.0221 24.3334 26.5581 24.3334 26.2719 24.0754C25.9857 23.8174 25.9857 23.3992 26.2719 23.1412L27.8936 20.9659H22.4204C22.0156 20.9659 21.6875 20.6701 21.6875 20.3053C21.6875 19.9405 22.0156 19.6447 22.4204 19.6447H27.8936L26.2719 17.4694C25.9857 17.2115 25.9857 16.7932 26.2719 16.5352Z" fill="currentColor" class="ddIconElement"/></svg>
                </b-col>

                <b-col class="p-0 d-flex flex-column justify-content-center">
                  <div class="ddMenuTopic">Выйти</div>
                </b-col>
              </b-row>
            </b-dd-item>
          </b-collapse>
        </b-navbar-nav>

      </b-collapse>

      <b-collapse id="collapseMenuLg" class="mt-2" accordion="profile" is-nav>
        <b-navbar-nav>
          <b-dd-item to="/payment/">
            <b-row class="ddItem py-1">
              <b-col cols="auto" class="d-flex justify-content-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32ZM15.9222 20.4751C15.645 20.1979 15.645 19.7485 15.9222 19.4713L19.4713 15.9222C19.7485 15.645 20.1979 15.645 20.4751 15.9222L24.0242 19.4713C24.3014 19.7485 24.3014 20.1979 24.0242 20.4751C23.747 20.7523 23.2976 20.7523 23.0204 20.4751L20.683 18.1378V24.2054C20.683 24.5974 20.3652 24.9152 19.9732 24.9152C19.5812 24.9152 19.2634 24.5974 19.2634 24.2054L19.2634 18.1378L16.926 20.4751C16.6488 20.7523 16.1994 20.7523 15.9222 20.4751Z" fill="currentColor" class="ddIconElement"/></svg>
              </b-col>

              <b-col class="p-0 d-flex flex-column justify-content-between">
                <div class="ddMenuTopic">{{ hasPro ? "PRO подписка" :  "Перейти на PRO" }}</div>
                <div class="ddMenuText">{{ hasPro ? proDaysRest : "499 руб/мес" }}</div>
              </b-col>
            </b-row>
          </b-dd-item>
          <b-dd-item :href="`https://typingschool.typeform.com/to/ucjLxq5e#email=${email}`" target="_blank">
            <b-row class="ddItem py-1">
              <b-col cols="auto" class="d-flex justify-content-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M8 18.5295C8 4.57757 32 4.40303 32 18.5295C32 27.2516 24.2487 30.5016 16.7539 28.9305C14.9239 31.0787 11.6805 31.8719 10.2857 32C11.8353 30.4345 12.0353 28.2057 11.9057 26.8593C9.47653 25.0728 8 22.3023 8 18.5295ZM19.5653 20.0733C19.3573 20.3933 19.2533 20.7293 19.2533 21.0813H20.9093C20.9093 20.8893 20.9773 20.6973 21.1133 20.5053C21.2573 20.3133 21.4253 20.1293 21.6173 19.9533C21.8173 19.7693 22.0133 19.5773 22.2053 19.3773C22.4053 19.1693 22.5733 18.9213 22.7093 18.6333C22.8533 18.3453 22.9253 18.0333 22.9253 17.6973C22.9253 16.9613 22.6573 16.3853 22.1213 15.9693C21.5933 15.5453 20.9653 15.3333 20.2373 15.3333C19.5893 15.3333 19.0013 15.4973 18.4733 15.8253C17.9533 16.1453 17.5733 16.6013 17.3333 17.1933L18.7493 18.0093C19.0293 17.2973 19.5053 16.9413 20.1773 16.9413C20.5213 16.9413 20.7893 17.0173 20.9813 17.1693C21.1733 17.3213 21.2693 17.5373 21.2693 17.8173C21.2693 18.0813 21.1613 18.3453 20.9453 18.6093C20.7373 18.8733 20.5093 19.1053 20.2613 19.3053C20.0133 19.4973 19.7813 19.7533 19.5653 20.0733ZM20.0813 24.0573C20.3613 24.0573 20.6013 23.9573 20.8013 23.7573C21.0013 23.5573 21.1013 23.3173 21.1013 23.0373C21.1013 22.7573 21.0013 22.5173 20.8013 22.3173C20.6013 22.1173 20.3613 22.0173 20.0813 22.0173C19.8013 22.0173 19.5613 22.1173 19.3613 22.3173C19.1613 22.5173 19.0613 22.7573 19.0613 23.0373C19.0613 23.3173 19.1613 23.5573 19.3613 23.7573C19.5613 23.9573 19.8013 24.0573 20.0813 24.0573Z" fill="currentColor" class="ddIconElement"/></svg>
              </b-col>

              <b-col class="p-0 d-flex flex-column justify-content-between">
                <div class="ddMenuTopic">Оставить отзыв</div>
                <div class="ddMenuText">Помогите нам стать лучше</div>
              </b-col>
            </b-row>
          </b-dd-item>
          <b-dd-item to="/settings/">
            <b-row class="ddItem py-1">
              <b-col cols="auto" class="d-flex justify-content-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M18.0598 8.52568C18.1095 8.22233 18.3673 8 18.6695 8H21.3305C21.6327 8 21.8905 8.22233 21.9401 8.52568L22.3794 11.2084C23.1562 11.4257 23.8909 11.7466 24.568 12.1559L26.6502 10.6419C26.8961 10.4632 27.2328 10.4915 27.4464 10.709L29.3281 12.6244C29.5417 12.8418 29.5696 13.1846 29.394 13.4349L27.8602 15.6207C28.1858 16.2244 28.4464 16.8697 28.6321 17.5467L31.4836 18.0305C31.7816 18.081 32 18.3435 32 18.651V21.3598C32 21.6673 31.7816 21.9298 31.4836 21.9803L28.6321 22.4641C28.4461 23.142 28.1852 23.7881 27.8589 24.3925L29.3834 26.5651C29.559 26.8154 29.5311 27.1582 29.3175 27.3756L27.4358 29.291C27.2222 29.5085 26.8854 29.5368 26.6396 29.3581L24.5703 27.8535C23.8888 28.2657 23.1489 28.5885 22.3664 28.806L21.9295 31.4743C21.8799 31.7777 21.622 32 21.3199 32H18.6589C18.3567 32 18.0989 31.7777 18.0492 31.4743L17.6113 28.7998C16.8326 28.5811 16.0964 28.2581 15.4181 27.8465L13.3392 29.3581C13.0933 29.5368 12.7566 29.5085 12.543 29.291L10.6613 27.3756C10.4477 27.1582 10.4198 26.8154 10.5954 26.5651L12.1319 24.3754C11.8099 23.7759 11.5521 23.1356 11.3679 22.4641L8.51643 21.9803C8.21841 21.9298 8 21.6673 8 21.3598V18.651C8 18.3435 8.21841 18.081 8.51643 18.0305L11.3679 17.5467C11.5527 16.8729 11.8117 16.2305 12.1352 15.6293L10.5954 13.4349C10.4198 13.1846 10.4477 12.8418 10.6613 12.6244L12.543 10.709C12.7566 10.4915 13.0933 10.4632 13.3392 10.6419L15.4262 12.1594C16.1049 11.7485 16.8415 11.4263 17.6206 11.2084L18.0598 8.52568ZM19.9742 24.6188C22.3493 24.6188 24.2747 22.6589 24.2747 20.2413C24.2747 17.8237 22.3493 15.8638 19.9742 15.8638C17.5992 15.8638 15.6738 17.8237 15.6738 20.2413C15.6738 22.6589 17.5992 24.6188 19.9742 24.6188Z" fill="currentColor" class="ddIconElement"/></svg>
              </b-col>

              <b-col class="p-0 d-flex flex-column justify-content-center">
                <div class="ddMenuTopic">Настройки</div>
              </b-col>
            </b-row>
          </b-dd-item>
          <b-dd-item @click="logout">
            <b-row class="ddItem py-1">
              <b-col cols="auto" class="d-flex justify-content-center">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" d="M11.0517 11.8822C11.2795 10.8068 12.2332 10 13.375 10H22.4792C23.7908 10 24.8542 11.0647 24.8542 12.3781V17.9272C24.8542 18.365 24.4997 18.7199 24.0625 18.7199C23.6253 18.7199 23.2708 18.365 23.2708 17.9272V12.3781C23.2708 11.9403 22.9164 11.5854 22.4792 11.5854H14.0394L18.4173 13.0127C19.0692 13.2252 19.5104 13.8337 19.5104 14.5202V27.8361H22.4792C22.9164 27.8361 23.2708 27.4812 23.2708 27.0434V22.6835C23.2708 22.2457 23.6253 21.8907 24.0625 21.8907C24.4997 21.8907 24.8542 22.2457 24.8542 22.6835V27.0434C24.8542 28.3568 23.7908 29.4215 22.4792 29.4215H19.5104V30.2069C19.5104 30.7173 19.0358 31.0946 18.5394 30.979L12.837 29.6512C11.7613 29.4007 11 28.4407 11 27.3348V12.2322C11 12.1094 11.0182 11.9921 11.0517 11.8822Z" fill="currentColor" class="ddIconElement"/><path opacity="0.6" d="M26.2719 16.5352C26.5581 16.2772 27.0221 16.2772 27.3084 16.5352L29.7853 19.8382C30.0716 20.0962 30.0716 20.5144 29.7853 20.7724L27.3084 24.0754C27.0221 24.3334 26.5581 24.3334 26.2719 24.0754C25.9857 23.8174 25.9857 23.3992 26.2719 23.1412L27.8936 20.9659H22.4204C22.0156 20.9659 21.6875 20.6701 21.6875 20.3053C21.6875 19.9405 22.0156 19.6447 22.4204 19.6447H27.8936L26.2719 17.4694C25.9857 17.2115 25.9857 16.7932 26.2719 16.5352Z" fill="currentColor" class="ddIconElement"/></svg>
              </b-col>

              <b-col class="p-0 d-flex flex-column justify-content-center">
                <div class="ddMenuTopic">Выйти</div>
              </b-col>
            </b-row>
          </b-dd-item>
        </b-navbar-nav>
      </b-collapse>

    </b-container>
  </b-navbar>
</template>

<script>
export default {
  name: "MainHeader",
  data() {
    return {
      hasPro: false,
      proOption: "",
      username: "",
      email: "",
      lessonsLeft: 5,
      proExpiresIn: 0
    }
  },
  mounted() {
    this.updateHeaderInfo();
  },
  computed: {
    proDaysRest() {
      if (this.proExpiresIn === -1) {
        return "Доступна навсегда";
      } else if (this.proExpiresIn === 1) {
        return "Истекает сегодня";
      }

      let daysWord, restWord;
      let firstDigit = this.proExpiresIn % 10;
      let secondDigit = this.proExpiresIn % 100 - firstDigit;
      if (secondDigit === 10) {
        daysWord = ' дней';
        restWord = 'Осталось ';
      } else {
        switch (firstDigit) {
          case 1:
            daysWord = ' день';
            restWord = 'Остался ';
            break;
          case 2:
          case 3:
          case 4:
            daysWord = ' дня';
            restWord = 'Осталось ';
            break;
          default:
            daysWord = ' дней';
            restWord = 'Осталось ';
            break;
        }
      }

      return restWord + this.proExpiresIn + daysWord;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('refresh');
      localStorage.removeItem('access');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
      localStorage.removeItem('subscriptionCode');
      localStorage.removeItem('subscriptionExpiresIn');
      localStorage.removeItem('restOfLessons');
      localStorage.removeItem('registeredWithGoogle');

      // this.$root.$children[0].$data.userInfo = {};

      this.$router.push('/');
    },
    updateHeaderInfo() {
      let userInfo = this.$root.$children[0].$data.userInfo;

      if (userInfo) {
        this.username = userInfo.name;
        this.email = userInfo.email;
        this.lessonsLeft = userInfo.restOfLessons;
        if (userInfo.subscription) {
          this.hasPro = userInfo.subscription.subscriptionCode !== 'free';
          this.proOption = userInfo.subscription.subscriptionCode;
          this.proExpiresIn = userInfo.subscription.subscriptionExpiresIn;
        }
      } else {
        this.$emit('update-user-info');
      }
    }
  }
}
</script>

<style scoped>
#header {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(40px);
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 948;
}

.headerMain {
  min-height: 60px;
}

.headerMain .container {
  padding: 0 15px;
}

.logoLink {
  padding: 5px;
  margin: 15px 0;
  border-radius: 5px;
  transition: box-shadow .15s ease-in-out;
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  letter-spacing: -0.08px;
  color: #101010;
}

.logoLink img {
  width: 42px;
  height: 22px;
}

.pro {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  text-transform: uppercase;
  color: #444444;
  opacity: 0.4;
}

.logoLink:hover {
  color: #4C4C4C;
}

.logoLink:active {
  color: #E3E3E3;
}

.navigation-link {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
  transition: all .15s ease-in-out;
  border-radius: 6px;
  cursor: pointer;
}

.navigation-link a {
  color: #1D1D1D!important;
  border-radius: 6px;
  padding: 24px 8px;
}

.navigation-link a {
  transition: box-shadow .15s ease-in-out;
}

.navigation-link a:focus {
  border-radius: 6px;
}

.navigation-link .router-link-active {
  color: #0082FF!important;
  background-color: #E3F1FF!important;
}

.navigation-link:hover, .dropdownButton:hover {
  background-color: #F1F1F1;
}

.navigation-link:active a, .navigation-link a:focus, .dropdownButton:active .username, .navigation-link:active {
  color: #0082FF!important;
}

.navigation-link:active, .navigation-link a:focus, .dropdownButton:active  {
  background-color: #E3F1FF!important;
}

.logoLink:focus, .navigation-link a:focus, .toggleButton:focus, .dropdownButton:focus, .navigation-link:focus {
  box-shadow: 0 0 0 4px #87ABF9;
  outline: none;
}

.nav-link[aria-expanded="true"] a svg {
  transform: rotate(180deg);
}

.toggleButton {
  border: none;
  color: #1D1D1D;
  transition: box-shadow .15s ease-in-out;
  background: #F6F6F6;
  border-radius: 100px;
}

.dropdownButton {
  border: 1px solid #E5E6EB;
  box-sizing: border-box;
  border-radius: 5px;
  background: none;
}

.dropdownButton a {
  transition: box-shadow .15s ease-in-out;
}

.username {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  color: #1D1D1D;
  padding: 4px 10px;
  background: none;
  border: none;
  text-align: left;
}

.username svg {
  transition: all .2s ease-in-out;
  fill: #1D1D1D;
}

.ddMenuTopic {
  font-family: 'Gotham Pro',sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  color: #1D1D1D;
}

.ddMenuText {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #444444;
  opacity: 0.6;
}

.ddItem {
  border-radius: 12px;
  transition: all .15s ease-in-out;
}

.ddIcon {
  fill: #F1F1F1;
}

.ddIconElement {
  fill: #2C2C2C;
}

.free {
  border-left: 1px solid #E5E6EB;
}

.lessonMiniBlock {
  width: 6px;
  border:  3px solid #BCDEFF;
  border-radius: 5px;
  margin: 0 2px;
  height: 100%;
  background-color: #BCDEFF;
}

.lessonMiniBlockActive {
  border-color: #0082FF;
  background-color: #0082FF;
}

.description {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #666666;
}

.px-15 {
  padding: 0 15px;
}

@media (max-width: 992px) {
  #collapseMenuLg {
    display: none !important;
  }

  .toggleButton {
    padding: 12px;
  }
}

@media  (min-width: 1200px) {
  #collapseMenuLg {
    display: none !important;
  }

  .navigation-link a {
    padding: 8px 0;
  }
}

@media (max-height: 480px) {
  .headerMain {
    max-height: 100%;
    overflow-y: scroll;
  }
}

/*@media (prefers-color-scheme: dark) {*/
/*    header, header .container {*/
/*        background: linear-gradient(180deg, #4B4B4B 0.63%, #3D3D3D 99%, rgba(255, 255, 255, 0.1) 100%, #2B2B2B 100%);*/
/*    }*/

/*    .logoDiv {*/
/*        width: 176px;*/
/*        height: 19px;*/
/*        background-image: url('../../img/StandardHeader/logo_dark.png');*/
/*        background-repeat: no-repeat;*/
/*        background-size: cover;*/
/*    }*/

/*    .navigation-link, .navigation-link:link {*/
/*        color: white !important;*/
/*    }*/

/*    .navigation-link:focus, .navigation-link:hover {*/
/*        color: rgba(255, 255, 255, 0.6) !important;*/
/*    }*/

/*    .navigation-link:active {*/
/*        color: #57ADFF !important;*/
/*    }*/
/*}*/
</style>
