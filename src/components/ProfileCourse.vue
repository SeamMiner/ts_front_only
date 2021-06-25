<template>
 <div class="d-flex flex-wrap profileBlock courseBlock profileCourse">
   <b-col cols="8" class="d-flex flex-column justify-content-around align-items-center pl-3 pl-lg-4 py-3">
     <span class="profileTitleText courseText w-100">{{ title }}</span>

     <span class="profileSubText courseText w-100">
       {{ isActive ? 'Пройдено ' + progressValue + '%' : 'В разработке...' }}
     </span>
   </b-col>

   <b-col cols="4" class="d-flex justify-content-end pr-3 pr-lg-4 py-3">
     <div class="goToCourseWrapper">
       <img class="user-select-none mb-3" :src="require(`../../img/Profile/${ image }.png`)" alt="courseImage" height="60" width="60">

       <PrimaryButton
           data-size="sm"
           @click.native="() => isActive ? $router.push(`/course/${id}`) : null"
           :disabled="!isActive"
       >
         {{ isActive ? buttonText : 'Начать' }}
       </PrimaryButton>
     </div>
   </b-col>

   <b-col cols="12" class="pt-4 px-0">
     <b-progress :max="100" class="progressDailyGoal" height="6px">
       <b-progress-bar :value="isActive ? progressValue : 0" class="progressDailyGoalProgress"></b-progress-bar>
     </b-progress>
   </b-col>
 </div>
</template>

<script>
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: "ProfileCourse",
  components: {
    PrimaryButton,
  },
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
.profileCourse.disable {
  opacity: .5;
}

.profileBlock {
  background: #FFFFFF;
  border: 1px solid #D9D9D9;
  box-sizing: border-box;
  border-radius: 12px;
  margin-bottom: 24px;
  padding-top: 1rem;
  overflow: hidden;
}

.profileTitleText {
  font-size: 28px;
  color: #1E1D1D;
}

.courseText {
  margin-top: 10px;
  line-height: 1.2;
}

.profileSubText {
  font-size: 14px;
  color: #018EFF;
}

.goToCourseWrapper {
  display: flex;
  flex-flow: wrap column;
  justify-content: center;
  align-items: center;
}
/*
.courseButton {
  background-color: #0082FF;
  color: #fff;
  font-size: 12px;
  border-radius: 50px;
  padding: 8px 20px 8px;
  border: none;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  line-height: 1.5;
  transition: box-shadow .15s ease-in-out;
}

.courseButton:not([disabled]):hover, .courseButton:not([disabled]):focus {
  text-decoration: none;
  background-color: #0072E4;
  outline: none;
}

.courseButton:focus {
  box-shadow: 0 0 0 4px #87ABF9!important;
}
*/
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
  background-image: repeating-linear-gradient(-45deg, #65B0FF 0, #65B0FF 20px, #539EED 20px, #539EED 40px);
  /*transition: width 1s ease!important;*/
  margin-bottom: -1px;
}

.courseBlock.success {
  border-color: #58C73D;
}

.courseBlock.success .courseText.profileSubText {
  color: #58C73D;
}

.primaryButton[data-size="sm"] {
  font-size: 14px;
  border-radius: 50px;
  padding-left: 12px;
  padding-right: 12px;
}


@media (max-width: 992px) {
  .profileTitleText {
    font-size: 24px;
  }
}

@media (max-width: 576px) {
  .primaryButton[data-size="sm"] {
    font-size: 10px;
  }
}
</style>
