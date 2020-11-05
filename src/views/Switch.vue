<template>
  <div class="box">
    <el-divider>基本用法</el-divider>
    <el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949">
    </el-switch>
    <el-divider>文字描述</el-divider>
    <el-switch v-model="value2" active-text="按月付费" inactive-text="按年付费">
    </el-switch>
    <el-switch
      style="display: block"
      v-model="value3"
      active-color="#13ce66"
      inactive-color="#ff4949"
      active-text="按月付费"
      inactive-text="按年付费"
    >
    </el-switch>
    <el-divider>扩展的 value 类型</el-divider>
    <el-tooltip :content="'Switch value: ' + value4" placement="top">
      <el-switch
        v-model="value4"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0"
      >
      </el-switch>
    </el-tooltip>
    <el-divider>禁用状态</el-divider>
    <el-switch v-model="value5" disabled> </el-switch>
    <el-switch v-model="value6" disabled> </el-switch>

    <zl-table :datas="datas1" key="1"></zl-table>

    <zl-table :datas="datas2" key="2"></zl-table>

    <zl-table :datas="datas3" key="3"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: true,
      value2: true,
      value3: true,
      value4: "100",
      value5: true,
      value6: false,
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "boolean / string / number", "—", "—"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["width", "switch 的宽度（像素）", "number", "—", "40"],
          [
            "active-icon-class",
            "switch 打开时所显示图标的类名，设置此项会忽略 active-text",
            "string",
            "—",
            "—",
          ],
          [
            "inactive-icon-class",
            "switch 关闭时所显示图标的类名，设置此项会忽略 inactive-text",
            "string",
            "—",
            "—",
          ],
          ["active-text", "switch 打开时的文字描述", "string", "—", "—"],
          ["inactive-text", "switch 关闭时的文字描述", "string", "—", "—"],
          [
            "active-value",
            "switch 打开时的值",
            "boolean / string / number",
            "—",
            "true",
          ],
          [
            "inactive-value",
            "switch 关闭时的值",
            "boolean / string / number",
            "—",
            "false",
          ],
          ["active-color", "switch 打开时的背景色", "string", "—", "#409EFF"],
          ["inactive-color", "switch 关闭时的背景色", "string", "—", "#C0CCDA"],
          ["name", "switch 对应的 name 属性", "string", "—", "—"],
          [
            "validate-event",
            "改变 switch 状态时是否触发表单的校验",
            "boolean",
            "-",
            "true",
          ],
        ],
      },

      datas2: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [["change", "switch 状态发生变化时的回调函数", "新状态的值"]],
      },
      datas3: {
        title: "Methods",
        head: ["方法名", "说明", "参数"],
        body: [["focus", "使 Switch 获取焦点", "-"]],
      },
    };
  },
};
</script>

<style lang='scss' scoped>
.box{
  text-align: center;
}
</style>