<template>
<div id="profile">
  <div class="supportInnerBlock">
    <MainHeader
        ref="header"
    />

    <b-container>
      <b-row class="profileTitle">
        <b-col cols="12" md="9">
          <span class="profileTitleText">{{ greeting || 'Добрый день' }}, {{ name }} <img class="user-select-none" src="../../img/Profile/wave.png" alt="Greeting image" height="26" width="26"></span>
        </b-col>
        <b-col cols="12" md="3" class="d-flex justify-content-md-end mt-2 mt-md-0">
          <div class="profileXpBlock">
            <span>Очки опыта</span>
            <span class="profileXp">
              {{ xpBalance }}
            <svg width="21" height="9" viewBox="0 0 33 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group"><g id="Oval"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M5.83897 0.0277405H0.0703125L5.61795 6.95813L0.0703125 13.8423H5.83897L8.49263 10.5493L11.2028 13.935H16.9715L11.3866 6.95813L16.9715 0.0277405H11.2028L8.51192 3.36693L5.83897 0.0277405Z" fill="#4D4D4D"/><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="14"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M5.83897 0.0277405H0.0703125L5.61795 6.95813L0.0703125 13.8423H5.83897L8.49263 10.5493L11.2028 13.935H16.9715L11.3866 6.95813L16.9715 0.0277405H11.2028L8.51192 3.36693L5.83897 0.0277405Z" fill="white"/></mask><g mask="url(#mask0)"><path id="Oval_2" fill-rule="evenodd" clip-rule="evenodd" d="M17.7694 8.03147C29.3541 9.94763 39.4407 7.8014 40.2985 3.23773C41.1563 -1.32594 32.4606 -6.57888 20.8759 -8.49504C9.29129 -10.4112 -0.795321 -8.26497 -1.65315 -3.7013C-2.51099 0.862369 6.1848 6.11531 17.7694 8.03147Z" fill="#8F8F8F"/></g></g><g id="Oval_3"><path id="Mask_3" fill-rule="evenodd" clip-rule="evenodd" d="M22.62 9.95369V13.9241H18.0635V0.0275574H25.4076C27.7569 0.0275574 29.5325 0.460998 30.9088 1.32788C32.285 2.19476 32.9732 3.40244 32.9732 4.95092C32.9732 6.5391 32.2456 7.76994 30.7904 8.64344C29.3353 9.51694 27.5115 9.95369 25.1446 9.95369H22.62ZM22.6088 2.92322V6.97585H25.2862C26.2951 6.97585 27.0857 6.7933 27.6581 6.4282C28.2304 6.06309 28.5166 5.56656 28.5166 4.93858C28.5166 4.2814 28.2304 3.78121 27.6581 3.43801C27.0857 3.09482 26.2854 2.92322 25.2571 2.92322H22.6088Z" fill="#4D4D4D"/><mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="18" y="0" width="15" height="14"><path id="Mask_4" fill-rule="evenodd" clip-rule="evenodd" d="M22.62 9.95369V13.9241H18.0635V0.0275574H25.4076C27.7569 0.0275574 29.5325 0.460998 30.9088 1.32788C32.285 2.19476 32.9732 3.40244 32.9732 4.95092C32.9732 6.5391 32.2456 7.76994 30.7904 8.64344C29.3353 9.51694 27.5115 9.95369 25.1446 9.95369H22.62ZM22.6088 2.92322V6.97585H25.2862C26.2951 6.97585 27.0857 6.7933 27.6581 6.4282C28.2304 6.06309 28.5166 5.56656 28.5166 4.93858C28.5166 4.2814 28.2304 3.78121 27.6581 3.43801C27.0857 3.09482 26.2854 2.92322 25.2571 2.92322H22.6088Z" fill="white"/></mask><g mask="url(#mask1)"><path id="Oval_4" fill-rule="evenodd" clip-rule="evenodd" d="M17.1828 7.63981C27.8477 9.55661 37.1151 7.51646 37.882 3.08301C38.649 -1.35045 30.6251 -6.49835 19.9602 -8.41515C9.29524 -10.332 0.0278914 -8.2918 -0.739046 -3.85835C-1.50598 0.575104 6.51791 5.723 17.1828 7.63981Z" fill="#8F8F8F"/></g></g></g></svg>
            </span>
          </div>
        </b-col>
      </b-row>

      <b-container class="profileBlock px-0">
        <b-row class="px-3 px-md-4 w-100 m-0">
          <b-col cols="12" md="5" lg="6" class="profileDailyGoal d-flex align-items-center align-items-md-start justify-content-between flex-column">
            <div class="profileSubText">
              Цель на сегодня
            </div>
            <div class="dailyGoal">Пройти 5 уроков</div>
            <div class="profileTodayBonus profileXp">
              +{{ todayBonus }}
              <svg width="21" height="9" viewBox="0 0 33 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Group">
                  <g id="Oval">
                    <path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M5.83897 0.0277405H0.0703125L5.61795 6.95813L0.0703125 13.8423H5.83897L8.49263 10.5493L11.2028 13.935H16.9715L11.3866 6.95813L16.9715 0.0277405H11.2028L8.51192 3.36693L5.83897 0.0277405Z" fill="#4D4D4D"/>
                    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="14">
                      <path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M5.83897 0.0277405H0.0703125L5.61795 6.95813L0.0703125 13.8423H5.83897L8.49263 10.5493L11.2028 13.935H16.9715L11.3866 6.95813L16.9715 0.0277405H11.2028L8.51192 3.36693L5.83897 0.0277405Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask0)">
                      <path id="Oval_2" fill-rule="evenodd" clip-rule="evenodd" d="M17.7694 8.03147C29.3541 9.94763 39.4407 7.8014 40.2985 3.23773C41.1563 -1.32594 32.4606 -6.57888 20.8759 -8.49504C9.29129 -10.4112 -0.795321 -8.26497 -1.65315 -3.7013C-2.51099 0.862369 6.1848 6.11531 17.7694 8.03147Z" fill="#8F8F8F"/>
                    </g>
                  </g>
                  <g id="Oval_3">
                    <path id="Mask_3" fill-rule="evenodd" clip-rule="evenodd" d="M22.62 9.95369V13.9241H18.0635V0.0275574H25.4076C27.7569 0.0275574 29.5325 0.460998 30.9088 1.32788C32.285 2.19476 32.9732 3.40244 32.9732 4.95092C32.9732 6.5391 32.2456 7.76994 30.7904 8.64344C29.3353 9.51694 27.5115 9.95369 25.1446 9.95369H22.62ZM22.6088 2.92322V6.97585H25.2862C26.2951 6.97585 27.0857 6.7933 27.6581 6.4282C28.2304 6.06309 28.5166 5.56656 28.5166 4.93858C28.5166 4.2814 28.2304 3.78121 27.6581 3.43801C27.0857 3.09482 26.2854 2.92322 25.2571 2.92322H22.6088Z" fill="#4D4D4D"/>
                    <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="18" y="0" width="15" height="14">
                      <path id="Mask_4" fill-rule="evenodd" clip-rule="evenodd" d="M22.62 9.95369V13.9241H18.0635V0.0275574H25.4076C27.7569 0.0275574 29.5325 0.460998 30.9088 1.32788C32.285 2.19476 32.9732 3.40244 32.9732 4.95092C32.9732 6.5391 32.2456 7.76994 30.7904 8.64344C29.3353 9.51694 27.5115 9.95369 25.1446 9.95369H22.62ZM22.6088 2.92322V6.97585H25.2862C26.2951 6.97585 27.0857 6.7933 27.6581 6.4282C28.2304 6.06309 28.5166 5.56656 28.5166 4.93858C28.5166 4.2814 28.2304 3.78121 27.6581 3.43801C27.0857 3.09482 26.2854 2.92322 25.2571 2.92322H22.6088Z" fill="white"/>
                    </mask>
                    <g mask="url(#mask1)">
                      <path id="Oval_4" fill-rule="evenodd" clip-rule="evenodd" d="M17.1828 7.63981C27.8477 9.55661 37.1151 7.51646 37.882 3.08301C38.649 -1.35045 30.6251 -6.49835 19.9602 -8.41515C9.29524 -10.332 0.0278914 -8.2918 -0.739046 -3.85835C-1.50598 0.575104 6.51791 5.723 17.1828 7.63981Z" fill="#8F8F8F"/>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div class="profileSubText profileDailyProgress">
              Пройдено {{ progressValue * 20 }}%
            </div>

          </b-col>
          <b-col cols="12" md="7" lg="6" class="profileDailyGoal d-flex align-items-center align-items-md-end justify-content-between flex-column">
            <b-row class="d-flex justify-content-center justify-content-md-end my-4 m-md-0">
              <b-col cols="auto" class="profileDays" v-for="(dayInfo, index) in dailyGoalData" :key="index" :class="dayInfo.status">
                <div class="profileCircle" :class="dayInfo.status">
                  {{ dayInfo.day_name }}
                </div>
                <span class="specialMarginRight">{{ dayInfo.status !== "past" ? dayInfo.bonus : "" }}</span>
              </b-col>
            </b-row>
            <div class="goalMessage">
              {{ goalMessage || 'Занимайся каждый день и получай постоянно увеличивающиеся бонусы.' }}
              <svg class="goalMessageIcon" width="30px" height="13px" viewBox="0 0 30 13" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="Artboard" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="callout_origin_with_circle" transform="translate(-286.000000, -79.000000)" fill-rule="nonzero"><circle id="Oval" fill="#529EED" opacity="0.200000003" cx="300" cy="86" r="6"></circle><path d="M12,0.022922146 L356,0.681353749 C362.627417,0.694038062 368,5.99186954 368,12.5143915 L368,68.1134007 C368,74.6359227 362.627417,79.9317885 356,79.942048 L314.722167,80.0059478 C311.921083,80.010284 309.20825,80.9813438 307.053723,82.7511271 L301.426511,87.375028 C300.685629,87.9839825 299.611246,87.9860182 298.870364,87.3798035 L293.243152,82.7741517 C291.088625,81.0101574 288.375792,80.0467331 285.574708,80.0510693 L12,80.4745742 C5.372583,80.4848337 3.97903932e-13,75.1205677 3.97903932e-13,68.4931507 L3.97903932e-13,12 C3.97903932e-13,5.372583 5.372583,0.0102826673 12,0.022922146 Z" id="Rectangle" fill="#018EFF"></path></g></g></svg>
            </div>
          </b-col>
        </b-row>
        <b-col cols="12" class="pt-5 px-0">
          <b-progress :max="5" class="progressDailyGoal" height="10px">
            <b-progress-bar :value="progressValue" class="progressDailyGoalProgress"></b-progress-bar>
          </b-progress>
        </b-col>
      </b-container>

      <div class="profileTitle">
        <span class="profileTitleText">Курсы</span>
      </div>

      <b-container class="px-0">
        <b-row>
          <b-col cols="12" md="6" v-for="(course, index) in courses" :key="index">
            <ProfileCourse
              :is-active="course.is_active"
              :title="course.title"
              :image="course.image"
              :progress-value="course.progress_value || 0"
              :id="course.id"
              :button-text="course.button_text"
              :class="!course.is_active ? 'disable user-select-none' : ''"
            />
          </b-col>
        </b-row>
      </b-container>

      <div class="profileTitle">
        <span class="profileTitleText">Достижения</span>
      </div>

      <b-container class="px-0">
        <b-row>
          <b-col cols="12" sm="6" lg="4" class="px-2" v-for="(achievement, index) in achievements" :key="index">
            <ProfileAchievement
              :title="achievement.title.replaceAll('&nbsp;', '\xa0')"
              :description="achievement.description.replaceAll('&nbsp;', '\xa0')"
              :current-level="achievement.current_level"
              :bonus="achievement.bonus"
              :image="achievement.image"
              :progress="achievement.progress"
              :id="index"
            />
          </b-col>
          <b-col cols="12" sm="6" lg="4" class="px-2">
            <div class="willBeOtherAchievements profileBlock profileAchievement d-flex justify-content-center align-items-center p-0">
              <img class="achievementImage user-select-none" src="../../img/Profile/bookmark.png" alt="Bookmark image">
              <div class="ml-2 profileAchievementText">
                Скоро будут еще...
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>

  <b-modal id="payment_required" centered hide-footer hide-header content-class="keyboardMenu" body-class="p-0">
    <div class="closeButton" @click="$bvModal.hide('payment_required')" tabindex="1">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.0203 5.97966C18.4825 6.44181 18.4825 7.19111 18.0203 7.65326L13.6736 12L18.0203 16.3467C18.4825 16.8089 18.4825 17.5582 18.0203 18.0203C17.5582 18.4825 16.8089 18.4825 16.3467 18.0203L12 13.6736L7.65326 18.0203C7.19111 18.4825 6.44181 18.4825 5.97966 18.0203C5.51751 17.5582 5.51751 16.8089 5.97966 16.3467L10.3264 12L5.97966 7.65327C5.51751 7.19112 5.51751 6.44182 5.97966 5.97967C6.44181 5.51751 7.19111 5.51751 7.65326 5.97967L12 10.3264L16.3467 5.97966C16.8089 5.5175 17.5582 5.51751 18.0203 5.97966Z"/></svg>
    </div>
    <b-container class="paymentModal d-flex flex-wrap">

      <b-col cols="12" class="profileTitleText mt-0 mb-4">
        Превышен лимит
      </b-col>

      <b-col cols="12" class="profileText mx-auto">
        Вы прошли все бесплатные уроки на сегодня
      </b-col>

      <b-col cols="12">
        <img src="../../img/Modals/idkIconRequired.svg" alt="idkIcon">
      </b-col>

      <b-col cols="12">
        <button @click="$router.push('/payment')" class="paymentButton" tabindex="1">
          Перейти на PRO
        </button>
      </b-col>

      <b-col cols="12">
        <button @click="$bvModal.hide('payment_required')" class="paymentButtonLink" tabindex="1">
          Подождать
        </button>
      </b-col>

    </b-container>
  </b-modal>

