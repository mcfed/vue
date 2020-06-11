import Vue from "vue";
import VueRouter from 'vue-router'
//@ts-ignore
import { reduxStorePlugin } from 'redux-vue'
//@ts-ignore
import {createHashHistory} from 'history'
import {StoreManager} from '@mcf/core'
// import { HistoryRouter, Route, RouterLink } from 'vue-component-router'
// import VueI18n from 'vue-i18n'
// import i18next from 'i18next'
// import VueI18Next from '@panter/vue-i18next'
import  * as HelloModule from './index'
import view from './views/app'

import App from './app'


const storeManager = new StoreManager(createHashHistory(),[],[])
// console.dir(Hello,Hello.default)
console.log(JSON.stringify(process.env))
// install redux-vue
Vue.use(reduxStorePlugin)
Vue.use(VueRouter)
// Vue.use(VueI18n)
// Vue.use(VueI18Next);


// i18next.init({
//     fallbackLng: 'en',
//     debug: true,
//     resources: {
//       en: {
//         translation: {
//           "name": "hello world"
//         }
//       }
//     },
//     interpolation: {
//       escapeValue: false, // not needed for react as it escapes by default
//     }
//   });
const routes: any[] = [...HelloModule.router({path:"hello"})];
console.log(routes);
const router = new VueRouter({
  routes: [
    {
      path: "/aaa",
      component: view
    }
  ],
  // mode: "history",
});
storeManager.loadRouterModule(HelloModule);
// const i18n = new VueI18n({
//   // locale: LangStorage.getLang('zh'),  // 语言标识，后面会用做切换和将用户习惯存储到本地浏览器
//   locale: 'zh', // 语言标识
//   messages: {
//     zh: {
//       app: {
//         name: 'aa'
//       }
//     }
//     // 'zh': require('./common/lang/zh'),
//     // 'en': require('./common/lang/en')
//   }
// })
// const i18n = new VueI18Next(i18next);
// const router = new VueRouter({
//   routes // short for `routes: routes`
// })

/* eslint-disable no-new */
new Vue({
  router: router,
  //@ts-ignore
  store:storeManager.getStore(),
  // i18n,
  render: h => h(App)
}).$mount('#app')