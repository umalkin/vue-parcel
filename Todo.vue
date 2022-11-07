<template>
  <div id="todos">
    <div class="todo" :id="todo.id" v-for="(todo, index) in todos">
      <h3>{{ todo.todo }}</h3>

      <div class="buttons">
        <button
          :id="todo.id"
          class="btn-delete"
          @click="getTodoToDelete(todo.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todos"],
  methods: {
    getTodoToDelete(key) {
      console.log(key);
      this.$emit("delete-todo", key);
    },
  },
};
</script>

<style scoped>
.todo {
  display: flex;
  justify-content: space-between;
  margin: 10px 10%;
  padding: 10px;
  background-color: lightblue;
  border: 1.8px solid black;
  border-radius: 5px;
}

.buttons {
  padding-top: 15px;
}

.btn-delete {
  color: white;
  background-color: red;
  border: 1px solid red;
  border-radius: 2px;
  padding: 5px;
  cursor: pointer;
}

.btn-delete:active {
  color: red;
  background-color: white;
  border: 1px solid white;
}
</style>
