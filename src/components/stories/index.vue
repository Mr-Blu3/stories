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
        <table class="table bg-white">
          <tbody>
            <tr v-for="story, key in stories">

              <td id="story-logo">
                <img v-if="story.logo" class="circleBase" :src="story.logo" />
              </td>

              <td class="text-primary text-center">
                <strong>
                  <i class="fa ml-1 fa-caret-up align-bottom"></i>
                  <p class="ml-1 align-top m-0">{{ ++key }}</p>
                </strong>
              </td>

              <td>
                <h6 class="align-middle m-2">{{story.headline}} <small>(thestocks.im)</small></h6>
                <p class="colorGrey m-2" style="font-size: 11px;">
                  <u>0 Comments</u> &nbsp; • &nbsp; 0 hours ago from Ipsum loren, Sweden, usepanda.com || panda network
                </p>
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

  .bg-grey
  {
    background: #f8f8f8;
  }

  .colorGrey {
    color: #4b5257;
  }

  #story-logo {

  }

  #story-logo img {
    position: absolute;
    margin-left: -38px;
    margin-top: -21px;
    width: 55px;
    height: 55px;
  }

  .stories-lines
  {
    background: #eceef1;
    border: 1px #636c72;
  }

  .stories-lines table {
    max-width: 1200px;
  }

  .stories-lines td {
    vertical-align: middle;
    white-space: pre-line;
    word-wrap: break-word;
    max-width: 1100px;
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

  .rounded-0
  {
    border-radius: 0 !important;
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
