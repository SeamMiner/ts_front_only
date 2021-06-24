<template>
  <main>
    <transition name="fade" mode="out-in">

      <div class="supportInnerBlock">
        <MainHeader></MainHeader>
        <b-container id="newProfile">

          <div class="greetingBlock">
            <div class="greetingText">
              <div class="profileTitleText">
                {{ greeting || 'Добрый день' }}, {{ name }}
                <img class="user-select-none" draggable="false" src="../../img/Profile/wave.png" alt="Greeting image" height="26" width="26">
              </div>
              <div class="XPBlock">
                <div class="XPTopic">Очки опыта</div>
                <div class="XP">{{ xpBalance }}xp</div>
              </div>
              <div class="weeklyBonusesMobile"  @click="$refs.week.openPopup()">
                <div v-for="(dayInfo, index) in dailyGoalData" :key="index">
                  <div class="currentDay weekDay" v-if="dayInfo.status === 'current' || dayInfo.status === 'done'" :class="dayInfo.status">{{ dayInfo.day_name }}</div>
                </div>
                <div class="results">Результаты</div>
              </div>
            </div>
            <div class="weeklyBonuses">
              <div class="week">
                <div class="weekDays" v-for="(dayInfo, index) in dailyGoalData" :key="index" :class="dayInfo.status">
                  <div class="weekDay">
                    {{ dayInfo.day_name }}
                  </div>
                  <div class="weekDayBonus">{{ dayInfo.status !== "past" ? dayInfo.bonus : "" }}</div>
                </div>
              </div>
              <div class="goalMessage">
                {{ goalMessage || 'Занимайся каждый день и получай постоянно увеличивающиеся бонусы.' }}
              </div>
            </div>
          </div>

          <div class="profileBlock navigation">
            <div class="currentProgress">
              <div class="currentCourse">
                <img src="../../img/Profile/russianFlag.png" height="54" width="54" class="courseIcon" alt="current course image">
                Русская раскладка
              </div>
              <div class="currentCourseProgress">
                <div class="description">
                  <span class="progressText d-md-block">Прогресс: {{ progressValue }}%</span>
                  <span class="currentXPBonus d-md-block">{{ todayBonus }}px</span>
                </div>
                <progress :max="100" :value="progressValue" class="progressBar"></progress>
              </div>
            </div>
            <div class="profileNavigation">
              <div class="profileNavigationLaptop">
                <div class="pagesTopic">Страницы</div>

                  <span class="pageItem" @click="isCourses = false; isAchievements = false;" :class=" isAchievements || isCourses ? '' : 'active' ">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32ZM15.9222 20.4751C15.645 20.1979 15.645 19.7485 15.9222 19.4713L19.4713 15.9222C19.7485 15.645 20.1979 15.645 20.4751 15.9222L24.0242 19.4713C24.3014 19.7485 24.3014 20.1979 24.0242 20.4751C23.747 20.7523 23.2976 20.7523 23.0204 20.4751L20.683 18.1378V24.2054C20.683 24.5974 20.3652 24.9152 19.9732 24.9152C19.5812 24.9152 19.2634 24.5974 19.2634 24.2054L19.2634 18.1378L16.926 20.4751C16.6488 20.7523 16.1994 20.7523 15.9222 20.4751Z" fill="currentColor" class="ddIconElement"/></svg>
                    Мой{{'\xa0'}}прогресс
                  </span>

                  <span class="pageItem" @click="isCourses = true; isAchievements = false;" :class=" isAchievements || !isCourses ? '' : 'active' ">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32ZM15.9222 20.4751C15.645 20.1979 15.645 19.7485 15.9222 19.4713L19.4713 15.9222C19.7485 15.645 20.1979 15.645 20.4751 15.9222L24.0242 19.4713C24.3014 19.7485 24.3014 20.1979 24.0242 20.4751C23.747 20.7523 23.2976 20.7523 23.0204 20.4751L20.683 18.1378V24.2054C20.683 24.5974 20.3652 24.9152 19.9732 24.9152C19.5812 24.9152 19.2634 24.5974 19.2634 24.2054L19.2634 18.1378L16.926 20.4751C16.6488 20.7523 16.1994 20.7523 15.9222 20.4751Z" fill="currentColor" class="ddIconElement"/></svg>
                    Курсы
                  </span>

                  <span class="pageItem" @click="isCourses = false; isAchievements = true;" :class=" !isAchievements || isCourses ? '' : 'active' ">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32ZM15.9222 20.4751C15.645 20.1979 15.645 19.7485 15.9222 19.4713L19.4713 15.9222C19.7485 15.645 20.1979 15.645 20.4751 15.9222L24.0242 19.4713C24.3014 19.7485 24.3014 20.1979 24.0242 20.4751C23.747 20.7523 23.2976 20.7523 23.0204 20.4751L20.683 18.1378V24.2054C20.683 24.5974 20.3652 24.9152 19.9732 24.9152C19.5812 24.9152 19.2634 24.5974 19.2634 24.2054L19.2634 18.1378L16.926 20.4751C16.6488 20.7523 16.1994 20.7523 15.9222 20.4751Z" fill="currentColor" class="ddIconElement"/></svg>
                    Достижения
                  </span>

              </div>

              <div class="profileNavigationMobile">
                <span  class="pageItem active" @click="$refs.links.openPopup()">
                  {{ isCourses ? 'Курсы' : isAchievements ? 'Достижения' : 'Мой прогресс' }}
                  <img src="../../img/Profile/toButton.svg" draggable="false" alt="Посмотреть инф-ю про выбранную категорию">
                </span>
              </div>
            </div>
          </div>
    <!--      <div class="profileBlock courseBlock">-->
          <transition name="fade" mode="out-in">

          <div class="courseList">
            <div class="courseTopic border-bottom-0" :key="'courseTopic'">
              <div class="topic">
                {{ isCourses ? 'Недавние курсы' : isAchievements ? 'Мои достижения' : 'Мой прогресс' }}
              </div>
    <!--          <div class="purchases">
                Мои покупки
              </div>-->
            </div>

            <div class="supportInnerBlock" :key="'supportInnerBlock'">

                <div class="courses" v-if="isCourses">
                  <newProfileCourse
                    v-for="(course, index) in courses"
                    :key="index"
                    :is-active="course.is_active"
                    :title="course.title"
                    :image="course.image"
                    :progress-value="course.progress_value || 0"
                    :id="course.id"
                    :button-text="course.button_text"
                    :class="!course.is_active ? 'disable user-select-none' : ''"
                  />
                </div>

              <div class="achievements" v-else-if="isAchievements">
                <ProfileAchievement
                  v-for="(achievement, index) in achievements" :key="index"
                  :title="achievement.title.replaceAll('&nbsp;', '\xa0')"
                  :description="achievement.description.replaceAll('&nbsp;', '\xa0')"
                  :current-level="achievement.current_level"
                  :bonus="achievement.bonus"
                  :image="achievement.image"
                  :progress="achievement.progress"
                  :id="index"
                />
              </div>

              <div class="progressBlock" v-else>
                <ProfileCourse
                    v-for="(course, index) in courses"
                    :key="index"
                    :is-active="course.is_active"
                    :title="course.title"
                    :image="course.image"
                    :progress-value="course.progress_value || 0"
                    :id="course.id"
                    :button-text="course.button_text"
                    :class="!course.is_active ? 'disable user-select-none' : ''"
                />
              </div>

              </div>
            </div>
          </transition>

          <!--      </div>-->
        </b-container>

        <mobilePopup ref="links" :id="'links'">

          <div class="currentProgress">
            <div class="currentCourse">
              <img src="../../img/Profile/russianFlag.png" height="54" width="54" class="courseIcon" alt="current course image">
              Русская раскладка
            </div>
            <div class="currentCourseProgress">
              <div class="description">
                <span class="progressText d-md-block">Прогресс: {{ progressValue }}%</span>
                <span class="currentXPBonus d-md-block">240px</span>
              </div>
              <progress :max="100" :value="progressValue" class="progressBar"></progress>
            </div>
          </div>

          <div class="pagesTopic">Страницы</div>

          <span class="pageItem" @click="isCourses = false; isAchievements = false; $refs.links.closePopup('', 'click')">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32ZM15.9222 20.4751C15.645 20.1979 15.645 19.7485 15.9222 19.4713L19.4713 15.9222C19.7485 15.645 20.1979 15.645 20.4751 15.9222L24.0242 19.4713C24.3014 19.7485 24.3014 20.1979 24.0242 20.4751C23.747 20.7523 23.2976 20.7523 23.0204 20.4751L20.683 18.1378V24.2054C20.683 24.5974 20.3652 24.9152 19.9732 24.9152C19.5812 24.9152 19.2634 24.5974 19.2634 24.2054L19.2634 18.1378L16.926 20.4751C16.6488 20.7523 16.1994 20.7523 15.9222 20.4751Z" fill="currentColor" class="ddIconElement"/></svg>
            Мой{{'\xa0'}}прогресс
          </span>

          <span class="pageItem" @click="isCourses = true; isAchievements = false; $refs.links.closePopup('', 'click')">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32ZM15.9222 20.4751C15.645 20.1979 15.645 19.7485 15.9222 19.4713L19.4713 15.9222C19.7485 15.645 20.1979 15.645 20.4751 15.9222L24.0242 19.4713C24.3014 19.7485 24.3014 20.1979 24.0242 20.4751C23.747 20.7523 23.2976 20.7523 23.0204 20.4751L20.683 18.1378V24.2054C20.683 24.5974 20.3652 24.9152 19.9732 24.9152C19.5812 24.9152 19.2634 24.5974 19.2634 24.2054L19.2634 18.1378L16.926 20.4751C16.6488 20.7523 16.1994 20.7523 15.9222 20.4751Z" fill="currentColor" class="ddIconElement"/></svg>
            Курсы
          </span>

          <span class="pageItem" @click="isCourses = false; isAchievements = true; $refs.links.closePopup('', 'click')">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="currentColor" class="ddIcon"/><path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M20 32C26.6274 32 32 26.6274 32 20C32 13.3726 26.6274 8 20 8C13.3726 8 8 13.3726 8 20C8 26.6274 13.3726 32 20 32ZM15.9222 20.4751C15.645 20.1979 15.645 19.7485 15.9222 19.4713L19.4713 15.9222C19.7485 15.645 20.1979 15.645 20.4751 15.9222L24.0242 19.4713C24.3014 19.7485 24.3014 20.1979 24.0242 20.4751C23.747 20.7523 23.2976 20.7523 23.0204 20.4751L20.683 18.1378V24.2054C20.683 24.5974 20.3652 24.9152 19.9732 24.9152C19.5812 24.9152 19.2634 24.5974 19.2634 24.2054L19.2634 18.1378L16.926 20.4751C16.6488 20.7523 16.1994 20.7523 15.9222 20.4751Z" fill="currentColor" class="ddIconElement"/></svg>
            Достижения
          </span>


        </mobilePopup>

        <mobilePopup ref="week" :id="'week'">
          <div class="weeklyBonuses">

            <div class="topic">Результаты недели</div>
              <div class="week">
                <div class="weekDays" v-for="(dayInfo, index) in dailyGoalData" :key="index" :class="dayInfo.status">
                  <div class="weekDay">
                    {{ dayInfo.day_name }}
                  </div>
                  <div class="weekDayBonus">{{ dayInfo.status !== "past" ? dayInfo.bonus : "" }}</div>
                </div>
              </div>
              <div class="goalMessage">
                {{ goalMessage || 'Занимайся каждый день и получай постоянно увеличивающиеся бонусы.' }}
              </div>
            </div>

        </mobilePopup>
      </div>
    </transition>
  </main>
