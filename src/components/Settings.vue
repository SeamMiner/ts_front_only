<template>
  <div id="settingsPage">
    <MainHeader
      ref="header"
    />

    <b-container class="settingsBlock">
      <b-row>
        <b-col cols="12" class="d-flex justify-content-center align-items-center flex-column">
          <form @submit.prevent="$router.push('/profile')" class="form-wrapper position-relative">
            <h1>Настройки</h1>
            <p class="subtitle">Личные данные</p>
            <div class="nameEmailBlock mb-md-3 flex-column flex-md-row">
              <div class="fieldWrapper">
                <input v-model="name" type="text" class="inputField" id="nameInput" placeholder="Саша" maxlength="254">
                <label class="labelInput" for="nameInput">Имя</label>
                <img class="imgInput user-select-none" draggable="false" src="../../img/Settings/education.svg" alt="Education icon">
              </div>
              <div class="fieldWrapper">
                <input disabled v-model="email" type="email" class="inputField" id="emailInput" placeholder="sasha@gmail.com" maxlength="254">
                <label class="labelInput disabledLabel" for="emailInput">Email</label>
                <img class="imgInput disabledImg user-select-none" draggable="false" src="../../img/Settings/mailbox.png" alt="Mailbox icon">
              </div>
            </div>
            <div class="passwordBlock special-mb flex-column flex-md-row">
              <div class="fieldWrapper">
                <input :disabled="registeredWithGoogle" v-model="password" type="password" class="bigInputField" :class="{'disabledInput': registeredWithGoogle}" id="passwordInput" placeholder="•••••••" maxlength="254">
                <label class="labelInput" :class="{'disabledLabel': registeredWithGoogle}" for="passwordInput">Новый пароль</label>
                <img class="imgBigInput user-select-none" :class="{'disabledImg': registeredWithGoogle}" draggable="false" src="../../img/Settings/lock.png" alt="Lock icon">
              </div>

              <PrimaryButton
                  :type="'submit'"
              >
                Сохранить
              </PrimaryButton>
            </div>
            <transition name="fade" mode="out-in">
              <div v-if="clientError && !successUpdating" class="errorHintBlock position-absolute mb-4" :key="'errorHint'">
                <img class="errorHintImage user-select-none" src="../../img/Settings/warning.svg" alt="Warning icon">
                <p class="errorHintDescription">{{ clientError }}</p>
              </div>
              <div v-if="successUpdating" class="successHintBlock position-absolute mb-4" :key="'successHint'">
                <img class="successHintImage user-select-none" src="../../img/Settings/success.png" alt="Success icon">
                <p class="successHintDescription">Настройки успешно сохранены</p>
              </div>
            </transition>
          </form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: "Settings",
  components: {
    MainHeader,
    PrimaryButton,
  },
  data() {
    return {
      clientError: null,
      name: "",
      email: "",
      password: "",
      successUpdating: false,
      registeredWithGoogle: false
    }
  },
  mounted() {
    this.$emit("end-loading");
  },
  methods: {
    updateUserInfoStorage() {
      let userInfo = this.$root.$children[0].$data.userInfo;

      if (userInfo) {
        this.name = userInfo.name;
        this.email = userInfo.email;
        this.registeredWithGoogle = userInfo.registeredWithGoogle;

        this.$emit("end-loading");
      }
    },
  },
}
</script>

<style scoped>
#settingsPage {
  min-height: 100vh;
  min-width: 100%;
}

.settingsBlock {
  padding-top: 75px;
  min-height: calc(100vh - 75px);
}

.settingsBlock > div:nth-child(1) {
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

.bigInputField:not(.disabledInput):active, .bigInputField:not(.disabledInput):focus {
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

.inputField[disabled], .bigInputField[disabled], .disabledLabel, .disabledImg {
  opacity: 0.6;
}
/*
.submitButton {
  width: 110px;
  height: 100px;
  background: linear-gradient(180deg, #6CB3FA 0%, #067DFF 100%);
  font-size: 14px;
  color: #fff;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  text-align: center;
  border-radius: 7px;
  border: none;
  outline: none;
  transition: box-shadow .15s ease-in-out;
}

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
.successHintBlock, .errorHintBlock {
  width: 100%;
  background: #F7F7F7;
  border-radius: 7px;
  margin-top: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.successHintImage, .errorHintImage {
  width: 20px;
  margin-right: 15px;
}

.successHintDescription, .errorHintDescription {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #4A4A4A;
  font-size: 15px;
  line-height: 1.2;
  margin: 0;
}

@media (min-width: 768px) {
  .primaryButton {
    width: 110px;
    font-size: 14px;
    border-radius: 7px;
    padding: 16px 0 17px;
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

  .submitButton {
    width: 290px;
    height: 50px;
  }

  .successHintBlock, .errorHintBlock {
    width: 260px;
  }
}
</style>
