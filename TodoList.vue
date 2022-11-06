<template>
  <div id="board">
    <h1>TodoList</h1>
    <input-todo @add-new-todo="addNewTodo($event)" />
    <todo :todos="todos" />
  </div>
</template>

<script>
import InputTodo from "./InputTodo.vue";
import Todo from "./Todo.vue";

export default {
  name: "Listahan",
  components: {
    "input-todo": InputTodo,
    "todo" : Todo,
  },
  data() {
    return {
      todos: [
        { id: 1, todo: "eat" },
        { id: 2, todo: "drink" },
        { id: 3, todo: "sleep" },
        { id: 4, todo: "read" },
      ],
      newTodo: "",
    };
  },
  methods: {
    addNewTodo(val) {
      this.todos.push({ id: this.todos.length + 1, todo: val });
    },
  },
};
</script>

<style scoped>
#board {
  margin: 0% 10%;
  padding: 20px;
  text-align: center;
  background-color: lightgreen;
  border-radius: 7px;
}
</style>
