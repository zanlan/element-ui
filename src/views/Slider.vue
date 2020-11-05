<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="value1"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">自定义初始值</span>
      <el-slider v-model="value2"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">隐藏 Tooltip</span>
      <el-slider v-model="value3" :show-tooltip="false"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">格式化 Tooltip</span>
      <el-slider v-model="value4" :format-tooltip="formatTooltip"></el-slider>
    </div>
    <div class="block">
      <span class="demonstration">禁用</span>
      <el-slider v-model="value5" disabled></el-slider>
    </div>
    <el-divider>离散值</el-divider>
    <div class="block">
      <span class="demonstration">不显示间断点</span>
      <el-slider v-model="value6" :step="10"> </el-slider>
    </div>
    <div class="block">
      <span class="demonstration">显示间断点</span>
      <el-slider v-model="value7" :step="10" show-stops> </el-slider>
    </div>
    <el-divider>带输入框</el-divider>
    <div class="block">
      <el-slider v-model="value8" show-input> </el-slider>
    </div>
    <el-divider>范围选择</el-divider>
    <div class="block">
      <el-slider v-model="value9" range show-stops :max="10"> </el-slider>
    </div>
    <el-divider>竖向模式</el-divider>
    <div class="block">
      <el-slider v-model="value10" vertical height="200px"> </el-slider>
    </div>
    <el-divider>展示标记</el-divider>
    <div class="block">
      <el-slider v-model="value11" range :marks="marks11"> </el-slider>
    </div>

    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 0,
      value2: 50,
      value3: 36,
      value4: 48,
      value5: 42,
      value6: 0,
      value7: 0,
      value8: 0,
      value9: [4, 8],
      value10: 0,
      value11: [30, 60],
      marks11: {
        0: "0°C",
        8: "8°C",
        37: "37°C",
        50: {
          style: {
            color: "#1989FA",
          },
          label: this.$createElement("strong", "50%"),
        },
      },
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "number", "—", "0"],
          ["min", "最小值", "number", "—", "0"],
          ["max", "最大值", "number", "—", "100"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["step", "步长", "number", "—", "1"],
          [
            "show-input",
            "是否显示输入框，仅在非范围选择时有效",
            "boolean",
            "—",
            "false",
          ],
          [
            "show-input-controls",
            "在显示输入框的情况下，是否显示输入框的控制按钮",
            "boolean",
            "—",
            "true",
          ],
          [
            "input-size",
            "输入框的尺寸",
            "string",
            "large / medium / small / mini",
            "small",
          ],
          ["show-stops", "是否显示间断点", "boolean", "—", "false"],
          ["show-tooltip", "是否显示 tooltip", "boolean", "—", "true"],
          [
            "format-tooltip",
            "格式化 tooltip message",
            "function(value)",
            "—",
            "—",
          ],
          ["range", "是否为范围选择", "boolean", "—", "false"],
          ["vertical", "是否竖向模式", "boolean", "—", "false"],
          ["height", "Slider 高度，竖向模式时必填", "string", "—", "—"],
          ["label", "屏幕阅读器标签", "string", "—", "—"],
          [
            "debounce",
            "输入时的去抖延迟，毫秒，仅在show-input等于true时有效",
            "number",
            "—",
            "300",
          ],
          ["tooltip-class", "tooltip 的自定义类名", "string", "—", "—"],
          [
            "marks",
            "标记， key 的类型必须为 number 且取值在闭区间 [min, max] 内，每个标记可以单独设置样式",
            "object",
            "—",
            "—",
          ],
        ],
      },
      datas2: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          [
            "change",
            "值改变时触发（使用鼠标拖曳时，只在松开鼠标后触发）",
            "改变后的值",
          ],
          [
            "input",
            "数据改变时触发（使用鼠标拖曳时，活动过程实时触发）",
            "改变后的值",
          ],
        ],
      },
    
    };
  },
  methods: {
    formatTooltip(val) {
      return val / 100;
    },
  },
};
</script>
