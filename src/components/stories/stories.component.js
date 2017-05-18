import {MOCK_STORIES} from "./../../Mock_Data/MOCK_STORIES";

export default {
  name: 'body',
  props: [],
  mounted() {

  },
  data() {
    return {
      navFilters: [
        {name: 'Top', arrow: 'fa fa-caret-down', active: 'active-filter'},
        {name: 'Recent'},
        {name: 'Starred'},
        {name: 'Badges', arrow: 'fa fa-caret-down'}
      ],
      stories: MOCK_STORIES
    }
  },
  methods: {

  },
  computed: {

  }
}
