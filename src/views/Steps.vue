<template>
  <div class="box">
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
        title: "Steps Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "space",
            "每个 step 的间距，不填写将自适应间距。支持百分比。",
            "number / string",
            "—",
            "—",
          ],
          [
            "direction",
            "显示方向",
            "string",
            "vertical/horizontal",
            "horizontal",
          ],
          ["active", "设置当前激活步骤", "number", "—", "0"],
          [
            "process-status",
            "设置当前步骤的状态",
            "string",
            "wait / process / finish / error / success",
            "process",
          ],
          [
            "finish-status",
            "设置结束步骤的状态",
            "string",
            "wait / process / finish / error / success",
            "finish",
          ],
          ["align-center", "进行居中对齐", "boolean", "-", "false"],
          ["simple", "是否应用简洁风格", "boolean", "-", "false"],
        ],
      },
      datas2: {
        title: "Step Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["title", "标题", "string", "—", "—"],
          ["description", "描述性文字", "string", "—", "—"],
          [
            "icon",
            "图标",
            "传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入",
            "string",
            "—",
          ],
          [
            "status",
            "设置当前步骤的状态，不设置则根据 steps 确定状态",
            "wait / process / finish / error / success",
            "-",
            "",
          ],
        ],
      },
      datas3: {
        title: "Step Slot",
        head: ["name", "说明"],
        body: [
          ["icon", "自定义图标"],
          ["title", "自定义标题"],
          ["description", "自定义描述性文字"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


