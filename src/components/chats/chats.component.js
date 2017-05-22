import SortRows from './sort-rows/index.vue';
import ChattBoxes from './chatt-boxes/index.vue';
import {MOCK_CHATT} from "./../../Mock_Data/MOCK_CHATT";

export default  {
  name: 'body-chats',
  props: [],
  components: {'sort-rows': SortRows, 'chat-boxes': ChattBoxes},
  mounted() {},
  data() {
    return {
      peoples: this.sort(MOCK_CHATT),
      activePeople: [],
      recentChat: [],
      missMsgs: [],
      focusPerson: {},
      keySortRows: 0,
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
        if(data === person) return checkBool = false;
      });

      if(checkBool) this.activePeople.unshift(person);
    },

    hideBodyBox: function(person) {
      this.activePeople = this.activePeople.map(data => {
        if(data == person) data = person;
        return data;
      });
    },

    missMsgCount: function (missMsg) {
      this.missMsgs = missMsg;
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

    resetMsgs(person) {
      this.missMsgs = this.missMsgs.filter(data => {
        return data.name !== person
      });
    },
    autoFocus(person)
    {
      this.focusPerson = person;
    },
    key(key) {
      this.keySortRows = key;
    }
  },
  computed: {}
}

