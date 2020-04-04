<template>
  
  <div id="app">
    <my-nav />
    
    <router-view>

    </router-view>

    <my-footer />
  </div>
</template>

<script>
import Nav from './components/nav/Nav.vue'
import Footer from './components/footer/Footer.vue'




export default {
  name: 'App',
  components:{
    'my-nav' : Nav,
    'my-footer' : Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}

</style>
