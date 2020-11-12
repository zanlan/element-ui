<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <el-divider>简单卡片</el-divider>
    <el-divider>带图片</el-divider>
    <el-divider>卡片阴影</el-divider>
    <zl-table :datas="datas1" key="1"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "header",
            "设置 header，也可以通过 slot#header 传入 DOM",
            "string",
            "—",
            "—",
          ],
          [
            "body-style",
            "设置 body 的样式",
            "object",
            "—",
            "{ padding: '20px' }",
          ],
          [
            "shadow",
            "设置阴影显示时机",
            "string",
            "always / hover / never",
            "always",
          ],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


