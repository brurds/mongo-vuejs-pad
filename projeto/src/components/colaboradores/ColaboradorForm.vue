<template>
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
        <Dropdown
          v-model="dropdownAreaFucional"
          :options="dropdownAreaFucionais"
          optionLabel="name"
          placeholder="Selecione area funcinal"
        />
      </div>
    </div>
  </div>
</template>

<script>


export default {


data() {
    return {
      colaborador: {
        nome: "",
        matrirula: "",
        cargo: ""
      },

      dropdownAreaFucional: "",

      dropdownAreaFucionais: [
        { name: "Desenvolvimento de Software", code: "1001" },
        { name: "Desenvimento de Firmware", code: "1002" },
        { name: "Produção", code: "1003" },
        { name: "Testes", code: "1004" }
      ]
    };
  }
};
</script>

<style>
</style>