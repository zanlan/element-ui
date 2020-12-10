<template>
  <div class="box">
    <el-divider>只使用颜色</el-divider>
    <el-link :underline='false' style="cursor:auto;"></el-link>
    <!-- --------------------------------------------------------------------- -->
    <el-divider>基础用法</el-divider>
    <el-row>
      <el-link href="https://element.eleme.io" target="_blank"
        >默认链接</el-link
      >
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </el-row>

    <!-- --------------------------------------------------------------------- -->
    <el-divider>禁用状态</el-divider>
    <el-row>
      <el-link disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
      <el-link type="info" disabled>信息链接</el-link>
    </el-row>

    <!-- --------------------------------------------------------------------- -->
    <el-divider>下划线</el-divider>
    <el-row>
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线</el-link>
    </el-row>

    <!-- --------------------------------------------------------------------- -->
    <el-divider>图标</el-divider>
    <el-row>
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>查看<i class="el-icon-view el-icon--right"></i> </el-link>
    </el-row>

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
            "type",
            "类型",
            "string",
            "primary / success / warning / danger / info",
            "default",
          ],
          ["underline", "是否下划线", "boolean", "—", "true"],
          ["disabled", "是否禁用状态", "boolean", "—", "false"],
          ["href", "原生 href 属性", "string", "—", "-"],
          ["icon", "图标类名", "string", "—", "-"],
        ],
      },
    };
  },
};
</script>

<style lang='scss' scoped>
.box {
  text-align: center;
  a {
    font-size: 30px;
    padding-left: 20px;
  }
}
</style>
