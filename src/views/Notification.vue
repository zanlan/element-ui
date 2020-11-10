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
        title: "Options",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["title", "标题", "string", "—", "—"],
          ["message", "说明文字", "string/Vue.VNode", "—", "—"],
          [
            "dangerouslyUseHTMLString",
            "是否将 message 属性作为 HTML 片段处理",
            "boolean",
            "—",
            "false",
          ],
          [
            "type",
            "主题样式，如果不在可选值内将被忽略",
            "string",
            "success/warning/info/error",
            "—",
          ],
          [
            "iconClass",
            "自定义图标的类名。若设置了 type，则 iconClass 会被覆盖",
            "string",
            "—",
            "—",
          ],
          ["customClass", "自定义类名", "string", "—", "—"],
          [
            "duration",
            "显示时间, 毫秒。设为 0 则不会自动关闭",
            "number",
            "—",
            "4500",
          ],
          [
            "position",
            "自定义弹出位置",
            "string",
            "top-right/top-left/bottom-right/bottom-left",
            "top-right",
          ],
          ["showClose", "是否显示关闭按钮", "boolean", "—", "true"],
          ["onClose", "关闭时的回调函数", "function", "—", "—"],
          ["onClick", "点击 Notification 时的回调函数", "function", "—", "—"],
          [
            "offset",
            "偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量",
            "number",
            "—",
            "0",
          ],
        ],
      },
      datas2: {
        title: "方法",
        stitle:
          "调用 Notification 或 this.$notify 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 close 方法。",
        head: ["方法名", "说明"],
        body: [["close", "关闭当前的 Notification"]],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


