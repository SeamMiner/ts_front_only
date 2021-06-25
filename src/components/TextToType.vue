<template>
  <b-row class="textToTypeBlock">
    <b-row
        class="justify-content-start textRow"
        v-for="(str, strIndex) of typingText"
        :key="strIndex"
        :id="`textRow${strIndex}`"
        :class="{
          'collapsedTextRow': strIndex >= 3,
          // 'notLastTextRow': typingText.length > 3 && strIndex !== typingText.length && strIndex >= 2
        }"
    >
      <div class="textKey" v-for="(char, charIndex) of str" :key="'textKey' + charIndex + char" :id="`textRow${strIndex}textKey${charIndex}`">
        {{ char }}
      </div>
    </b-row>
  </b-row>
</template>

<script>
export default {
  name: "TextToType",
  props: [
    'typingText'
  ],
  methods: {
    resetTextRowsView() {
      const textRows = document.querySelectorAll(".textRow");
      for (let i = 0; i < textRows.length; i++) {
        if (i >= 3 && !textRows[i].classList.contains("collapsedTextRow")) {
          textRows[i].classList.add("collapsedTextRow");
        } else if (i < 3 && textRows[i].classList.contains("collapsedTextRow")) {
          textRows[i].classList.remove("collapsedTextRow");
        }
      }
    }
  }
}
</script>

<style scoped>
.textToTypeBlock {
  width: 618px;
}

.textToTypeBlock {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 144px;
  transition: opacity .4s;
  margin: auto;
  height: 144px;
}

.textRow {
  position: relative;
  margin: auto;
  height: 48px;
  min-width: 100%;
  transition: height .3s ease-in-out, opacity .3s ease-in-out;
}

.textRow::after {
  content: "";
  top: 90%;
  position: absolute;
  width: 100%;
  height: 1px;
  background-color: #ededef;
  transition: opacity .3s ease-in-out;
}

.collapsedTextRow {
  height: 0;
  opacity: 0;
}

.collapsedTextRow::after {
  opacity: 0;
}

/*.notLastTextRow {*/
/*  box-shadow: 0 -30px 30px 16px inset rgba(255, 255, 255, 0.6);*/
/*}*/

/*.notLastTextRow::before {*/
/*  content: "";*/
/*  width: 24px;*/
/*  height: 24px;*/
/*!*Need add adaptation and fix placing of icon - assets*!*/
/*  background-image: url('../assets/enter_new_line_hint.svg');*/
/*  position: absolute;*/
/*  left: 100%;*/
/*  top: 5px;*/
/*  margin-left: 8px;*/
/*}*/

.textKey {
  width: 12px;
  height: 24px;
  font-size: 18px;
  line-height: 24px;
  font-family: "Roboto Mono", "Arial", sans-serif;
  font-weight: 400;
  /*z-index: -1;*/
}

@media (min-height: 720px) and (min-width: 1025px) {
  .textToTypeBlock {
    width: 753px;
  }

  .textKey {
    width: 15px;
    height: 30px;
    font-size: 24px;
    line-height: 30px;
  }
}

@media (min-height: 860px) and (min-width: 1025px) {
  .textToTypeBlock {
    width: 888px;
  }

  .textKey {
    width: 17px;
    height: 34px;
    font-size: 26px;
    line-height: 34px;
  }
}

@media (min-height: 720px) {
  .textToTypeBlock {
    height: 180px;
  }
}

@media (min-height: 860px)  {
  .textToTypeBlock {
    height: 216px;
  }
}

.textKeyRequired::before {
  content: "";
  top: 89%;
  position: absolute;
  width: inherit;
  height: 3px;
  background-color: #0080ff;
  z-index: 1;
}

.textKeyWrong {
  color: #ff4158;
  background-color: #ffc3ca;
}

.textKeyCorrect {
  color: #96c691;
  background-color: #ecf7e7;
}
</style>
