export default  {
  name: 'chats-rows',
  props: ['peoples'],
  mounted() {},

  data() {
    return {
      texts: [{}],
      message: '',
      seenMsg: [{name: '', missed: []}],
      seenMsgBool: false,
      hideChatBox: {}
    }
  },
  methods: {
    hideBox: function(people) {
      people.hideChatBox = people.hideChatBox ? false : true;
      this.$emit('hideBodyBox', people)
    },
    remove: function(people) {
      this.$emit('removePeople', people)
    },

    msg: function(e_msg, pers) {
      let msg = e_msg.value;
      this.texts.push({name: pers,text: msg});

      setTimeout((msg) => {
        let comp = (msg.toUpperCase() === 'hey chris!'.toUpperCase()) ? "I'm Thor!" : 'Ipsum loren absolum';

        if(this.seenMsgBool) {
          let checkMsg = this.seenMsg.some(data => {
            return data.name === pers
          });

          if(!checkMsg) this.seenMsg.push({name: pers, missed: []});

          this.seenMsg.forEach(data => {
            if(data.name == pers) {
              data.missed.push(comp);
            }
          });

          this.$emit('missMsg', this.seenMsg)
        }

        this.texts.push({name: pers, text: comp});
      }, 2000, msg);

      e_msg.value = '';
    },

    resetCompMsg: function(name) {
      this.seenMsgBool = false;
      this.seenMsg = this.seenMsg.filter(data => data.name != name);
      this.$emit('missMsg', this.seenMsg);
    },

    stopFocus: function() {
      this.seenMsgBool = true;
    }
  },
  computed: {

  }
}

