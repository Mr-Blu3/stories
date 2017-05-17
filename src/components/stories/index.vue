<template>
  <div>
    <div class="story-header align-nav">
      <div class="container">
        <ul>
          <li v-for="filter in navFilters">
            <a style="cursor: pointer"><p :class="filter.active">{{filter.name}} <i :class="filter.arrow"></i></p></a>
          </li>
        </ul>
      </div>
    </div>
    <section class="stories-lines pt-5 pb-5">
      <div class="container">
        <chat-component></chat-component>
        <table class="table bg-white">
          <tbody>
            <tr v-for="story, key in stories">
              <td>{{ story.logo }}</td>
              <td><i class="fa fa-caret-up" aria-hidden="true"></i><p>{{ ++key }}</p></td>
              <td class="pt-4 pb-4">
                <h6>{{story.headline}} <small>(thestocks.im)</small></h6>
                <p>0 Comments • 0 hours ago from Ipsum loren, Sweden, usepanda.com || panda network</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script src="./stories.component.js"></script>

<style>
  .story-header
  {
    background: #fff;
  }

  .stories-lines
  {
    background: #eceef1;
    border: 1px #636c72;
  }
  .story-header ul
  {
    margin: 0;
  }
  .story-header ul li p
  {
    color: #4b5257;
    margin-bottom: 0;
  }

  .story-header ul li a
  {
    margin:5px 40px 0 0;
  }

  .story-header i
  {
    font-size: 12px;
    margin-left: 3px;
    opacity: 0.5;
    color: #636C71;
  }

  .active-filter
  {
    font-weight: 500;
    color: #2d72d9 !important;
  }
</style>
