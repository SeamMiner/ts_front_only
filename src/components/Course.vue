<template>
<div id="Course">
  <transition name="fade">
    <OnlyMobile v-if="onlyMobile" :closable="true" @close-modal="onlyMobile = false"/>
  </transition>

  <MainHeader
      ref="header"
  />

  <b-container class="courseBlock">
    <section class="profileBlock px-0 d-flex flex-column">
      <b-col>
      <b-row class="px-0 px-md-4 w-100 h-100 m-0">
        <b-col cols="12" md="9" class="profileDailyGoal d-flex align-items-center align-items-md-start justify-content-between flex-column px-0" >
          <b-row>
            <b-col cols="12">
              <div class="profileTitleText">
                {{ courseData.title || 'Английская раскладка' }}
                <img class="user-select-none ml-1" height="34" width="34" :src="require(`../../img/Profile/${ courseData.image || 'englishCourse' }.png`)" alt="Course Icon">
              </div>
            </b-col>
          </b-row>

          <b-col class="d-flex h-100 align-items-center align-items-md-end flex-column flex-md-row justify-content-md-between justify-content-center mt-4 pl-md-0">
            <b-col cols="auto" class="my-2 my-md-0 d-flex justify-content-center justify-content-md-start pl-md-0">
              <b-row class="mx-0 mr-md-3">
                <b-col cols="auto" class="profileDays d-flex flex-column align-items-center p-md-0" v-for="(moduleData, index) in modules" :key="index" :class="[moduleData.progress === 100 ? `success` : moduleData.progress > 0 ? `active` : ``, index === 0 ? 'ml-0' : '']">
                  <div class="profileCircle" v-if="moduleData.progress === 100">
                    <svg width="13px" height="10px" viewBox="0 0 13 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Typing-School-2.0.8" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Course" transform="translate(-450.000000, -385.000000)" fill="#FFFFFF" fill-rule="nonzero"><g id="Group-2" transform="translate(436.000000, 372.000000)"><polygon id="Path" points="18.1363636 20.9104478 15.0340909 17.7761194 14 18.8208955 18.1363636 23 27 14.0447761 25.9659091 13"></polygon></g></g></g></svg>
                  </div>
                  <div class="profileCircle" v-else>
                    {{ moduleData.progress }}%
                  </div>
                  {{ moduleData.title }}
                </b-col>
              </b-row>
            </b-col>

            <b-col cols="auto" class="px-0">
                <div class="simulatorStatistics my-4 my-md-0">
                  <div class="speedoMeter">
                    <svg class="simulatorIcon courseIcon" width="17.5" height="17.5"><use xlink:href="#icon-speedometer"><svg id="icon-speedometer" viewBox="0 0 17 12"><path fill="#818181" d="M4.82 4.1a.2.2 0 00-.05-.15L3.12 2.08a.2.2 0 00-.3-.02A8.56 8.56 0 00.97 4.39a.2.2 0 00.09.28l2.18 1.2a.2.2 0 00.28-.09c.32-.58.74-1.1 1.24-1.54a.2.2 0 00.07-.14zM5.6 3.37a.2.2 0 00.27.09c.58-.31 1.2-.51 1.85-.6a.2.2 0 00.18-.23L7.57.18A.2.2 0 007.34 0C6.35.14 5.4.44 4.53.9a.2.2 0 00-.09.29L5.6 3.37zM2.93 6.8L.55 6.17a.2.2 0 00-.26.15 8.38 8.38 0 00-.28 2.6.2.2 0 00.21.2l2.47-.12a.2.2 0 00.2-.21 5.56 5.56 0 01.18-1.72.2.2 0 00-.14-.25zM12.2.81a8.5 8.5 0 00-2.9-.8.21.21 0 00-.23.19l-.24 2.5a.2.2 0 00.2.22 5.6 5.6 0 011.99.56.2.2 0 00.19-.12l1.08-2.27c.05-.1.01-.23-.1-.28zM15.79 4.33a.2.2 0 00-.02-.16 8.53 8.53 0 00-1.95-2.25.2.2 0 00-.3.03l-1.56 1.93a.2.2 0 00.03.29c.52.42.95.92 1.29 1.49a.2.2 0 00.28.07l2.14-1.28a.2.2 0 00.09-.12zM16.6 5.9a.21.21 0 00-.26-.13l-2.4.72a.2.2 0 00-.14.25 5.3 5.3 0 01.25 1.9c0 .06.02.11.06.15.03.04.09.06.14.07l2.52.1h.01a.2.2 0 00.21-.18 7.99 7.99 0 00-.39-2.88zM8.5 8.03h-.12L5.01 6.06a.21.21 0 00-.26.03.21.21 0 00-.04.26l1.84 3.43v.2a1.94 1.94 0 003.33 1.37 1.92 1.92 0 00-.01-2.74 1.94 1.94 0 00-1.38-.57z"></path></svg></use></svg>
                    <span class="editableValue">{{ "\xa0" + averageSpeed }}</span><span class="indicatorDescription">зн/мин</span>
                  </div>
                  <div class="verticalDivider"></div>
                  <div class="accuracyMeter">
                    <svg class="simulatorIcon courseIcon" width="17.5" height="17.5"><use xlink:href="#icon-accuracy-meter"><svg id="icon-accuracy-meter" viewBox="0 0 17 17"><path fill="#818181" fill-rule="evenodd" d="M14.51 2.49A8.44 8.44 0 008.5 0C6.23 0 4.1.88 2.49 2.49A8.44 8.44 0 000 8.5c0 2.27.88 4.4 2.49 6.01A8.44 8.44 0 008.5 17c2.27 0 4.4-.88 6.01-2.49A8.44 8.44 0 0017 8.5c0-2.27-.88-4.4-2.49-6.01zM7.97 1.07V4.2A4.35 4.35 0 004.2 7.97H1.07a7.46 7.46 0 016.9-6.9zm0 4.19a3.3 3.3 0 00-2.71 2.71h2.71V5.26zm0 3.77v2.71a3.3 3.3 0 01-2.71-2.71h2.71zm-6.9 0a7.46 7.46 0 006.9 6.9V12.8A4.35 4.35 0 014.2 9.03H1.07zm7.96-7.96a7.46 7.46 0 016.9 6.9H12.8A4.35 4.35 0 009.03 4.2V1.07zm0 4.19v2.71h2.71a3.3 3.3 0 00-2.71-2.71zm2.71 3.77a3.3 3.3 0 01-2.71 2.71V9.03h2.71zM9.03 12.8v3.12a7.46 7.46 0 006.9-6.9H12.8a4.35 4.35 0 01-3.78 3.78z" clip-rule="evenodd"></path></svg></use></svg>
                    <span class="editableValue">{{ "\xa0" + averageAccuracy }}%</span><span class="indicatorDescription">точности</span>
                  </div>
                </div>
            </b-col>
          </b-col>
        </b-col>

        <b-col cols="12" md="3" class="d-flex align-items-center justify-content-center align-items-md-end justify-content-md-end mb-3 mb-md-0 mt-3 pr-0">
          <div class="currentLessonWrapper">
            <div class="charKeys">
              <span>{{ currentLesson.letter }}</span>
            </div>
              <PrimaryButton
                  class="mt-3"
                  tabindex="9"
                  data-size="sm"
                  @click.native="$router.push(`/lesson/${currentLesson.lesson_id}`)"
              >
                Продолжить
              </PrimaryButton>
          </div>
        </b-col>

      </b-row>
      </b-col>
      <b-col cols="auto" class="pt-3 pt-md-5 px-0">
        <b-progress :max="100" class="progressDailyGoal" height="10px">
          <b-progress-bar :value="courseData.progress_value" class="progressDailyGoalProgress"></b-progress-bar>
        </b-progress>
      </b-col>
    </section>

    <section v-for="(moduleInfo, indexModule) in modules" :key="'module' + indexModule">

      <section class="modules p-0">
        <b-col cols="12" class="px-0 moduleTitle">
          {{ moduleInfo.title }}
        </b-col>
      </section>

      <section>
        <b-row class="smallGutters">
          <LessonBlock
            v-for="(lessonInfo, index) in moduleInfo.stacks"
            :key="'lessonBlock' + index"
            :status="lessonInfo.status"
            :current-lesson-id="lessonInfo.current_lesson_id"
            :lessons-completed="lessonInfo.lessons_completed"
            :lessons-total="lessonInfo.lessons_total"
            :letter="lessonInfo.letter"
            :accuracy="lessonInfo.average_accuracy"
            :speed="lessonInfo.average_speed"
            :lesson-index="index"
            :tabindex="(indexModule + 1) * 100 + index"
          />
        </b-row>
      </section>

    </section>
  </b-container>

  <b-container fluid class="d-sm-flex d-md-none justify-content-center footer">
    <b-col cols="auto" class="d-flex justify-content-start">
      <PrimaryButton
          class="w-auto my-2"
          @click.native="onlyMobile = !onlyMobile"
      >
        Продолжить на ПК
      </PrimaryButton>
    </b-col>
  </b-container>
