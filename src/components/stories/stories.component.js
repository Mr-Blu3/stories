import {MOCK_STORIES} from "./../../Mock_Data/MOCK_STORIES";
import ChatComponent from "./chats/index.vue";

export default {
  name: 'body',
  props: [],
  components: {ChatComponent: 'chat-component', ChatComponent},
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