</div>
</template>

<script>
import ProfileCourse from "@/components/ProfileCourse";
import ProfileAchievement from "@/components/ProfileAchievement";
import MainHeader from "@/components/MainHeader";

export default {
  name: "newProfile",
  components: {
    MainHeader,
    ProfileCourse,
    ProfileAchievement,
  },
  data() {
    return {
      name: "",
      greeting: "",
      greetingImg: "",
      xpBalance: 0,
      todayBonus: 0,
      progressValue: 0,
      goalMessage: "",
      dailyGoalData: [],
      courses: [],
      achievements: [],
    }
  },
  mounted() {
    // this.initiateProfileData();
    this.$emit("end-loading");
    
    if (this.$root.$children[0].$data.lessonsLimitExceeded) {
      this.$bvModal.show('payment_required');

      this.$root.$children[0].$data.lessonsLimitExceeded = false;
    }

    this.checkUTM();
  },
}
</script>

<style scoped>
#profile {
  min-height: 100vh;
  min-width: 100%;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  padding-bottom: 80px;
}

.profileTitle {
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
  padding-bottom: 32px;
  margin-top: 76px;
}

.profileTitleText {
  font-size: 28px;
  color: #1E1D1D;
}

.profileBlock {
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 12px;
  margin-bottom: 24px;
  padding-top: 2rem;
  overflow: hidden;
}

