import SortRows from './sort-rows/index.vue';
import ChatsRows from './chat-boxs/index.vue';
import {MOCK_CHATT} from "./../../Mock_Data/MOCK_CHATT";

export default  {
  name: 'body-chats',
  props: [],
  components: {'sort-rows': SortRows, 'chats-rows': ChatsRows},
  mounted() {

  },
  data() {
    return {
      peoples: this.sort(MOCK_CHATT),
      activePeople: [],
      recentChat: [],
      missMsg: []
    };
  },
  methods: {
    sort: data => {

      let online = data.map(data => {
        if(data.activety != 'offline') {return data;}
      });

      let r_online = online.filter(data => data !== undefined);

      return r_online;
    },

    addSingleChat: function(person) {
      person['hideChatBox'] = true;
      if(this.activePeople === []) this.activePeople.unshift(person);

      let checkBool = true;

      this.activePeople.forEach(data => {
        if(data == person) return checkBool = false;
      });

      if(checkBool) this.activePeople.unshift(person);
    },

    hideBodyBox: function(person) {
      console.log(person)
      this.activePeople = this.activePeople.map(data => {
        if(data == person) data = person;
        return data;
      });
    },

    missMsgCount: function (missMsg) {
      this.missMsg = missMsg
    },

    removePeople: function(person) {
      this.activePeople = this.activePeople.filter(data => data !== person);

      if(this.recentChat === []) this.recentChat.unshift(person);

      let checkBool = true;

      this.recentChat.forEach(data => {
        if(data == person) return checkBool = false;
      });

      if(checkBool) this.recentChat.unshift(person);
    },
  },
  computed: {}
}

