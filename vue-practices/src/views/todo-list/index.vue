<template>
  <div>
    {{ msg }}
    <div>
      <label>
        <input type="text" v-model="info" />
      </label>
      <button @click="handleClick">添加</button>
    </div>
    <ul>
      <!-- :key => 为了优化diff算法 -->
      <todo-item v-for="item in list" :key="item">
        <template v-slot:item="itemProps">
          <span
            :style="{
              fontSize: '20px',
              color: itemProps.checked ? 'red' : 'blue'
            }"
            >{{ item }}</span
          >
        </template>
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "../../components/TodoItem";

export default {
  name: "TodoList",
  components: { TodoItem },
  data() {
    return {
      msg: "Hello Vue",
      info: "",
      list: []
    };
  },
  methods: {
    handleClick() {
      this.list.push(this.info);
      this.info = "";
    }
  }
};
</script>

<style scoped></style>
