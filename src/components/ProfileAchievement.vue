<template>
<div id="ProfileAchievement">
  <div class="profileBlock profileAchievement d-flex flex-column justify-content-between" :class="currentLevel === 4 ? 'success' : ''">
    <b-col cols="auto" class="d-flex justify-content-between px-3">
      <div class="profileAchievementText courseText">
        {{ title }}
        <div class="achievementText">
          {{ description }}
        </div>
      </div>

      <img class="user-select-none" :src="require(`../../img/Profile/${ image }.svg`)" :alt="'Achievement image'" height="60" width="60">
    </b-col>

    <b-col cols="auto" class="d-flex justify-content-between align-items-center px-3 levelInfoLine">

      <div class="profileSubText">
        <span class="profileXP" v-if="currentLevel < 4">{{ bonus ? '+' + bonus : '+?' }}</span>
        <svg v-if="currentLevel < 4" width="15" height="6" viewBox="0 0 33 14" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Group"><g id="Oval"><path id="Mask" fill-rule="evenodd" clip-rule="evenodd" d="M5.83897 0.0277405H0.0703125L5.61795 6.95813L0.0703125 13.8423H5.83897L8.49263 10.5493L11.2028 13.935H16.9715L11.3866 6.95813L16.9715 0.0277405H11.2028L8.51192 3.36693L5.83897 0.0277405Z" fill="#4D4D4D"/><mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="17" height="14"><path id="Mask_2" fill-rule="evenodd" clip-rule="evenodd" d="M5.83897 0.0277405H0.0703125L5.61795 6.95813L0.0703125 13.8423H5.83897L8.49263 10.5493L11.2028 13.935H16.9715L11.3866 6.95813L16.9715 0.0277405H11.2028L8.51192 3.36693L5.83897 0.0277405Z" fill="white"/></mask><g mask="url(#mask0)"><path id="Oval_2" fill-rule="evenodd" clip-rule="evenodd" d="M17.7694 8.03147C29.3541 9.94763 39.4407 7.8014 40.2985 3.23773C41.1563 -1.32594 32.4606 -6.57888 20.8759 -8.49504C9.29129 -10.4112 -0.795321 -8.26497 -1.65315 -3.7013C-2.51099 0.862369 6.1848 6.11531 17.7694 8.03147Z" fill="#8F8F8F"/></g></g><g id="Oval_3"><path id="Mask_3" fill-rule="evenodd" clip-rule="evenodd" d="M22.62 9.95369V13.9241H18.0635V0.0275574H25.4076C27.7569 0.0275574 29.5325 0.460998 30.9088 1.32788C32.285 2.19476 32.9732 3.40244 32.9732 4.95092C32.9732 6.5391 32.2456 7.76994 30.7904 8.64344C29.3353 9.51694 27.5115 9.95369 25.1446 9.95369H22.62ZM22.6088 2.92322V6.97585H25.2862C26.2951 6.97585 27.0857 6.7933 27.6581 6.4282C28.2304 6.06309 28.5166 5.56656 28.5166 4.93858C28.5166 4.2814 28.2304 3.78121 27.6581 3.43801C27.0857 3.09482 26.2854 2.92322 25.2571 2.92322H22.6088Z" fill="#4D4D4D"/><mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="18" y="0" width="15" height="14"><path id="Mask_4" fill-rule="evenodd" clip-rule="evenodd" d="M22.62 9.95369V13.9241H18.0635V0.0275574H25.4076C27.7569 0.0275574 29.5325 0.460998 30.9088 1.32788C32.285 2.19476 32.9732 3.40244 32.9732 4.95092C32.9732 6.5391 32.2456 7.76994 30.7904 8.64344C29.3353 9.51694 27.5115 9.95369 25.1446 9.95369H22.62ZM22.6088 2.92322V6.97585H25.2862C26.2951 6.97585 27.0857 6.7933 27.6581 6.4282C28.2304 6.06309 28.5166 5.56656 28.5166 4.93858C28.5166 4.2814 28.2304 3.78121 27.6581 3.43801C27.0857 3.09482 26.2854 2.92322 25.2571 2.92322H22.6088Z" fill="white"/></mask><g mask="url(#mask1)"><path id="Oval_4" fill-rule="evenodd" clip-rule="evenodd" d="M17.1828 7.63981C27.8477 9.55661 37.1151 7.51646 37.882 3.08301C38.649 -1.35045 30.6251 -6.49835 19.9602 -8.41515C9.29524 -10.332 0.0278914 -8.2918 -0.739046 -3.85835C-1.50598 0.575104 6.51791 5.723 17.1828 7.63981Z" fill="#8F8F8F"/></g></g></g></svg>

        <div class="profileSubText" :style="marginTopForDesc(currentLevel < 4)">{{ progress.text }}</div>
      </div>

      <div class="achievementLevelsRow justify-content-center justify-content-md-end align-items-center d-flex">
        <b-col cols="auto" class="achievementLevel px-1" v-for="level in 3" :key="(id + 1) * level">
          <div class="profileCircle" :class="level === currentLevel ? 'active' : (level < currentLevel ?  'success' : '')">
            {{ level }}
          </div>
        </b-col>
      </div>

    </b-col>

    <b-col cols="auto" class="align-items-end px-0 progressBlock">
      <b-progress :max="100" class="progressDailyGoal" height="6px">
        <b-progress-bar :value="progress.value" class="progressDailyGoalProgress"></b-progress-bar>
      </b-progress>
    </b-col>
  </div>
</div>
</template>

<script>
export default {
  name: "ProfileAchievement",
  props: {
    title: String,
    description: String,
    image: String,
    currentLevel: Number,
    bonus: Number,
    progress: Object,
    id: Number,
  },
  methods: {
    marginTopForDesc(hasXpDesc) {
      if (hasXpDesc) {
        return {marginTop: '5px'}
      }

      return void(0);
    }
  },
}
</script>

<style scoped>
.profileBlock {
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 12px;
  margin-bottom: 24px;
  padding-top: 1rem;
  overflow: hidden;
  height: 148px;
}

.profileAchievement {
  position: relative;
}

.profileAchievementText {
  font-size: 16px;
  max-width: 60%;
  margin-top: 10px;
  line-height: 1.2;
  margin-bottom: 5px;
}

.levelInfoLine {
  min-height: 40px;
}

.achievementText {
  font-size: 12px;
  line-height: 1.2;
  color: #6D6C6D;
  margin-top: 8px;
}

.profileSubText {
  font-size: 12px;
  line-height: 1.2;
  color: #018EFF;
}

.profileSubText .profileXP {
  font-size: 13px;
}

.profileCircle {
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 2px solid #e5e6ea;
  border-radius: 50%;
  font-size: 8px;
  color: #151515;
  padding-top: 1px;
  line-height: 1;
}

.achievementLevel .profileCircle {
  height: 20px;
  width: 20px;
}

.progressBlock {
  bottom: 0;
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
  background-image: repeating-linear-gradient( -45deg, #65B0FF 0, #65B0FF 20px, #539EED 20px, #539EED 40px );
  margin-bottom: -1px;
}

.profileCircle.success {
  border-color: #0082FF;
  background-color: #0082FF;
  color: #fff;
}

.profileCircle.active {
  border-color: #0082FF;
  background-color: #FFF;
}

.profileAchievement.success {
  border-color: #0082FF;
}

@media (min-width: 576px) {
  .profileBlock {
    height: 160px;
  }
}

@media (min-width: 768px) {
  .profileBlock {
    height: 164px;
  }
}
</style>
