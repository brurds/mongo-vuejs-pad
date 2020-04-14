
import HomePage from '@/components/layout/HomePage.vue'
import EmployeePage from '@/components/employees/EmployeePage.vue'



export const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/employee/add',
    name: 'EmployeePageAdd',
    component: EmployeePage,
    props: {
      pageType: 'add'
    }
  },
  {
    path: '/employee/edit',
    name: 'employeePageEdit',
    component: EmployeePage,
    props: {
      pageType: 'edit'
    }
  },
]



