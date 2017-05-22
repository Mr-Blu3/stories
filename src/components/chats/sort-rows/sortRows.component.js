export default  {
  name: 'sort-rows',
  props: ['header', 'peoples', 'missMsgs'],
  mounted() {},
  data() {return {}},
  methods: {
    peopleChatt: function(people, key) {
      this.$emit('peopleChatt', people);
      this.$emit('resetMsgs', people);
      this.$emit('focus', people);
      this.$emit('keySort', key);
    }
  },
  computed: {}
}

