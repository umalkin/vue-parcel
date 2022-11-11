<template>
  <div>
    <button class="btn-update" @click="getTodoToUpdate(id)">Update</button>
  </div>
</template>

<script>
export default {
  name: "UpdateTodo",
  props: ["id"],
  methods: {
    getTodoToUpdate(id) {
      console.log(id);
    },
  },
};
</script>

<style scoped>
.btn-update {
  background-color: #00ff3c;
  border: 1px solid #00ff3c;
  border-radius: 2px;
  padding: 5px;
  cursor: pointer;
}

.btn-update:active {
  color: green;
  background-color: white;
  border: 1px solid white;
}
</style>
