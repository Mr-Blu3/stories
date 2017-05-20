export default  {
  name: 'chats-rows',
  props: ['peoples'],
  mounted() {},

  data() {
    return {
      texts: [],
      message: '',
      seenMsg: [],
      seenMsgBool: false,
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

      this.texts.push({name: pers.name, textUser: msg, pers: pers});

      setTimeout((msg) => {
        let comp = (msg.toUpperCase() === 'hey chris!'.toUpperCase()) ? "I'm Thor!" : 'Ipsum loren absolum';
        if(pers.activety === 'busy') comp = "Sorry I'm busy!";
        if(this.seenMsgBool) this.checkMissed(this.seenMsg.some(data => data.name === pers), pers, comp);

        this.texts.push({name: pers.name, logo: pers.logo, textComp: comp});
        this.updated();
      }, 2000, msg);

      this.updated();
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
    },
    updated: function() {
      var el = document.getElementById("scr");
      el.scrollTop = el.scrollHeight - el.getBoundingClientRect().height + 202;
    }
  },
  computed: {

  }
}