</div>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import LessonBlock from "@/components/LessonBlock";

import PrimaryButton from "@/components/buttons/PrimaryButton";

import OnlyMobile from "@/components/OnlyMobile";

export default {
  name: "Course",
  components: {
    OnlyMobile,
    MainHeader,
    LessonBlock,
    PrimaryButton,
  },
  data() {
    return {
      courseData: {},
      averageSpeed: 0,
      averageAccuracy: 0,
      currentLesson: {},
      modules: [],
      onlyMobile: false,
    }
  },
  mounted() {
    this.$emit("end-loading");

    window.scrollTo(0, 0);
  },
}
</script>

<style scoped>
#Course {
  min-height: 100vh;
  min-width: 100%;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  margin-top: 80px;
}

.courseBlock {
  margin-bottom: 100px;
}

.profileBlock {
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 12px;
  height: 250px;
  margin-bottom: 24px;
  padding-top: 1rem;
  overflow: hidden;
}

.profileTitleText {
  margin-top: 24px;
  font-size: 28px;
  color: #1E1D1D;
}

.currentLessonWrapper {
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
}

.courseButton {
  background-color: #0082FF;
  color: #fff;
  font-size: 13px;
  border-radius: 50px;
  padding: 8px 20px;
  margin-top: 16px;
  cursor: pointer;
  transition: box-shadow .15s ease-in-out;
}

