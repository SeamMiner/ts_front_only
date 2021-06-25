<template>
    <div id="passwordResetPage">
        <LogInHeader/>
        <b-container class="passwordResetBlock">
            <b-row align-v="center" class="d-flex">
                <b-col cols="12" class="d-flex align-items-center justify-content-center pb-5">
                  <form @submit.prevent="sendEmailForReset" class="d-flex align-items-center justify-content-center flex-column form-wrapper position-relative">
                    <img class="emoji-illustration" src="../../img/PasswordReset/lock_with_key.png" alt="Lock with key image">
                    <h1>Сброс пароля</h1>
                    <div class="input-block">
                        <input v-model="userEmail" class="input-email" type="email" id="email" maxlength="254" required placeholder="Email">
                        <img draggable="false" class="input-icon" src="../../img/PasswordReset/mailbox.png" alt="Mailbox icon">
                    </div>

                    <PrimaryButton
                        :type="'submit'"
                        class="w-100"
                    >
                      Сбросить
                    </PrimaryButton>

                    <transition name="fade" mode="out-in">
                      <div v-if="emailSuccess" class="successEmailBlock position-absolute mb-4" :key="'successHint'">
                        <img class="successEmailImage user-select-none" src="../../img/Settings/success.png" alt="Success icon">
                        <p class="successEmailDescription">{{ emailSuccessText || 'Ссылка для сброса пароля успешно отправлена' }}</p>
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
  name: "PasswordReset",
  components: {
    LogInHeader,
    PrimaryButton,
  },
  data() {
    return {
      clientError: null,
      userEmail: "",
      emailSuccess: false,
      emailSuccessText: "",
    };
  },
  mounted() {
    if (!localStorage.getItem("refresh")) {
      this.$emit("end-loading");
    }
  },
}
</script>

<style scoped>
#passwordResetPage {
  min-width: 100%;
  min-height: 100vh;
}

.passwordResetBlock {
  min-height: calc(100vh - 75px);
}

.passwordResetBlock div:nth-child(1) {
  min-height: inherit;
}

.form-wrapper h1 {
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  font-size: 34px;
  color: #101010;
  text-align: center;
  margin: 32px 0;
}

.emoji-illustration {
  height: 80px;
  user-select: none;
}

.input-block {
  position: relative;
}

.input-email {
  border-radius: 7px;
  width: 280px;
  height: 48px;
  margin-bottom: 16px;
  padding: 0 60px 0 20px;
  border: 1px solid #D0D0D0;
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
}

.input-email:active, .input-email:focus {
  box-shadow: none;
  outline: none;
  border: 1px solid #067DFF;
  color: #151515;
}

.input-email:focus {
  background-color: #f5f5f5;
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

.button-login {
  width: 280px;
  margin-bottom: 16px;
  border-radius: 7px;
  text-align: center;
  border: none;
}

.button-navigation-link-common-style, .button-navigation-link-common-style:link {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.2;
  text-decoration: none;
  color: white;
  padding: 16px 32px;
  outline: none;
  border-right: 7px;
  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.151042);
  background: linear-gradient(180deg, #6CB3FA 0%, #067DFF 100%);
  user-select: none;
  margin: 0;
  transition: box-shadow .15s ease-in-out;
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

.successEmailBlock {
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

.successEmailImage {
  width: 20px;
  margin-right: 15px;
}

.successEmailDescription {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  color: #4A4A4A;
  font-size: 12px;
  line-height: 1.2;
  margin: 0;
}

.primaryButton {
  font-size: 15px;
  border-radius: 9px;
  padding-top: 15px;
  padding-bottom: 16px;
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

  .input-icon {
    right: 24px;
  }

  .input-email {
    width: 260px;
    margin: 0 auto 16px;
  }

  .button-login {
    width: 260px;
    margin: 0 auto;
  }

  .successEmailBlock {
    width: 260px;
  }
}
</style>
