<template>
    <div id="registrationGoogleDonePage">
        <LogInHeader></LogInHeader>
        <b-container class="googleRegDoneBlock">
            <b-row align-v="center" class="d-flex">
                <b-col cols="12" class="d-flex align-items-center justify-content-center flex-column formWrapper pb-5">
                    <img class="emojiIllustration" src="../../img/RegistrationGoogleDone/rocket.png" alt="Rocket image">
                    <h1>Последний шаг</h1>
                    <form @submit.prevent="completeRegistration" class="formBody position-relative">
                      <div class="fieldWrapper mb-3">
                        <input v-model="name" type="text" class="inputField" id="nameInput" placeholder="Саша" maxlength="254" required>
                        <label class="labelInput" for="nameInput">Имя</label>
                        <img class="imgInput user-select-none" draggable="false" src="../../img/RegistrationGoogleDone/education.svg" alt="Education icon">
                      </div>

                      <PrimaryButton
                          :type="'submit'"
                          class="w-100 mb-1"
                      >
                        Сохранить
                      </PrimaryButton>

                      <transition name="fade">
                        <div v-if="clientError" class="errorHintBlock position-absolute mb-3">
                          <img class="errorHintImage user-select-none" src="../../img/RegistrationGoogleDone/warning.svg" alt="Warning icon">
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
import LogInHeader from "@/components/LogInHeader";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: "RegistrationGoogleDone",
  components: {
    LogInHeader,
    PrimaryButton,
  },
  data() {
    return {
      name: "",
      clientError: null,
    };
  },
  mounted() {
    let name = localStorage.getItem('name');
    if (name) {
      this.name = name;
    }

    if (!localStorage.getItem("refresh")) {
      this.$emit("end-loading");
    }
  },
}
</script>

<style scoped>
#registrationGoogleDonePage {
  min-width: 100%;
  min-height: 100vh;
}

.googleRegDoneBlock {
  min-height: calc(100vh - 75px);
}

.googleRegDoneBlock div:nth-child(1) {
  min-height: inherit;
}

.formWrapper h1 {
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  font-size: 34px;
  color: #101010;
  text-align: center;
  margin: 32px 0;
}

.emojiIllustration {
  height: 80px;
  user-select: none;
}

.fieldWrapper {
  position: relative;
}

.inputField {
  width: 280px;
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

.buttonSubmit {
  width: 280px;
  margin-bottom: 16px;
  border-radius: 7px;
  text-align: center;
  border: none;
}

.buttonNavigationLinkCommonStyle, .buttonNavigationLinkCommonStyle:link {
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
  transition: box-shadow .15s ease-in-out;
}

.buttonNavigationLinkCommonStyle:focus,.buttonNavigationLinkCommonStyle:hover {
  background: linear-gradient(180deg, #1D8EFF 0%, #1D8EFF 0%, #1D8EFF 0.01%, #0068D9 100%);
  color: white;
  text-decoration: none;
}

.buttonNavigationLinkCommonStyle:focus {
  box-shadow: 0 0 0 4px #87ABF9;
}

.buttonNavigationLinkCommonStyle:active {
  background: linear-gradient(180deg, #0076ED 0%, #479FFF 100%);
  text-decoration: none;
}

.errorHintBlock {
  width: 100%;
  background: #F7F7F7;
  border-radius: 7px;
  margin-top: 8px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

@media (max-width: 768px) {
  .formWrapper, .fieldWrapper {
    width: 290px;
  }

  h1 {
    font-size: 28px;
  }

  .formBody {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .buttonSubmit {
    width: 260px;
  }

  .errorHintBlock {
    width: 260px;
  }
}
</style>
