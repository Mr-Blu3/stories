<template>
    <div class="row" style="background: grey">
      <div class="col-10">
        <header-component></header-component>
        <section class="text-left body">
          <router-view></router-view>
        </section>
      </div>

      <div class="col-2">
        <chat-component></chat-component>
      </div>
    </div>
</template>


<script>

  import HeaderComponent from './header/index.vue';
  import ChatComponent from "./chats/index.vue";

  export default {
   name: 'init',
    components: {
      'header-component': HeaderComponent,
      'chat-component': ChatComponent,
    },

    data() { return {}}
  }
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

  ul {
    margin: 0;
  }
  .story-header ul {
    padding-top: 1em;
  }
  .row {
    margin:0;
  }

  .circleBase {
    border-radius: 50%;
  }

  .align-nav ul li a
  {
    display: block;
    margin:10px 35px 10px 10px;
    color:#2d72d9;
  }
  hr {
    margin:0;
  }
  .card-block {
    padding: 0;
  }

  .bg-white {
    background:#fff;
  }

  .bg-blue {
    background: #2d72d9;
  }

  .pointer {
    cursor: pointer;
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
