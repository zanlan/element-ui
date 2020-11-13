<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <el-popconfirm title="这是一段内容确定删除吗？">
      <el-button slot="reference">删除</el-button>
    </el-popconfirm>

    <el-divider>自定义</el-divider>
    <el-popconfirm
      confirm-button-text="好的"
      cancel-button-text="不用了"
      icon="el-icon-info"
      icon-color="red"
      title="这是一段内容确定删除吗？"
    >
      <el-button slot="reference">删除</el-button>
    </el-popconfirm>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
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
          ["title", "标题", "String", "—", "—"],
          ["confirm-button-text", "确认按钮文字", "String", "—", "—"],
          ["cancel-button-text", "取消按钮文字", "String", "—", "—"],
          ["confirm-button-type", "确认按钮类型", "String", "—", "Primary"],
          ["cancel-button-type", "取消按钮类型", "String", "—", "Text"],
          ["icon", "Icon", "String", "—", "el-icon-question"],
          ["icon-color", "Icon 颜色", "String", "—", "#f90"],
          ["hide-icon", "是否隐藏 Icon", "Boolean", "—", "false"],
        ],
      },
      datas2: {
        title: "Slot",
        head: ["参数", "说明"],
        body: [["reference", "触发 Popconfirm 显示的 HTML 元素"]],
      },
      datas3: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["confirm", "点击确认按钮时触发", "—"],
          ["cancel", "点击取消按钮时触发", "—"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


