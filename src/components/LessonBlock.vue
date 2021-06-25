<template>
  <b-col cols="12" sm="4" md="3" class="lessonBlock" @click="goToLesson" @keydown.enter="goToLesson">
    <div class="innerLessonBlock" :class="status ? 'available' : 'disable'">
      <div class="statusLabel" v-if="status && lessonsTotal > lessonsCompleted">
        Изучаем
      </div>
      <div class="infoLine">
        <!-- <img v-if="status" class="keyGround user-select-none" src="../../img/LessonBlock/keyEmptyBlue.svg" alt="Key empty icon"> -->
        <!-- <img v-else class="keyGround user-select-none" src="../../img/LessonBlock/keyEmptyGray.svg" alt="Key empty icon"> -->

        <div class="keyLetter user-select-none" :class="status ? 'available' : 'disable'">{{ letter }}</div>

        <div class="d-flex flex-column statisticsBlock" v-if="status">
          <div class="statisticsLine">
            <!-- <img class="metricIcon user-select-none" src="../../img/LessonBlock/speedMetricBlue.svg" alt="Speed metric blue"> -->

            <div class="metricValue">{{ speed }}</div>
            <div class="metricLabel">зн/мин</div>
          </div>


          <div class="statisticsLine">
            <!-- <img class="metricIcon user-select-none" src="../../img/LessonBlock/accuracyMetricBlue.svg" alt="Accuracy metric blue"> -->

            <div class="metricValue">{{ accuracy }}%</div>
            <div class="metricLabel">точности</div>
          </div>
        </div>

        <div class="d-flex statisticsBlock disable" v-else>
          <div class="statisticsLine disable"></div>
          <div class="statisticsLine disable"></div>
        </div>
      </div>
      <div class="lessonBlockDivider" :class="status ? 'available' : 'disable'"></div>
      <div class="lessonSteps" :class="status ? 'available' : 'disable'">
        <div
          class="step"
          v-for="i in lessonsTotal"
          :key="i * (lessonIndex + 1)"
          :class="i > lessonsCompleted ? 'uncompleted' : null"
        />
      </div>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "LessonBlock",
  props: {
    status: Boolean,
    currentLessonId: Number,
    lessonsTotal: Number,
    lessonsCompleted: Number,
    letter: String,
    speed: Number,
    accuracy: Number,
    lessonIndex: Number,
  },
  methods: {
    goToLesson() {
      if ( this.status ) {
        this.$router.push('/lesson/' + this.currentLessonId);
      }
    }
  },
}
</script>

<style scoped>
.lessonBlock {
  padding-left: 5px;
  padding-right: 5px;
}

.lessonBlock:focus {
  outline: none;
}

.lessonBlock:focus .innerLessonBlock:not(.disable) {
  box-shadow: 0 0 0 4px #87ABF9;
}

.innerLessonBlock {
  height: 140px;
  position: relative;
  border-radius: 7px;
  margin-bottom: 10px;
  padding: 22px 15px;
  bottom: 0;
  color: #fff;
  text-decoration: none;
  transition: all 0.1s linear, transform 0.2s linear;
}

.innerLessonBlock.available:hover {
  bottom: 3px;
  background-image: linear-gradient(198deg, #02B7FF 0%, #0180FF 98%);
}

.innerLessonBlock.available {
  cursor: pointer;
  background-image: linear-gradient(198deg, #02B7FF 0%, #006DDA 98%);
}

.innerLessonBlock.disable {
  background-color: #F2F2F2;
}

.statusLabel {
  color: #fff;
  background: #026CA8;
  border-radius: 20px;
  padding: 4px 8px 3px;
  font-size: 9px;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  position: absolute;
  right: 5px;
  top: 5px;
}

.infoLine {
  position: relative;
  width: 100%;
  display: flex;
}

.keyGround {
  width: 65px;
  height: 65px;
}

.keyLetter {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 8px;
  left: 11px;
  width: 43px;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
}

.keyLetter.available {
  color: rgba(40, 130, 198, .9);
}

.keyLetter.disable {
  color: #C7C7C7;
}

.statisticsBlock.disable {
  flex-grow: 1;
  flex-wrap: wrap;
  align-content: space-evenly;
  padding-left: 10px;
}

.statisticsLine {
  margin-left: 10px;
}

.statisticsLine.disable {
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 2px;
  height: 12px;
  background-color: #DFDFDF;
  margin: 0;
}

.metricIcon {
  width: 14px;
  height: 14px;
  margin-bottom: 1px;
}

.metricValue {
  display: inline-block;
  font-size: 14px;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  margin: 0 3px 0 5px;
}

.metricLabel {
  display: inline-block;
  font-size: 10px;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
}

.lessonBlockDivider {
  width: 100%;
  height: 1px;
  border-radius: 1px;
  margin: 15px 0 12px;
}

.lessonBlockDivider.available {
  border-top: solid 1px #0278D6;
}

.lessonBlockDivider.disable {
  border-top: solid 1px #E7E7E7;
}

.lessonSteps {
  margin-left: -2px;
  margin-right: -2px;
  display: flex;
}

.lessonSteps.available .step {
  background: #FFFFFF;
}

.lessonSteps.disable .step {
  background: #DFDFDF;
}

.step {
  border-radius: 2px;
  height: 3px;
  margin: 0 2px;
  flex-grow: 2;
}

.step.uncompleted {
  opacity: .4;
}

@media (max-width: 991px) {
  .statusLabel {
    font-size: 7px;
  }

  .innerLessonBlock {
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 15px;
    height: 120px;
  }

  .keyGround {
    width: 45px;
    height: 45px;
  }

  .keyLetter {
    font-size: 18px;
    top: 5px;
    left: 1px;
  }

  .statisticsLine {
    height: 17px;
  }

  .metricIcon {
    width: 12px;
    height: 12px;
  }

  .metricValue {
    font-size: 10px;
  }

  .metricLabel {
    font-size: 7px;
  }
}

@media (max-width: 767px) {
  .innerLessonBlock {
    height: 115px;
  }

  .statisticsLine {
    margin-left: 5px;
  }

  .statisticsBlock.disable {
    padding-left: 5px;
  }
}

@media (max-width: 576px) {
  .innerLessonBlock {
    height: 125px;
  }

  .keyGround {
    width: 55px;
    height: 55px;
  }

  .keyLetter {
    font-size: 22px;
    top: 7px;
    left: 6px;
  }

  .statisticsLine {
    height: auto;
  }

  .metricValue {
    font-size: 12px;
  }

  .metricLabel {
    font-size: 8px;
  }
}
</style>
