<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import Home from './Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  
}
html,body {
  height: 100%;
}
*{padding: 0;
  margin: 0;}
</style>
