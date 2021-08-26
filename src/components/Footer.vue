<template>
  <footer id="footer">
    <b-container>
      <b-row align-v="center" class="d-flex justify-content-end" no-gutters>
        <b-col cols="12" lg="" align-v="center" class="d-flex justify-content-center justify-content-lg-start mt-3 mt-lg-0">
          <router-link to="/" class="logoLink logoFooter d-flex justify-content-center align-items-center">
            <!-- <img src="../../img/WhyTypingSchool/keyboard.svg" alt="Логотип курса по слепой печати Typing School"> -->
<!--            Event logo-->
<!--            <img src="../../img/Events/christmasLogo.svg" alt="Новогодний логотип курса по слепой печати Typing School">-->
<!--            /Event logo-->
            {{'\xa0'}}Typing School<span class="yearDescription">{{'\xa0' + '2019-' + new Date().getFullYear()}}</span>
          </router-link>
        </b-col>
          <b-col cols="12" lg="auto" class="text-center navigation-link mt-2 mt-lg-0">
            <a target="_blank" href="https://typing.school/" class="footerLink ie-properties">Условия использования</a>
          </b-col>
          <b-col cols="12" lg="auto" class="text-center navigation-link navigationLinkBordered">
            <a target="_blank" href="https://typing.school/" class="footerLink ie-properties">Конфиденциальность</a>
          </b-col>
          <b-col cols="12" lg="auto" class="text-center navigation-link mb-4 mb-lg-0">
            <a href="mailto:hello@typing.school" class="footerLink ie-properties">Обратная связь</a>
          </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid #E5E6EB;
  width: 100%;
}

footer .container .row {
  min-height: 90px;
}

.navigation-link {
  padding: 18px 0;
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 18px;
}

.footerLink {
  color: #444444;
  transition: box-shadow .15s ease-in-out;
  border-radius: 5px;
  padding: 4px;
}

.footerLink:focus, .footerLink:hover {
  color: rgba(29, 29, 29, 0.6);
  text-decoration: none;
  outline: none;
}

.footerLink:active {
  color: #0082FF;
  text-decoration: none;
}

.logoLink {
  text-decoration: none;
  margin: 15px 0;
  border-radius: 5px;
  transition: box-shadow .15s ease-in-out;
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 17px;
  color: #101010;
  padding: 4px 0;
}

.logoLink:hover {
  color: #4C4C4C;
}

.logoLink:active {
  color: #E3E3E3;
}

.logoLink:focus {
  box-shadow: 0 0 0 4px #87ABF9;
  outline: none;
}

.yearDescription {
  font-weight: 500;
  font-size: 16px;
  line-height: 15px;
  color: #686868;
}

.logoFooter img {
  width: 38px;
  height: 19px;
}

@media (min-width:992px ) {
  .navigationLinkBordered {
    border-right: 1px solid #E5E6EB;
    border-left: 1px solid #E5E6EB;
  }

  .navigation-link {
    padding: 0 20px;
    font-size: 16px;
  }
}

@media screen and (min-width:0\0) {
  /* стили только для IE9 - IE10 */
  .ie-properties {
    margin-top: 21.5px
  }
}
</style>
