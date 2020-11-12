<template>
  <div class="box1">
    <el-divider>基础用法</el-divider>
    <div class="box">
      <div class="top">
        <el-tooltip
          class="item"
          effect="dark"
          content="Top Left 提示文字"
          placement="top-start"
        >
          <el-button>上左</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Top Center 提示文字"
          placement="top"
        >
          <el-button>上边</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Top Right 提示文字"
          placement="top-end"
        >
          <el-button>上右</el-button>
        </el-tooltip>
      </div>
      <div class="left">
        <el-tooltip
          class="item"
          effect="dark"
          content="Left Top 提示文字"
          placement="left-start"
        >
          <el-button>左上</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Left Center 提示文字"
          placement="left"
        >
          <el-button>左边</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Left Bottom 提示文字"
          placement="left-end"
        >
          <el-button>左下</el-button>
        </el-tooltip>
      </div>

      <div class="right">
        <el-tooltip
          class="item"
          effect="dark"
          content="Right Top 提示文字"
          placement="right-start"
        >
          <el-button>右上</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Right Center 提示文字"
          placement="right"
        >
          <el-button>右边</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Right Bottom 提示文字"
          placement="right-end"
        >
          <el-button>右下</el-button>
        </el-tooltip>
      </div>
      <div class="bottom">
        <el-tooltip
          class="item"
          effect="dark"
          content="Bottom Left 提示文字"
          placement="bottom-start"
        >
          <el-button>下左</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Bottom Center 提示文字"
          placement="bottom"
        >
          <el-button>下边</el-button>
        </el-tooltip>
        <el-tooltip
          class="item"
          effect="dark"
          content="Bottom Right 提示文字"
          placement="bottom-end"
        >
          <el-button>下右</el-button>
        </el-tooltip>
      </div>
    </div>
    <el-divider>主题</el-divider>
    <el-tooltip content="Top center" placement="top">
      <el-button>Dark</el-button>
    </el-tooltip>
    <el-tooltip content="Bottom center" placement="bottom" effect="light">
      <el-button>Light</el-button>
    </el-tooltip>
    <el-divider>更多 Content</el-divider>
    <el-tooltip placement="top">
      <div slot="content">多行信息<br />第二行信息</div>
      <el-button>Top center</el-button>
    </el-tooltip>
    <el-divider>高级扩展</el-divider>
    <el-tooltip
      :disabled="disabled"
      content="点击关闭 tooltip 功能"
      placement="bottom"
      effect="light"
    >
      <el-button @click="disabled = !disabled"
        >点击{{ disabled ? "开启" : "关闭" }} tooltip 功能</el-button
      >
    </el-tooltip>
    <zl-table :datas="datas1" key="1"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      disabled: false,
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["effect", "默认提供的主题", "String", "dark/light", "dark"],
          [
            "content",
            "显示的内容，也可以通过 slot#content 传入 DOM",
            "String",
            "—",
            "—",
          ],
          [
            "placement",
            "Tooltip 的出现位置",
            "String",
            "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
            "bottom",
          ],
          ["value / v-model", "状态是否可见", "Boolean", "—", "false"],
          ["disabled", "Tooltip 是否可用", "Boolean", "—", "false"],
          ["offset", "出现位置的偏移量", "Number", "—", "0"],
          ["transition", "定义渐变动画", "String", "—", "el-fade-in-linear"],
          [
            "visible-arrow",
            "是否显示 Tooltip 箭头，更多参数可见Vue-popper",
            "Boolean",
            "—",
            "true",
          ],
          [
            "popper-options",
            "popper.js 的参数",
            "Object",
            "参考 popper.js 文档",
            "{ boundariesElement: 'body', gpuAcceleration: false }",
          ],
          ["open-delay", "延迟出现，单位毫秒", "Number", "—", "0"],
          [
            "manual",
            "手动控制模式，设置为 true 后，mouseenter 和 mouseleave 事件将不会生效",
            "Boolean",
            "—",
            "false",
          ],
          ["popper-class", "为 Tooltip 的 popper 添加类名", "String", "—", "—"],
          ["enterable", "鼠标是否可进入到 tooltip 中", "Boolean", "—", "true"],
          [
            "hide-after",
            "Tooltip 出现后自动隐藏延时，单位毫秒，为 0 则不会自动隐藏",
            "number",
            "—",
            "0",
          ],
          ["tabindex", "Tooltip 组件的 tabindex", "number", "—", "0"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  width: 400px;

  .top {
    text-align: center;
  }

  .left {
    float: left;
    width: 60px;
  }

  .right {
    float: right;
    width: 60px;
  }

  .bottom {
    clear: both;
    text-align: center;
  }

  .item {
    margin: 4px;
  }

  .left .el-tooltip__popper,
  .right .el-tooltip__popper {
    padding: 8px 10px;
  }
}
</style>


