<template>
  <div>
   

    <div class="p-col-12 p-lg-6">
			
      
      <div class="card card-w-title">
				<h1 v-if="true">Cadastrar</h1>
        <h1 v-if="false">Alterar</h1>
        <h1 v-if="false">Remover</h1>

        <div v-if="true" class="p-col-12 p-md-4">
          <h3>Procurar</h3> 
          <span>
            <div class="p-inputgroup">
              <InputText placeholder="Procurar"/>
              <Button icon="pi pi-search" />
            </div>
          </span>
        </div>

        <div class="p-grid">
					<div class="p-col-12 p-md-4">
						<h3>Nome</h3> 
            <span class="p-float-label">
              <InputText id="username" type="text" v-model="colaborador.nome" />
              <label for="username">Digite seu nome</label>
            </span>
					</div>
					
          <div class="p-col-12 p-md-4">
            <h3>Matricula</h3> 
            <span class="p-float-label">
              <InputText id="username" type="number" v-model="colaborador.matricula" />
              <label for="username">Digite sua matricula</label>
            </span>
					</div>
					
          <div class="p-col-12 p-md-4">
            <h3>Cargo</h3> 
            <span class="p-float-label">
              <InputText id="cargo" type="text" v-model="colaborador.cargo" />
              <label for="cargo">Digite seu cargo</label>
            </span>
					</div>
					
          <div class="p-col-12 p-md-4">
					  <h3>Area Funcional</h3> 
            <div class="card card-w-title">
              <Dropdown v-model="dropdownAreaFucional" :options="dropdownAreaFucionais" optionLabel="name" placeholder="Selecione area funcinal" />
              <p>{{dropdownAreaFucional}}</p>
            </div>
					</div>
					  
				</div>
			</div>

      <div class="p-col-12 p-md-4" style="text-align: center">
        <Button label="Salvar" style="margin-bottom: 10px" class="p-button-info p-button-rounded" />
        <Button label="Alterar" style="margin-bottom: 10px" class="p-button-warning p-button-rounded" />
        <Button label="Remover" style="margin-bottom: 10px" class="p-button-danger p-button-rounded" />
      </div>

    </div>
     
  </div>
</template>

<script>

import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';

export default {
  components:{
    Button,
    InputText,
    Dropdown
  
                
  },
  data(){
    return {
      colaborador: {
        nome:'',
        matrirula:'',
        cargo:''
      },
      
      retornoPaginaTipo:'',
      dropdownAreaFucional:'',

      dropdownAreaFucionais: [
        {name: 'Desenvolvimento de Software', code: '1001'},
        {name: 'Desenvimento de Firmware', code: '1002'},
        {name: 'Produção', code: '1003'},
        {name: 'Testes', code: '1004'}
      ],
          
  }
    
    
  },
  methods:{
      
  }

}


</script>

<style>

</style>