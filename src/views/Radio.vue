<template>
  <div class="box">
    <el-row>
      <el-radio v-model="radio1" label="1">备选项1</el-radio>
      <el-radio v-model="radio1" label="2">备选项2</el-radio>
    </el-row>
    <el-row>
      <el-radio disabled v-model="radio2" label="禁用">备选项3</el-radio>
      <el-radio disabled v-model="radio2" label="选中且禁用">备选项4</el-radio>
    </el-row>
    <el-row>
      <el-radio-group v-model="radio3">
        <el-radio :label="3">备选项5</el-radio>
        <el-radio :label="6">备选项6</el-radio>
        <el-radio :label="9">备选项7</el-radio>
      </el-radio-group>
    </el-row>

    <el-row>
      <el-radio-group v-model="radio4" @change="gotochange">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-radio-group v-model="radio5" size="medium">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-radio-group v-model="radio6" size="small">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京" disabled></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-radio-group v-model="radio7" disabled size="mini">
        <el-radio-button label="上海"></el-radio-button>
        <el-radio-button label="北京"></el-radio-button>
        <el-radio-button label="广州"></el-radio-button>
        <el-radio-button label="深圳"></el-radio-button>
      </el-radio-group>
    </el-row>

    <el-row>
      <el-radio v-model="radio8" label="1" border>备选项1</el-radio>
      <el-radio v-model="radio8" label="2" border>备选项2</el-radio>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-radio v-model="radio9" label="1" border size="medium"
        >备选项1</el-radio
      >
      <el-radio v-model="radio9" label="2" border size="medium"
        >备选项2</el-radio
      >
    </el-row>
    <el-row style="margin-top: 20px">
      <el-radio-group v-model="radio10" size="small">
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border disabled>备选项2</el-radio>
      </el-radio-group>
    </el-row>
    <el-row style="margin-top: 20px">
      <el-radio-group v-model="radio11" size="mini" disabled>
        <el-radio label="1" border>备选项1</el-radio>
        <el-radio label="2" border>备选项2</el-radio>
      </el-radio-group>
    </el-row>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
    <zl-table :datas="datas5" key="5"></zl-table>
  </div>
</template>

<script>
export default {
  methods:{
    gotochange(v){
      console.log(v);
    }
  },
  data() {
    return {
      radio1: "1",
      radio2: "选中且禁用",
      radio3: 3,
      radio4: "上海",
      radio5: "上海",
      radio6: "上海",
      radio7: "上海",
      radio8: "1",
      radio9: "1",
      radio10: "1",
      radio11: "1",
      datas1: {
        title: "Radio Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "string / number / boolean", "—", "—"],
          ["label", "Radio 的 value", "string / number / boolean", "—", "—"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["border", "是否显示边框", "boolean", "—", "false"],
          [
            "size",
            "Radio 的尺寸，仅在 border 为真时有效",
            "string",
            "medium / small / mini",
            "—",
          ],
          ["name", "原生 name 属性", "string", "—", "—"],
        ],
      },
      datas2: {
        title: "Radio Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [["change", "绑定值变化时触发的事件", "选中的 Radio label 值"]],
      },
      datas3: {
        title: "Radio-group Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "string / number / boolean", "—", "—"],
          [
            "size",
            "单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效",
            "string",
            "medium / small / mini",
            "—",
          ],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          [
            "text-color",
            "按钮形式的 Radio 激活时的文本颜色",
            "string",
            "—",
            "#ffffff",
          ],
          [
            "fill",
            "按钮形式的 Radio 激活时的填充色和边框色",
            "string",
            "—",
            "#409EFF",
          ],
        ],
      },
      datas4: {
        title: "Radio-group Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [["change", "绑定值变化时触发的事件", "选中的 Radio label 值"]],
      },
      datas5: {
        title: "Radio-button Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["label", "Radio 的 value", "string / number", "—", "—"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["name", "原生 name 属性", "string", "—", "—"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  text-align: center;
  font-size: 30px;
}
</style>