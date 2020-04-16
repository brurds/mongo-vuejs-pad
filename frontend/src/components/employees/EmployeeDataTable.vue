<template>
  <div class="body p-justify-center">
    <DataTable
      :value="employees"
      selectionMode="single"
      :selection.sync="selectedEmployee"
      @row-select="onRowSelect"
      data-key="_id"
      :paginator="true"
      :rows="20"
    >
      <template #header>
        <div style="line-height:1.87em" class="p-clearfix">
          <Button @click="List" icon="pi pi-refresh" style="float: left" />Lista de Colaboradores
        </div>
      </template>
      <Column field="_id" header="Id" :sortable="true"></Column>
      <Column field="name" header="nome" :sortable="true"></Column>
      <Column field="position" header="cargo" :sortable="true"></Column>
      <Column field="functional" header="Area funcional" :sortable="true"></Column>
      <Column field="register" header="Registro" :sortable="true"></Column>
    </DataTable>

    <Dialog
      :visible.sync="dialogVisible"
      :style="{width: '400px'}"
      header="Colaborador"
      :modal="true"
    >
      <div class="p-cardialog-content">
        <div class="p-grid p-fluid" v-if="employee">
          <div class="p-col-4">
            <label for="_id">Id</label>
          </div>
          <div class="p-col-8">
            <InputText id="_id" v-model="selectedEmployee._id" :disabled="true" autocomplete="off" />
          </div>
          <div class="p-col-4">
            <label for="name">Nome</label>
          </div>
          <div class="p-col-8">
            <InputText id="name" v-model="selectedEmployee.name" autocomplete="off" />
          </div>
          <div class="p-col-4">
            <label for="position">Cargo</label>
          </div>
          <div class="p-col-8">
            <InputText id="position" v-model="selectedEmployee.position" autocomplete="off" />
          </div>
          <div class="p-col-4">
            <label for="functional">Area funcional</label>
          </div>
          <div class="p-col-8">
            <InputText id="functional" v-model="selectedEmployee.functional" autocomplete="off" />
          </div>
          <div class="p-col-4">
            <label for="register">Registro</label>
          </div>
          <div class="p-col-8">
            <InputText id="register" v-model="selectedEmployee.register" autocomplete="off" />
          </div>
        </div>
      </div>
      <template #footer>
        <Button label="Apagar" icon="pi pi-times" @click="Delete" class="p-button-danger" />
        <Button label="Salvar" icon="pi pi-check" @click="Update" class="p-button-success" />
      </template>
    </Dialog>
  </div>
</template>

<script>
import Employee from "../../service/employee";

export default {
  data() {
    return {
      employees: undefined,
      employee: undefined,
      selectedEmployee: undefined,
      dialogVisible: false
    };
  },
  mounted() {
    this.List();
  },
  methods: {
    List() {
      Employee.listAll()
        .then(res => {
          this.employees = res.data;
        })
        .catch(error => console.log(error));
    },

    Delete() {
      if (confirm("deseja realmente deletar")) {
        Employee.delete(this.selectedEmployee)
          .then(res => {
            console.log(res);
          })
          .then(()=> {
            this.List();
          })
          .catch(error => {
            console.log(error);
          });

        this.dialogVisible = false;
        this.employee = undefined;
        this.selectedEmployee = undefined;
      } else {
        this.dialogVisible = false;
        this.employee = undefined;
        this.selectedEmployee = undefined;
      }
    },

    Update() {
      Employee.update(this.selectedEmployee)
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));
      this.dialogVisible = false;
      this.employee = undefined;
      this.selectedEmployee = undefined;
    },

    onRowSelect(event) {
      this.employee = { ...event.data };
      this.dialogVisible = true;
    }
  }
};
</script>


<style >
.body {
  margin: 10px 10px 10px;
}
</style>