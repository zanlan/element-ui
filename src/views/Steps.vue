<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <el-steps :active="active1" finish-status="success">
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>

    <el-button style="margin-top: 12px" @click="next1">下一步</el-button>
    <el-divider>含状态步骤条</el-divider>
    <el-steps :space="200" :active="1" finish-status="success">
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <el-divider>有描述的步骤条</el-divider>
    <el-steps :active="1">
      <el-step
        title="步骤 1"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤 2"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step title="步骤 3" description="这段就没那么长了"></el-step>
    </el-steps>
    <el-divider>居中的步骤条</el-divider>
    <el-steps :active="2" align-center>
      <el-step
        title="步骤1"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤2"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤3"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
      <el-step
        title="步骤4"
        description="这是一段很长很长很长的描述性文字"
      ></el-step>
    </el-steps>
    <el-divider>带图标的步骤条</el-divider>
    <el-steps :active="1">
      <el-step title="步骤 1" icon="el-icon-edit"></el-step>
      <el-step title="步骤 2" icon="el-icon-upload"></el-step>
      <el-step title="步骤 3" icon="el-icon-picture"></el-step>
    </el-steps>

    <el-divider>竖式步骤条</el-divider>

    <div style="height: 300px">
      <el-steps direction="vertical" :active="1">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step
          title="步骤 3"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
      </el-steps>
    </div>
    <el-divider>简洁风格的步骤条</el-divider>
    <el-steps :active="1" simple>
      <el-step title="步骤 1" icon="el-icon-edit"></el-step>
      <el-step title="步骤 2" icon="el-icon-upload"></el-step>
      <el-step title="步骤 3" icon="el-icon-picture"></el-step>
    </el-steps>

    <el-steps
      :active="1"
      finish-status="success"
      simple
      style="margin-top: 20px"
    >
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    next1() {
      if (this.active1++ > 2) this.active1 = 0;
    },
  },
  data() {
    return {
      active1: 0,
      datas1: {
        title: "Steps Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "space",
            "每个 step 的间距，不填写将自适应间距。支持百分比。",
            "number / string",
            "—",
            "—",
          ],
          [
            "direction",
            "显示方向",
            "string",
            "vertical/horizontal",
            "horizontal",
          ],
          ["active", "设置当前激活步骤", "number", "—", "0"],
          [
            "process-status",
            "设置当前步骤的状态",
            "string",
            "wait / process / finish / error / success",
            "process",
          ],
          [
            "finish-status",
            "设置结束步骤的状态",
            "string",
            "wait / process / finish / error / success",
            "finish",
          ],
          ["align-center", "进行居中对齐", "boolean", "-", "false"],
          ["simple", "是否应用简洁风格", "boolean", "-", "false"],
        ],
      },
      datas2: {
        title: "Step Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["title", "标题", "string", "—", "—"],
          ["description", "描述性文字", "string", "—", "—"],
          [
            "icon",
            "图标",
            "传入 icon 的 class 全名来自定义 icon，也支持 slot 方式写入",
            "string",
            "—",
          ],
          [
            "status",
            "设置当前步骤的状态，不设置则根据 steps 确定状态",
            "wait / process / finish / error / success",
            "-",
            "",
          ],
        ],
      },
      datas3: {
        title: "Step Slot",
        head: ["name", "说明"],
        body: [
          ["icon", "自定义图标"],
          ["title", "自定义标题"],
          ["description", "自定义描述性文字"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


