import HomePage from "./page/home/HomePage.vue";
import EmployeeAdd from "./page/employee/AddPage.vue";
import EmployeeList from "./page/employee/EditPage.vue";
import AddQuestion from "./page/test/AddQuestionPage";
import TestElaborate from "./page/test/ElaboratePage";
import EditQuestion from "./page/test/EditQuestionPage";
import TestEdit from "./page/test/EditTestPage";
import TestView from "./page/test/ViewTestPage";

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
    name: "TestEdit",
    component: TestEdit
  },
  {
    path: "/test/:idtest/:idEmployee",
    name: "TestView",
    component: TestView
  }
];
