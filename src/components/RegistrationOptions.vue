<template>
  <div id="registrationOptionsPage">
    <LogInHeader></LogInHeader>
    <b-container class="logInBlock">
      <b-row align-v="center" class="d-flex">
        <b-col cols="12" class="d-flex align-items-center justify-content-center flex-column form-wrapper position-relative">
          <img class="emoji-illustration" src="../../img/RegistrationOptions/laptop.png" alt="Laptop image">
          <h1>Регистрация</h1>
            <PrimaryButton
                data-variant="secondary"
                class="button-login"
                tabindex="2"
            >
              <img class="google-login-img img-icon" src="../../img/RegistrationOptions/google.svg" alt="Google icon">
              <span>Через Google</span>
            </PrimaryButton>

          <PrimaryButton
              @click.native="$router.push('/signup')"
              data-variant="secondary"
              tabindex="3"
              class="button-login"
          >
            <img class="standard-login-img img-icon" src="../../img/RegistrationOptions/Email.svg" alt="Mailbox icon">
            <span>Через Email</span>
          </PrimaryButton>

          <transition name="fade">
            <div v-if="clientError" class="errorHintBlock position-absolute mb-3">
              <img class="errorHintImage user-select-none" src="../../img/Registration/warning.svg" alt="Warning icon">
              <p class="errorHintDescription">{{ clientError }}</p>
            </div>
          </transition>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LogInHeader from '@/components/LogInHeader';
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: "RegistrationOptions",
  components: {
    LogInHeader,
    PrimaryButton,
  },
  data() {
    return {
      clientError: ""
    }
  },
  mounted() {
    if (!localStorage.getItem("refresh")) {
      this.$emit("end-loading");
    }
  },
  methods: {
    onGoogleSignInError() {
      this.clientError = "При попытке регистрации через Google возникла ошибка";
    }
  }
}
</script>

<style scoped>
#registrationOptionsPage {
  min-width: 100%;
  min-height: 100vh;
}

.logInBlock {
  min-height: calc(100vh - 75px);
}

.logInBlock > div:nth-child(1) {
  min-height: inherit;
}

.emoji-illustration {
  height: 80px;
  user-select: none;
}

.form-wrapper h1 {
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  font-size: 34px;
  color: #101010;
  text-align: center;
  margin: 32px 0;
}

.button-login {
  width: 280px;
  height: 50px;
  margin-bottom: 16px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/*
.button-navigation-link-common-style, .button-navigation-link-common-style:link {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  text-decoration: none;
  color: white;
  padding: 16px 32px;
  outline: none;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.151042);
  background: linear-gradient(180deg, #6CB3FA 0%, #067DFF 100%);
  transition: box-shadow .15s ease-in-out;
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

.button-navigation-link-outline-style, .button-navigation-link-outline-style:link {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 1.2;
  text-decoration: none;
  color: #0181EA;
  padding: 16px 32px;
  outline: none;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.151042);
  border: 1px solid #007BE8;
  background: none;
  transition: box-shadow .15s ease-in-out;
}

.button-navigation-link-outline-style:focus, .button-navigation-link-outline-style:hover {
  border: 1px solid #47A3FF;
  background-color: #f5f5f5;
  color: #0180FF;
}

.button-navigation-link-outline-style:active {
  border: 1px solid #47A3FF!important;
}

.button-navigation-link-outline-style:focus {
  box-shadow: 0 0 0 4px #87ABF9;
}
*/
.img-icon {
  margin-right: 16px;
  user-select: none;
}

.google-login-img {
  height: 17px;
  width: 17px;
}

.standard-login-img {
  height: 18px;
  width: 28px;
}

.errorHintBlock {
  width: 280px;
  background: #F7F7F7;
  border-radius: 7px;
  margin-top: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 100%;
}

.errorHintImage {
  width: 20px;
  margin-right: 15px;
}

.errorHintDescription {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #4A4A4A;
  font-size: 12px;
  line-height: 1.2;
  margin: 0;
}
/*
@media (max-width: 768px) {
  .button-login {
    width: 260px;
  }

  .errorHintBlock {
    width: 260px;
  }
}*/
</style>
