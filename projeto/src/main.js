// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import { routes } from './routes'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/nova-light/theme.css'      //theme
import 'primevue/resources/primevue.min.css'                 //shared css
import 'primeicons/primeicons.css'                           //icons 
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Button from 'primevue/button';


Vue.component("Dropdown",Dropdown)
Vue.component("InputText",InputText);
Vue.component("Button", Button);
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: 'history'
});
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
