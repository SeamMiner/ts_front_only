<template>
  <div id="somethingWentWrong">
    <LogInHeader></LogInHeader>
    <main>
      <b-container class="error-alert d-flex justify-content-center align-items-center">
        <b-row class="d-flex justify-content-center">
          <b-col cols="12" class="d-flex align-items-center justify-content-center flex-column">
            <p class="special-mb error-alert-title">Что-то пошло не так...</p>
            <p class="special-mb error-alert-text">{{ detail ? detail : 'Возникла ошибка, иногда такое случается. Напишите нам, в\xa0чём заключается ошибка, и\xa0мы обязательно исправим\xa0её.' }}</p>
            <img class="error-alert-image" src="../../img/SomethingWentWrong/alert.svg" alt="Warning alert">


            <PrimaryButton
                @click.native="executeAction"
            >
              {{ buttonText ? buttonText : 'На главную' }}
            </PrimaryButton>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </div>
</template>

<script>
import LogInHeader from "@/components/LogInHeader";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: 'HelloWorld',
  components: {
    LogInHeader,
    PrimaryButton,
  },
  data() {
    return {
      detail: "",
      buttonText: "",
      buttonUrl: ""
    }
  },
  mounted() {
    this.detail = this.$root.$children[0].$data.detail;
    this.buttonText = this.$root.$children[0].$data.buttonText;
    this.buttonUrl = this.$root.$children[0].$data.buttonUrl;

    this.$root.$children[0].$data.detail = "";
    this.$root.$children[0].$data.buttonText = "";
    this.$root.$children[0].$data.buttonUrl = "";

    this.$emit("end-loading");
  },
  methods: {
    executeAction() {
      if (this.buttonUrl && this.buttonUrl.includes('ACTION:')) {
        let actionName = this.buttonUrl.slice(7);
        this[actionName]();
      } else {
        this.$router.push(this.buttonUrl || '/');
      }
    },
    open_support_chat() {
      document.getElementById('customerly-launcher').click();
    }
  }
}
</script>

<style scoped>
#somethingWentWrong {
  height: 100vh;
  min-width: 100%;
}

.error-alert {
  min-height: calc(100vh - 75px);
}

.special-mb {
  margin-bottom: 32px!important;
}

.error-alert-title {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  min-width: 320px;
  text-align: center;
  line-height: 1.2;
  color: #403f3f;
}

.error-alert-text {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  color: #545454;
  text-align: center;
  max-width: 400px;
}

.error-alert-image {
  margin-top: 10px;
  margin-bottom: 50px;
  user-select: none;
  width: 267px;
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
  border: none;
}

.button-navigation-link-common-style span {
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
  .error-alert {
    margin: max(calc((100vh - 510px) / 2), 50px) auto;
  }

  .error-alert-title {
    font-size: 24px;
  }

  .error-alert-text {
    font-size: 16px;
    line-height: 20px;
    max-width: 320px;
  }

  .error-alert-image {
    width: 202.5px;
  }
}

/*@media (prefers-color-scheme: dark) {*/
/*  .error-alert-title {*/
/*    color: #FFFFFF;*/
/*  }*/

/*  .error-alert-text {*/
/*    color: rgba(255, 255, 255, 0.85);*/
/*  }*/

/*  .button-navigation-link-common-style, .button-navigation-link-common-style:link {*/
/*    background: linear-gradient(180deg, #2F7DF7 0%, #145DCD 100%);*/
/*    text-decoration: none;*/
/*  }*/

/*  .button-navigation-link-common-style:focus, .button-navigation-link-common-style:hover {*/
/*    background: linear-gradient(180deg, #5094FF 0%, #004FC8 100%);*/
/*    text-decoration: none;*/
/*  }*/

/*  .button-navigation-link-common-style:active {*/
/*    background: linear-gradient(180deg, #0F5CD5 0%, #1B6FEF 100%);*/
/*    text-decoration: none;*/
/*  }*/
/*}*/

@media screen and (min-width:0\0) {
  /* стили только для IE9 - IE10 */
  .error-alert {
    margin: 50px 0;
  }
}
</style>
