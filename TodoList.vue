<template>
  <div id="board">
    <h1>TodoList</h1>
    <input-todo @add-new-todo="addNewTodo($event)" />
    <div v-if="todos.length == 0">
      <h3>Add a new todo.</h3>
    </div>
    <div v-else="">
      <todo
        :todos="todos"
        @edit-todo="updateTodo($event)"
        @delete-todo="deleteTodo($event)"
        @update-todo="saveUpdateTodo($event)"
      />
    </div>
  </div>
</template>

<script>
import InputTodo from "./InputTodo.vue";
import Todo from "./Todo.vue";

export default {
  name: "Listahan",
  components: {
    "input-todo": InputTodo,
    todo: Todo,
  },
  data() {
    return {
      todos: [
        { id: 1, todo: "eat", updating: false },
        { id: 2, todo: "drink", updating: false },
        { id: 3, todo: "sleep", updating: false },
        { id: 4, todo: "read", updating: false },
      ],
    };
  },
  methods: {
    addNewTodo(val) {
      this.todos.push({
        id: this.todos.length + 1,
        todo: val,
        updating: false,
      });
    },
    deleteTodo(index) {
      let temp = [...this.todos];

      temp = temp.filter((todo) => {
        return todo.id != index;
      });

      this.todos = temp;
    },
    updateTodo(id) {
      let temp = [...this.todos];
      let index = temp.findIndex((obj) => obj.id == id);

      temp[index].updating = true;

      this.todos = temp;
    },
    saveUpdateTodo(arr){
      let temp = [...this.todos];
      let id = arr[0]
      let index = temp.findIndex((obj) => obj.id == id);

      temp[index].todo = arr[1]
      temp[index].updating = false;

      this.todos = temp;
    }
  },
};
</script>

<style scoped>
#board {
  text-align: center;
  margin: 0% 10%;
  padding: 40px;
  text-align: center;
  background-color: lightgreen;
  border-radius: 7px;
}
</style>
