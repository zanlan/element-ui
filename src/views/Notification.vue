<template>
  <div class="box">
    <el-divider>基本用法</el-divider>
    <el-button plain @click="open1"> 可自动关闭 </el-button>
    <el-button plain @click="open2"> 不会自动关闭 </el-button>
    <el-divider>带有倾向性</el-divider>
    <el-button plain @click="open3"> 成功 </el-button>
    <el-button plain @click="open4"> 警告 </el-button>
    <el-button plain @click="open5"> 消息 </el-button>
    <el-button plain @click="open6"> 错误 </el-button>
    <el-divider>自定义弹出位置</el-divider>
    <el-button plain @click="open7"> 右上角 </el-button>
    <el-button plain @click="open8"> 右下角 </el-button>
    <el-button plain @click="open9"> 左下角 </el-button>
    <el-button plain @click="open10"> 左上角 </el-button>
    <el-divider>带有偏移</el-divider>
    <el-button plain @click="open11"> 偏移的消息 </el-button>
    <el-divider>使用 HTML 片段</el-divider>
    <el-button plain @click="open12"> 使用 HTML 片段 </el-button>
    <el-divider>隐藏关闭按钮</el-divider>
    <el-button plain @click="open13"> 隐藏关闭按钮 </el-button>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      const h = this.$createElement;
      this.$notify({
        title: "标题名称",
        message: h(
          "i",
          { style: "color: teal" },
          "这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案"
        ),
      });
    },

    open2() {
      this.$notify({
        title: "提示",
        message: "这是一条不会自动关闭的消息",
        duration: 0,
      });
    },
    open3() {
      this.$notify({
        title: "成功",
        message: "这是一条成功的提示消息",
        type: "success",
      });
    },

    open4() {
      this.$notify({
        title: "警告",
        message: "这是一条警告的提示消息",
        type: "warning",
      });
    },

    open5() {
      this.$notify.info({
        title: "消息",
        message: "这是一条消息的提示消息",
      });
    },

    open6() {
      this.$notify.error({
        title: "错误",
        message: "这是一条错误的提示消息",
      });
    },
    open7() {
      this.$notify({
        title: "自定义位置",
        message: "右上角弹出的消息",
      });
    },

    open8() {
      this.$notify({
        title: "自定义位置",
        message: "右下角弹出的消息",
        position: "bottom-right",
      });
    },

    open9() {
      this.$notify({
        title: "自定义位置",
        message: "左下角弹出的消息",
        position: "bottom-left",
      });
    },

    open10() {
      this.$notify({
        title: "自定义位置",
        message: "左上角弹出的消息",
        position: "top-left",
      });
    },
    open11() {
      this.$notify({
        title: "偏移",
        message: "这是一条带有偏移的提示消息",
        offset: 100,
      });
    },
    open12() {
      this.$notify({
        title: "HTML 片段",
        dangerouslyUseHTMLString: true,
        message: "<strong>这是 <i>HTML</i> 片段</strong>",
      });
    },
    open13() {
      this.$notify.success({
        title: "Info",
        message: "这是一条没有关闭按钮的消息",
        showClose: false,
      });
    },
  },
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


