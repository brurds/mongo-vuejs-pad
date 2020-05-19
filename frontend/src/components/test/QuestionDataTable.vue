<template>
  <div class="container">
    <div class="flex">
      <div>
        <DataTable
          :value="questionsDataTable"
          selectionMode="single"
          :selection.sync="selectedQuestion"
          @row-select="onRowSelect"
          data-key="_id"
          :paginator="true"
          :rows="20"
        >
          <template #header>
            <div style="line-height:1.87em" class="p-clearfix">
              <Button
                @click="listAllQuestion()"
                icon="pi pi-refresh"
                style="float: left"
              />Lista de Questões
            </div>
          </template>
          <Column field="_id" header="Id" :sortable="true"></Column>
          <Column
            field="employee.name"
            header="Criado por"
            :sortable="true"
          ></Column>
          <Column field="body" header="Questão" :sortable="true"></Column>
        </DataTable>
        <!--row alter in table-->
        <Dialog
          :visible.sync="dialogVisible"
          :style="{ width: '400px' }"
          header="Questões"
          :modal="true"
        >
          <div class="p-cardialog-content">
            <div class="p-grid p-fluid" v-if="question">
              <div class="p-col-4">
                <label for="_id">Id</label>
              </div>
              <div class="p-col-8">
                <InputText
                  id="_id"
                  v-model="selectedQuestion._id"
                  :disabled="true"
                  autocomplete="off"
                />
              </div>
              <div class="p-col-4">
                <label for="name">Criado por </label>
              </div>
              <div class="p-col-8">
                <InputText
                  id="name"
                  v-model="selectedQuestion.employee.name"
                  autocomplete="off"
                  :disabled="true"
                />
              </div>
              <div class="p-col-4">
                <label for="position">Questão</label>
              </div>
              <div class="p-col-8">
                <InputText
                  id="position"
                  v-model="selectedQuestion.body"
                  autocomplete="off"
                />
              </div>
              <div class="p-col-4">
                <label for="answerA">Alternativa A </label>
              </div>
              <div class="p-col-8">
                <InputText
                  id="answerA"
                  v-model="selectedQuestion.answerA"
                  autocomplete="off"
                />
              </div>
              <div class="p-col-4">
                <label for="answerB">Alternativa B </label>
              </div>
              <div class="p-col-8">
                <InputText
                  id="answerB"
                  v-model="selectedQuestion.answerB"
                  autocomplete="off"
                />
              </div>
              <div class="p-col-4">
                <label for="answerC">Alternativa C </label>
              </div>
              <div class="p-col-8">
                <InputText
                  id="answerC"
                  v-model="selectedQuestion.answerC"
                  autocomplete="off"
                />
              </div>
              <div class="p-col-4">
                <label for="answerD">Alternativa D </label>
              </div>
              <div class="p-col-8">
                <InputText
                  id="answerD"
                  v-model="selectedQuestion.answerD"
                  autocomplete="off"
                />
              </div>
              <div class="p-col-4">
                <label for="functional">Alternativa correta</label>
              </div>
              <div class="p-col-8">
                <InputText
                  id="functional"
                  v-model="selectedQuestion.correctAnswer"
                  autocomplete="off"
                />
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
            <Button
              label="Alterar"
              icon="pi pi-check"
              @click="update"
              class="p-button-success"
            />
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
import Question from "../../service/Question";

export default {
  data() {
    return {
      questionsDataTable: undefined,
      question: undefined,
      selectedQuestion: undefined,
      dialogVisible: false,
      dialogDeleteVisible: false
    };
  },
  mounted() {
    this.listAllQuestion();
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

    listAllQuestion() {
      Question.listAll()
        .then(res => {
          this.questionsDataTable = res.data;
        })
        .catch(error => console.log(error));
    },

    deleted() {
      Question.delete(this.selectedQuestion)
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
          this.listAllQuestion();
        })
        .catch(error => {
          console.log(error);
        });
      this.question = undefined;
      this.selectedQuestion = undefined;
    },

    update() {
      Question.update(this.selectedQuestion)
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
      this.question = undefined;
      this.selectedQuestion = undefined;
    },

    onRowSelect(event) {
      this.question = { ...event.data };
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
