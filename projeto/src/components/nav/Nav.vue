<template>
   <div>
      <Menubar class="menu" :model="items" />
       
   </div>

        
</template>

<script>
import Menubar from 'primevue/menubar';

export default {
  name:'my-nav',

   
  components:{
    Menubar
  },
   
  data() {
    return {
        paginaTipo:'',
        items: [
          {
            label:'Home',icon:'pi pi-fw pi-home', to: '/' 
          }, 
          {
            label:'Colaboradores', icon:'pi pi-fw pi-users',
              items:[
                {
                  label:'Cadastrar',
                  icon:'pi pi-fw pi-user-plus',
                  to: '/colaboradores/cadastrar',
                  command:(paginaTipo) => {return this.paginaTipo='1'}
                },
                {
                  label:'Alterar',
                  icon:'pi pi-fw pi-user',
                  to: '/colaboradores/alterar',
                  command:(paginaTipo) => {return this.paginaTipo='2'}
                },
                {
                  label:'Remover',
                  icon:'pi pi-fw pi-user-minus',
                  to: '/colaboradores/remover',
                  command:(paginaTipo) => {return this.paginaTipo='3'}
                },      
              ]
          },
        ]
    }
             
  }
}



</script>

<style>
.menu{
  text-align: left;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
}
</style>