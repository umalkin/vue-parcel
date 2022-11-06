<template>
  <div id="todos">
    <div class="todo" :id="todo.id" v-for="todo in todos">
      <h3>{{ todo.todo }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: ["todos"],
};
</script>

<style scoped>
.todo {
  margin: 10px 10%;
  padding: 10px;
  background-color: lightblue;
  border: 1.8px solid black;
  border-radius: 5px;
}
</style>
