<template>
  <div class="p-grid">
    <div class="p-col-6">
      <h3>Nome</h3>
      <span class="p-float-label">
        <InputText id="name" type="text" v-model="employee.name" />
        <label for="name">Digite seu nome</label>
      </span>
    </div>

    <div class="p-col-6">
      <h3>Cargo</h3>
      <span class="p-float-label">
        <InputText id="position" type="number" v-model="employee.position" />
        <label for="position">Digite a matricula</label>
      </span>
    </div>

    <div class="p-col-6">
      <h3>Area Funcional</h3>
      <span class="p-float-label">
        <InputText id="functional" type="text" v-model="employee.functional" />
        <label for="functional">Digite a area</label>
      </span>
    </div>

    <div class="p-col-6 ">
      <h3>Registro</h3>
      <span class="p-float-label">
        <InputText id="cargo" type="text" v-model="employee.register" />
        <label for="cargo">Digite numero de registro</label>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: {
        name: "",
        position: "",
        functional: "",
        register: ""
      }
    };
  }
};
</script>

<style>


</style>