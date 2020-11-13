<template>
  <div class="box">
    <div class="boss1"></div>
    <div class="boss2"></div>
    <div class="boss3"></div>
    <el-divider>基础用法</el-divider>
    <template>
      Scroll down to see the bottom-right button.
      <el-backtop></el-backtop>
    </template>
    <el-divider>自定义显示内容</el-divider>
    <el-backtop
      :bottom="100"
    >
      <div
        style="
           {
            height: 100%;
            width: 100%;
            background-color: #f2f5f6;
            box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
            text-align: center;
            line-height: 40px;
            color: #1989fa;
          }
        "
      >
        UP
      </div>
    </el-backtop>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
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
          ["target", "触发滚动的对象", "string", ""],
          ["visibility-height", "滚动高度达到此参数值才出现", "number", "200"],
          ["right", "控制其显示位置, 距离页面右边距", "number", "40"],
          ["bottom", "控制其显示位置, 距离页面底部距离", "number", "40"],
        ],
      },
      datas2: {
        title: "Events",
        head: ["事件名", "说明", "回调参数"],
        body: [["click", "点击按钮触发的事件", "点击事件"]],
      },
    };
  },
};
</script>

<style>
.boss1 {
  width: 500px;
  height: 800px;
  background: red;
}
.boss2 {
  width: 500px;
  height: 800px;
  background: blue;
}
.boss3 {
  width: 500px;
  height: 800px;
  background: lime;
}
</style>