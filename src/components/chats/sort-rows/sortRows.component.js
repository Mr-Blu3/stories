export default  {
  name: 'sort-rows',
  props: ['header', 'peoples', 'missMsgs'],
  mounted() {},
  data() {
    return {
    }
  },
  methods: {
    peopleChatt: function(people) {
      this.$emit('peopleChatt', people);
    },
  },
  computed: {

  }
}

