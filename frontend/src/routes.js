
import HomePage from '@/components/layout/HomePage.vue'
import ColaboradorPage from '@/components/colaboradores/ColaboradorPage.vue'


export const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/colaborador/Add',
    name: 'ColaboradorPageAdd',
    component: ColaboradorPage,
    props: {
      pageType: 'add'
    }
  },
  {
    path: '/colaborador/edit',
    name: 'ColaboradorPageEdit',
    component: ColaboradorPage,
    props: {
      pageType: 'edit'
    }
  },
]



