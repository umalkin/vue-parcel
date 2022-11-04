<template>
  <div id="board">
    <h1>TodoList</h1>
    <div id="list" v-for="todo in todos">
      <h3 id="todo.id">{{ todo.todo }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listahan",
  data() {
    return {
      todos: [
        { id: 1, todo: "eat" },
        { id: 2, todo: "drink" },
        { id: 3, todo: "sleep" },
        { id: 4, todo: "read" },
      ],
    };
  },
};
</script>

<style scoped>
#board{
    margin: 0% 10%;
    padding: 20px;
    text-align: center;
    background-color: lightgreen;
    border-radius: 7px;
}

#list{
    margin: 5px 10%;
    padding: 10px;
    background-color: lightblue;
    border: 1.8px solid black;
    border-radius: 5px;
}
</style>
