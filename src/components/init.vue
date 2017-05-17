<template>
    <div>
      <header-component></header-component>
      <section class="text-left body">
        <router-view></router-view>
      </section>
    </div>
</template>


<script>

  import HeaderComponent from './header/index.vue';

  export default {
   name: 'init',
    components: {
      'header-component': HeaderComponent
    },

    data() {
      return {

      }
    }
  }
  /*$darkBlue: #2d72d9;
   $lightterBlue: #619fff;
   $white: #fff;
   $lightGrey: #eceef1;
   */
</script>

<style>

  * {
    margin:0;
    padding: 0;
  }

  html {
  margin:0;
  padding:0;
  }

  .align-nav ul li a
  {
    display: block;
    margin:10px 35px 10px 10px;
    color:#2d72d9;
  }

  .bg-white {
    background:#fff;
  }

  .align-nav ul li a:hover, .header ul li a:active
  {
    text-decoration: none;

  }
  .align-nav ul li {
    display:inline-block;
    vertical-align: top;
  }
</style>
