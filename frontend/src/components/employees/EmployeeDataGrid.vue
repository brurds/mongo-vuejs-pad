<template>
  <div class="body">
    <DataTable :value="employee">
      <template #header>
        <div style="line-height:1.87em" class="p-clearfix">
          <Button icon="pi pi-refresh" style="float: left" />Lista de Colaboradores
        </div>
      </template>
      <Column field="name" header="Nome"></Column>
      <Column field="position" header="Cargo"></Column>
      <Column field="functional" header="Area Funcional"></Column>
      <Column field="register" header="Registro"></Column>
      <Column headerStyle="width: 8em" bodyStyle="text-align: center">
        <template #header>
          <Button type="button" icon="pi pi-cog"></Button>
        </template>
        <template #body="slotProps">
          <Button
            type="button"
            icon="pi pi-trash"
            class="p-button-danger"
            style="margin-right: .5em"
          ></Button>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script>
export default {
  data() {
    return {
      employee: undefined
    };
  },

  mounted() {
    this.employee = [
      {
        name: "Bruno",
        position: "estagiario",
        functional: "dev",
        register: 123
      },
      {
        name: "Lucas",
        position: "dev",
        functional: "dev",
        register: 213
      },
      {
         name: "Gustavo",
        position: "dev",
        functional: "dev",
        register: 321
      },
      {
        name: "Thiago",
        position: "tester",
        functional: "testes",
        register: 432
      }
    ];
  }
};
</script>

<style>
.body{
    width:98%;
    margin: 10px 10px 10px;
}
</style>