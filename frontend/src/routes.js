
import HomePage from '@/components/layout/HomePage.vue'
import EmployeeAdd from '@/components/employees/EmployeeAddPage.vue'
import EmployeeList from './components/employees/EmployeeListPage.vue'



export const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/employee/add',
    name: 'EmployeeAdd',
    component: EmployeeAdd
   
  },,
  {
    path: '/employee/list',
    name: 'EmployeeList',
    component: EmployeeList
   
  }
    
]

