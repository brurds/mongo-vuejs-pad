<template>
  <div>
    <div>
      <div class="card card-w-title"></div>
      <div>
        <EmployeeDataTable />
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeDataTable from "./EmployeeDataTable";
import Employee from "../../service/employee";

export default {
  components: {
    EmployeeDataTable
  },

  data() {
    return {
     
    };
  }
};
</script>

<style>
</style>
