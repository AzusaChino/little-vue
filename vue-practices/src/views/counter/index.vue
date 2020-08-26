<template>
  <div>
    <el-tag type="success">count: {{ count }}</el-tag>
    <el-button id="plusCount" type="primary" @click="handleClick"
      >count++</el-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    handleClick() {
      this.count++;
      this.$emit("change", this.count);
    }
  }
};
</script>
