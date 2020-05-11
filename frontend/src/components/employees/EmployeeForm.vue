<template>
  <div class="div-flex">
    <div class="flex">
      <div>
        <h1 class="form-title">Formulário de colaboradores</h1>
        <div class="p-grid p-fluid form-style border">
          <div class=" p-lg-6 p-col-12">
            <h3>Nome</h3>
            <span class="p-float-label">
              <InputText
                id="name"
                type="text"
                v-model.trim="$v.employee.name.$model"
              />
              <label for="name">Digite o nome</label>
            </span>
            <p class="error" v-if="validateRequired($v.employee.name)">
              {{ msg.required }}
            </p>
            <p class="error" v-if="validadeMinLength($v.employee.name)">
              {{ msg.minLength }}
            </p>
          </div>
          <div class="p-lg-6 p-col-12">
            <h3>Cargo</h3>
            <span class="p-float-label">
              <InputText
                id="position"
                type="text"
                v-model.trim="$v.employee.position.$model"
              />
              <label for="position">Digite o cargo</label>
            </span>
            <p class="error" v-if="validateRequired($v.employee.position)">
              {{ msg.required }}
            </p>
            <p class="error" v-if="validadeMinLength($v.employee.position)">
              {{ msg.minLength }}
            </p>
          </div>
          <div class="p-lg-6 p-col-12">
            <h3>Area Funcional</h3>
            <span class="p-float-label">
              <InputText
                id="functional"
                type="text"
                v-model.trim="$v.employee.functional.$model"
              />
              <label for="functional">Digite a area</label>
            </span>
            <p class="error" v-if="validateRequired($v.employee.functional)">
              {{ msg.required }}
            </p>
            <p class="error" v-if="validadeMinLength($v.employee.functional)">
              {{ msg.minLength }}
            </p>
          </div>
          <div class="p-lg-6 p-col-12">
            <h3>Registro</h3>
            <span class="p-float-label">
              <InputText
                id="register"
                type="number"
                v-model.trim="$v.employee.register.$model"
                v-on:keyup.enter="save"
              />
              <label for="register">Digite o registro</label>
            </span>
            <p class="error" v-if="validateRequired($v.employee.register)">
              {{ msg.required }}
            </p>
            <p class="error" v-if="validadeMinLength($v.employee.register)">
              {{ msg.minLength }}
            </p>
            <p class="error" v-if="validadeMaxValue($v.employee.register)">
              {{ msg.maxValue }}
            </p>
          </div>
        </div>

        <div class="div-flex">
          <Button
            @click="save()"
            label="Salvar"
            class="p-button-info p-button-rounded btn-size"
          />
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
      employee: {
        name: "",
        position: "",
        functional: "",
        register: ""
      },
      msg: {
        required: "*Campo não pode estar vazio",
        minLength: "*Necessario 3 carateres no minimo",
        maxValue: "*Maximo de 9 caracteres"
      }
    };
  },
  validations: {
    employee: {
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
        minLength: minLength(3),
        maxValue: maxValue(999999999)
      }
    }
  },
  methods: {
    validateRequired(field) {
      return !field.required;
    },
    validadeMinLength(field) {
      return !field.minLength && field.required;
    },
    validadeMaxValue(field) {
      return !field.maxValue;
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
        Employee.save(this.employee)
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
      this.employee.name = "";
      this.employee.position = "";
      this.employee.register = "";
      this.employee.functional = "";
    }
  }
};
</script>
<style scoped>
.form-style {
  margin: 10px 10px 10px;
  padding: 10px 10px 10px;
}
.border {
  border: 2px solid black;
  border-radius: 20px;
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
.flex {
  width: 80%;
}
.form-title {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.btn-size {
  margin: 10px 10px 10px;
  width: 100px;
}
</style>
