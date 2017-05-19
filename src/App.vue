<template>
  <div id="app">
    <init-root></init-root>
  </div>
</template>

<script>

  import InitRoot from './components/init.vue';

  export default {
    name: 'app',
    components: {'init-root': InitRoot},
    data() {return {}},

  }
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.css';
  @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
  @import '../node_modules/font-awesome/css/font-awesome.min.css';
</style>
