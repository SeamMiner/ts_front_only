<template>
    <b-row class="justify-content-between align-items-end startKeys">
        <div
            v-for="(char, index) in typingSequence"
            :key="'charKey' + index + char"
            :id="'charKey' + index"
            class="charKeys"
        >
            <span>{{ char }}</span>
        </div>
    </b-row>
</template>

<script>
export default {
  name: "CharKeys",
  props: [
    'typingSequence',
  ]
}
</script>

<style scoped>
.startKeys {
  width: 618px;
  padding-bottom: 18px;
  height: 180px;
  transition: opacity .4s;
  margin: auto;
  position: relative;
}

.startKeys::after {
content: "";
top: 100%;
position: absolute;
width: 100%;
height: 1px;
background-color: #ededef;
}

.charKeys{
  width: 64px;
  height: 64px;
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
  width: 54px;
  height: 54px;
  border-radius: 12px;
  box-shadow: inset 0 -4px #d4cece, 0 2px 4px rgba(0,0,0,.1);
  font-weight: 500;
  font-size: 24px;
  line-height: 24px;
  padding-bottom: 5px;
}

.charKeysCorrect {
  box-shadow: inset 0 -3px #64a3d3;
  background-color: #9bccfd;
  padding-bottom: 6px!important;
}

.charKeysCorrect span {
  color: #2882c6;
  background-color: #dbedff;
  box-shadow: inset 0 -3px #64a3d3, 0 3px 6px rgba(0,0,0,.1);
}

.charKeysWrong {
  box-shadow: inset 0 -3px #ce6c6c, 0 3px 6px rgba(0,0,0,.1);
  background-color: #ff969d;
  padding-bottom: 6px!important;
}

.charKeysWrong span {
  background-color: #ffc7cb;
  color: #ce6c6c;
  box-shadow: inset 0 -3px #ce6c6c, 0 3px 6px rgba(0,0,0,.1);
}

.charKeysRequired::after {
  content: "";
  position: absolute;
  top: calc( 100% + 18px );
  height: 3px;
  width: inherit;
  background-color: #0080ff;
  z-index: 101;
}

@media (min-height: 720px) and (min-width: 1025px) {
  .startKeys {
    width: 753px;
  }

  .charKeys {
    width: 74px;
    height: 74px;
    padding-bottom: 7px;
  }

  .charKeys span {
    width: 63px;
    height: 63px;
    font-size: 28px;
    line-height: 28px;
  }
}

@media (min-height: 860px) and (min-width: 1025px) {
  .startKeys {
    width: 888px;
  }

  .charKeys {
    width: 80px;
    height: 80px;
    padding-bottom: 8px;
  }

  .charKeys span {
    width: 68px;
    height: 68px;
    font-size: 34px;
    line-height: 34px;
  }
}
</style>
