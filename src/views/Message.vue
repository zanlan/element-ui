<template>
  <div class="box">
    <el-divider>基础用法</el-divider>

    <el-button :plain="true" @click="open">打开消息提示</el-button>
    <el-button :plain="true" @click="openVn">VNode</el-button>

    <el-divider>不同状态</el-divider>
    <el-button :plain="true" @click="open2">成功</el-button>
    <el-button :plain="true" @click="open3">警告</el-button>
    <el-button :plain="true" @click="open1">消息</el-button>
    <el-button :plain="true" @click="open4">错误</el-button>

    <el-divider>可以关闭</el-divider>
    <el-button :plain="true" @click="open5">消息</el-button>
    <el-button :plain="true" @click="open6">成功</el-button>
    <el-button :plain="true" @click="open7">警告</el-button>
    <el-button :plain="true" @click="open8">错误</el-button>

    <el-divider>文字居中</el-divider>
    <el-button :plain="true" @click="openCenter">文字居中</el-button>

    <el-divider>使用HTML片段</el-divider>
    <el-button :plain="true" @click="openHTML">使用 HTML 片段</el-button>

    <el-divider>配置</el-divider>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$message("这是一条消息提示");
    },
    open2() {
      this.$message({
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },

    open3() {
      this.$message({
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },

    open4() {
      this.$message.error("错了哦，这是一条错误消息");
    },
    open5() {
      this.$message({
        showClose: true,
        message: "这是一条消息提示",
      });
    },

    open6() {
      this.$message({
        showClose: true,
        message: "恭喜你，这是一条成功消息",
        type: "success",
      });
    },

    open7() {
      this.$message({
        showClose: true,
        message: "警告哦，这是一条警告消息",
        type: "warning",
      });
    },

    open8() {
      this.$message({
        showClose: true,
        message: "错了哦，这是一条错误消息",
        type: "error",
      });
    },
    openCenter() {
      this.$message({
        message: "居中的文字",
        center: true,
      });
    },
    openHTML() {
      this.$message({
        dangerouslyUseHTMLString: true,
        message: "<strong>这是 <i>HTML</i> 片段</strong>",
      });
    },
    open() {
      this.$message("这是一条消息提示");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
      });
    },
  },
  data() {
    return {
      datas1: {
        title: "Options",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["message", "消息文字", "string / VNode", "—", "—"],
          ["type", "主题", "string", "success/warning/info/error", "info"],
          ["iconClass", "自定义图标的类名，会覆盖 type", "string", "—", "—"],
          [
            "dangerouslyUseHTMLString",
            "是否将 message 属性作为 HTML 片段处理",
            "boolean",
            "—",
            "false",
          ],
          ["customClass", "自定义类名", "string", "—", "—"],
          [
            "duration",
            "显示时间, 毫秒。设为 0 则不会自动关闭",
            "number",
            "—",
            "3000",
          ],
          ["showClose", "是否显示关闭按钮", "boolean", "—", "false"],
          ["center", "文字是否居中", "boolean", "—", "false"],
          [
            "onClose",
            "关闭时的回调函数, 参数为被关闭的 message 实例",
            "function",
            "—",
            "—",
          ],
          ["offset", "Message 距离窗口顶部的偏移量", "number", "—", "20"],
        ],
      },
      datas2: {
        title: "方法",
        stitle:
          "调用 Message 或 this.$message 会返回当前 Message 的实例。如果需要手动关闭实例，可以调用它的 close 方法。",
        head: ["方法名", "说明"],
        body: [["close", "关闭当前的 Message"]],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  text-align: center;
}
</style>


