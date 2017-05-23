<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div>
    <div class="story-header align-nav">
      <div class="container">
        <ul>
          <li v-for="navStore in navStores">
            <a @click="sortColumns(navStore); filterColumns(navStore)" class="pointer"><p :class="navStore.active"> {{ navStore.name }} <i :class="navStore.arrow"></i></p></a>
          </li>
        </ul>
      </div>
    </div>

    <section class="stories-lines pt-5 pb-5">
      <div class="container">
        <table class="table bg-white">
          <tbody>
            <tr v-for="story in stories">
              <td id="story-logo"><img v-if="story.logo" class="circleBase" :src="story.logo" /></td>

              <td class="text-primary text-center">
                <strong>
                  <i class="fa ml-1 fa-caret-up align-bottom"></i>
                  <p class="ml-1 align-top m-0">{{ story.key }}</p>
                </strong>
              </td>

              <td>
                <h6 class="align-middle m-2">{{story.headline}} <small>(Ipsum loren.tu)</small></h6>

                <div v-if="story.iComment && story.iComment.length > 0" class="colorGrey m-2 align-block pointer" v-on:click="showComments(story)" style="font-size: 11px;">
                    <u>Comments: {{story.iComment.length}}</u> &nbsp; • &nbsp;{{story.iComment[0].date}} From: {{story.iComment[0].name}}, {{story.iComment[0].country}}, {{story.iComment[0].website}} || {{ story.iComment[0].org }}
                </div>

                <p v-else class="colorGrey m-2 align-block pointer" v-on:click="showComments(story)" style="font-size: 11px;"><u>Be first to send a comment</u></p>

                <div v-bind:class="{slidedown: story.showComments, sliderUp: !story.showComments}">

                  <div v-if="story.showComments">
                    <table class="table table-striped">
                      <tbody v-if="story.iComment" v-for="comment in story.iComment">
                        <tr class="text-truncate">
                          <td class="align-top" style="width: 200px;"><label>Name:</label> {{comment.name}}</td>
                          <td class="align-top"><label class="mr-2">Website: {{comment.website}}</label> </td>
                          <td class="align-top"><label>Country: {{comment.country}}</label></td>
                          <td class="align-top"><label>Network: {{comment.org}}</label></td>
                          <td class="text-center pointer" @click="removeComment(comment, story)"><i class="fa fa-times" aria-hidden="true"></i></td>
                        </tr>
                        <tr><td colspan="4">Comment: {{comment.comment}}</td></tr>
                      </tbody>
                    </table>

                    <div v-if="story.iComment"><hr/></div>
                    <div class="mt-5 mb-5">
                      <label>Send a comment</label>
                      <input @keyup.enter="addComment(story)" placeholder="Name" class="form-control mb-2" type="text" v-model="commentStore.name">
                      <input @keyup.enter="addComment(story)" placeholder="Website" class="form-control mb-2" type="text" v-model="commentStore.website">
                      <textarea @keyup.enter="addComment(story)" :placeholder="'Send a comment To: ' + story.name" class="form-control mb-2" v-model="commentStore.comment"></textarea>
                      <button class="pointer btn btn-primary" @click="addComment(story)">Add Comment</button>
                    </div>
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
