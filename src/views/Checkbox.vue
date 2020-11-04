<template>
  <div class="box">
    <!-- ----------------------------------------------------------------------------------- -->
    <el-divider>基础用法</el-divider>
    <el-checkbox v-model="checked">备选项</el-checkbox>
    <!-- ----------------------------------------------------------------------------------- -->
    <el-divider>禁用状态</el-divider>
    <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
    <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    <!-- ----------------------------------------------------------------------------------- -->
    <el-divider>多选框组</el-divider>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
    <!-- ----------------------------------------------------------------------------------- -->
    <el-divider>indeterminate 状态</el-divider>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
      >全选</el-checkbox
    >
    <div style="margin: 15px 0"></div>
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
    >
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{
        city
      }}</el-checkbox>
    </el-checkbox-group>
    <!-- ----------------------------------------------------------------------------------- -->
    <el-divider>可选项目数量的限制</el-divider>
    <el-checkbox-group v-model="checkedCities" :min="1" :max="2">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{
        city
      }}</el-checkbox>
    </el-checkbox-group>
    <!-- ----------------------------------------------------------------------------------- -->
    <el-divider>按钮样式</el-divider>
    <el-row>
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox-button>
      </el-checkbox-group>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup2" size="medium">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox-button>
      </el-checkbox-group>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup3" size="small">
        <el-checkbox-button
          v-for="city in cities"
          :label="city"
          :disabled="city === '北京'"
          :key="city"
          >{{ city }}</el-checkbox-button
        >
      </el-checkbox-group>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{
          city
        }}</el-checkbox-button>
      </el-checkbox-group>
    </el-row>

    <!-- ----------------------------------------------------------------------------------- -->
    <el-divider>带有边框</el-divider>
    <el-row>
      <el-checkbox v-model="checked1" label="备选项1" border></el-checkbox>
      <el-checkbox v-model="checked2" label="备选项2" border></el-checkbox>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-checkbox
        v-model="checked3"
        label="备选项1"
        border
        size="medium"
      ></el-checkbox>
      <el-checkbox
        v-model="checked4"
        label="备选项2"
        border
        size="medium"
      ></el-checkbox>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup5" size="small">
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border disabled></el-checkbox>
      </el-checkbox-group>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-checkbox-group v-model="checkboxGroup6" size="mini" disabled>
        <el-checkbox label="备选项1" border></el-checkbox>
        <el-checkbox label="备选项2" border></el-checkbox>
      </el-checkbox-group>
    </el-row>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
    <zl-table :datas="datas5" key="5"></zl-table>
  </div>
</template>
<script>
const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  data() {
    return {
      checked: true,
      checked1: false,
      checked2: true,
      checked3: false,
      checked4: true,
      checkList: ["选中且禁用", "复选框 A"],
      checkAll: false,
      checkedCities: ["上海", "北京"],
      cities: cityOptions,
      isIndeterminate: true,
      checkboxGroup1: ["上海"],
      checkboxGroup2: ["上海"],
      checkboxGroup3: ["上海"],
      checkboxGroup4: ["上海"],
      checkboxGroup5: [],
      checkboxGroup6: [],
      datas1: {
        title: "Checkbox Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "string / number / boolean", "—", "—"],
          [
            "label",
            "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
            "string / number / boolean",
            "—",
            "—",
          ],
          ["true-label", "选中时的值", "string / number", "—", "—"],
          ["false-label", "没有选中时的值", "string / number", "—", "—"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["border", "是否显示边框", "boolean", "—", "false"],
          [
            "size",
            "Checkbox 的尺寸，仅在 border 为真时有效",
            "string",
            "medium / small / mini",
            "—",
          ],
          ["name", "原生 name 属性", "string", "—", "—"],
          ["checked", "当前是否勾选", "boolean", "—", "false"],
          [
            "indeterminate",
            "设置 indeterminate 状态，只负责样式控制	boolean",
            "—",
            "false",
          ],
        ],
      },
      datas2: {
        title: "Checkbox Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [["change", "当绑定值变化时触发的事件", "更新后的值"]],
      },
      datas3: {
        title: "Checkbox-group Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "array", "—", "—"],
          [
            "size",
            "多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效",
            "string",
            "medium / small / mini",
            "—",
          ],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["min", "可被勾选的 checkbox 的最小数量	number", "—", "—"],
          ["max", "可被勾选的 checkbox 的最大数量	number", "—", "—"],
          [
            "text-color",
            "按钮形式的 Checkbox 激活时的文本颜色",
            "string",
            "—",
            "#ffffff",
          ],
          [
            "fill",
            "按钮形式的 Checkbox 激活时的填充色和边框色",
            "string",
            "—",
            "#409EFF",
          ],
        ],
      },
      datas4: {
        title: "Checkbox-group Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [["change", "当绑定值变化时触发的事件", "更新后的值"]],
      },
      datas5: {
        title: "Checkbox-button Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["参数", "说明", "类型", "可选值", "默认值"],
          [
            "label",
            "选中状态的值（只有在checkbox-group或者绑定对象类型为array时有效）",
            "string / number / boolean",
            "—",
            "—",
          ],
          ["true-label", "选中时的值", "string / number", "—", "—"],
          ["false-label", "没有选中时的值", "string / number", "—", "—"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["name", "原生 name 属性", "string", "—", "—"],
          ["checked", "当前是否勾选", "boolean", "—", "false"],
        ],
      },
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>
<style lang="scss" scoped>
.box {
  text-align: center;
}
</style>