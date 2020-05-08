<template>
  <div>
    <Menubar class="menu" :model="items" />
  </div>
</template>

<script>
export default {
  name: "Nav",

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
              label: "Adicionar colaborador",
              icon: "pi pi-fw pi-user-plus",
              to: "/employee/add"
            },
            {
              label: "Editar colaborador",
              icon: "pi pi-fw pi-user",
              to: "/employee/list"
            }
          ]
        },
        {
          label: "Questionario",
          icon: "pi pi-fw pi-file",
          items: [
             {
              label: "Adicionar questão",
              icon: "pi pi-fw pi-pencil",
              to: "/test/question"
            },
            {
              label: "Elaborar questionario",
              icon: "pi pi-fw pi-file",
              to: "/test/elaborate"
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
