// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Vuelidate from "vuelidate";
import VueRouter from "vue-router";
import { routes } from "./routes";
import "primeflex/primeflex.css";
import "primevue/resources/themes/nova-light/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //shared css
import "primeicons/primeicons.css"; //icons
import Dropdown from "primevue/dropdown";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup";
import Dialog from "primevue/dialog";
import Message from "primevue/message";
import Panel from "primevue/panel";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import Card from "primevue/card";
import Menubar from "primevue/menubar";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import Textarea from "primevue/textarea";
import RadioButton from 'primevue/radiobutton';


Vue.component("Dropdown", Dropdown);
Vue.component("InputText", InputText);
Vue.component("Button", Button);
Vue.component("ColumnGroup", ColumnGroup);
Vue.component("Column", Column);
Vue.component("DataTable", DataTable);
Vue.component("Dialog", Dialog);
Vue.component("Message", Message);
Vue.component("Panel", Panel);
Vue.component("TabView", TabView);
Vue.component("TabPanel", TabPanel);
Vue.component("Accordion", Accordion);
Vue.component("AccordionTab", AccordionTab);
Vue.component("Card", Card);
Vue.component("Menubar", Menubar);
Vue.component("Toast", Toast);
Vue.component("Textarea", Textarea);
Vue.component("RadioButton", RadioButton);


Vue.use(Vuelidate);
Vue.use(ToastService);
Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode: "history"
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
