<template>
  <div class="about">
    <el-image :src='src1'></el-image>
    <el-image :src='src2'></el-image>
  </div>
</template>

<script>
export default {
    data(){
      return{
        src1:require('@/assets/8.png'),
        src2:require('@/assets/9.png'),
      }
    }
}
</script>

<style>

</style>