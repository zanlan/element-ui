<template>
  <div class="box">
    <el-divider>基本用法</el-divider>
    <el-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <el-button slot="reference">hover 激活</el-button>
    </el-popover>

    <el-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="click"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <el-button slot="reference">click 激活</el-button>
    </el-popover>

    <el-popover
      ref="popover"
      placement="right"
      title="标题"
      width="200"
      trigger="focus"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
    </el-popover>
    <el-button v-popover:popover>focus 激活</el-button>

    <el-popover
      placement="bottom"
      title="标题"
      width="200"
      trigger="manual"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
      v-model="visible1"
    >
      <el-button slot="reference" @click="visible1 = !visible1"
        >手动激活</el-button
      >
    </el-popover>
    <el-divider>嵌套信息</el-divider>
    <el-popover placement="right" width="400" trigger="click">
      <el-table :data="gridData2">
        <el-table-column
          width="150"
          property="date"
          label="日期"
        ></el-table-column>
        <el-table-column
          width="100"
          property="name"
          label="姓名"
        ></el-table-column>
        <el-table-column
          width="300"
          property="address"
          label="地址"
        ></el-table-column>
      </el-table>
      <el-button slot="reference">click 激活</el-button>
    </el-popover>
    <el-divider>嵌套操作</el-divider>
    <el-popover placement="top" width="160" v-model="visible3">
      <p>这是一段内容这是一段内容确定删除吗？</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="visible3 = false"
          >取消</el-button
        >
        <el-button type="primary" size="mini" @click="visible3 = false"
          >确定</el-button
        >
      </div>
      <el-button slot="reference">删除</el-button>
    </el-popover>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible1: false,
      visible3: false,
      gridData2: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "trigger",
            "触发方式",
            "String",
            "click/focus/hover/manual",
            "click",
          ],
          ["title", "标题", "String", "—", "—"],
          [
            "content",
            "显示的内容，也可以通过 slot 传入 DOM",
            "String",
            "—",
            "—",
          ],
          ["width", "宽度", "String, Number", "—", "最小宽度 150px"],
          [
            "placement",
            "出现位置",
            "String",
            "top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end",
            "bottom",
          ],
          ["disabled", "Popover 是否可用", "Boolean", "—", "false"],
          ["value / v-model", "状态是否可见", "Boolean", "—", "false"],
          ["offset", "出现位置的偏移量", "Number", "—", "0"],
          ["transition", "定义渐变动画", "String", "—", "fade-in-linear"],
          [
            "visible1-arrow",
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
          ["popper-class", "为 popper 添加类名", "String", "—", "—"],
          [
            "open-delay",
            "触发方式为 hover 时的显示延迟，单位为毫秒",
            "Number",
            "—",
            "—",
          ],
          [
            "close-delay",
            "触发方式为 hover 时的隐藏延迟，单位为毫秒",
            "number",
            "—",
            "200",
          ],
          ["tabindex", "Popover 组件的 tabindex", "number", "—", "0"],
        ],
      },
      datas2: {
        title: "Slot",
        head: ["参数", "说明"],
        body: [
          ["—", "Popover 内嵌 HTML 文本"],
          ["reference", "触发 Popover 显示的 HTML 元素"],
        ],
      },
      datas3: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["show", "显示时触发", "—"],
          ["after-enter", "显示动画播放完毕后触发", "—"],
          ["hide", "隐藏时触发", "—"],
          ["after-leave", "隐藏动画播放完毕后触发", "—"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


