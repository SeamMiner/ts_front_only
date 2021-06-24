<template>
 <router-link :to="`/course/${ id }`" class="currentProgress" :class="progressValue === 100 ? 'success' : ''">
     <div class="currentCourse">
       <img :src="require(`../../img/Profile/${ image }.png`)" height="54" width="54" class="courseIcon" alt="current course image">
       {{ title }}
     </div>
     <div class="currentCourseProgress">
       <div class="progressText">{{ isActive ? 'Прогресс:  ' +  progressValue + '%' : 'В разработке...' }}</div>
       <progress :max="100" :value="progressValue" class="progressBar"></progress>
     </div>
 </router-link>
</template>

<script>
export default {
name: "newProfileCourse",
  // data() {
  //   return {
  //     totalLessons: 244,
  //     completedLesson: 12,
  //   }
  // }
  props: {
    isActive: Boolean,
    title: String,
    image: String,
    progressValue: Number,
    id: Number,
    buttonText: String,
  },
}
</script>

<style scoped>

.currentProgress {
  background: #FFFFFF;

  border: 1px solid #E5E6EB;
  box-sizing: border-box;
  border-radius: 12px;

  padding: 24px!important;

  text-decoration: none;
}

.currentProgress.disable {
  pointer-events: none;
  opacity: .5;
}

.currentProgress.success {
  border-color: #0082FF;
  background-color: #0082FF;
}

.currentProgress.success .currentCourse, .currentProgress.success .currentCourseProgress {
  color: #FFFFFF;
}

.currentProgress.success .courseIcon {
  background: #E2F0FF;
}

.currentProgress.success progress::-webkit-progress-bar {
  background: #E2F0FF;
}

.currentProgress.success progress::-webkit-progress-value, .currentProgress.success progress::-moz-progress-bar {
  background: #FFFFFF;
}

.currentCourse {
  display: grid;
  grid-template-columns: min-content min-content;
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

.courseIcon {
  background: #E3E3E3;
  border-radius: 14px;
  padding: 11px 7px;
}

.currentCourseProgress {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 140%;

  color: #0082FF;
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

progress::-webkit-progress-value{
  background: #0082FF;
  border-radius: 6px;
}

progress::-moz-progress-bar {
  background: #0082FF;
  border-radius: 6px;
}

</style>