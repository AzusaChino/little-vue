<template>
  <li class="item">
    <label>
      <input type="checkbox" v-model="checked" />
    </label>
    <slot name="item" v-bind="{ checked }"></slot>
  </li>
</template>

<script>
export default {
  name: "index",
  props: ["item"],
  data() {
    return {
      checked: false
    };
  }
};
</script>

<style scoped>
.item {
  color: red;
}
</style>
