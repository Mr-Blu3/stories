export default  {
  name: 'chats-rows',
  props: ['peoples'],
  mounted() {},

  data() {
    return {
      texts: [],
      message: '',
      seenMsgBool: false,
      seenMsg: [],
      hideChatBox: {},
      key: ''
    }
  },
  methods: {
    hideBox: function(people) {
      people.hideChatBox = people.hideChatBox ? false : true;
      this.$emit('hideBodyBox', people)
    },
    remove: function(people) {
      this.seenMsg = this.seenMsg.filter(data => data.name != people);
      this.$emit('removePeople', people)
    },

    msg: function(e_msg, pers) {
      let msg = e_msg.value;
      this.texts.push({textUser: msg, pers: pers});

      setTimeout((msg) => {
        let comp = (msg.toUpperCase() === 'hey chris!'.toUpperCase()) ? "I'm Thor!" : 'Ipsum loren absolum';

        if(pers.activety === 'busy') comp = "Sorry I'm busy!";
        if(this.seenMsgBool) this.checkMissed(this.seenMsg.some(data => data.name === pers), pers, comp);

        this.texts.push({pers: pers, logo: pers.logo, textComp: comp});

      }, 2000, msg);

      e_msg.value = '';
    },

    resetCompMsg: function(pers, key) {
      if(this.key === key) {
        this.seenMsgBool = false;
        this.seenMsg = this.seenMsg.filter(data => data.name != pers);
        this.$emit('missMsg', this.seenMsg);
      }
    },

    stopFocus: function(e, key) {
      this.key = key;
      this.seenMsgBool = true;
    },

    checkMissed: function(checkMsg, pers, comp) {
      if(!checkMsg) this.seenMsg.push({name: pers, missed: []});

      this.seenMsg.forEach(data => {
        if(data.name == pers) {
          data.missed.push(comp);
        }
      });
      this.$emit('missMsg', this.seenMsg)
    }
  },
  computed: {}
}

