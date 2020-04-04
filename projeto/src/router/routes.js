
import Home from '@/components/home/Home.vue'
import Colaboradores from '@/components/colaboradores/Colaboradores.vue'


 export const routes = [
    {
      path: '/', name: 'Home', component: Home
    },
    {
      path:'/colaboradores/cadastrar', name:'ColaboradoresCadastrar', component: Colaboradores,cod:'1' 
    },
    {
      path:'/colaboradores/alterar', name:'ColaboradoresAlterar', component: Colaboradores, cod:'2'
    },
    {
      path:'/colaboradores/remover', name:'ColaboradoresRemover', component: Colaboradores, cod:'3'
    }
  ]



