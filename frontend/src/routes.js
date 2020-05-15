import HomePage from "./page/home/HomePage.vue";
import EmployeeAdd from "./page/employee/AddPage.vue";
import EmployeeList from "./page/employee/EditPage.vue";
import AddQuestion from "./page/test/AddQuestionPage";
import TestElaborate from "./page/test/ElaboratePage";
import EditQuestion from "./page/test/EditPage";
import TestSend from "./page/test/SendPage";

export const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/employee/add",
    name: "EmployeeAdd",
    component: EmployeeAdd
  },
  {
    path: "/employee/list",
    name: "EmployeeList",
    component: EmployeeList
  },
  {
    path: "/test/question",
    name: "AddQuestion",
    component: AddQuestion
  },
  {
    path: "/test/editQuestion",
    name: "EditQuestion",
    component: EditQuestion
  },
  {
    path: "/test/elaborate",
    name: "TestElaborate",
    component: TestElaborate
  },
  {
    path: "/test/send",
    name: "TestSend",
    component: TestSend
  }
];
