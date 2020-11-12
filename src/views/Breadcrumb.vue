<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <el-divider>图标分隔符</el-divider>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas1: {
        title: "Breadcrumb Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["separator", "分隔符", "string", "—", "斜杠'/'"],
          ["separator-class", "图标分隔符 class", "string", "—", "-"],
        ],
      },
      datas2: {
        title: "Breadcrumb Item Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "to",
            "路由跳转对象，同 vue-router 的 to",
            "string/object",
            "—",
            "—",
          ],
          [
            "replace",
            "在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录",
            "boolean",
            "—",
            "false",
          ],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


