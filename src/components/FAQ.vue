<template>
  <section id="faq" class="d-flex flex-column">
    <b-row>
      <b-col cols="12" md="5" lg="4">
        <svg width="50" height="50" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M25 50.5C38.8071 50.5 50 39.3071 50 25.5C50 11.6929 38.8071 0.5 25 0.5C11.1929 0.5 0 11.6929 0 25.5C0 39.3071 11.1929 50.5 25 50.5ZM21.8202 30.0589V30.4273H27.4971V29.9852C27.4971 29.5185 27.5929 29.1255 27.7846 28.8062C27.9762 28.4623 28.3475 28.0816 28.8984 27.664L30.3715 26.5587C31.4734 25.699 32.3357 24.7779 32.9585 23.7953C33.6052 22.7883 33.9286 21.5601 33.9286 20.1109C33.9286 17.8512 33.1501 16.1072 31.5931 14.8791C30.0601 13.6264 28.0241 13 25.4851 13C22.3951 13 20.0477 13.7737 18.4428 15.3212C16.8619 16.8686 16.0714 18.8705 16.0714 21.3268H21.8202C21.8202 20.0495 22.1316 19.0916 22.7544 18.4529C23.4011 17.8143 24.2515 17.495 25.3054 17.495C26.1438 17.495 26.8145 17.7529 27.3175 18.2687C27.8444 18.7845 28.1079 19.4846 28.1079 20.3688C28.1079 21.7689 27.4372 22.9234 26.0959 23.8322L24.4072 24.9744C23.3772 25.6867 22.6825 26.4113 22.3232 27.1482C21.9879 27.885 21.8202 28.8553 21.8202 30.0589ZM21.9999 38.6804C22.7185 39.4173 23.6047 39.7857 24.6587 39.7857C25.6887 39.7857 26.563 39.4173 27.2815 38.6804C28.0241 37.9189 28.3954 37.0224 28.3954 35.9908C28.3954 34.9591 28.0241 34.0749 27.2815 33.338C26.563 32.6011 25.6887 32.2327 24.6587 32.2327C23.6047 32.2327 22.7185 32.6011 21.9999 33.338C21.2813 34.0749 20.922 34.9591 20.922 35.9908C20.922 37.0224 21.2813 37.9189 21.9999 38.6804Z" fill="url(#paint0_linear)"/><defs><linearGradient id="paint0_linear" x1="25" y1="0.5" x2="25" y2="50.5" gradientUnits="userSpaceOnUse"><stop stop-color="#3A9FFF"/><stop offset="1" stop-color="#0082FF"/></linearGradient></defs></svg>
        <div class="landingFAQTopic mt-4">Часто задаваемые<br> вопросы</div>
      </b-col>
      <b-col cols="12" md="7" lg="8" v-scroll>
        <div class="accordion" role="tablist">
          <b-card no-body class="landingAccordion">
            <b-card-header class="p-0 landingAccordionHeader" role="tab">
              <b-card-text class="landingText py-3 d-flex justify-content-between accordionItem user-select-none" v-b-toggle.accordion-1 >Сколько времени стоит уделять в{{'\xa0'}}день на{{'\xa0'}}тренировки?</b-card-text>
            </b-card-header>
            <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
              <b-card-body class="pb-3 p-0">
                <b-card-text class="landingAccordionText landingText">Самый эффективный вариант научиться слепой печати{{'\xa0'}}{{'\u2014'}} заниматься клавиатурном тренажёре регулярно по{{'\xa0'}}чуть-чуть. Мы{{'\xa0'}}рекомендуем ежедневно уделять занятиям 10-15{{'\xa0'}}минут, не{{'\xa0'}}больше. Тогда мозг сможет хорошо усваивать новую информацию. Если{{'\xa0'}}же пройти весь курс за{{'\xa0'}}пару дней, вам будет очень сложно закрепить навык скоропечатания на{{'\xa0'}}практике и{{'\xa0'}}скорее всего вы{{'\xa0'}}вернётесь к{{'\xa0'}}старому способу набора текста.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="landingAccordion">
            <b-card-header class="p-0 landingAccordionHeader" role="tab">
              <b-card-text class="landingText py-3 d-flex justify-content-between accordionItem user-select-none" v-b-toggle.accordion-2 >В{{'\xa0'}}какие сроки можно обучиться слепой печати с{{'\xa0'}}нуля?</b-card-text>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body class="pb-3 p-0">
                <b-card-text class="landingAccordionText landingText">Если заниматься каждый день в{{'\xa0'}}рекомендуемом темпе (10-15{{'\xa0'}}минут), то{{'\xa0'}}весь курс слепой печати вы{{'\xa0'}}пройдёте примерно за{{'\xa0'}}месяц. Затем останется только практиковаться в{{'\xa0'}}онлайн тренажёре, а{{'\xa0'}}лучше при{{'\xa0'}}ежедневной работе, всё больше закрепляя навык и{{'\xa0'}}увеличивая скорость печати.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="landingAccordion">
            <b-card-header class="p-0 landingAccordionHeader" role="tab">
              <b-card-text class="landingText py-3 d-flex justify-content-between accordionItem user-select-none" v-b-toggle.accordion-3 >Даёте{{'\xa0'}}ли вы{{'\xa0'}}гарантию результата?</b-card-text>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body class="pb-3 p-0">
                <b-card-text class="landingAccordionText landingText">Если вы{{'\xa0'}}оформите PRO подписку и{{'\xa0'}}пройдёте курс, соблюдая{{'\xa0'}}при этом наши рекомендации, но{{'\xa0'}}печатать вслепую так и{{'\xa0'}}не{{'\xa0'}}научитесь, то{{'\xa0'}}мы{{'\xa0'}}вернём вам все платежи в{{'\xa0'}}полном объёме. Чтобы попросить возврат, напишите нам на{{'\xa0'}}hello@typing.school с{{'\xa0'}}почты, на{{'\xa0'}}которую зарегистрирован ваш аккаунт.</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
        <div class="FAQSubscription my-4">
          <button class="landingLink openSupportChatBtn" @click="openSupportChat">
            <span class="openSupportChatLink">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M4.17157 16.0809C3.42143 16.8311 3 17.8485 3 18.9093V21.0025H5.09315C6.15401 21.0025 7.17143 20.5811 7.92157 19.8309L17.81 9.94249L14.06 6.19249L4.17157 16.0809ZM15.13 5.12249L18.88 8.87249C22.4514 5.30113 18.7014 1.55113 15.13 5.12249Z" fill="currentColor"/></svg>
              Напишите нам
            </span>
            <span class="greyText">, если остались вопросы</span>
          </button>
        </div>
      </b-col>
    </b-row>
  </section>
</template>

<script>
export default {
  name: "FAQ",
  methods: {
    openSupportChat() {
      document.getElementById('customerly-launcher').click();
    }
  }
}
</script>

<style scoped>
#faq {
  padding-top: 120px;
}

