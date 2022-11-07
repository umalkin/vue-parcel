<template>
  <div>
    <input type="text" placeholder="New Todo" @keyup.enter="getNewTodo" v-model="newTodo" />
    <input type="submit" value="Add" @click="getNewTodo" />
  </div>
</template>

<script>
export default {
  name: "InputTodo",
  data() {
    return {
      newTodo: "",
    };
  },
  methods: {
    getNewTodo(e) {
      if (this.newTodo !== "") {
        e.preventDefault();
        this.$emit("add-new-todo", this.newTodo);
        this.newTodo = "";
      } else {
        alert("You haven't typed a new task yet.");
      }
    },
  },
};
</script>

<style scoped>
div {
  margin-bottom: 20px;
}

input[type="text"] {
  margin: 0 10px;
  padding: 1.2%;
  border: 1px solid lightgreen;
  border-radius: 4px;
}

input[type="submit"] {
  padding: 5px 10px;
  border: 1px solid green;
  border-radius: 2px;
  background-color: lightgray;
  cursor: pointer;
  font-size: 14px;
}

input[type="submit"]:active {
  color: blue;
  background-color: lightblue;
  border-color: lightgray;
}
</style>