</template>

<script>
export default {
name: "newProfile",
  components: {
    // MainHeader,
    MainHeader: () => import('./MainHeader.vue'),
    // newProfileCourse,
    newProfileCourse: () => import('./newProfileCourse.vue'),
    ProfileCourse: () => import('./ProfileCourse.vue'),
    // mobilePopup,
    mobilePopup: () => import('./mobilePopup.vue'),
    ProfileAchievement: () => import('./ProfileAchievement.vue'),
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
      isCourses: false,
      isAchievements: false,
    }
  },
  mounted() {
    this.$emit("end-loading");

    if (this.$root.$children[0].$data.lessonsLimitExceeded) {
      this.$bvModal.show('payment_required');

      this.$root.$children[0].$data.lessonsLimitExceeded = false;
    }

  },
}
</script>

<style scoped>
#newProfile {
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "nav greeting"
                       "nav course";
  grid-auto-rows : min-content;
  grid-gap: 0 30px;

  padding-top: 135px;
  padding-bottom: 16px;
}

.profileBlock.navigation, .greetingBlock {
  display: grid;
  grid-template-rows: repeat(2, minmax(min-content, max-content));
  grid-auto-rows: min-content;
  grid-row-gap: 20px;
}

.profileBlock.navigation {
  grid-area: nav;
}

