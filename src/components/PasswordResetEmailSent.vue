<template>
    <div id="passwordResetEmailSentPage">
        <LogInHeader/>
        <b-container class="passwordResetEmailSentBlock">
            <b-row align-v="center" class="d-flex justify-content-center">
                <b-col cols="12" class="d-flex align-items-center justify-content-center flex-column">
                    <img class="passwordResetEmailSentBlockImage" src="../../img/PasswordResetEmailSent/mail_incoming.png" alt="Mail incoming image">
                    <p class="special-mb passwordResetEmailSentBlockTitle">Готово!</p>
                    <p class="special-mb passwordResetEmailSentBlockText">Ссылка для восстановления была отправлена на указанный Email</p>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import LogInHeader from "./LogInHeader.vue";

export default {
  name: "PasswordResetEmailSent",
  components: {
    LogInHeader
  },
}
</script>

<style scoped>
#passwordResetEmailSentPage {
  min-width: 100%;
  min-height: 100vh;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
}

.passwordResetEmailSentBlock {
  min-height: calc(100vh - 75px);
}

.passwordResetEmailSentBlock div:nth-child(1) {
  min-height: inherit;
}

.passwordResetEmailSentBlockImage {
  height: 80px;
  user-select: none;
}

.passwordResetEmailSentBlockTitle {
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  font-size: 34px;
  color: #101010;
  text-align: center;
  margin: 32px 0
}

.passwordResetEmailSentBlockText {
  font-size: 14px;
  line-height: 1.2;
  color: #666;
  max-width: 320px;
  margin: 0 auto 30px;
  text-align: center;
}

/*.button-login {*/
/*  width: 280px;*/
/*  margin-bottom: 16px;*/
/*  border-radius: 7px;*/
/*  text-align: center;*/
/*}*/

/*.button-navigation-link-common-style, .button-navigation-link-common-style:link {*/
/*  font-family: 'Gotham Pro', sans-serif;*/
/*  font-style: normal;*/
/*  font-weight: 500;*/
/*  font-size: 18px;*/
/*  line-height: 1.2;*/
/*  text-decoration: none;*/
/*  color: white;*/
/*  padding: 16px 32px;*/
/*  outline: none;*/
/*  border-right: 7px;*/
/*  box-shadow: 0 0.5px 1px rgba(0, 0, 0, 0.151042);*/
/*  background: linear-gradient(180deg, #6CB3FA 0%, #067DFF 100%);*/
/*}*/

/*.button-navigation-link-common-style p {*/
/*  user-select: none;*/
/*  margin: 0;*/
/*  text-decoration: none;*/
/*}*/

/*.button-navigation-link-common-style:focus,.button-navigation-link-common-style:hover {*/
/*  background: linear-gradient(180deg, #1D8EFF 0%, #1D8EFF 0%, #1D8EFF 0.01%, #0068D9 100%);*/
/*  color: white;*/
/*  text-decoration: none;*/
/*}*/

/*.button-navigation-link-common-style:active {*/
/*  background: linear-gradient(180deg, #0076ED 0%, #479FFF 100%);*/
/*  text-decoration: none;*/
/*}*/

@media (max-width: 768px) {
  .passwordResetEmailSentBlockText {
    max-width: 290px;
  }

  /*.button-login {*/
  /*    width: 260px;*/
  /*}*/
}
</style>
