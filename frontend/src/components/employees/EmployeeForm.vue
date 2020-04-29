<template>
  <div class="p-grid p-fluid p-align-center">
    <div>
      <div class="form-style card card-w-title">
        <h1>Formulario</h1>
        <div class="p-grid">
          <div class="p-col-6">
            <h3>Nome</h3>
            <span class="p-float-label">
              <InputText id="name" type="text" v-model.trim="$v.name.$model" />
              <label for="name">Digite o nome</label>
            </span>
            <p class="error" v-if="validateRequired($v.name)">Campo necessario</p>
            <p class="error" v-if="validateText($v.name)">Deve conter ao menos 3 caracteres</p>
          </div>
          <div class="p-col-6">
            <h3>Cargo</h3>
            <span class="p-float-label">
              <InputText id="position" type="text" v-model.trim="$v.position.$model" />
              <label for="position">Digite o cargo</label>
            </span>
            <p class="error" v-if="validateRequired($v.position)">Campo necessario</p>
            <p class="error" v-if="validateText($v.position)">Deve conter ao menos 3 caracteres</p>
          </div>
          <div class="p-col-6">
            <h3>Area Funcional</h3>
            <span class="p-float-label">
              <InputText id="functional" type="text" v-model.trim="$v.functional.$model" />
              <label for="functional">Digite a area</label>
            </span>
            <p class="error" v-if="validateRequired($v.functional)">Campo necessario</p>
            <p class="error" v-if="validateText($v.functional)">Deve conter ao menos 3 caracteres</p>
          </div>
          <div class="p-col-6">
            <h3>Registro</h3>
            <span class="p-float-label">
              <InputText
                id="register"
                type="number"
                v-model.trim="$v.register.$model"
                v-on:keyup.enter="save"
              />
              <label for="register">Digite o registro</label>
            </span>
            <p class="error" v-if="this.validateRequired($v.register)">Campo necessario</p>
            <p class="error" v-if="!$v.register.maxValue">Maximo de 9 digitos</p>
          </div>
          <div class="p-col-align-center div-flex">
            <Button @click="save()" label="Salvar" class="p-button-info p-button-rounded btn-size" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Employee from "../../service/employee";
import { required, minLength, maxValue } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      name: "",
      position: "",
      functional: "",
      register: "",
      employee: {
        name: "",
        position: "",
        functional: "",
        register: ""
      }
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(3)
    },
    position: {
      required,
      minLength: minLength(3)
    },
    functional: {
      required,
      minLength: minLength(3)
    },
    register: {
      required,
      maxValue: maxValue(999999999)
    }
  },
  methods: {
    creatEmployee() {
      return (this.employee = {
        name: this.name,
        position: this.position,
        functional: this.functional,
        register: this.register
      });
    },
    validateRequired(field) {
      return !field.required;
    },
    validateText(field) {
      return !field.minLength && field.required;
    },
    save() {
      if (this.$v.$invalid) {
        this.$toast.add({
          severity: "error",
          summary: "Cadastro",
          detail: "Erro ao cadastrar, verifique os campos",
          life: 3000
        });
      } else {
        Employee.save(this.creatEmployee())
          .then(res => {
            console.log(res);
            this.$toast.add({
              severity: "success",
              summary: "Cadastro",
              detail: "Cadastro realizado com sucesso",
              life: 3000
            });
            this.cleanFields();
          })
          .catch(() => {
            this.$toast.add({
              severity: "error",
              summary: "Cadastro",
              detail: "Erro ao cadastrar, verifique os campos",
              life: 3000
            });
          });
      }
    },
    cleanFields() {
      this.name = "";
      this.position = "";
      this.register = "";
      this.functional = "";
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
.div-flex {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.btn-size {
  width: 20%;
}
</style>