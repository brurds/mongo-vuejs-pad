<template>
  <div class="body">
    <DataTable
      :value="employee"
      :selection.sync="selectedEmployee"
      selectionMode="single"
      dataKey="_id"
      @row-select="onRowSelect"
      @row-unselect="onRowUnselect"
    >
      <template #header>
        <div style="line-height:1.87em" class="p-clearfix">
          <Button
            @click="update"
            icon="pi pi-refresh"
            style="float: left"
          />Lista de Colaboradores
        </div>
      </template>
      <Column field="_id" header="id"></Column>
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
            @click="Delete"
          ></Button>
        </template>
      </Column>
    </DataTable>
    {{ selectedEmployee }}
  </div>
</template>

<script>
import Employee from "../../service/employee";

export default {
  data() {
    return {
      employee: undefined,
      selectedEmployee: undefined
    };
  },
  mounted() {
    Employee.listAll()
      .then(res => {
        this.employee = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    update() {
      Employee.listAll().then(res => {
        this.employee = res.data;
      });
    },
    Delete() {
     if (!selectedEmployee){
       confirm('selecione um colaborador para deletar');
       }else{
        Employee.delete(this.selectedEmployee)
          .then(res => console.log(res))
          .catch(err => console.log(err));
      }
    },
    onRowSelect(event) {
      this.$toast.add({
        severity: "info",
        summary: "Colaborador selecionado",
        detail: "id: " + event.data._id,
        life: 3000
      });
    },
    onRowUnselect(event) {
      this.$toast.add({
        severity: "warn",
        summary: "Colaborador selecionado",
        detail: "id: " + event.data._id,
        life: 3000
      });
    }
  }
};
</script>

<style>
.body {
  width: 98%;
  margin: 10px 10px 10px;
}
</style>