.profileXpBlock {
  display: grid;
  color: #B7B7B7;
  font-size: 11px;
}

.profileXp {
  font-size: 20px;
  color: #66B4FF;
  font-weight: bold;
}

.profileSubText {
  font-size: 16px;
  color: #018EFF;
}

.dailyGoal {
  font-size: 24px;
  line-height: 23px;
  color: #1E1D1D;
  margin: 28px 0 50px;
}

.profileDailyProgress {
  margin-top: 18px;
}

.profileDays {
  color: #B2B2B2;
  font-size: 12px;
  padding: 0;
  text-align: center;
  position: relative;
  right: 2px;
  margin-left: 8px;
}

.profileDays.current, .profileDays.done {
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

.specialMarginRight {
  margin-right: 0.125rem;
}

.goalMessage {
  position: relative;
  min-width: 280px;
  max-width: 450px;
  background-color: #018EFF;
  color: #fff;
  padding: 20px 30px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.2;
}

.goalMessageIcon {
  margin-top: -1px;
  position: absolute;
  left: 70%;
  top: 100%;
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
  background-image: repeating-linear-gradient( -45deg, #65B0FF 0, #65B0FF 20px, #539EED 20px, #539EED 40px);
  transition: width 1s ease!important;
}

.achievementLevel .profileCircle {
  height: 20px;
  width: 20px;
}

.profileAchievement {
  height: 150px;
}

.willBeOtherAchievements {
  min-height: 150px;
  height: calc(100% - 24px);
}

.profileAchievementText {
  font-size: 16px;
}

.profileSubText .profileXp {
  font-size: 13px;
}

.profileCircle.done {
  border-color: #0082FF;
  background-color: #0082FF;
  color: #fff;
}

.profileCircle.past {
  background: #E5E6EA;
}

.profileCircle.current {
  border-color: #0082FF;
  background-color: #FFF;
}

.achievementImage {
  width: 26px;
  height: 26px;
}

@media (max-width: 992px) {
  .profileCircle {
    width: 30px;
    height: 30px;
    font-size: 8px;
  }
}

@media (max-width: 576px) {
  .profileDays {
    font-size: 9px;
  }

  .profileCircle {
    width: 28px;
    height: 28px;
    font-size: 7px;
  }
}

/* Modal payment required */
.profileText {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 1.4;
  text-align: center;
  color: #444444;
  opacity: 0.6;
}

.paymentButton {
  background: linear-gradient(180deg, #02B7FF 0%, #0180FF 100%);
  margin: 20px 0 0;
  padding: 14px 40px;
  box-shadow: 0 5px 10px 0 rgba(0,130,255,0.3);
  color: #fff;
  border-radius: 7px;
  border: none;
  height: auto;
  transition: all .15s ease-in-out;
  font-family: Gotham Pro, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
}

.paymentButton:hover, .paymentButton:focus {
  background: linear-gradient(180deg, #02B7FF 0%, #0072E4 100%);
  text-decoration: none;
  outline: none;
}

.paymentButton:focus {
  box-shadow: 0 0 0 4px #87ABF9!important;
}

.paymentButton:active {
  background: linear-gradient(180deg, #0076ED 0%, #479FFF 100%);
}

.paymentModal {
  text-align: center;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  min-height: 340px;
  padding: 44px 11px 14px;
}

/* styles for paymentRequired modal screen button */
.paymentButtonLink {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  text-align: center;
  color: #0082FF;
  margin: 8px 0;
  padding: 8px 16px;
  box-shadow: none;
  background-color: #FFFFFF;
  border-radius: 6px;
  transition: all .15s ease-in-out;
  border: none;
}

.paymentButtonLink:hover, .paymentButtonLink:focus  {
  color: #1E90FF;
}

.paymentButtonLink:active {
  color: #0076E7;
}

.paymentButtonLink:focus {
  box-shadow: 0 0 0 4px #87ABF9;
  outline: none;
}
</style>
