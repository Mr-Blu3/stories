<template>
  <section class="header align-nav">
    <div class="container">
      <nav>
        <ul>
          <router-link v-for="navList in navLists" v-bind:data="navList" v-bind:key="navList.name" tag="li" :to="navList.url">
            <a class="text-white"><p :class="navList.className">{{ navList.name }}</p></a>
          </router-link>
          <li>
            <a href="#"><p class=" fa text-white"></p></a>
          </li>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'Header',
    data() {
      return {
        navLists: [
          {name: 'Stories', url: '/'}
        ]
      }
    }
  }
</script>

<style src="./header.component.css"></style>


