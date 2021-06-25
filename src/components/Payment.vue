<template>
  <b-container id="Payment" class="d-flex justify-content-center align-items-center">
    <MainHeader
      ref="header"
    />

    <b-row no-gutters>

      <b-col cols="auto" class="landingSecondTopic mb-2">
        <span>Оплата</span>
      </b-col>

      <b-col cols="12" class="d-xl-flex justify-content-between align-items-center my-0 mt-md-4 mb-md-5">

        <div class="d-xl-flex">
          <b-col cols="12" lg="auto" class="p-0">
            <button class="rateButton mt-4 mt-md-0 month" :class="{'active': currentActivePlan === 'month'}" @click="currentActivePlan = 'month'">
              Покупка на месяц
            </button>
          </b-col>
          <b-col cols="12" lg="auto" class="p-0">
            <button class="rateButton year" :class="{'active': currentActivePlan === 'year'}" @click="currentActivePlan = 'year'">
              Покупка на год
            </button>
          </b-col>
          <b-col cols="12" lg="auto" class="p-0">
            <button class="rateButton once" :class="{'active': currentActivePlan === 'forever'}" @click="currentActivePlan = 'forever'">
              Покупка навсегда
            </button>
          </b-col>
        </div>

        <div class="promoText d-flex justify-content-center mb-4 mb-md-0 mt-2 mt-md-0 p-2 user-select-none" v-b-modal.promoCodeApplying>
          Есть промокод
          <img src="../../img/Landing/FAQ.svg" class="ml-2 user-select-none" width="24" height="24" alt="FAQ icon">
        </div>
      </b-col>

      <b-col cols="12" lg="6" class="my-2 my-lg-0 pr-lg-3">
        <div class="rateBlock flex-column flex-sm-row justify-content-sm-between">
          <div class="d-flex flex-column justify-content-between">
            <div class="topic mb-4">
              PRO
            </div>

            <div class="price mb-5 text-left d-block d-sm-none" :class="{'smallPriceTitle': isNaN(+mainPrice('pro'))}">
              {{ mainPrice('pro') }}
              <br>
              <div
                class="description"
                :class="{
                  'descriptionBorder': currentActivePlan === 'year',
                  'promoCodeApplied': pricing['pro'] && pricing['pro'][currentActivePlan]['old_price']
                }"
              >
                {{ isNaN(+mainPrice('pro')) ? '' : currentActivePlan === 'month' ? 'руб/мес' : 'рублей' }}
                <div class="signature">
                  {{ signature('pro') }}
                </div>
              </div>
            </div>

            <div class="features">
              <div class="lessons d-flex align-items-center my-2">
                <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
                Безлимит на уроки
              </div>
              <div class="mistakes d-flex align-items-center my-3">
                <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
                Работа над опечатками
              </div>
              <div class="practice d-flex align-items-center my-2">
                <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
                Тексты для практики
              </div>
            </div>

          </div>
          <div class="d-flex flex-column justify-content-between mt-4 mt-sm-auto align-items-end">
            <div class="price mb-5 text-right d-none d-sm-block" :class="{'smallPriceTitle': isNaN(+mainPrice('pro'))}">
              {{ mainPrice('pro') }}
              <br>
              <div
                class="description"
                :class="{
                  'descriptionBorder': currentActivePlan === 'year',
                  'promoCodeApplied': pricing['pro'] && pricing['pro'][currentActivePlan]['old_price']
                }"
              >
                {{ isNaN(+mainPrice('pro')) ? '' : currentActivePlan === 'month' ? 'руб/мес' : 'рублей' }}
                <div class="signature">
                  {{ signature('pro') }}
                </div>
              </div>
            </div>

            <PrimaryButton
                class="mt-4 mt-xl-0 w-100"
                @click.native="getPaymentParameters('pro')"
            >
              Приобрести
            </PrimaryButton>

          </div>
        </div>
      </b-col>

      <b-col cols="12" lg="6" class="my-2 my-lg-0 pl-lg-3">
        <div class="rateBlock flex-column flex-wrap flex-sm-row justify-content-sm-between">
          <div class="d-flex flex-column justify-content-between">
            <div class="topic mb-4">Студенческая <span class="greyText"> = PRO</span></div>

            <div class="price mb-5 text-left d-block d-sm-none" :class="{'smallPriceTitle': isNaN(+mainPrice('student'))}">
              {{ mainPrice('student') }}
              <br>
              <div
                class="description"
                :class="{
                  'descriptionBorder': currentActivePlan === 'year',
                  'promoCodeApplied': pricing['student'] && pricing['student'][currentActivePlan]['old_price']
                }"
              >
                {{ isNaN(+mainPrice('student')) ? '' : currentActivePlan === 'month' ? 'руб/мес' : 'рублей' }}
                <div class="signature">
                  {{ signature('student') }}
                </div>
              </div>
            </div>

            <div class="features">
              <div class="lessons d-flex align-items-center my-2">
                <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
                Безлимит на уроки
              </div>
              <div class="mistakes d-flex align-items-center my-3">
                <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
                Работа над опечатками
              </div>
              <div class="practice d-flex align-items-center my-2">
                <svg width="24" height="24" class="mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M23 6.3518L9.11678 20L2 13.0037L4.3923 10.6519L9.11678 15.2964L20.6077 4L23 6.3518Z" fill="#3B74FD"/></svg>
                Тексты для практики
              </div>
            </div>

          </div>

          <div class="d-flex flex-column justify-content-between mt-4 mt-sm-auto align-items-end">
            <div class="price mb-5 text-right d-none d-sm-block" :class="{'smallPriceTitle': isNaN(+mainPrice('student'))}">
              {{ mainPrice('student') }}
              <br>
              <div
                class="description"
                :class="{
                  'descriptionBorder': currentActivePlan === 'year',
                  'promoCodeApplied': pricing['student'] && pricing['student'][currentActivePlan]['old_price']
                }"
              >
                {{ isNaN(+mainPrice('student')) ? '' : currentActivePlan === 'month' ? 'руб/мес' : 'рублей' }}
                <div class="signature">
                  {{ signature('student') }}
                </div>
              </div>
            </div>

            <PrimaryButton
                @click.native="checkStudent"
                class="mt-4 mt-xl-0 w-100"
            >
              {{ isStudent ? 'Приобрести' : 'Я студент' }}
            </PrimaryButton>
          </div>
        </div>
      </b-col>

      <b-row class="mx-0 mt-4" no-gutters>
        <b-col cols="12" md="6" lg="4" class="d-flex flex-column my-2 pr-md-2">
          <div class="cardBlock p-4">
            <div class="icon">
              <img src="../../img/Payment/educationIcon.svg" class="user-select-none" height="56" width="56" alt="educationIcon">
            </div>

            <div class="topicCard mt-4 mb-3">Не{{'\xa0'}}ограничивайтесь<br>5-ю уроками в{{'\xa0'}}день</div>

            <div class="textCard">Иногда приходит вдохновение и{{'\xa0'}}появляется желание пройти сразу большое количество уроков, чтобы значительно продвинуться в{{'\xa0'}}освоении навыка слепой печати.</div>
          </div>
        </b-col>

        <b-col cols="12" md="6" lg="4" class="d-flex flex-column my-2 pl-md-2 px-lg-2">
          <div class="cardBlock p-4">
            <div class="icon">
              <img src="../../img/Payment/star.svg" class="user-select-none" height="56" width="56" alt="star">
            </div>

            <div class="topicCard mt-4 mb-3">Пройдите бонусный блок{{'\xa0'}}с{{'\xa0'}}текстами</div>

            <div class="textCard">Блок практики поможет закрепить полученный навык, что позволит уверенно использовать его в{{'\xa0'}}повседневных задачах и{{'\xa0'}}не{{'\xa0'}}возвращаться к{{'\xa0'}}прежнему способу набора текста.</div>
          </div>
        </b-col>

        <b-col cols="12" md="6" lg="4" class="d-flex flex-column my-2 pr-md-2 pl-lg-2">
          <div class="cardBlock p-4">
            <div class="icon">
              <img src="../../img/Payment/robot.svg" class="user-select-none" height="56" width="56" alt="robot">
            </div>

            <div class="topicCard mt-4 mb-3">Проработайте свои проблемные клавиши</div>

            <div class="textCard">В{{'\xa0'}}PRO подписке автоматически включается умный режим: он{{'\xa0'}}запоминает буквы, в{{'\xa0'}}которых вы{{'\xa0'}}чаще всего ошибаетесь, и{{'\xa0'}}генерирует их{{'\xa0'}}чаще в{{'\xa0'}}последующих уроках.</div>
          </div>
        </b-col>
      </b-row>
    </b-row>

    <b-modal id="payment_failed" centered hide-footer hide-header content-class="keyboardMenu" body-class="p-0">
      <div class="closeButton" @click="$bvModal.hide('payment_failed')" tabindex="1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.0203 5.97966C18.4825 6.44181 18.4825 7.19111 18.0203 7.65326L13.6736 12L18.0203 16.3467C18.4825 16.8089 18.4825 17.5582 18.0203 18.0203C17.5582 18.4825 16.8089 18.4825 16.3467 18.0203L12 13.6736L7.65326 18.0203C7.19111 18.4825 6.44181 18.4825 5.97966 18.0203C5.51751 17.5582 5.51751 16.8089 5.97966 16.3467L10.3264 12L5.97966 7.65327C5.51751 7.19112 5.51751 6.44182 5.97966 5.97967C6.44181 5.51751 7.19111 5.51751 7.65326 5.97967L12 10.3264L16.3467 5.97966C16.8089 5.5175 17.5582 5.51751 18.0203 5.97966Z"/></svg>
      </div>
      <b-container class="paymentModal d-flex flex-wrap">

        <b-col cols="12" class="profileTitleText mt-0 mb-4">
          Ошибка оплаты
        </b-col>

        <b-col cols="12" class="profileText">
          Пожалуйста, попробуйте ещё раз. Если проблема не{{'\xa0'}}решится, напишите нам в{{'\xa0'}}техническую поддержку, мы{{'\xa0'}}поможем!
        </b-col>

        <b-col cols="12">
          <img src="../../img/Modals/idkIconFailed.svg" alt="idkIcon">
        </b-col>

        <b-col cols="12" class="p-0">

          <PrimaryButton
              @click.native="$bvModal.hide('payment_failed')"
              class="mt-4"
              tabindex="1"
          >
            Попробовать ещё раз
          </PrimaryButton>

        </b-col>

      </b-container>
    </b-modal>

    <b-modal id="payment_success" centered hide-footer hide-header content-class="keyboardMenu" body-class="p-0">
      <div class="closeButton" @click="$bvModal.hide('payment_success')" tabindex="1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.0203 5.97966C18.4825 6.44181 18.4825 7.19111 18.0203 7.65326L13.6736 12L18.0203 16.3467C18.4825 16.8089 18.4825 17.5582 18.0203 18.0203C17.5582 18.4825 16.8089 18.4825 16.3467 18.0203L12 13.6736L7.65326 18.0203C7.19111 18.4825 6.44181 18.4825 5.97966 18.0203C5.51751 17.5582 5.51751 16.8089 5.97966 16.3467L10.3264 12L5.97966 7.65327C5.51751 7.19112 5.51751 6.44182 5.97966 5.97967C6.44181 5.51751 7.19111 5.51751 7.65326 5.97967L12 10.3264L16.3467 5.97966C16.8089 5.5175 17.5582 5.51751 18.0203 5.97966Z"/></svg>
      </div>
      <b-container class="paymentModal d-flex flex-wrap">

        <b-col cols="12" class="profileTitleText mt-0 mb-4">
          Успешная оплата
        </b-col>

        <b-col cols="12" class="profileText mx-auto">
          Теперь вам доступны все функции PRO-тарифа. Желаем успехов в{{'\xa0'}}обучении!
        </b-col>

        <b-col cols="12">
          <img src="../../img/Modals/idkIconCorrect.svg" alt="idkIcon">
        </b-col>

        <b-col cols="12">

          <PrimaryButton
              class="mt-4" @click.native="$bvModal.hide('payment_success')"
              tabindex="1"
          >
              Отлично
          </PrimaryButton>

        </b-col>

      </b-container>
    </b-modal>

    <b-modal id="promoCodeApplying" centered hide-footer hide-header content-class="keyboardMenu" body-class="p-0">
      <div class="closeButton" @click="$bvModal.hide('promoCodeApplying')" tabindex="1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.0203 5.97966C18.4825 6.44181 18.4825 7.19111 18.0203 7.65326L13.6736 12L18.0203 16.3467C18.4825 16.8089 18.4825 17.5582 18.0203 18.0203C17.5582 18.4825 16.8089 18.4825 16.3467 18.0203L12 13.6736L7.65326 18.0203C7.19111 18.4825 6.44181 18.4825 5.97966 18.0203C5.51751 17.5582 5.51751 16.8089 5.97966 16.3467L10.3264 12L5.97966 7.65327C5.51751 7.19112 5.51751 6.44182 5.97966 5.97967C6.44181 5.51751 7.19111 5.51751 7.65326 5.97967L12 10.3264L16.3467 5.97966C16.8089 5.5175 17.5582 5.51751 18.0203 5.97966Z"/></svg>
      </div>
      <b-container class="paymentModal d-flex flex-wrap px-0">

        <b-col cols="12" class="profileTitleText mt-0 mb-4">
          Введите промокод
        </b-col>

        <b-col cols="12" class="profileText mx-auto">
          Если у{{'\xa0'}}вас есть промокод, введите его в{{'\xa0'}}поле ниже для активации. После этого скидка применится автоматически.
        </b-col>

        <b-col cols="12" class="mt-3 mb-4">
          <img src="../../img/Modals/bookmarkIcon.svg" alt="bookmarkIcon">
        </b-col>

        <b-col cols="12" class="d-flex flex-wrap">

          <b-col cols="6" sm="7" class="p-0">
            <b-form-input @keydown="promoApply" type="text" class="modalInput h-100" placeholder="Введите промокод" v-model="userPromoCode"/>
          </b-col>
          <b-col class="pl-2 pr-0">

            <PrimaryButton
                @click.native="promoApply"
                :type="'submit'"
                class="p-3 mt-0"
                tabindex="1"
            >
              Применить
            </PrimaryButton>

          </b-col>

        </b-col>

      </b-container>
    </b-modal>

    <b-modal id="confirm_student_status" centered hide-footer hide-header content-class="keyboardMenu" body-class="p-0">
      <div class="closeButton" @click="$bvModal.hide('confirm_student_status')" tabindex="1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.0203 5.97966C18.4825 6.44181 18.4825 7.19111 18.0203 7.65326L13.6736 12L18.0203 16.3467C18.4825 16.8089 18.4825 17.5582 18.0203 18.0203C17.5582 18.4825 16.8089 18.4825 16.3467 18.0203L12 13.6736L7.65326 18.0203C7.19111 18.4825 6.44181 18.4825 5.97966 18.0203C5.51751 17.5582 5.51751 16.8089 5.97966 16.3467L10.3264 12L5.97966 7.65327C5.51751 7.19112 5.51751 6.44182 5.97966 5.97967C6.44181 5.51751 7.19111 5.51751 7.65326 5.97967L12 10.3264L16.3467 5.97966C16.8089 5.5175 17.5582 5.51751 18.0203 5.97966Z"/></svg>
      </div>
      <b-container class="paymentModal d-flex flex-wrap">

        <b-col cols="12" class="profileTitleText mt-0 mb-4 d-flex align-items-center justify-content-center">
          Студенческая скидка
        </b-col>

        <b-col cols="12" class="profileText mx-auto">
          Пожалуйста, пришлите фотографию студенческого билета на{{'\xa0'}}указанную почту. Скидка будет автоматически применена после подтверждения статуса.
        </b-col>

        <b-col cols="12" class="mt-3 mb-4">
          <img src="../../img/Modals/email.svg" alt="Email icon">
        </b-col>

        <b-col id="studentEmailAddress" cols="12" @click="copyEmailAddress" class="studentEmailAddress d-flex justify-content-between align-items-center">
          <p class="emailAddress">students@typing.school</p>
          <img src="../../img/Modals/copyIcon.svg" alt="Copy icon">
        </b-col>

        <b-tooltip target="studentEmailAddress" id="copySuccess" custom-class="standardArrow" triggers="click hover" placement="top" :disabled.sync="disabled">
          Почтовый адрес успешно скопирован!
        </b-tooltip>
        <b-tooltip target="studentEmailAddress" id="copyFail" custom-class="standardArrow fail" triggers="click hover" placement="top" :disabled.sync="disabled">
          Почтовый адрес не{{'\xa0'}}был скопирован, произошла ошибка(
        </b-tooltip>

      </b-container>
    </b-modal>

    <b-modal id="promoCodeFail" centered hide-footer hide-header content-class="keyboardMenu" body-class="p-0">
      <div class="closeButton" @click="$bvModal.hide('promoCodeFail')" tabindex="1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.0203 5.97966C18.4825 6.44181 18.4825 7.19111 18.0203 7.65326L13.6736 12L18.0203 16.3467C18.4825 16.8089 18.4825 17.5582 18.0203 18.0203C17.5582 18.4825 16.8089 18.4825 16.3467 18.0203L12 13.6736L7.65326 18.0203C7.19111 18.4825 6.44181 18.4825 5.97966 18.0203C5.51751 17.5582 5.51751 16.8089 5.97966 16.3467L10.3264 12L5.97966 7.65327C5.51751 7.19112 5.51751 6.44182 5.97966 5.97967C6.44181 5.51751 7.19111 5.51751 7.65326 5.97967L12 10.3264L16.3467 5.97966C16.8089 5.5175 17.5582 5.51751 18.0203 5.97966Z"/></svg>
      </div>
      <b-container class="paymentModal d-flex flex-wrap">

        <b-col cols="12" class="profileTitleText mt-0 mb-4">
          {{ promoCodeFailType === 'expired' ? 'Промокод недействителен' : 'Промокод не найден' }}
        </b-col>

        <b-col cols="12" class="profileText">
          {{
            promoCodeFailText ?
              promoCodeFailText :
              'Пожалуйста, попробуйте ещё раз. Если проблема не решится, напишите нам в техническую поддержку' +
              ', мы поможем!'
          }}
        </b-col>

        <b-col cols="12">
          <img src="../../img/Modals/idkIconFailed.svg" alt="idkIcon">
        </b-col>

        <b-col cols="12" class="p-0">

          <PrimaryButton
              @click.native="tryAgainPromo"
              class="mt-4"
              tabindex="1"
          >
            Попробовать ещё раз
          </PrimaryButton>
        </b-col>

      </b-container>
    </b-modal>

    <b-modal id="promoCodeSuccess" centered hide-footer hide-header content-class="keyboardMenu" body-class="p-0">
      <div class="closeButton" @click="$bvModal.hide('promoCodeSuccess')" tabindex="1">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM18.0203 5.97966C18.4825 6.44181 18.4825 7.19111 18.0203 7.65326L13.6736 12L18.0203 16.3467C18.4825 16.8089 18.4825 17.5582 18.0203 18.0203C17.5582 18.4825 16.8089 18.4825 16.3467 18.0203L12 13.6736L7.65326 18.0203C7.19111 18.4825 6.44181 18.4825 5.97966 18.0203C5.51751 17.5582 5.51751 16.8089 5.97966 16.3467L10.3264 12L5.97966 7.65327C5.51751 7.19112 5.51751 6.44182 5.97966 5.97967C6.44181 5.51751 7.19111 5.51751 7.65326 5.97967L12 10.3264L16.3467 5.97966C16.8089 5.5175 17.5582 5.51751 18.0203 5.97966Z"/></svg>
      </div>
      <b-container class="paymentModal d-flex flex-wrap">

        <b-col cols="12" class="profileTitleText mt-0 mb-4">
          Промокод успешно применён
        </b-col>

        <b-col cols="12" class="profileText mx-auto">
          {{
            promoCodeSuccessText ?
              promoCodeSuccessText :
              'Теперь вам доступны все функции PRO-тарифа. Желаем успехов в обучении!'
          }}
        </b-col>

        <b-col cols="12">
          <img src="../../img/Modals/idkIconCorrect.svg" alt="idkIcon">
        </b-col>

        <b-col cols="12">

          <PrimaryButton
              class="w-100"
              @click="$bvModal.hide('promoCodeSuccess')"
              tabindex="1"
          >
            Отлично
          </PrimaryButton>

        </b-col>

      </b-container>
    </b-modal>

    <form id="paymentForm" action="https://merchant.roboxchange.com/Index.aspx" method="POST" target="_self">
      <input name="Encoding" type="text" value="utf-8">
      <input name="MrchLogin" type="text">
      <input name="InvId" type="text">
      <input name="Description" type="text">
      <input name="OutSum" type="text">
      <input name="SignatureValue" type="text">
      <input name="IsTest" type="text">
    </form>

  </b-container>
</template>

<script>
import MainHeader from "@/components/MainHeader";
import PrimaryButton from "@/components/buttons/PrimaryButton";

export default {
  name: "Payment",
  components: {
    MainHeader,
    PrimaryButton
  },
  data() {
    return {
      userPromoCode: '',
      initialRates: 499,
      disabled: true,
      lastTimeout: null,
      isStudent: false,
      pricing: {},
      currentActivePlan: 'month',
      promoCodeSuccessText: '',
      promoCodeFailText: '',
      promoCodeFailType: '',
    }
  },
  mounted() {
    let paymentStatus = this.$parent.$data.paymentStatus;

    // this.initiatePrices();
    this.$emit("end-loading");

    window.scrollTo(0, 0);

    if (this.$parent.$data.wantsStudent) {
      this.$bvModal.show("confirm_student_status");

      this.$parent.$data.wantsStudent = false;
    }

    if (paymentStatus === "success") {
      this.$bvModal.show("payment_success");

      this.$parent.$data.paymentStatus = "";

      this.$emit("update-user-info", {immediate: true});
    } else if (paymentStatus === "fail") {
      this.$bvModal.show("payment_failed");

      this.$parent.$data.paymentStatus = "";
    }
  },
  methods: {
    mainPrice(plan) {
      if ( !this.pricing[plan] ) {
        return this.initialRates;
      }

      let mainPrice = this.pricing[plan][this.currentActivePlan]['price'];
      if (mainPrice <= 0) {
        return 'Бесплатно';
      }

      return mainPrice;
    },
    signature(plan) {
      let measureUnit = '';

      if (this.currentActivePlan === 'month') {
        measureUnit = ' руб/мес';
      } else {
        measureUnit = ' рублей';
      }

      if ( this.pricing[plan] && this.pricing[plan][this.currentActivePlan]['old_price'] ) {
        return this.pricing[plan][this.currentActivePlan]['old_price'] + measureUnit;
      } else if ( this.pricing[plan] && this.currentActivePlan === 'year' ) {
        let yearPrice = this.pricing[plan][this.currentActivePlan]['price'];

        return '≈ ' + Math.floor(yearPrice / 12) + ' руб/мес';
      }
      return '';
    },
    checkStudent() {
      if (this.isStudent) {
        this.getPaymentParameters('student');
      } else {
        this.$bvModal.show('confirm_student_status');
      }
    },
    copyEmailAddress() {
      navigator.clipboard.writeText("students@typing.school")
        .then(() => {
          this.$root.$emit('bv::show::tooltip', 'copySuccess');

          this.updateTimeoutTooltipClosing('copySuccess');
        })
        .catch(() => {
          this.$root.$emit('bv::show::tooltip', 'copyFail');

          this.updateTimeoutTooltipClosing('copyFail');
        });
    },
    updateTimeoutTooltipClosing(tooltipId) {
      if (this.lastTimeout) {
        clearTimeout(this.lastTimeout);
      }

      this.lastTimeout = setTimeout(() => {
        this.$root.$emit('bv::hide::tooltip', tooltipId);
      }, 5000);
    },
    tryAgainPromo() {
      this.$bvModal.hide('promoCodeFail');
      this.$bvModal.show('promoCodeApplying');
    }
  }
}
</script>

<style scoped>
#Payment {
  min-height: calc(100vh - 80px);
  margin-top: 100px;
  padding-bottom: 120px;
}

