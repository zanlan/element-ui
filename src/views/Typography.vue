<template>
  <div class="about">
    <el-image :src="src1"></el-image>
    <el-image :src="src2"></el-image>
    <el-image :src="src3"></el-image>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src1: require("@/assets/5.png"),
      src2: require("@/assets/6.png"),
      src3: require("@/assets/7.png"),
    };
  },
};
</script>

<style>
</style>