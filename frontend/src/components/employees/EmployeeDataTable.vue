<template>
  <div class="body p-justify-center">
    <DataTable
      :value="employeesDataTable"
      selectionMode="single"
      :selection.sync="selectedEmployee"
      @row-select="onRowSelect"
      data-key="_id"
      :paginator="true"
      :rows="20"
    >
      <template #header>
        <div style="line-height:1.87em" class="p-clearfix">
          <Button @click="list" icon="pi pi-refresh" style="float: left" />Lista de Colaboradores
        </div>
      </template>
      <Column field="_id" header="Id" :sortable="true"></Column>
      <Column field="name" header="nome" :sortable="true"></Column>
      <Column field="position" header="cargo" :sortable="true"></Column>
      <Column field="functional" header="Area funcional" :sortable="true"></Column>
      <Column field="register" header="Registro" :sortable="true"></Column>
    </DataTable>
    <!--row alter in table-->
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
            <InputText id="register" v-model="selectedEmployee.register" autocomplete="off" type="number"/>
          </div>
        </div>
      </div>
      <template #footer>
        <Button label="Apagar" icon="pi pi-times" @click="confirmation" class="p-button-danger" />
        <Button
          label="Cancelar"
          icon="pi pi-directions-alt"
          @click="dialogVisible=false"
          class="p-button-info"
        />
        <Button label="Alterar" icon="pi pi-check" @click="update" class="p-button-success" />
      </template>
    </Dialog>
    <!--confirme popup-->
    <Dialog
      :visible.sync="dialogDeleteVisible"
      :style="{width: '400px'}"
      header="Confirmação"
      :modal="true"
    >
      <div class="p-cardialog-content">Deseja realmente deletar?</div>
      <template #footer>
        <Button label="Cancelar" icon="pi pi-times " @click="cancelDelete" class="p-button-danger" />
        <Button
          label="Confirmar"
          icon="pi pi-check"
          @click="confirmDelete"
          class="p-button-success"
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import Employee from "../../service/employee";

export default {
  data() {
    return {
      employeesDataTable: undefined,
      employee: undefined,
      selectedEmployee: undefined,
      dialogVisible: false,
      dialogDeleteVisible: false
    };
  },
  mounted() {
    this.list();
  },
  methods: {
    confirmation() {
      this.dialogVisible = false;
      this.dialogDeleteVisible = true;
    },

    confirmDelete() {
      this.deleted();
      this.dialogVisible = false;
      this.dialogDeleteVisible = false;
    },

    cancelDelete() {
      this.dialogDeleteVisible = false;
      this.dialogVisible = true;
    },

    list() {
      Employee.listAll()
        .then(res => {
          this.employeesDataTable = res.data;
        })
        .catch(error => console.log(error));
    },

    deleted() {
      Employee.delete(this.selectedEmployee)
        .then(res => {
          console.log(res);
          this.$toast.add({
            severity: "success",
            summary: "Remover",
            detail: "Cadastro removido com sucesso",
            life: 3000
          });
        })
        .then(() => {
          this.list();
        })
        .catch(error => {
          console.log(error);
        });
      this.employee = undefined;
      this.selectedEmployee = undefined;
    },

    update() {
      Employee.update(this.selectedEmployee)
        .then(res => {
          console.log(res);
          this.$toast.add({
            severity: "success",
            summary: "Alterar",
            detail: "Cadastro alterado com sucesso",
            life: 3000
          });
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

<style scoped>
.body {
  margin: 10px 10px 10px;
}
</style>