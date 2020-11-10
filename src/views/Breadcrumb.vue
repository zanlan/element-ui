<template>
  <div class="box">
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


