import HomePage from "@/components/page/HomePage.vue";
import EmployeeAdd from "@/components/page/employee/AddPage.vue";
import EmployeeList from "@/components/page/employee/EditPage.vue";
import AddQuestion from "@/components/page/test/AddQuestionPage";
import TestElaborate from "@/components/page/test/ElaboratePage";
import EditQuestion from "@/components/page/test/EditPage";
import TestSend from "@/components/page/test/SendPage";

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
