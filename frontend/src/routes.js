import HomePage from "@/components/page/HomePage.vue";
import EmployeeAdd from "@/components/page/employee/AddPage.vue";
import EmployeeList from "@/components/page/employee/EditPage.vue";
import AddQuestion from "@/components/page/test/AddQuestionPage";
import TestElaborate from "@/components/page/test/ElaboratePage";

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
    path: "/test/elaborate",
    name: "TestElaborate",
    component: TestElaborate
  }
];