.landingFAQTopic {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 38px;
  background: linear-gradient(90deg, #1D1D1D 0%, #5B5B5B 98.75%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.landingAccordion {
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #D9D9D9!important;
}

.landingAccordionHeader {
  background: none;
  font-weight: bold;
  border: none;
}

.accordionItem {
  border-radius: 6px;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  margin-bottom: 8px;
  margin-top: 8px;
  padding-left: 8px;
  transition: box-shadow .15s ease-in-out;
  position: relative;
  padding-right: 32px;
}

.accordionItem:focus {
  box-shadow: inset 0 0 0 4px #87ABF9;
  outline: none;
}

.landingAccordionHeader .landingText:focus {
  outline: none;
}

.landingAccordionText {
  background: #F8F8FA;
  border-radius: 12px;
  padding: 32px;
  font-size: 20px!important;
  font-weight: normal!important;
}

.accordionItem::before, .accordionItem::after {
  content: '';
  position: absolute;
  right: 8px;
  top: calc(50% - 1px);
  width: 14px;
  height: 2px;
  background-color: rgba(0,0,0,.85);
  border-radius: 1px;
  transition: transform .3s ease-in-out;
}

.accordionItem[aria-expanded="true"]::after {
  top: calc(50% - 2px);
}

.accordionItem[aria-expanded="false"]::after {
  top: calc(50% - 1px);
  transform: rotateZ(90deg);
}

.accordionItem[aria-expanded="false"]::before {
  transform: rotateZ(180deg);
}

.greyText {
  color: #B9B7B7;
}

.landingLink {
  color: #0082FF;
  cursor: pointer;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.15s ease-in-out;
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
}

.landingLink:focus {
  outline: none;
}

.landingLink:hover {
  color: #3DA0FF;
}

.landingLink:active {
  color: #0073E2;
}

.openSupportChatBtn {
  border: none;
  background: transparent;
}

.openSupportChatLink {
  margin-right: -3px;
  transition: box-shadow .15s ease-in-out;
  border-radius: 6px;
}

.openSupportChatLink svg {
  vertical-align: sub;
}

.landingLink:focus .openSupportChatLink {
  outline: none;
  box-shadow: 0 0 0 4px #87ABF9;
}

.landingText {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
}

@media (max-width: 768px) {
  #faq {
    padding-top: 40px;
  }
}
</style>
