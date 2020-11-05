<template>
  <div class="box">
    <el-divider>基本用法</el-divider>
    <el-tag>标签一</el-tag>
    <el-tag type="success">标签二</el-tag>
    <el-tag type="info">标签三</el-tag>
    <el-tag type="warning">标签四</el-tag>
    <el-tag type="danger">标签五</el-tag>

    <el-divider>可移出标签</el-divider>
    <el-tag v-for="tag in tags1" :key="tag.name+1" closable :type="tag.type">
      {{ tag.name }}
    </el-tag>

    <el-divider>动态编辑标签</el-divider>
    <el-tag
      :key="tag+2"
      v-for="tag in dynamicTags2"
      closable
      :disable-transitions="false"
      @close="handleClose2(tag)"
    >
      {{ tag }}
    </el-tag>
    <el-input
      class="input-new-tag"
      v-if="inputVisible2"
      v-model="inputValue2"
      ref="saveTagInput2"
      size="small"
      @keyup.enter.native="handleInputConfirm2"
      @blur="handleInputConfirm2"
    >
    </el-input>
    <el-button v-else class="button-new-tag" size="small" @click="showInput2"
      >+ New Tag</el-button
    >
    <el-divider>不同尺寸</el-divider>
    <el-tag closable>默认标签</el-tag>
    <el-tag size="medium" closable>中等标签</el-tag>
    <el-tag size="small" closable>小型标签</el-tag>
    <el-tag size="mini" closable>超小标签</el-tag>
    <el-divider>不同主题</el-divider>
    <div class="tag-group">
      <span class="tag-group__title">Dark</span>
      <el-tag
        v-for="item in items3"
        :key="item.label+3"
        :type="item.type"
        effect="dark"
      >
        {{ item.label }}
      </el-tag>
    </div>
    <div class="tag-group">
      <span class="tag-group__title">Plain</span>
      <el-tag
        v-for="item in items3"
        :key="item.label+4"
        :type="item.type"
        effect="plain"
      >
        {{ item.label }}
      </el-tag>
    </div>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose2(tag) {
      this.dynamicTags2.splice(this.dynamicTags.indexOf(tag), 1);
    },

    showInput2() {
      this.inputVisible2 = true;
      this.$nextTick((_) => {
        this.$refs.saveTagInput2.$refs.input.focus();
      });
    },

    handleInputConfirm2() {
      let inputValue = this.inputValue2;
      if (!this.dynamicTags2.includes(inputValue)) {
        this.dynamicTags2.push(inputValue);
      }
      this.inputVisible2 = false;
      this.inputValue2 = "";
    },
  },
  data() {
    return {
      items3: [
        { type: "", label: "标签一" },
        { type: "success", label: "标签二" },
        { type: "info", label: "标签三" },
        { type: "danger", label: "标签四" },
        { type: "warning", label: "标签五" },
      ],
      dynamicTags2: ["标签一", "标签二", "标签三"],
      inputVisible2: false,
      inputValue2: "",
      tags1: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" },
      ],
      datas1: {
        title: "Attributes",
        head: ["参数	说明	类型	可选值	默认值"],
        body: [
          ["type	类型	string	success/info/warning/danger	—"],
          ["closable	是否可关闭	boolean	—	false"],
          ["disable-transitions	是否禁用渐变动画	boolean	—	false"],
          ["hit	是否有边框描边	boolean	—	false"],
          ["color	背景色	string	—	—"],
          ["size	尺寸	string	medium / small / mini	—"],
          ["effect	主题	string	dark / light / plain	light"],
        ],
      },

      datas2: {
        title: "Events",
        head: ["事件名称	说明	回调参数"],
        body: [
          ["click	点击 Tag 时触发的事件	—"],
          ["close	关闭 Tag 时触发的事件	—"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>


