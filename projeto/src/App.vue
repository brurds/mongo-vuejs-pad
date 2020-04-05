<template>
  <div id="app">
    <Nav />

    <router-view></router-view>

    <Footer />
  </div>
</template>

<script>
import Nav from "./components/layout/Nav.vue";
import Footer from "./components/layout/Footer.vue";

export default {
  name: "App",
  components: {
    Nav,
    Footer
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
