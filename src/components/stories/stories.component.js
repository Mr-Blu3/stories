import {MOCK_STORIES} from "./../../Mock_Data/MOCK_STORIES";

export default {
  name: 'stories',
  props: [],
  mounted() {

  },
  data() {
    return {
      navFilters: [
        {name: 'Top', arrow: 'fa fa-caret-down', active: 'active-filter'},
        {name: 'Recent'},
        {name: 'Starred'},
        {name: 'Badges', arrow: 'fa fa-caret-down'}
      ],
      stories: MOCK_STORIES,
      commentStore: {name: '', country: '', website: '', net: ''}
    }
  },
  methods: {
    showComments: function(story) {
      this.stories = this.stories.map(data => {
        if(data === story) data.showComments = !data.showComments ? true: false;
        return data;
      });
    },
    addComment(story) {
      /* ToDO: Make a get request to http://ipinfo.io to retive locations
      * $.get("http://ipinfo.io", function (response) {
       $("#ip").html("IP: " + response.ip);
       $("#address").html("Location: " + response.city + ", " + response.region);
       $("#details").html(JSON.stringify(response, null, 4));
       }, "jsonp");
      * */
      /*this.$http.get('http://jsonplaceholder.typicode.com/users', function(data, status, request){
        if(status == 200)
        {
          console.log(data)
        }
      });*/
      this.stories = this.stories.map(data => {
        if(data === story) {
          if(!data.iComment) {
            data.iComment = [{
              name: this.commentStore.name,
              country: this.commentStore.country,
              website: this.commentStore.website,
              network: this.commentStore.net
            }];
          } else {
            data.iComment.unshift({
              name: this.commentStore.name,
              country: this.commentStore.country,
              website: this.commentStore.website,
              network: this.commentStore.net
            });

          }
        }

        return data;
      });
      for(let i in this.commentStore) {
        this.commentStore[i] = ''
      }
    }
  }, computed: {}
}
