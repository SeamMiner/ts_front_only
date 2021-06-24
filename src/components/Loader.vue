<template>
  <div id="loaderBlock">
    <div class="loaderWrapper">
      <div class="loader"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader"
}
</script>

<style scoped>
#loaderBlock {
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  position: fixed;
  top: 0;
  z-index: 1000;
  background-color: #fff;
}

.loaderWrapper {
  width: 128px;
  height: 128px;
  background: #F9F9F9;
  border: 1px solid #ECECEC;
  border-radius: 36px;
  display: grid;
  place-items: center;
  filter: drop-shadow(0px 4px 96px rgba(0, 0, 0, 0.16));
}

.loader {
  width: 50px;
  height: 50px;
  border: solid 4px;
  border-color: #747474 #747474 #747474 transparent;
  border-radius: 50%;
  position: relative;
  animation: loading 1.6s linear infinite;
}

.loader:before, .loader:after {
  content: "";
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #747474;
  position: absolute;
}

.loader:before {
  top: 2px;
  left: 3px;
}

.loader:after {
  bottom: 2px;
  left: 3px;
}

@keyframes loading {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
