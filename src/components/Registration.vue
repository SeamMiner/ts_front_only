<template>
    <div id="registrationPage">
        <LogInHeader></LogInHeader>
        <b-container class="registrationBlock">
            <b-row>
                <b-col cols="12" class="d-flex justify-content-center align-items-center flex-column">
                    <form @submit.prevent="$router.push('/profile')" class="form-wrapper position-relative">
                      <h1>Регистрация</h1>
                      <p class="subtitle">Немного о себе</p>
                      <div class="nameEmailBlock mb-md-3 flex-column flex-md-row">
                          <div class="fieldWrapper">
                              <input v-model="name" type="text" class="inputField" id="nameInput" placeholder="Саша" maxlength="254" required>
                              <label class="labelInput" for="nameInput">Имя</label>
                              <img class="imgInput user-select-none" draggable="false" src="../../img/Registration/education.svg" alt="Education icon">
                          </div>
                          <div class="fieldWrapper">
                              <input v-model="email" type="email" class="inputField" id="emailInput" autocomplete="current-password" placeholder="sasha@gmail.com" maxlength="254" required>
                              <label class="labelInput" for="emailInput">Email</label>
                              <img class="imgInput user-select-none" draggable="false" src="../../img/Registration/mailbox.png" alt="Mailbox icon">
                          </div>
                      </div>
                      <p class="subtitle">Придумайте пароль</p>
                      <div class="passwordBlock special-mb flex-column flex-md-row">
                        <div class="fieldWrapper">
                          <input v-model="password" :type="showPassword ? 'text' : 'password'" class="bigInputField" id="passwordInput" minlength="1" placeholder="•••••••" maxlength="254" required>
                          <label class="labelInput" for="passwordInput">Пароль</label>
                          <img class="imgBigInput user-select-none" draggable="false" @click="showPassword = !showPassword" :src="showPassword ? require('../../img/LogIn/lock_open.png'): require('../../img/LogIn/lock.png')" alt="Lock icon">
                        </div>

                        <PrimaryButton
                            :type="'submit'"
                        >
                          Готово
                        </PrimaryButton>
                      </div>

                      <transition name="fade">
                        <div v-if="clientError" class="errorHintBlock position-absolute mb-3">
                            <img class="errorHintImage user-select-none" src="../../img/Registration/warning.svg" alt="Warning icon">
                            <p class="errorHintDescription">{{ clientError }}</p>
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
import LogInHeader from '@/components/LogInHeader';

export default {
  name: "Registration",
  components: {
    LogInHeader,
    PrimaryButton,
  },
  data() {
    return {
      clientError: "",
      name: "",
      email: "",
      password: "",
      signupTag: "",
      showPassword: false,
    }
  },
  mounted() {
    this.signupTag = localStorage.getItem('signupTag') || "";
    localStorage.removeItem('signupTag');

    if (!localStorage.getItem("refresh")) {
      this.$emit("end-loading");
    }
  },
}
</script>

<style scoped>
#registrationPage {
  max-width: 100%;
  min-height: 100vh;
}

.registrationBlock {
  min-height: calc(100vh - 75px);
}

.registrationBlock > div:nth-child(1) {
  min-height: inherit;
}

.form-wrapper h1 {
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  font-size: 34px;
  color: #101010;
  margin-bottom: 32px;
}

.subtitle {
  font-size: 14px;
  color: #6c6c6c;
  text-align: left;
  margin-bottom: 16px;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
}

.nameEmailBlock {
  width: 500px;
  display: flex;
  justify-content: space-between;
}

.inputField {
  width: 245px;
  outline: none;
  height: 100px;
  padding: 30px 70px 0 20px;
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  background: #FFFFFF;
  border: 1px solid #D0D0D0;
  border-radius: 7px;
}

.inputField:active, .inputField:focus {
  box-shadow: none;
  border: 1px solid #067DFF;
  color: #151515;
  background-color: #f5f5f5;
}

.fieldWrapper {
  position: relative;
}

.labelInput {
  font-family: 'Gotham Pro', sans-serif;
  user-select: none;
  font-weight: 500;
  position: absolute;
  top: 25px;
  left: 20px;
  color: #0080FF;
  font-size: 14px;
}

.imgInput {
  width: 36px;
  position: absolute;
  right: 22px;
  top: 32px;
}

.passwordBlock {
  display: flex;
  justify-content: space-between;
}

.special-mb {
  margin-bottom: 32px;
}

.bigInputField {
  width: 380px;
  outline: none;
  height: 100px;
  padding: 30px 70px 0 20px;
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 25px;
  background: #FFFFFF;
  border: 1px solid #D0D0D0;
  border-radius: 7px;
}

.bigInputField:active, .bigInputField:focus {
  box-shadow: none;
  border: 1px solid #067DFF;
  color: #151515;
  background-color: #f5f5f5;
}

.imgBigInput {
  width: 36px;
  position: absolute;
  right: 22px;
  top: 32px;
}
/*
.submitButton:hover, .submitButton:focus {
  background: linear-gradient(180deg, #1D8EFF 0%, #1D8EFF 0%, #1D8EFF 0.01%, #0068D9 100%);
}

.submitButton:focus {
  box-shadow: 0 0 0 4px #87ABF9;
}

.submitButton:active {
  background: linear-gradient(180deg, #0076ED 0%, #479FFF 100%);
}
*/
.errorHintBlock {
  width: 100%;
  background: #F7F7F7;
  border-radius: 7px;
  margin-top: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
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

@media (min-width: 768px) {
  .primaryButton {
    width: 110px;
    font-size: 15px;
    border-radius: 7px;
  }
}

@media (max-width: 768px) {
  .form-wrapper, .fieldWrapper, .nameEmailBlock {
    width: 290px;
  }

  .form-wrapper h1 {
    margin: 16px 0;
    font-size: 28px;
  }

  .inputField {
    width: 290px;
    margin-bottom: 16px;
  }

  .imgInput {
    right: 0;
    left: 230px;
  }

  .bigInputField {
    width: 290px;
    margin-bottom: 16px;
  }

  .errorHintBlock {
    width: 260px;
  }
}
</style>
