<template>
  <div class="p-grid p-fluid p-align-center">
    <div>
      <div class="border card card-w-title">
        <h1>Formulario</h1>
        <div class="p-grid">
          <div class="p-col-12 p-md-6 p-lg-3">
            <h3>Nome</h3>
            <span class="p-float-label">
              <InputText id="name" type="text" v-model="lname" />
              <label for="name">Digite o nome</label>
            </span>
          </div>

          <div class="p-col-12 p-md-6 p-lg-3">
            <h3>Cargo</h3>
            <span class="p-float-label">
              <InputText id="position" type="text" v-model="lposition" />
              <label for="position">Digite o cargo</label>
            </span>
          </div>

          <div class="p-col-12 p-md-6 p-lg-3">
            <h3>Area Funcional</h3>
            <span class="p-float-label">
              <InputText id="functional" type="text" v-model="lfunctional" />
              <label for="functional">Digite a area</label>
            </span>
          </div>

          <div class="p-col-12 p-md-6 p-lg-3">
            <h3>Registro</h3>
            <span class="p-float-label">
              <InputText id="cargo" type="text" v-model="lregister" />
              <label for="cargo">Digite o registro</label>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: "",
    position: "",
    functional: "",
    position: ""
  },
  data() {
    return {
      lname: "",
      lposition: "",
      lfunctional: "",
      lregister: ""
    };
  },
  created() {},

  watch: {
    lname(newValue) {
      this.$emit("update:name", newValue);
    },
    lposition(newValue) {
      this.$emit("update:position", newValue);
    },
    lfunctional(newValue) {
      this.$emit("update:functional", newValue);
    },
    lregister(newValue) {
      this.$emit("update:register", newValue);
    }
  }
};
</script>

<style scoped>
.border{
  margin: 1em 1em 1em;
  padding: 1em 1em 1em;
  border: 3px solid black;
  border-radius: 10px;
}
</style>
