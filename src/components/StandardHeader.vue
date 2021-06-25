<template>
    <b-navbar toggleable="xl" align-v="center" class="headerMain" id="header">
      <b-container>

            <b-navbar-brand to="/" class="logoLink mr-auto mr-lg-5">
              <!-- <img src="../../img/WhyTypingSchool/keyboard.svg" alt="Логотип курса по слепой печати Typing School"> -->
              <!--Event logo-->
<!--              <img src="../../img/Events/christmasLogo.svg" alt="Новогодний логотип курса по слепой печати Typing School">-->
              <!--/Event logo-->
              Typing School
            </b-navbar-brand>

            <div class="d-flex">
              <b-navbar-toggle class="toggleButton mr-lg-2" target="nav-collapse">
                <template #default="{ expanded }">
                  <span v-if="expanded" class="collapsed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 5.1966L18.8034 3L12 9.8034L5.1966 3.00001L3 5.19661L9.80339 12L3 18.8034L5.1966 21L12 14.1966L18.8034 21L21 18.8034L14.1966 12L21 5.1966Z" fill="#1D1D1D"/></svg>
                  </span>
                  <span v-else class="notCollapsed">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 5H22V7.21053H2V5Z" fill="#1D1D1D"/><path d="M2 10.8947H22V13.1053H2V10.8947Z" fill="#1D1D1D"/><path d="M2 16.7895H22V19H2V16.7895Z" fill="#1D1D1D"/></svg>
                  </span>
                </template>
              </b-navbar-toggle>
              <b-navbar-nav align-v="center" class="logButtons d-none d-lg-flex flex-row align-items-center d-xl-none pl-2">
                <PrimaryButton
                    data-size="sm"
                    @click.native="$router.push('/signup_with')"
                >
                  Попробовать
                </PrimaryButton>

                <PrimaryButton
                    data-variant="secondary"
                    data-size="sm"
                    class="ml-2"
                    @click.native="$router.push('/login_with')"
                >
                  Войти
                </PrimaryButton>
              </b-navbar-nav>
            </div>

        <b-collapse id="nav-collapse" class="collapseHeader justify-content-between" is-nav>
          <b-navbar-nav align-v="center" class="landingTopics w-100 px-4 d-flex justify-content-center">
            <b-nav-item class="my-2 mr-xl-4 my-xl-0 navigation-link ie-properties" href="#about">
              О сервисе
            </b-nav-item>
            <b-nav-item class="my-2 mr-xl-4 my-xl-0 navigation-link ie-properties" href="#testimonials">
              Отзывы
            </b-nav-item>
            <b-nav-item class="my-2 mr-xl-4 my-xl-0 navigation-link ie-properties" href="#pricing">
              Стоимость
            </b-nav-item>
            <b-nav-item class="my-2 my-xl-0 navigation-link ie-properties" href="#faq">
              FAQ
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav align-v="center" class="logButtons d-lg-none border-left-0 d-xl-flex ml-0 ml-lg-auto">
            <PrimaryButton
                data-size="sm"
                class="my-3 my-xl-0 mr-xl-2"
                @click.native="$router.push('/signup_with')"
            >
              Попробовать
            </PrimaryButton>

            <PrimaryButton
                data-variant="secondary"
                data-size="sm"
                class="my-2 my-xl-0"
                @click.native="$router.push('/login_with')"
            >
              Войти
            </PrimaryButton>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
</template>

<script>
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: "StandardHeader",
  components: {
    PrimaryButton,
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
  padding: 4px 0;
  margin: 15px 0;
  border-radius: 5px;
  transition: box-shadow .15s ease-in-out;
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  color: #101010;
}

.logoLink img, .logoLink svg {
  width: 38px;
  height: 19px;
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
  line-height: 17px;
  color: #1D1D1D;
  transition: box-shadow .15s ease-in-out;
  border-radius: 5px;
}

.navigation-link:focus, .navigation-link:hover, .navigation-link .active {

  color: rgba(29, 29, 29, 0.6);
  text-decoration: none;
}

.navigation-link:active {
  color: #0082FF;
  text-decoration: none;
}

.logoLink:focus, .navigation-link a:focus, .toggleButton:focus, .primaryButton:focus, .secondaryButton:focus {
  box-shadow: 0 0 0 4px #87ABF9;
  outline: none;
}

.navigation-link a {
  transition: box-shadow .15s ease-in-out;
  border-radius: 6px;
  padding: 8px 0;
}

/*.primaryButton {
  padding: 10px 15px;
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 13px;
  color: #FFFFFF;
  background: #0082FF;
  border-radius: 100px;
  transition: all .15s ease-in-out;
}

.primaryButton:hover {
  background: #0073E2;
  text-decoration: none;
}

.primaryButton:active {
  background: #3DA0FF;
}
*/
.primaryButton[data-size="sm"] {
  padding: 8px 15px 9px;
  font-size: 14px;
}

.primaryButton[data-variant="secondary"] {
  color: #1D1D1D;
  background: #F6F6F6;
  border: none;
}

.primaryButton[data-variant="secondary"]:hover {
  background: #EBEBEB!important;
  text-decoration: none;
}

.primaryButton[data-variant="secondary"]:active {
  color: #FFFFFF!important;
  background: #0082FF!important;
}

.toggleButton {
  border: none;
  color: #1D1D1D;
  transition: box-shadow .15s ease-in-out;
  background: #F6F6F6;
  border-radius: 100px;
  padding: 8px;
}

.collapseHeader {
  transition: all .1s ease-in-out!important;
}

@media (max-width: 991px) {

  .primaryButton[data-size="sm"] {
    padding: 16px 48px;
    border-radius: 9px;
  }

  .toggleButton {
    padding: 12px;
  }

}

@media (max-width: 1200px) {
  .logButtons {
    border-left: 1px solid #E5E6EB;
  }

  .navigation-link a {
    padding: 24px 8px;

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
