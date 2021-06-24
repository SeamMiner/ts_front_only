<template>
    <div id="passwordResetDonePage">
        <LogInHeader></LogInHeader>
        <b-container class="passwordResetDone">
            <b-row align-v="center" class="d-flex justify-content-center">
                <b-col cols="12" class="d-flex align-items-center justify-content-center flex-column block_done">
                  <img class="passwordResetDoneImage" src="../../img/PasswordResetDone/lock_with_pen.png" alt="Lock with pen image">
                  <p class="special-mb passwordResetDoneTitle">Пароль изменён</p>
                  <p class="special-mb passwordResetDoneText">Теперь можно войти в свой аккаунт с новым паролем и продолжить занятия</p>

                  <PrimaryButton
                      class="w-280"
                      @click.native="$router.push('/login')"
                  >
                    Войти
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
  name: "PasswordResetDone",
  components: {
    LogInHeader,
    PrimaryButton,
  },
  mounted() {
    if (!localStorage.getItem("refresh")) {
      this.$emit("end-loading");
    }
  },
}
</script>

<style scoped>
#passwordResetDonePage {
  min-width: 100%;
  min-height: 100vh;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
}

.passwordResetDone {
  min-height: calc(100vh - 75px);
}

.passwordResetDone div:nth-child(1) {
  min-height: inherit;
}

.passwordResetDoneImage {
  height: 80px;
  user-select: none;
}

.block_done {
  width: 280px;
}

.passwordResetDoneTitle {
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  font-size: 34px;
  color: #101010;
  text-align: center;
  margin: 32px 0
}

.passwordResetDoneText {
  font-size: 14px;
  line-height: 1.2;
  color: #666;
  max-width: 360px;
  margin: 0 auto 30px;
  text-align: center;
  width: 320px;
}

.w-280 {
  width: 280px;
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

  .passwordResetDoneText, .passwordResetDoneTitle {
    max-width: 290px;
  }

}
</style>