.greetingBlock {
  grid-area: greeting;
}

.courseList {
  grid-area: course;
}

.currentProgress {
  padding: 12px;
}

.courseIcon {
  background: #E3E3E3;
  border-radius: 14px;
  padding: 11px 7px;
}

.currentCourse {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 14px;
  align-items: center;

  padding-bottom: 24px;

  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 24px;

  color: #1D1D1D;
}

.currentCourseProgress {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 140%;

  color: #0082FF;
}

.currentXPBonus {
  color: #747474;
}

progress {
  height: 6px;
  width: 100%;
  border-radius: 10px;
}

progress::-webkit-progress-bar {
  background: #F7F7F8;
  border-radius: 10px;
}

progress::-webkit-progress-value {
  background: #0082FF;
  border-radius: 6px;
}

.pagesTopic {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;

  text-transform: uppercase;

  color: #747474;

  margin-left: 12px;
  margin-bottom: 16px;
}

.pageItem {
  padding: 12px;
  margin: 8px 0;

  background: #FFFFFF;
  border-radius: 12px;

  display: grid;
  grid-template-columns: auto 1fr;
  grid-column-gap: 16px;
  align-items: center;
  cursor: pointer;
  transition: all .15s ease-in-out;
}

.pageItem:hover {
  background: #F5F5F5;
}

