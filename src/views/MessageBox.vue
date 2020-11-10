<template>
  <div class="box">
    <el-divider>消息提示</el-divider>
    <el-button type="text" @click="open1">点击打开 Message Box</el-button>
    <el-divider>确认消息</el-divider>
    <el-button type="text" @click="open2">点击打开 Message Box</el-button>
    <el-divider>提交内容</el-divider>
    <el-button type="text" @click="open3">点击打开 Message Box</el-button>
    <el-divider>自定义</el-divider>
    <el-button type="text" @click="open4">点击打开 Message Box</el-button>
    <el-divider>使用 HTML 片段</el-divider>
    <el-button type="text" @click="open5">点击打开 Message Box</el-button>
    <el-divider>区分取消与关闭</el-divider>
    <el-button type="text" @click="open6">点击打开 Message Box</el-button>
    <el-divider>居中布局</el-divider>
    <el-button type="text" @click="open7">点击打开 Message Box</el-button>
    <el-divider>配置</el-divider>
    <zl-table :datas="datas1" key="1"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    open1() {
      this.$alert("这是一段内容", "标题名称", {
        confirmButtonText: "确定",
        callback: (action) => {
          this.$message({
            type: "info",
            message: `action: ${action}`,
          });
        },
      });
    },
    open2() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    open3() {
      this.$prompt("请输入邮箱", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
        inputErrorMessage: "邮箱格式不正确",
      })
        .then(({ value }) => {
          this.$message({
            type: "success",
            message: "你的邮箱是: " + value,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入",
          });
        });
    },
    open4() {
      const h = this.$createElement;
      this.$msgbox({
        title: "消息",
        message: h("p", null, [
          h("span", null, "内容可以是 "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
        showCancelButton: true,
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "执行中...";
            setTimeout(() => {
              done();
              setTimeout(() => {
                instance.confirmButtonLoading = false;
              }, 300);
            }, 3000);
          } else {
            done();
          }
        },
      }).then((action) => {
        this.$message({
          type: "info",
          message: "action: " + action,
        });
      });
    },
    open5() {
      this.$alert("<strong>这是 <i>HTML</i> 片段</strong>", "HTML 片段", {
        dangerouslyUseHTMLString: true,
      });
    },
    open6() {
      this.$confirm(
        "检测到未保存的内容，是否在离开页面前保存修改？",
        "确认信息",
        {
          distinguishCancelAndClose: true,
          confirmButtonText: "保存",
          cancelButtonText: "放弃修改",
        }
      )
        .then(() => {
          this.$message({
            type: "info",
            message: "保存修改",
          });
        })
        .catch((action) => {
          this.$message({
            type: "info",
            message:
              action === "cancel" ? "放弃保存并离开页面" : "停留在当前页面",
          });
        });
    },
    open7() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true,
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
  },
  data() {
    return {
      datas1: {
        title: "Options",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["title", "MessageBox 标题", "string", "—", "—"],
          ["message", "MessageBox 消息正文内容", "string / VNode", "—", "—"],
          [
            "dangerouslyUseHTMLString",
            "是否将 message 属性作为 HTML 片段处理",
            "boolean",
            "—",
            "false",
          ],
          [
            "type",
            "消息类型，用于显示图标",
            "string",
            "success / info / warning / error",
            "—",
          ],
          ["iconClass", "自定义图标的类名，会覆盖 type", "string", "—", "—"],
          ["customClass", "MessageBox 的自定义类名", "string", "—", "—"],
          [
            "callback",
            "若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调",
            "function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法",
            "—",
            "—",
          ],
          [
            "showClose",
            "MessageBox 是否显示右上角关闭按钮",
            "boolean",
            "—",
            "true",
          ],
          [
            "beforeClose",
            "MessageBox 关闭前的回调，会暂停实例的关闭",
            "function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例",
            "—",
            "—",
          ],
          [
            "distinguishCancelAndClose",
            "是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分",
            "boolean",
            "—",
            "false",
          ],
          [
            "lockScroll",
            "是否在 MessageBox 出现时将 body 滚动锁定",
            "boolean",
            "—",
            "true",
          ],
          [
            "showCancelButton",
            "是否显示取消按钮",
            "boolean",
            "—",
            "false（以 confirm 和 prompt 方式调用时为 true）",
          ],
          ["showConfirmButton", "是否显示确定按钮", "boolean", "—", "true"],
          ["cancelButtonText", "取消按钮的文本内容", "string", "—", "取消"],
          ["confirmButtonText", "确定按钮的文本内容", "string", "—", "确定"],
          ["cancelButtonClass", "取消按钮的自定义类名", "string", "—", "—"],
          ["confirmButtonClass", "确定按钮的自定义类名", "string", "—", "—"],
          [
            "closeOnClickModal",
            "是否可通过点击遮罩关闭 MessageBox",
            "boolean",
            "—",
            "true（以 alert 方式调用时为 false）",
          ],
          [
            "closeOnPressEscape",
            "是否可通过按下 ESC 键关闭 MessageBox",
            "boolean",
            "—",
            "true（以 alert 方式调用时为 false）",
          ],
          [
            "closeOnHashChange",
            "是否在 hashchange 时关闭 MessageBox",
            "boolean",
            "—",
            "true",
          ],
          [
            "showInput",
            "是否显示输入框",
            "boolean",
            "—",
            "false（以 prompt 方式调用时为 true）",
          ],
          ["inputPlaceholder", "输入框的占位符", "string", "—", "—"],
          ["inputType", "输入框的类型", "string", "—", "text"],
          ["inputValue", "输入框的初始文本", "string", "—", "—"],
          ["inputPattern", "输入框的校验表达式", "regexp", "—", "—"],
          [
            "inputValidator",
            "输入框的校验函数。可以返回布尔值或字符串，若返回一个字符串, 则返回结果会被赋值给 inputErrorMessage",
            "function",
            "—",
            "—",
          ],
          [
            "inputErrorMessage",
            "校验未通过时的提示文本",
            "string",
            "—",
            "输入的数据不合法!",
          ],
          ["center", "是否居中布局", "boolean", "—", "false"],
          ["roundButton", "是否使用圆角按钮", "boolean", "—", "false"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.box{
  text-align: center;
}
</style>


