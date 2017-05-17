export default  {
  name: 'chats-rows',
  props: ['peoples'],
  mounted() {

  },
  data() {
    return {
      texts: [{}],
      message: '',
      seenMsg: [{}],
      seenBool: false
    }
  },
  methods: {
    msg: function(e_msg, pers) {
      let msg = e_msg.value;
      this.texts.push({name: pers,text: msg});

      setTimeout((msg) => {
        let comp = (msg.toUpperCase() === 'hey chris!'.toUpperCase()) ? "I'm Thor!" : 'Ipsum loren absolum';

        if(this.seenBool) {
          this.seenMsg.push({name: pers, missed: comp});
          this.$emit('missMsg', this.seenMsg)
        }

        this.texts.push({name: pers, text: comp});
      }, 2000, msg);

      e_msg.value = '';
    },
    resetCompMsg: function() {
      this.seenBool = false;
      this.seenMsg = [];
      this.$emit('missMsg', this.seenMsg);
    },

    stopFocus: function() {
      this.seenBool = true;
    }
  },
  computed: {

  }
}

