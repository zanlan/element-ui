<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <div class="block">
      <span class="demonstration">默认不区分颜色</span>
      <el-rate v-model="value1"></el-rate>
    </div>
    <div class="block">
      <span class="demonstration">区分颜色</span>
      <el-rate v-model="value2" :colors="colors2"> </el-rate>
    </div>

    <el-divider>辅助文字</el-divider>
    <el-rate v-model="value3" show-text> </el-rate>
    <el-divider>其它 icon</el-divider>
    <el-rate
      v-model="value4"
      :icon-classes="iconClasses4"
      void-icon-class="icon-rate-face-off"
      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
    >
    </el-rate>
    <el-divider>只读</el-divider>
    <el-rate
      v-model="value5"
      disabled
      show-score
      text-color="#ff9900"
      score-template="{value}"
    >
    </el-rate>

    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
       value5: 3.7,
      value4: null,
      iconClasses4: [
        "icon-rate-face-1",
        "icon-rate-face-2",
        "icon-rate-face-3",
      ], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      value1: null,
      value2: null,
      value3: null,
      colors2: ["#99A9BF", "#F7BA2A", "#FF9900"], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "number", "—", "0"],
          ["max", "最大分值", "number", "—", "5"],
          ["disabled", "是否为只读", "boolean", "—", "false"],
          ["allow-half", "是否允许半选", "boolean", "—", "false"],
          [
            "low-threshold",
            "低分和中等分数的界限值，值本身被划分在低分中",
            "number",
            "—",
            "2",
          ],
          [
            "high-threshold",
            "高分和中等分数的界限值，值本身被划分在高分中",
            "number",
            "—",
            "4",
          ],
          [
            "colors",
            "icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色",
            "array/object",
            "—",
            "['#F7BA2A', '#F7BA2A', '#F7BA2A']",
          ],
          ["void-color", "未选中 icon 的颜色", "string", "—", "#C6D1DE"],
          [
            "disabled-void-color",
            "只读时未选中 icon 的颜色",
            "string",
            "—",
            "#EFF2F7",
          ],
          [
            "icon-classes",
            "icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名",
            "array/object",
            "—",
            "['el-icon-star-on', 'el-icon-star-on','el-icon-star-on']",
          ],
          [
            "void-icon-class",
            "未选中 icon 的类名",
            "string",
            "—",
            "el-icon-star-off",
          ],
          [
            "disabled-void-icon-class",
            "只读时未选中 icon 的类名",
            "string",
            "—",
            "el-icon-star-on",
          ],
          [
            "show-text",
            "是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容",
            "boolean",
            "—",
            "false",
          ],
          [
            "show-score",
            "是否显示当前分数，show-score 和 show-text 不能同时为真",
            "boolean",
            "—",
            "false",
          ],
          ["text-color", "辅助文字的颜色", "string", "—", "#1F2D3D"],
          [
            "texts",
            "辅助文字数组",
            "array",
            "—",
            "['极差', '失望', '一般', '满意', '惊喜']",
          ],
          ["score-template", "分数显示模板", "string", "—", "{value}"],
        ],
      },
      datas2: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [["change", "分值改变时触发", "改变后的分值"]],
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