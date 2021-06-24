<template>
    <header id="header">
        <b-container>
            <b-row align-v="center">
                <b-col cols="12" align-self="center" class="d-flex justify-content-center">
                    <router-link to="/" tabindex="1" class="logoLink"><div class="logo-div ie-properties"></div></router-link>
                </b-col>
            </b-row>
        </b-container>
    </header>
</template>

<script>
export default {
  name: "LogInHeader"
}
</script>

<style scoped>
header {
  background: none;
  width: 100%;
}

header .container .row {
  background: none;
  height: 75px;
}

.logo-div {
  width: 176px;
  height: 19px;
  background-image: url('../../img/StandardHeader/logo_light.png');
  /*Event logo*/
  /*background-image: url("../../img/Events/christmasLogoWithSignature.svg");*/
  /*/Event logo*/
  background-repeat: no-repeat;
  background-size: cover;
}

.logoLink {
  padding: 5px;
  border-radius: 5px;
  transition: box-shadow .15s ease-in-out;
}

.logoLink:focus {
  box-shadow: 0 0 0 4px #87ABF9;
  outline: none;
}

@media (max-width: 768px) {
  header .container {
    padding-left: 15px;
    padding-right: 15px;
  }
}

/*@media (prefers-color-scheme: dark) {*/
/*    .logo-div {*/
/*        width: 176px;*/
/*        height: 19px;*/
/*        background-image: url('../../img/StandardHeader/logo_dark.png');*/
/*        background-repeat: no-repeat;*/
/*        background-size: cover;*/
/*    }*/
/*}*/

@media screen and (min-width:0\0) {
  /* стили только для IE9 - IE10 */
  .ie-properties {
    margin-top: 21.5px
  }
}
</style>
