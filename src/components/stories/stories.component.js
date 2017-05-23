import {MOCK_STORIES} from "./../../Mock_Data/MOCK_STORIES";

export default {
  name: 'stories',
  props: [],
  mounted() {},
  data() {
    return {
      navStores: [
        {name: 'Top', arrow: 'fa fa-caret-up', active: 'active-filter', sort: 'reverse'},
        {name: 'Alphabetic', sort: 'sort'},
        {name: 'Number', sort: 'number' },
        {name: 'Filter Data', filter: 'default'}
      ],
      stories: MOCK_STORIES,
      commentStore: {},
      infoSender: {},
      storeBool: false,
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
          !data.iComment ? data.iComment = [this.triggComment()] : data.iComment.unshift(this.triggComment());
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

      return {
        name: this.commentStore.name,
        comment: this.commentStore.comment,
        website: this.commentStore.website,
        date: year +' '+ month +' '+ date,
        country: this.infoSender.country,
        org: this.infoSender.org
      };
    },

    filterColumns(filter) {
      if (filter.filter && this.stories.length > 4) return this.stories = this.stories.filter(data => data.key > 10);
      this.stories = MOCK_STORIES;
      this.navStores.map(data => data.active = data === filter ? 'active-filter' : '');
    },

    sortColumns(sort)
    {
      this.storeBool = (!this.storeBool) ? true : false;
      if(sort.arrow) this.navStores[0].arrow = (this.storeBool) ? 'fa fa-caret-down' : 'fa fa-caret-up';
      this.navStores.map(data => data.active = data === sort ? 'active-filter' : '');

      /*
      * ToDo: Make Dynamic
      * */

      if(sort.sort === 'reverse') return this.stories.reverse();
      if(sort.sort === 'number') return this.stories.sort((a,b) => a.key-b.key)
      if(sort.sort === 'sort') {
        this.stories.sort((a, b) => {
          if (a.headline < b.headline) return -1;
          if (a.headline > b.headline) return 1;
          return 0;
        });
      }
    },

    removeComment(comment, story)
    {
      this.stories = this.stories.map(data => {
        if(!data.iComment) return data;
        data.iComment = data.iComment.filter(data => {return data !== comment});
        return data;
      });
      this.showComments(story);
    }

  },
  computed: {}
}
