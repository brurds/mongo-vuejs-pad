<template>
  <div class="p-grid p-fluid p-align-center">
    <div>
      <div class="form-style card card-w-title">
        <h1>Formulario</h1>
        <div class="p-grid">
          <div class="p-col-6">
            <h3>Nome</h3>
            <span class="p-float-label">
              <InputText id="name" type="text" v-model.trim="$v.localname.$model" maxlength="30" />
              <label for="name">Digite o nome</label>
            </span>
            <p class="error" v-if="!$v.localname.required">Campo necessario</p>
          </div>

          <div class="p-col-6">
            <h3>Cargo</h3>
            <span class="p-float-label">
              <InputText
                id="position"
                type="text"
                v-model.trim="$v.localposition.$model"
                maxlength="30"
              />
              <label for="position">Digite o cargo</label>
            </span>
            <p class="error" v-if="!$v.localposition.required">Campo necessario</p>
          </div>

          <div class="p-col-6">
            <h3>Area Funcional</h3>
            <span class="p-float-label">
              <InputText
                id="functional"
                type="text"
                v-model.trim="$v.localfunctional.$model"
                maxlength="30"
              />
              <label for="functional">Digite a area</label>
            </span>
            <p class="error" v-if="!$v.localfunctional.required">Campo necessario</p>
          </div>

          <div class="p-col-6">
            <h3>Registro</h3>
            <span class="p-float-label">
              <InputText
                id="register"
                type="number"
                v-model.trim="$v.localregister.$model"
                v-on:keyup.enter="toSave"
              />
              <label for="register">Digite o registro</label>
            </span>
            <p class="error" v-if="!$v.localregister.required">Campo necessario</p>
            <p class="error" v-if="!$v.localregister.maxValue">Maximo de 9 digitos</p>
            
          </div>
          <button v-show="false" v-on:clean="cleanFilds()" ></button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import { required, minLength, maxValue } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      submitStatus: null,

      localname: "",
      localposition: "",
      localfunctional: "",
      localregister: ""
    };
  },
  validations: {
    localname: {
      required,
      minLength: minLength(3)
    },
    localposition: {
      required,
      minLength: minLength(3)
    },
    localfunctional: {
      required,
      minLength: minLength(3)
    },
    localregister: {
      required,
      maxValue: maxValue(999999999)
    }
  },
  created() {},
  methods: {
    toSave() {
      this.$emit("save");
    },
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        this.submitStatus = null;
      }
    },
    cleanFilds() {
      this.localname = "",
      this.localposition = "",
      this.localfunctional = "",
      this.localregister = "";
    }
  },

  watch: {
    localname(newValue) {
      this.$emit("update:name", newValue);
    },
    localposition(newValue) {
      this.$emit("update:position", newValue);
    },
    localfunctional(newValue) {
      this.$emit("update:functional", newValue);
    },
    localregister(newValue) {
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
.error {
  color: red;
  font-size: 10px;
}
</style>
