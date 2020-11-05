<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <el-input-number
      v-model="num1"
      @change="handleChange"
      :min="1"
      :max="10"
      label="描述文字"
    ></el-input-number>
    <el-divider>禁用状态</el-divider>
    <el-input-number v-model="num2" :disabled="true"></el-input-number>
    <el-divider>步数</el-divider>
    <el-input-number v-model="num3" :step="2"></el-input-number>
    <el-divider>严格步数</el-divider>
    <el-input-number v-model="num4" :step="2" step-strictly></el-input-number>
    <el-divider>精度</el-divider>
    <el-input-number
      v-model="num5"
      :precision="2"
      :step="0.1"
      :max="10"
    ></el-input-number>
    <el-divider>尺寸</el-divider>
    <el-input-number v-model="num6"></el-input-number>
    <el-input-number size="medium" v-model="num7"></el-input-number>
    <el-input-number size="small" v-model="num8"></el-input-number>
    <el-input-number size="mini" v-model="num9"></el-input-number>
    <el-divider>按钮位置</el-divider>
    <el-input-number
      v-model="num10"
      controls-position="right"
      @change="handleChange"
      :min="1"
      :max="10"
    ></el-input-number>
    <el-divider>配置</el-divider>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="1"></zl-table>
    <zl-table :datas="datas3" key="1"></zl-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
      num4: 1,
      num5: 1,
      num6: 1,
      num7: 1,
      num8: 1,
      num9: 1,
      num10: 1,
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "number", "—", "0"],
          ["min", "设置计数器允许的最小值", "number", "—", "-Infinity"],
          ["max", "设置计数器允许的最大值", "number", "—", "Infinity"],
          ["step", "计数器步长", "number", "—", "1"],
          [
            "step-strictly",
            "是否只能输入 step 的倍数",
            "boolean",
            "—",
            "false",
          ],
          ["precision", "数值精度", "number", "—", "—"],
          ["size", "计数器尺寸", "string", "large, small", "—"],
          ["disabled", "是否禁用计数器", "boolean", "—", "false"],
          ["controls", "是否使用控制按钮", "boolean", "—", "true"],
          ["controls-position", "控制按钮位置", "string", "right", "-"],
          ["name", "原生属性", "string", "—", "—"],
          ["label", "输入框关联的label文字", "string", "—", "—"],
          ["placeholder", "输入框默认 placeholder", "string", "-", "-"],
        ],
      },

      datas2: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["change", "绑定值被改变时触发", "currentValue, oldValue"],
          ["blur", "在组件 Input 失去焦点时触发", "(event: Event)"],
          ["focus", "在组件 Input 获得焦点时触发", "(event: Event)"],
        ],
      },
      datas3: {
        title: "Methods",
        head: ["方法名", "说明", "参数"],
        body: [
          ["focus", "使 input 获取焦点", "-"],
          ["select", "选中 input 中的文字", "—"],
        ],
      },
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
}
</style>