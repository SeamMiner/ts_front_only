<template>
    <div id="emailConfirmPage">
        <LogInHeader/>
        <b-container class="error-alert d-flex justify-content-center align-items-center">
            <b-row class="d-flex justify-content-center">
                <b-col cols="12" class="d-flex align-items-center justify-content-center flex-column">
                    <p class="special-mb error-alert-title">Осталось подтвердить Email адрес</p>
<!--                    <p class="special-mb error-alert-title">На Email {{ email ? email + " " : "" }}выслано сообщение для подтверждения почты</p>-->
                  <p class="special-mb error-alert-text">На адрес <b>{{ email ? email + " " : "" }}</b>было выслано письмо со ссылкой для подтверждения.</p>
                    <img class="error-alert-image" src="../../img/EmailConfirm/emailConfirm.svg" alt="Просьба о подтверждении электронной почты - картинка">
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import LogInHeader from "@/components/LogInHeader";

export default {
  name: "EmailConfirm",
  components: {
    LogInHeader,
  },
  data() {
    return {
      email: ""
    }
  },
  mounted() {
    this.email = localStorage.getItem('email');

    if (!localStorage.getItem("refresh")) {
      this.$emit("end-loading");
    }
  }
}
</script>

<style scoped>
#emailConfirmPage {
  min-width: 100%;
  min-height: 100vh;
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
  min-width: 280px;
  max-width: 500px;
  text-align: center;
  line-height: 1.1;
  color: rgba(30, 29, 29, 0.849977);
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
  width: 233px;
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
  .error-alert-title {
    font-size: 24px;
    max-width: 320px;
  }

  .error-alert-text {
    font-size: 16px;
    line-height: 20px;
    max-width: 300px;
  }

  .error-alert-image {
    width: 190px;
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
/*}*/
</style>
