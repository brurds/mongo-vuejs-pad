<template>
  <div class="p-grid p-fluid p-align-center">
    <div>
      <div class="form-style card card-w-title">
        <h1>Formulario</h1>
        <div class="p-grid">
          <div class="p-col-6">
            <h3>Nome</h3>
            <span class="p-float-label">
              <InputText id="name" type="text" v-model="lname" maxlength="30" />
              <label for="name">Digite o nome</label>
            </span>
          </div>

          <div class="p-col-6">
            <h3>Cargo</h3>
            <span class="p-float-label">
              <InputText id="position" type="text" v-model="lposition" maxlength="30" />
              <label for="position">Digite o cargo</label>
            </span>
          </div>

          <div class="p-col-6">
            <h3>Area Funcional</h3>
            <span class="p-float-label">
              <InputText id="functional" type="text" v-model="lfunctional" maxlength="30" />
              <label for="functional">Digite a area</label>
            </span>
          </div>

          <div class="p-col-6">
            <h3>Registro</h3>
            <span class="p-float-label">
              <InputText id="register" type="number" v-model="lregister" max="9" v-on:keyup.enter="toSave"/>
              <label for="register">Digite o registro</label>
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
    register: ""
  },
  data() {
    return {
      lname: "",
      lposition: "",
      lfunctional: "",
      lregister: ""
    };
  },
  created() {   
  },
  methods:{
    toSave(){
      this.$emit("save")
    }
  },

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
      this.lregister = this.lregister.substr(0, 9);
      this.$emit("update:register", newValue);
    }
  }
};
</script>

<style scoped>
.form-style {
  margin: 1em 1em 1em;
  padding: 1em 1em 1em;
  border: 3px solid black;
  border-radius: 10px;
}
</style>
