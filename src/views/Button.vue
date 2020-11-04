<template>
  <div class="box">
    <!-- --------------------------------------------------------------------- -->
    <el-divider>基础用法</el-divider>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <!-- --------------------------------------------------------------------- -->
    <el-divider>禁用状态</el-divider>
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>

    <el-row>
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
    </el-row>

    <!-- --------------------------------------------------------------------- -->
    <el-divider>文字按钮</el-divider>
    <el-button type="text">文字按钮</el-button>
    <el-button type="text" disabled>文字按钮</el-button>
    <el-divider>图标按钮</el-divider>
    <el-button type="primary" icon="el-icon-edit"></el-button>
    <el-button type="primary" icon="el-icon-share"></el-button>
    <el-button type="primary" icon="el-icon-delete"></el-button>
    <el-button type="primary" icon="el-icon-search">搜索</el-button>
    <el-button type="primary"
      >上传
      <i class="el-icon-upload el-icon--right"></i>
    </el-button>
    <!-- --------------------------------------------------------------------- -->
    <el-divider>按钮组</el-divider>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary"
        >下一页<i class="el-icon-arrow-right el-icon--right"></i
      ></el-button>
    </el-button-group>
    <el-button-group>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
    </el-button-group>
    <!-- --------------------------------------------------------------------- -->
    <el-divider>加载中</el-divider>
    <el-button type="primary" :loading="true">加载中</el-button>
    <!-- --------------------------------------------------------------------- -->
    <el-divider>不同尺寸</el-divider>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button size="medium">中等按钮</el-button>
      <el-button size="small">小型按钮</el-button>
      <el-button size="mini">超小按钮</el-button>
    </el-row>
    <el-row>
      <el-button round>默认按钮</el-button>
      <el-button size="medium" round>中等按钮</el-button>
      <el-button size="small" round>小型按钮</el-button>
      <el-button size="mini" round>超小按钮</el-button>
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
          ["size", "尺寸", "string", "medium / small / mini", "—"],
          [
            "type",
            "类型",
            "string",
            "primary / success / warning / danger / info / text",
            "—",
          ],
          ["plain", "是否朴素按钮", "boolean", "—", "false"],
          ["round", "是否圆角按钮", "boolean", "—", "false"],
          ["circle", "是否圆形按钮", "boolean", "—", "false"],
          ["loading", "是否加载中状态", "boolean", "—", "false"],
          ["disabled", "是否禁用状态", "boolean", "—", "false"],
          ["icon", "图标类名", "string", "—", "—"],
          ["autofocus", "是否默认聚焦", "boolean", "—", "false"],
          [
            "native-type",
            "原生 type 属性",
            "string",
            "button / submit / reset",
            "button",
          ],
        ],
      },
    };
  },
};
</script>

<style>
.box {
  text-align: center;
}
.el-row {
  margin-bottom: 20px;
}
</style>
