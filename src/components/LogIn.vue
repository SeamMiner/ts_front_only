<template>
    <div id="LogIn">
        <LogInHeader></LogInHeader>
        <b-container class="logInBlock">
            <b-row align-v="center" class="d-flex">
                <b-col cols="12" class="d-flex align-items-center justify-content-center flex-column pb-5">
                    <h1>Войти в систему</h1>
                    <form @submit.prevent="$router.push('/profile')" class="position-relative">
                      <div class="field-wrapper">
                          <b-form-input v-model="email" class="login-input" type="email" name="username" autocapitalize="none" autocomplete="username" maxlength="254" required id="username" placeholder="Email"/>
                          <img draggable="false" class="input-icon" src="../../img/LogIn/mailbox.png" alt="Mailbox icon">
                      </div>
                      <div class="field-wrapper">
                          <b-form-input v-model="password" class="login-input" :type="showPassword ? 'text' : 'password'" name="password" autocomplete="current-password" required id="id_password" placeholder="Пароль"/>
                          <img draggable="false" class="input-icon" @click="showPassword = !showPassword" :src="showPassword ? require('../../img/LogIn/lock_open.png'): require('../../img/LogIn/lock.png')" alt="Lock icon">
                      </div>

                      <PrimaryButton
                          :type="'submit'"
                          class="w-100"
                      >
                        Войти
                      </PrimaryButton>

                      <div class="divider"></div>

                      <div class="linksWrapper">
                          <router-link to="/signup_with" class="regButton left">Регистрация</router-link>
                          <div class="dividerLink"></div>
                          <router-link to="/reset" class="regButton">Забыли пароль?</router-link>
                      </div>

                      <transition name="fade">
                        <div v-show="clientError" class="errorLoginBlock position-absolute mb-4">
                          <img class="errorLoginImage user-select-none" src="../../img/LogIn/warning.svg" alt="Warning icon">
                          <p class="errorLoginDescription">{{ clientError }}</p>
                        </div>
                      </transition>
                    </form>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import PrimaryButton from "@/components/buttons/PrimaryButton";
import LogInHeader from "./LogInHeader";

export default {
  name: "LogIn",
  components: {
    LogInHeader,
    PrimaryButton
  },
  data() {
    return {
      clientError: "",
      email: "",
      password: "",
      showPassword: false,
    }
  },
  mounted() {
    if (!localStorage.getItem("refresh")) {
      this.$emit("end-loading");
    }
  },
}
</script>

<style scoped>
#LogIn {
  min-width: 100%;
  min-height: 100vh;
}

.logInBlock {
  min-height: calc(100vh - 75px);
}

.logInBlock div:nth-child(1) {
  min-height: inherit;
}

form {
  width: 280px;
}

h1 {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 34px;
  line-height: 47px;
  color: #101010;
  margin-bottom: 32px;
}

.field-wrapper {
  position: relative;
}

.login-input {
  min-width: 260px;
  min-height: 48px;
  margin-bottom: 16px;
  padding: 0 58px 0 20px;
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  background: #FFFFFF;
  border: 1px solid #9B9B9B;
  border-radius: 9px;
}

.login-input:active, .login-input:focus {
  box-shadow: none;
  border: 1px solid #067DFF;
  background-color: #f5f5f5;
  color: #151515;
}

.input-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: 11px 0;
  height: 26px;
  right: 14px;
  user-select: none;
}

.divider {
  height: 1px;
  background-color: #E5E5E5;
  border-radius: 2px;
  margin-top: 16px;
  margin-bottom: 16px;
  display: inline-block;
  width: 280px;
}

.primaryButton {
  font-size: 15px;
  border-radius: 9px;
  padding-top: 15px;
  padding-bottom: 16px;
}

.linksWrapper {
  width: 280px;
  display: flex;
  justify-content: space-between;
  margin: auto auto 8px auto;
}

.regButton {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  color: #0082FF;
  transition: all .15s ease-in-out;
  text-decoration: none;
  border-radius: 6px;
  padding: 6px;
}

.regButton:hover {
  color: #1E90FF;
}

.regButton:active, .regButton:focus {
  color: #0076E7;
}

.regButton:focus {
  outline: none;
  box-shadow: 0 0 0 4px #87ABF9!important;
}

.errorLoginBlock {
  width: 280px;
  background: #F7F7F7;
  border-radius: 7px;
  margin-top: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  top: 100%;
}

.errorLoginImage {
  width: 20px;
  margin-right: 15px;
}

.errorLoginDescription {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #4A4A4A;
  font-size: 12px;
  line-height: 1.2;
  margin: 0;
}

.dividerLink {
  width: 1px;
  background-color: #E5E6EB;
  margin: 0 2px;
}

@media (max-width: 768px) {
  h1 {
    font-size: 28px;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .login-input {
    margin: 0 auto 16px auto;
  }

  .input-icon {
    right: 24px;
  }

  .divider {
    margin: 16px auto;
  }

  .primaryButton {
    margin: 0 auto;
  }

}
</style>
