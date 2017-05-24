export default  {
  name: 'chats-rows',
  props: ['peoples', 'focusPerson', 'keySortRow'],
  mounted() {},

  data() {
    return {
      texts: [], message: '', seenMsgBool: false, seenMsg: [], hideChatBox: {}, person: ''
    }
  },
  beforeUpdate()
  {
    this.peoples.forEach(data => {
      if(data === this.focusPerson) return this.$refs.text
    })
  },
  methods: {
    hideBox: function(people) {
      people.hideChatBox = people.hideChatBox ? false : true;
      this.resetCompMsg(people);
      this.$emit('hideBodyBox', people)
    },
    remove: function(people) {
      this.resetCompMsg(people);
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

      this.resetCompMsg(pers);
      e_msg.value = '';
    },

    resetCompMsg: function(people) {
      this.seenMsgBool = false;
      this.$emit('resetMsgs', people);
    },

    stopFocus: function(person) {
      this.person = person;
      this.seenMsgBool = true;
    },

    checkMissed: function(checkMsg, pers, comp) {
      if(!checkMsg) this.seenMsg.push({name: pers, missed: []});

      this.seenMsg.forEach(data => {
        if(data.name == pers) {
          data.missed.push(comp);
        }
      });
      console.log(this.seenMsg);
      this.$emit('missMsg', this.seenMsg)
    }
  },
  computed: {}
}
