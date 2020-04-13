<template>
  <div>
    <Menubar class="menu" :model="items" />
  </div>
</template>

<script>
import Menubar from "primevue/menubar";

export default {
  name: "Nav",

  components: {
    Menubar
  },

  data() {
    return {
      items: [
        {
          label: "Home",
          icon: "pi pi-fw pi-home",
          to: "/"
        },
        {
          label: "Colaborador",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Cadastrar",
              icon: "pi pi-fw pi-user-plus",
              to: "/employee/add"
            },
            {
              label: "Alterar",
              icon: "pi pi-fw pi-user",
              to: "/employee/edit"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
.menu {
  text-align: left;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 1;
}
</style>