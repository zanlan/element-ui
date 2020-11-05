<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <div class="block">
      <span class="demonstration">有默认值</span>
      <el-color-picker v-model="color1"></el-color-picker>
    </div>
    <div class="block">
      <span class="demonstration">无默认值</span>
      <el-color-picker v-model="color2"></el-color-picker>
    </div>
    <el-divider>选择透明度</el-divider>
    <el-color-picker v-model="color3" show-alpha></el-color-picker>
    <el-divider>预定义颜色</el-divider>
    <el-color-picker v-model="color4" show-alpha :predefine="predefineColors4">
    </el-color-picker>
    <el-divider>不同尺寸</el-divider>
    <el-color-picker v-model="color5"></el-color-picker>
    <el-color-picker v-model="color5" size="medium"></el-color-picker>
    <el-color-picker v-model="color5" size="small"></el-color-picker>
    <el-color-picker v-model="color5" size="mini"></el-color-picker>

    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color5: "#409EFF",
      color1: "#409EFF",
      color2: null,
      color3: "rgba(19, 206, 102, 0.8)",
      color4: "rgba(255, 69, 0, 0.68)",
      predefineColors4: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ],
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "string", "—", "—"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["size", "尺寸", "string", "medium / small / mini", "—"],
          ["show-alpha", "是否支持透明度选择", "boolean", "—", "false"],
          [
            "color-format",
            "写入 v-model 的颜色的格式",
            "string",
            "hsl / hsv / hex / rgb",
            "hex（show-alpha 为 false）/ rgb（show-alpha 为 true）",
          ],
          ["popper-class", "ColorPicker 下拉框的类名", "string", "—", "—"],
          ["predefine", "预定义颜色", "array", "—", "—"],
        ],
      },
      datas2: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["change", "当绑定值变化时触发", "当前值"],
          [
            "active-change",
            "面板中当前显示的颜色发生改变时触发",
            "当前显示的颜色值",
          ],
        ],
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