<template>
    <div id="error">
        <LogInHeader/>
        <b-container class="error-alert d-flex justify-content-center align-items-center">
            <b-row class="d-flex justify-content-center">
                <b-col cols="12" class="d-flex align-items-center justify-content-center flex-column">
                  <p class="special-mb error-alert-title">Не нашли, что искали?</p>
                  <p class="special-mb error-alert-text">Такая страница не найдена. Вернитесь, пожалуйста, на главную страницу.</p>
                  <img class="error-alert-image light_image" src="../../img/Error404/404_icon.svg" alt="404 alert">
                  <img class="error-alert-image dark_image" src="../../img/Error404/404_icon_dark.svg" alt="404 alert">

                  <PrimaryButton
                      @click.native="$router.push('/')"
                  >
                    На главную
                  </PrimaryButton>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import LogInHeader from "@/components/LogInHeader";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: "Error404",
  components: {
    LogInHeader,
    PrimaryButton,
  },
  mounted() {
    this.$emit("end-loading");
  },
}
</script>

<style scoped>
#error {
  height: 100vh ;
  min-width: 100%;
}

.special-mb {
  margin-bottom: 32px!important;
}

.error-alert {
  min-height: calc(100vh - 75px);
}

.error-alert-title {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  min-width: 290px;
  text-align: center;
  line-height: 1.2;
  color: rgba(30, 29, 29, 0.849977);
}

.error-alert-text {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  max-width: 400px;
  color: #545454;
}

.error-alert-image {
  margin-top: 10px;
  margin-bottom: 64px;
  user-select: none;
  width: 555px;
}

.dark_image {
  display: none;
}

.button-navigation-link-common-style, .button-navigation-link-common-style:link {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  text-decoration: none;
  color: white;
  padding: 15px 50px;
  outline: none;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.151042);
  border-radius: 3.5px;
  background: linear-gradient(180deg, #6CB3FA 0%, #067DFF 100%);
  text-align: center;
  transition: box-shadow .15s ease-in-out;
}

.button-navigation-link-common-style p {
  user-select: none;
  margin: 0;
  text-decoration: none;
}

.button-navigation-link-common-style:focus,.button-navigation-link-common-style:hover {
  background: linear-gradient(180deg, #1D8EFF 0%, #1D8EFF 0%, #1D8EFF 0.01%, #0068D9 100%);
  color: white;
  text-decoration: none;
}

.button-navigation-link-common-style:focus {
  box-shadow: 0 0 0 4px #87ABF9;
}

.button-navigation-link-common-style:active {
  background: linear-gradient(180deg, #0076ED 0%, #479FFF 100%);
  text-decoration: none;
}

@media (max-width: 768px) {
  /*.error-alert {*/
  /*  margin: max(calc((100vh - 410px) / 2), 50px) auto;*/
  /*}*/

  .error-alert-title {
    font-size: 24px;
  }

  .error-alert-text {
    font-size: 16px;
    line-height: 20px;
    max-width: 290px;
    margin-bottom: 35px;
  }

  .error-alert-image {
    width: 270px;
    margin-bottom: 40px;
  }
}

/*@media (prefers-color-scheme: dark) {*/
/*    .error-alert-title {*/
/*        color: #FFFFFF;*/
/*    }*/

/*    .error-alert-text {*/
/*        color: rgba(255, 255, 255, 0.85);*/
/*    }*/

/*    .button-navigation-link-common-style, .button-navigation-link-common-style:link {*/
/*        background: linear-gradient(180deg, #2F7DF7 0%, #145DCD 100%);*/
/*        text-decoration: none;*/
/*    }*/

/*    .button-navigation-link-common-style:focus, .button-navigation-link-common-style:hover {*/
/*        background: linear-gradient(180deg, #5094FF 0%, #004FC8 100%);*/
/*        text-decoration: none;*/
/*    }*/

/*    .button-navigation-link-common-style:active {*/
/*        background: linear-gradient(180deg, #0F5CD5 0%, #1B6FEF 100%);*/
/*        text-decoration: none;*/
/*    }*/

/*    .dark_image {*/
/*        display: block;*/
/*    }*/

/*    .light_image {*/
/*        display: none;*/
/*    }*/
/*}*/
</style>
