<template>
  <div>
    <div id="todos">
      <div :id="todo.id" v-for="todo in todos">
        <div
          class="todo"
          :class="[todo.updating == true ? hideEdit : showEdit]"
        >
          <p>{{ todo.todo }}</p>

          <div class="buttons">
            <update-todo :id="todo.id" @click="passTodoToUpdate(todo.id)" />
            <button
              :id="todo.id"
              class="btn-delete"
              @click="getTodoToDelete(todo.id)"
            >
              Delete
            </button>
          </div>
        </div>
        <div :class="[todo.updating == false ? hideEdit : showEdit]">
          <div class="update-input">
            <div>
              <input type="text" id="update-box" v-model="todo.todo" />
            </div>
            <div>
              <button class="btn-save" @click="getIdTodoToSave(todo.id, todo.todo)">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateTodo from "./UpdateTodo.vue";

export default {
  name: "Todo",
  components: {
    "update-todo": UpdateTodo,
  },
  data() {
    return {
      showEdit: "edit-show",
      hideEdit: "edit-hide",
    };
  },
  props: ["todos"],
  methods: {
    getTodoToDelete(key) {
      console.log(key);
      this.$emit("delete-todo", key);
    },
    passTodoToUpdate(key) {
      console.log(key);
      this.$emit("edit-todo", key);
    },
    getIdTodoToSave(id, newVal) {
      this.$emit("update-todo", [id, newVal]);
    }
  },
};
</script>

<style scoped>
#todos {
  display: flex;
  flex-direction: column;
}

.todo {
  display: flex;
  justify-content: space-between;
  margin: 10px 10%;
  padding: 10px;
  background-color: lightblue;
  border: 1.8px solid black;
  border-radius: 5px;
}

p {
  font-size: 20px;
}

.buttons {
  display: flex;
  padding-top: 15px;
}

.btn-delete {
  color: white;
  background-color: red;
  border: 1px solid red;
  border-radius: 2px;
  padding: 5px;
  height: 28px;
  cursor: pointer;
  margin-left: 10px;
}

.btn-delete:active {
  color: red;
  background-color: white;
  border: 1px solid white;
}

.edit-show {
  visibility: visible;
}

.edit-hide {
  visibility: hidden;
  margin: -40px -10%;
  padding: -10px;
}

.update-input {
  display: flex;
  justify-content: space-between;
  margin: 10px 10%;
  padding: 26px;
  background-color: lightblue;
  border: 1.8px solid black;
  border-radius: 5px;
  overflow: hidden;
}

#update-box {
  background-color: lightblue;
  border: none;
  margin: 1px 0 1px -10%;
  font-size: 20px;
  border-bottom: 2px solid orange;
}

#update-box:focus {
  outline: none !important;
}

.btn-save {
  background-color: #00ff3c;
  border: 1px solid #00ff3c;
  border-radius: 2px;
  padding: 5px 12px;
  cursor: pointer;
}

.btn-save:active {
  color: green;
  background-color: white;
  border: 1px solid white;
}
</style>
