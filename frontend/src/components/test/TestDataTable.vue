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
              <Button
                @click="listAllTest()"
                icon="pi pi-refresh"
                style="float: left"
              />Lista Provas
            </div>
          </template>
          <Column field="_id" header="Id" :sortable="true"></Column>
          <Column
            field="name"
            header="Prova criada por"
            :sortable="true"
          ></Column>
        </DataTable>
        <!--row alter in table-->
        <Dialog
          :visible.sync="dialogVisible"
          :style="{ width: '400px' }"
          header="Provas"
          :modal="true"
        >
          <div class="p-cardialog-content">
            <div class="p-grid p-fluid" v-if="test">
              <div class="p-col-4">
                <label for="_id">Id</label>
              </div>
              <div class="p-col-8">
                <InputText
                  id="_id"
                  v-model="selectedTest._id"
                  :disabled="true"
                  autocomplete="off"
                />
              </div>
            </div>
            <div class="p-grid p-fluid" v-if="test">
              <div class="p-col-4">
                <label for="name">Nome</label>
              </div>
              <div class="p-col-8">
                <InputText
                  id="name"
                  v-model="selectedTest.name"
                  :disabled="true"
                  autocomplete="off"
                />
              </div>
            </div>
          </div>
          <template #footer>
            <Button
              label="Apagar"
              icon="pi pi-times"
              @click="confirmationButton"
              class="p-button-danger"
            />
            <Button
              label="Cancelar"
              icon="pi pi-directions-alt"
              @click="dialogVisible = false"
              class="p-button-info"
            />
            <Button
              label="Enviar Email"
              icon="pi pi-check"
              @click="sendEmailButton()"
              class="p-button-success"
            />
          </template>
        </Dialog>
        <!--confirme send email popup-->
        <Dialog
          :visible.sync="dialogSendVisible"
          :style="{ width: '400px' }"
          header="Enviar e-mail"
          :modal="true"
        >
          <div class="p-cardialog-content">Deseja realmente deletar?</div>
          <template #footer>
            <Button
              label="Cancelar"
              icon="pi pi-times "
              @click="cancelSendEmail"
              class="p-button-danger"
            />
            <Button
              label="Enviar"
              icon="pi pi-check"
              @click="confirmSendEmail"
              class="p-button-success"
            />
          </template>
        </Dialog>
        <!--confirme delete popup-->
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
        {{ selectedTest }}
      </div>
    </div>
  </div>
</template>

<script>
import Test from "../../service/Test";
import SendEmail from "../../service/SendEmail";

export default {
  data() {
    return {
      testsDataTable: undefined,
      test: undefined,
      selectedTest: undefined,
      dialogVisible: false,
      dialogDeleteVisible: false,
      dialogSendVisible: false,

      email: {
        service_id: "default_service",
        template_id: "template_Uu1Fpy1q",
        user_id: "user_F4qsKa5NnZRQy9IdArfUR",
        template_params: {
          from_name: "Bruno",
          link_test: "http://google.com",
          to_email: "bru_rds@yahoo.com.br"
        }
      }
    };
  },
  mounted() {
    this.listAllTest();
  },
  methods: {
    confirmationButton() {
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
      this.$toast.add({
        severity: "warn",
        summary: "Apagar",
        detail: "Operação cancelada",
        life: 3000
      });
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

    onRowSelect(event) {
      this.test = { ...event.data };
      this.dialogVisible = true;
    },
    sendEmailButton() {
      this.dialogVisible = false;
      this.dialogSendVisible = true;
    },
    confirmSendEmail() {
      this.dialogSendVisible = false;
      this.dialogVisible = true;
      this.sendEmail();
    },
    cancelSendEmail() {
      this.dialogSendVisible = false;
      this.dialogVisible = true;
      this.$toast.add({
        severity: "warn",
        summary: "Enviar",
        detail: "Operação cancelada",
        life: 3000
      });
    },
    sendEmail() {
      SendEmail.send(this.email)
        .then(() => {
          console.log("SUCCESS!");
          this.$toast.add({
            severity: "success",
            summary: "Enviar",
            detail: "Prova Enviada",
            life: 3000
          });
        },
        error => {
          this.$toast.add({
            severity: "error",
            summary: "Enviar",
            detail: "Falha ai enviar prova "+ error,
            life: 3000
          });
        }
      );
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
