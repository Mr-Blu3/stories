<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
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
              <td id="story-logo"><img v-if="story.logo" class="circleBase" :src="story.logo" /></td>

              <td class="text-primary text-center">
                <strong>
                  <i class="fa ml-1 fa-caret-up align-bottom"></i>
                  <p class="ml-1 align-top m-0">{{ ++key }}</p>
                </strong>
              </td>

              <td>
                <h6 class="align-middle m-2">{{story.headline}} <small>(thestocks.im)</small></h6>
                <p class="colorGrey m-2 align-block pointer" v-on:click="showComments(story)" style="font-size: 11px;"><u>0 Comments</u> &nbsp; • &nbsp; 0 hours ago from Ipsum loren, Sweden, usepanda.com || panda network</p>
                <div v-bind:class="{slidedown: story.showComments, sliderUp: !story.showComments}">
                  <div v-if="story.showComments">
                    <ul>
                      <li v-if="story.iComment" v-for="comment in story.iComment">
                        {{comment.name}}
                        {{comment.country}}
                        {{comment.website}}
                        {{comment.network}}
                      </li>
                    </ul>
                    <input @keyup.enter="addComment(story)" class="form-control" type="text" v-model="commentStore.name">
                    <input @keyup.enter="addComment(story)" class="form-control" type="text" v-model="commentStore.country">
                    <input @keyup.enter="addComment(story)" class="form-control" type="text" v-model="commentStore.website">
                    <input @keyup.enter="addComment(story)" class="form-control" type="text" v-model="commentStore.net">

                    <button class="pointer btn btn-primary" @click="addComment(story)">Add Comment</button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script src="./stories.component.js"></script>

<style src="./stories.component.css"></style>
