import {MOCK_STORIES} from "./../../Mock_Data/MOCK_STORIES";

export default {
  name: 'stories',
  props: [],
  mounted() {},
  data() {
    return {
      navFilters: [
        {name: 'Top', arrow: 'fa fa-caret-down', active: 'active-filter'},
        {name: 'Recent'},
        {name: 'Starred'},
        {name: 'Badges', arrow: 'fa fa-caret-down'}
      ],
      stories: MOCK_STORIES,
      commentStore: {},
      infoSender: {}
    }
  },
  beforeUpdate() {
    this.$http.get("http://ipinfo.io").then(data => this.infoSender = {country: data.data.country, org: data.data.org });
  },
  methods: {
    showComments: function(story) {
      this.stories = this.stories.map(data => {
        if(data === story) data.showComments = !data.showComments ? true: false;
        return data;
      });
    },
    addComment(story) {
      this.stories = this.stories.map(data => {
        if(data === story) {
          if(!data.iComment) {
            data.iComment = [this.triggComment()];
          } else {
            data.iComment.unshift(this.triggComment());
          }
        }

        return data;
      });

      for(let i in this.commentStore) {
        this.commentStore[i] = ''
      }
    },
    triggComment() {

      let date = ('0' + new Date().getDate()).slice(-2);
      let month = ('0' + (new Date().getMonth() + 1)).slice(-2);
      let year = new Date().getFullYear();


      console.log(this.infoSender)

      return {
        name: this.commentStore.name,
        comment: this.commentStore.comment,
        website: this.commentStore.website,
        date: year +' '+ month +' '+ date,
        country: this.infoSender.country,
        org: this.infoSender.org
      };
    },
  },
  computed: {}
}
