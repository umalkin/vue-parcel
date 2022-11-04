import { createApp } from "vue";
import TodoList from './TodoList.vue'

var vm = createApp(
    TodoList
).mount("#main")