.courseButton:hover, .courseButton:focus {
  text-decoration: none;
  background-color: #0072E4;
  outline: none;
}

.courseButton:focus {
  box-shadow: 0 0 0 4px #87ABF9!important;
}

.profileDays {
  color: #B2B2B2;
  font-size: 12px;
  padding: 6px 0;
  text-align: center;
  position: relative;
  right: 2px;
  margin-left: 10px;
}

.profileDays.active, .profileDays.success {
  color: #0082FF;
}

.profileCircle {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  border: 2px solid #e5e6ea;
  border-radius: 50%;
  font-size: 10px;
  color: #151515;
  padding-top: 1px;
  line-height: 1;
}

.simulatorStatistics {
  width: 100%;
  min-width: auto;
  display: flex;
  justify-content: space-between;
  box-shadow: none;
  border: none;
  border-radius: 8px;
  padding: 8px 16px 6px;
  transition: opacity .4s;
  background-color: #F2F2F2;
  color: #b2b2b2;
  position: relative;
}

.editableValue {
  font-weight: 500;
  color: #444;
  font-size: 17px;
  line-height: 17px;
  font-family: "Gotham Pro", "Arial", sans-serif;
}

.indicatorDescription {
  font-size: 12px;
  line-height: 12.5px;
  margin-left: 5px;
}

.speedoMeter, .accuracyMeter {
  padding-left: 16px;
  width: 156px;
  line-height: 30px;
}

.courseIcon {
  margin-right: 4px;
}

.verticalDivider {
  border-left: 1px solid #D9D9D9;
  position: absolute;
  height: calc(100% - 16px);
  left: 50%;
}

.charKeys {
  width: 70px;
  height: 70px;
  border-radius: 8px;
  padding-bottom: 8px;
  box-shadow: inset 0 -4px #d4cece;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: end;
  background-color: #f2efef;
  transition: color .4s, background-color .4s;
  font-family: "Gotham Pro", sans-serif;
}

.charKeys span {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fcfcfc;
  transition: background-color .4s;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  box-shadow: inset 0 -4px #d4cece, 0 2px 4px rgba(0,0,0,.1);
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  padding-bottom: 5px;
}

.progressDailyGoal {
  width: 100%;
  display: flex;
  align-items: flex-end;
  border-radius: 0;
  background-color: #FFFFFF;
}

.progressDailyGoalProgress {
  height: inherit;
  border-top-right-radius: 16px;
  margin-bottom: -1px;
  background-image: repeating-linear-gradient( -45deg, #65B0FF 0, #65B0FF 20px, #539EED 20px, #539EED 40px );
}

.moduleTitle {
  font-size: 20px;
  padding-bottom: 8px;
  border-bottom: 1px solid #EAEAEA;
  margin-bottom: 15px;
  margin-top: 50px;
}

.smallGutters {
  margin-left: -5px;
  margin-right: -5px;
}

.primaryButton[data-size="sm"] {
  font-size: 14px;
  border-radius: 50px;
  padding-right: 16px;
  padding-left: 16px;
}

@media (max-width: 1200px) {
  .simulatorStatistics {
    padding: 6px 8px 8px;
  }
}

@media (max-width: 992px) {
  .profileBlock {
    height: auto;
  }

  .courseIcon {
    display: none;
  }

  .editableValue {
    font-size: 14px;
    line-height: 14px;
  }

  .indicatorDescription {
    font-size: 9.5px;
  }

  .simulatorStatistics {
    padding: 8px 16px 6px;
  }

  .speedoMeter, .accuracyMeter {
    width: 100px;
    padding-left: 16px;
    line-height: 16px;
  }

  .speedoMeter {
    padding-left: 4px;
  }

  .profileDays {
    font-size: 10px;
  }

  .profileCircle {
    width: 28px;
    height: 28px;
    font-size: 7px;
  }
}

@media (max-width: 768px) {
  .profileTitleText {
    text-align: center;
  }

  .profileDays {
    font-size: 12px;
  }

  .profileCircle {
    width: 35px;
    height: 35px;
    font-size: 10px;
  }
}

@media (max-width: 320px) {
  .profileTitleText {
    font-size: 26px;
  }
}

.profileDays.success .profileCircle {
  background-color: #0191FF;
}

.profileDays.active .profileCircle, .profileDays.success .profileCircle{
  border-color: #7FC0FF;
}

.profileDays.active, .profileDays.success {
  color: #0082FF;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background: rgba(255,255,255,0.9);
  border-top: 1px solid #EFEFEF;
  padding: 15px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
</style>
