import Vue from 'vue';
import VueRouter from "vue-router";
import Index from './index';
import Paginate from 'vuejs-paginate';

Vue.config.productionTip = false;
Vue.component('Paginate', Paginate);
Vue.directive(
  'scroll', {
    inserted: function (el) {
      addEventListener('scroll', () => {
        let clientScreenHeight = document.documentElement.clientHeight;

        if (el) {
            el.classList.add('reveal');

            let elPosition = el.getBoundingClientRect();

            let elHeight = el.offsetHeight;

            if (elPosition.y - clientScreenHeight + elHeight < elHeight * 0.9) {
              el.classList.add('show');
            }
        }
      })
    }
  }
);

const routes = [
  { path: '', component: () => import('@/components/Landing'), name: 'mainPage', meta: { title: 'Typing School — научись набирать текст со скорость мысли!', isPublic: true, needForwardAuthUser: true } },
  { path: '/activate', component: () => import('@/components/EmailConfirm'), name: 'emailConfirm', meta: { title: 'Подтверждение email | Typing School', isPublic: true, needForwardAuthUser: true } },
  { path: '/activate/:uid/:token', component: () => import('@/components/EmailConfirmed'), name: 'emailConfirmed', meta: { title: 'Подтверждение email | Typing School', isPublic: true, needForwardAuthUser: false } },
  { path: '/login_with', component: () => import('@/components/LogInMain'), name: 'loginOptions', meta: { title: 'Авторизация | Typing School', isPublic: true, needForwardAuthUser: true } },
  { path: '/login', component: () => import('@/components/LogIn'), name: 'login', meta: { title: 'Авторизация | Typing School', isPublic: true, needForwardAuthUser: true } },
  { path: '/reset', component: () => import('@/components/PasswordReset'), name: 'passwordReset', meta: { title: 'Сброс пароля | Typing School', isPublic: true, needForwardAuthUser: true } },
  { path: '/reset/:uid/:token', component: () => import('@/components/SetPassword'), name: 'setPassword', meta: { title: 'Сброс пароля | Typing School', isPublic: true, needForwardAuthUser: false } },
  { path: '/reset/success', component: () => import('@/components/PasswordResetDone'), name: 'passwordResetDone', meta: { title: 'Пароль изменён | Typing School', isPublic: true, needForwardAuthUser: false } },
  { path: '/signup_with', component: () => import('@/components/RegistrationOptions'), name: 'registrationOptions', meta: { title: 'Регистрация | Typing School', isPublic: true, needForwardAuthUser: true } },
  { path: '/signup/name', component: () => import('@/components/RegistrationGoogleDone'), name: 'registrationSetName', meta: { title: 'Регистрация | Typing School', isPublic: false } },
  { path: '/signup', component: () => import('@/components/Registration'), name: 'registration', meta: { title: 'Регистрация | Typing School', isPublic: true, needForwardAuthUser: true } },
  { path: '/settings', component: () => import('@/components/Settings'), name: 'settings', meta: { title: 'Настройки | Typing School', isPublic: false } },
  { path: '/profile', component: () => import('@/components/Profile'), name: 'profile', meta: { title: 'Личный кабинет | Typing School', isPublic: false } },
  { path: '/newProfile', component: () => import('@/components/newProfile'), name: 'newProfile', meta: { title: 'Личный кабинет | Typing School', isPublic: true, needForwardAuthUser: false } },
  { path: '/course/:course_id', component: () => import('@/components/Course'), name: 'course', meta: { title: 'Курс | Typing School', isPublic: false } },
  { path: '/payment', component: () => import('@/components/Payment'), name: 'payment', meta: { title: 'Оплата | Typing School', isPublic: false } },
  { path: '/payment/:status', component: () => import('@/components/PaymentResult'), name: 'paymentSuccess', meta: { title: 'Оплата | Typing School', isPublic: false } },
  { path: '/error', component: () => import('@/components/SomethingWentWrong'), name: 'serverError', meta: { title: 'Что-то пошло не так | Typing School', isPublic: true, needForwardAuthUser: false } },
  { path: '*', component: () => import('@/components/Error404'), name: 'error404', meta: { title: 'Ошибка 404 | Typing School', isPublic: true, needForwardAuthUser: false } },  // redirect on Error404 page, if user try entry by invalid URL, e. g. typing.school/example
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.isPublic)) {
//     console.log(to.matched);
//     let isPublic = to.meta.isPublic;
//     let needForwardAuthUser = to.meta.needForwardAuthUser;
//     let refresh = localStorage.getItem('refresh');
//     console.log(isPublic, needForwardAuthUser, refresh);
//
//     if (isPublic && needForwardAuthUser && refresh) {
//       next({
//         path: '/login_with',
//         query: { redirect: '/profile/' }
//       });
//     } else if (!isPublic && !refresh) {
//       next({
//         path: '/profile/',
//         query: { redirect: '/login_with/' }
//       });
//     } else if (!isPublic && refresh) {
//       next();
//     }
//
//     if (isPublic && !localStorage.getItem('UTMData')) {
//       localStorage.setItem('UTMData', JSON.stringify(to.query));
//     }
//   } else {
//     next();
//   }
// })

// TODO babel settings
new Vue({
  render: h => h(Index),
  router
}).$mount('#index');
