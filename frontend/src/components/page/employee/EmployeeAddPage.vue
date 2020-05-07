<template>
  <div>
    <div>
      <div>
        <EmployeeForm />
      </div>
    </div>
  </div>
</template>

<script>

import EmployeeForm from "../../employees/EmployeeForm";
import Employee from "../../../service/employee";

export default {
  components: {
    EmployeeForm
  },

  data() {
    return {};
  },

  methods: {}
};
</script>

<style scoped>
</style>
