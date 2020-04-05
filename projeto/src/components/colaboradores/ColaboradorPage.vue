<template>
  <div>
    <div class="p-col-12 p-lg-6">
      <div class="card card-w-title">
        <h1 v-if="isAdd">Cadastrar</h1>
        <h1 v-if="!isAdd">Alterar</h1>
      </div>

      <ColaboradorForm />

      <div class="p-col-12 p-md-4">
        <Button v-if="isAdd" label="Salvar" class="p-button-info p-button-rounded" />
        <Button v-if="!isAdd" label="Alterar" class="p-button-warning p-button-rounded" />
      </div>
    </div>
  </div>
</template>

<script>
import ColaboradorForm from "./ColaboradorForm";

export default {
  components: {
    ColaboradorForm
  },
  props: {
    pageType: {
      required: true,
      type: String
    }
  },
  computed: {
    isAdd() {
      return this.pageType == "add";
    }
  }
};
</script>

<style>
</style>