.landingSecondTopic {
  font-family: 'GT Walsheim Pro', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 34px;
  color: #1D1D1D;
}

.rateBlock {
  padding: 36px 36px 58px;
  background: #FFFFFF;
  border: 1px solid #E5E6EB;
  border-radius: 12px;
  display: flex;
  transition: all .15s ease-in-out;
  height: 100%;
}

.rateButton {
  font-family: 'Gotham Pro', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
  color: #1D1D1D;
  opacity: 0.9;
  padding: 14px 40px;
  background: #FFFFFF;
  border-radius: 6px;
  border: 1px solid #E5E6EB;
  transition: box-shadow .15s ease-in-out;
  position: relative;
}

.rateButton span {
  color: #959393;
}

.rateButton:focus {
  box-shadow: 0 0 0 4px #87ABF9;
  outline: none;
}

.month {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.year {
  border-radius: 0;
}

.once {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.active, .active span {
  color: #FFFFFF;
  background-color: #0082FF!important;
  border-color: #046DFF!important;
}

.topic {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #0082FF;
}

.greyText {
 color: #E5E6EB;
}

.price {
  font-family: GT Walsheim Pro, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 72px;
  line-height: 84px;
  color: #1D1D1D;
  width: fit-content;
  min-width: 180px;
}

.smallPriceTitle {
  font-size: 38px;
  line-height: 60px;
}

.smallPriceTitle .description .signature {
  top: 0;
}

.description {
  font-size: 32px;
  line-height: 15px;
  position: relative;
  border-bottom: solid 12px #FFFFFF;
  z-index: 5;
}

.features div {
  font-family: GT Walsheim Pro, sans-serif;
  font-style: normal;
  font-weight: 400;
  color: #333333;
  font-size: 18px;
  line-height: 30px;
}

.cardBlock {
  background: #F8F8FA;
  border-radius: 12px;
  height: 100%;
}

.topicCard {
  font-family: "Gotham Pro", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  opacity: 0.9;
}

.textCard {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  color: #444444;
  opacity: 0.9;
}

.promoText {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 23px;
  color: #0082FF;
  cursor: pointer;
  transition: box-shadow .15s ease-in-out;
  border-radius: 6px;
  width: fit-content;
}

.promoText:focus {
  box-shadow: 0 0 0 4px #87ABF9;
  outline: none;
}

.signature {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #00bfff;
  position: absolute;
  left: 0;
  top: 24px;
}

@media (min-width: 576px) {
  .signature {
    left: initial;
    right: 0;
  }
}

.descriptionBorder .signature::before {
  content: "";
  background-color: #00bfff;
  width: 100%;
  height: 12px;
  position: absolute;
  top: -10px;
  z-index: -1;
}

.promoCodeApplied {
  border-bottom: solid 12px #FFFFFF;
}

.promoCodeApplied .signature {
  color: #DDDDDD;
}

.promoCodeApplied .signature::before {
  content: '';
  transform: rotate(-14deg);
  background-color: #DDDDDD;
  width: 100%;
  height: 3px;
  top: 50%;
  position: absolute;
}

@media (max-width: 1200px) and (min-width: 576px) {
  .topic {
    font-size: 19px;
    line-height: 24px;
  }

  .price {
    font-size: 40px;
    line-height: 50px;
  }

  .features {
    font-size: 16px;
    line-height: 26px;
  }
}

@media (max-width: 1024px) and (min-width: 576px) {
  .landingSecondTopic {
    font-size: 60px;
    line-height: 70px;
  }
}

@media (min-width: 1201px) {
  .month {
    border-right: none;
  }

  .year {
    margin-left: 4px;
    border-left: none;
    border-right: none;
  }

  .once {
    border-left: none;
    margin-left: 4px;
  }

  .year::after, .month::after {
    content: "";
    position: absolute;
    right: -4px;
    top: -1px;
    width: 4px;
    height: calc(100% + 2px);
    background-color: inherit;
    border: 1px solid #E5E6EB;
    border-left: none;
    transition: none;
  }

  .year.active::after, .month.active::after {
    border-left: none;
    border-top-color: #046DFF;
    border-bottom-color: #046DFF;
  }

  .year:focus::after, .month:focus::after {
    transition: background-color .08s linear;
    transition-delay: .04s;
    background-color: #87ABF9;
    border: none;
  }
}

@media (max-width: 1200px)   {
  .rateButton {
    margin: 4px 0;
    border-radius: 6px !important;
  }

  .promoText {
    padding: 14px 40px!important;
  }
}

@media (max-width: 768px)  {
  .landingSecondTopic {
    font-size: 40px;
    line-height: 36px;
    width: 100% !important;
  }
}

.profileTitleText {
  margin-top: 24px;
  font-size: 28px;
  color: #1E1D1D;
  line-height: 1.2;
}

.profileText {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 1.4;
  text-align: center;
  color: #444444;
  opacity: 0.6;
}

.modalInput {
  background: #FFFFFF;
  border: 1px solid #C8C8C8;
  box-sizing: border-box;
  border-radius: 8px;
  transition: all .15s ease-in-out;
}

.modalInput:active {
  border: 1px solid #0082FF;
}

.modalInput:focus {
  border: 1px solid #0082FF;
  box-shadow: none;
}

.paymentModal {
  text-align: center;
  font-family: 'Gotham Pro', sans-serif;
  font-weight: 500;
  min-height: 340px;
  padding: 44px 11px 14px;
}

.paymentButton {
  background: linear-gradient(180deg, #02B7FF 0%, #0180FF 100%);
  margin: 20px 0 0;
  padding: 14px 40px;
  box-shadow: 0 5px 10px 0 rgba(0,130,255,0.3);
  color: #fff;
  border-radius: 7px;
  border: none;
  height: auto;
  transition: all .15s ease-in-out;
  font-family: Gotham Pro, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 17px;
  text-align: center;
}

.paymentButton:hover, .paymentButton:focus {
  background: linear-gradient(180deg, #02B7FF 0%, #0072E4 100%);
  text-decoration: none;
  outline: none;
}

.paymentButton:focus {
  box-shadow: 0 0 0 4px #87ABF9!important;
}

.paymentButton:active {
  background: linear-gradient(180deg, #0076ED 0%, #479FFF 100%);
}

.studentEmailAddress {
  background: #DEEFFF;
  border-radius: 12px;
  padding: 20px 24px;
  cursor: pointer;
}

.emailAddress {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica Neue, Arial, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px;
  color: #0082FF;
  margin: 0;
}

/* Form for payment */
#paymentForm {
  display: none;
}
</style>
