<template>
  <div class="box">
    <el-divider>基本用法</el-divider>
    <el-alert title="成功提示的文案" type="success"> </el-alert>
    <el-alert title="消息提示的文案" type="info"> </el-alert>
    <el-alert title="警告提示的文案" type="warning"> </el-alert>
    <el-alert title="错误提示的文案" type="error"> </el-alert>
    <el-divider>主题</el-divider>
    <el-alert title="成功提示的文案" type="success" effect="dark"> </el-alert>
    <el-alert title="消息提示的文案" type="info" effect="dark"> </el-alert>
    <el-alert title="警告提示的文案" type="warning" effect="dark"> </el-alert>
    <el-alert title="错误提示的文案" type="error" effect="dark"> </el-alert>

    <el-divider>自定义关闭按钮</el-divider>
    <el-alert title="不可关闭的 alert" type="success" :closable="false">
    </el-alert>
    <el-alert title="自定义 close-text" type="info" close-text="知道了">
    </el-alert>
    <el-alert title="设置了回调的 alert" type="warning" @close="hello">
    </el-alert>
    <el-divider>带有 icon</el-divider>

    <el-alert title="成功提示的文案" type="success" show-icon> </el-alert>
    <el-alert title="消息提示的文案" type="info" show-icon> </el-alert>
    <el-alert title="警告提示的文案" type="warning" show-icon> </el-alert>
    <el-alert title="错误提示的文案" type="error" show-icon> </el-alert>
    <el-divider>文字居中</el-divider>

    <el-alert title="成功提示的文案" type="success" center show-icon>
    </el-alert>
    <el-alert title="消息提示的文案" type="info" center show-icon> </el-alert>
    <el-alert title="警告提示的文案" type="warning" center show-icon>
    </el-alert>
    <el-alert title="错误提示的文案" type="error" center show-icon> </el-alert>
    <el-divider>带有辅助性文字介绍</el-divider>
    <el-alert
      title="带辅助性文字介绍"
      type="success"
      description="这是一句绕口令：黑灰化肥会挥发发灰黑化肥挥发；灰黑化肥会挥发发黑灰化肥发挥。 黑灰化肥会挥发发灰黑化肥黑灰挥发化为灰……"
    >
    </el-alert>

    <el-divider>带有 icon 和辅助性文字介绍</el-divider>
    <el-alert
      title="成功提示的文案"
      type="success"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </el-alert>
    <el-alert
      title="消息提示的文案"
      type="info"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </el-alert>
    <el-alert
      title="警告提示的文案"
      type="warning"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </el-alert>
    <el-alert
      title="错误提示的文案"
      type="error"
      description="文字说明文字说明文字说明文字说明文字说明文字说明"
      show-icon
    >
    </el-alert>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    hello() {
      alert("Hello World!");
    },
  },
  data() {
    return {
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["title", "标题", "string", "—", "—"],
          ["type", "主题", "string", "success/warning/info/error", "info"],
          [
            "description",
            "辅助性文字。也可通过默认 slot 传入",
            "string",
            "—",
            "—",
          ],
          ["closable", "是否可关闭", "boolean", "—", "true"],
          ["center", "文字是否居中", "boolean", "—", "true"],
          ["close-text", "关闭按钮自定义文本", "string", "—", "—"],
          ["show-icon", "是否显示图标", "boolean", "—", "false"],
          ["effect", "选择提供的主题", "string", "light/dark", "light"],
        ],
      },
      datas2: {
        title: "Slot",
        head: ["Name", "Description"],
        body: [
          ["—", "描述"],
          ["title", "标题的内容"],
        ],
      },
      datas3: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [["close", "关闭alert时触发的事件", "—"]],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.el-alert{
  width: 50%;
  margin: 0 auto;
  margin-top: 10px;
}

</style>