.pageItem:active, .pageItem:focus {
  background: #E3F1FF;
  color: #186ECA;
  box-shadow: 0 0 0 4px #87ABF9;
}

.pageItem.active {
  background: #E3F1FF!important;
  color: #186ECA!important;
}

.greetingText, .courseTopic {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  grid-column-gap: 16px;

  padding-bottom: 20px;

  font-family: 'Gotham Pro', sans-serif;

  border-bottom: 1px solid #E5E6EB;
}

.profileTitleText {
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 34px;

  color: #1D1D1D;
}

.XPTopic {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;

  color: #747474;

  text-align: end;

  margin-bottom: 10px;
}

.XP {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 23px;

  color: #1D1D1D;

  display: flex;
  align-items: center;
}

.XP:before {
  content: "";

  border-radius: 100%;
  border: solid 5px #0082FF;

  margin-right: 8px;
}

.weeklyBonuses {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-column-gap: 48px;
  font-family: "Gotham Pro", sans-serif;
}

.week {
  display: grid;
  grid-template-columns: repeat(7, min-content);
  grid-column-gap: 16px;

  font-family: "Gotham Pro", sans-serif;
}

.weekDays.done .weekDay, .weeklyBonusesMobile .currentDay.done {
  border-color: #0082FF;
  background-color: #0082FF;
  color: #fff;
}

.weekDays.past .weekDay {
  background: #E5E6EA;
}

.weekDays.current .weekDay, .weeklyBonusesMobile .currentDay.current {
  border-color: #0082FF;
  background-color: #FFF;
}

.weekDay {
  width: 48px;
  height: 48px;

  border: 1px solid #E5E6EB;
  background: #FFFFFF;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 18px;
}

.weeklyBonusesMobile {
  display: none;
}

.weeklyBonusesMobile .currentDay {
  width: 38px;
  height: 38px;

  margin-right: 8px;

  font-size: 15px;
  line-height: 15px;
}

.weekDayBonus {
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 14px;

  text-align: center;

  margin-top: 8px;
}

.weekDays.current .weekDayBonus, .weekDays.done .weekDayBonus {
  color: #0082FF;
}

.goalMessage {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 140%;

  color: #545454;
}

.courseTopic {
  padding: 40px 0 32px;
  align-items: center;
}

.topic {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 23px;

  color: #1D1D1D;
}

/*.courseTopic .purchases {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;

  color: #0082FF;
}*/


.courseList .supportInnerBlock {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 24px;
}

.supportInnerBlock:only-child {
  display: contents;
}

.results {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #0082FF;
}

.currentCourseProgress .description {
  display: flex;
  justify-content: space-between;
}

.profileNavigationMobile {
  display: none;
}

.achievements, .courses, .progressBlock {
  display: contents;
}

@media screen and (max-width: 992px) {
  #newProfile {
    grid-template-rows: auto auto 1fr;
    grid-template-columns: 1fr;
    grid-template-areas: "greeting"
                          "nav"
                          "course"
  ;

    grid-gap: 0;
    padding-top: 100px;
  }
}

@media screen and (max-width: 768px) {

  .profileTitleText {
    grid-column-start: 1;
    grid-column-end: 3;

    font-size: 30px;
    line-height: 37px;

    display: flex;
    align-items: center;
  }

  .greetingText {
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 24px;
  }

  .greetingBlock .weeklyBonuses {
    display: none;
  }

  .weeklyBonuses {
    grid-template-columns: 1fr;
    grid-row-gap: 40px;
  }

  .XPTopic {
    text-align: start;
  }

/*  .courseList .courses {
    grid-template-columns: 1fr;
    grid-gap: 24px 0;
  }*/

  .weeklyBonusesMobile {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
  }
  
  .profileNavigation .profileNavigationLaptop {
    display: none;
  }

  .profileNavigationMobile .pageItem {
    grid-template-columns: 1fr auto;
  }
  
  .profileNavigationMobile {
    display: block;
  }

  .weekDay {
    width: 38px;
    height: 38px;

    font-size: 15px;
    line-height: 15px;
  }

  .weekDayBonus {
    font-size: 12px;
    line-height: 12px;
  }

  .week {
    grid-column-gap: 8px;
  }

  .pageItem:active, .pageItem:focus {
    background: inherit;
    color: inherit;
    box-shadow: none;
  }

  }
</style>