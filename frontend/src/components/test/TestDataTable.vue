<template>
  <div class="container">
    <div class="flex">
      <div>
        <DataTable
          :value="testsDataTable"
          selectionMode="single"
          :selection.sync="selectedTest"
          @row-select="onRowSelect"
          data-key="_id"
          :paginator="true"
          :rows="20"
        >
          <template #header>
            <div style="line-height:1.87em" class="p-clearfix">
              <Button @click="listAllTest()" icon="pi pi-refresh" style="float: left" />Lista de Colaboradores
            </div>
          </template>
          <Column field="_id" header="Id" :sortable="true"></Column>
          <Column field="name" header="Prova criada por" :sortable="true"></Column>
        </DataTable>
        <!--row alter in table-->
        <Dialog
          :visible.sync="dialogVisible"
          :style="{ width: '400px' }"
          header="Colaborador"
          :modal="true"
        >
          <div class="p-cardialog-content">
            <div class="p-grid p-fluid" v-if="test">
              <div class="p-col-4">
                <label for="_id">Id</label>
              </div>
              <div class="p-col-8">
                <InputText id="_id" v-model="selectedTest._id" :disabled="true" autocomplete="off" />
              </div>
            </div>
            <div class="p-grid p-fluid" v-if="test">
              <div class="p-col-4">
                <label for="_id">Id</label>
              </div>
              <div class="p-col-8">
                <InputText id="_id" v-model="selectedTest._id" :disabled="true" autocomplete="off" />
              </div>
            </div>
          </div>
          <template #footer>
            <Button
              label="Apagar"
              icon="pi pi-times"
              @click="confirmation"
              class="p-button-danger"
            />
            <Button
              label="Cancelar"
              icon="pi pi-directions-alt"
              @click="dialogVisible = false"
              class="p-button-info"
            />
            <Button label="Alterar" icon="pi pi-check" @click="update" class="p-button-success" />
          </template>
        </Dialog>
        <!--confirme popup-->
        <Dialog
          :visible.sync="dialogDeleteVisible"
          :style="{ width: '400px' }"
          header="Confirmação"
          :modal="true"
        >
          <div class="p-cardialog-content">Deseja realmente deletar?</div>
          <template #footer>
            <Button
              label="Cancelar"
              icon="pi pi-times "
              @click="cancelDelete"
              class="p-button-danger"
            />
            <Button
              label="Confirmar"
              icon="pi pi-check"
              @click="confirmDelete"
              class="p-button-success"
            />
          </template>
        </Dialog>
      </div>
    </div>
    
  </div>
</template>

<script>
import Test from "../../service/Test";

export default {
  data() {
    return {
      testsDataTable: undefined,
      test: undefined,
      selectedTest: undefined,
      dialogVisible: false,
      dialogDeleteVisible: false
    };
  },
  mounted() {
    this.listAllTest();
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

    listAllTest() {
      Test.listAll()
        .then(res => {
          this.testsDataTable = res.data;
        })
        .catch(error => console.log(error));
    },

    deleted() {
      Test.delete(this.selectedTest)
        .then(res => {
          console.log(res);
          this.$toast.add({
            severity: "success",
            summary: "Remover",
            detail: "Questão removida com sucesso",
            life: 3000
          });
        })
        .then(() => {
          this.listAllTest();
        })
        .catch(error => {
          console.log(error);
        });
      this.test = undefined;
      this.selectedTest = undefined;
    },

    update() {
      Test.update(this.selectedTest)
        .then(res => {
          console.log(res);
          this.$toast.add({
            severity: "success",
            summary: "Alterar",
            detail: "Questão alterada com sucesso",
            life: 3000
          });
        })
        .catch(err => console.log(err));
      this.dialogVisible = false;
      this.test = undefined;
      this.selectedTest = undefined;
    },

    onRowSelect(event) {
      this.test = { ...event.data };
      this.dialogVisible = true;
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
}
.form-style {
  margin: 10px 10px 10px;
  padding: 10px 10px 10px;
}
.flex {
  width: 80%;
}
</style>
