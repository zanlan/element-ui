<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <el-badge :value="12" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="3" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
    <el-badge :value="1" class="item" type="primary">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="2" class="item" type="warning">
      <el-button size="small">回复</el-button>
    </el-badge>

    <el-dropdown trigger="click">
      <span class="el-dropdown-link">
        点我查看<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item class="clearfix">
          评论
          <el-badge class="mark" :value="12" />
        </el-dropdown-item>
        <el-dropdown-item class="clearfix">
          回复
          <el-badge class="mark" :value="3" />
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-divider>最大值</el-divider>

    <el-badge :value="200" :max="99" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge :value="100" :max="10" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>

    <el-divider>自定义内容</el-divider>
    <el-badge value="new" class="item">
      <el-button size="small">评论</el-button>
    </el-badge>
    <el-badge value="hot" class="item">
      <el-button size="small">回复</el-button>
    </el-badge>
    <el-divider>小红点</el-divider>
    <el-badge is-dot class="item">数据查询</el-badge>
    <el-badge is-dot class="item">
      <el-button
        class="share-button"
        icon="el-icon-share"
        type="primary"
      ></el-button>
    </el-badge>
    <zl-table :datas="datas1" key="1"></zl-table>
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
          ["value", "显示值", "string, number", "—", "—"],
          [
            "max",
            "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
            "number",
            "—",
            "—",
          ],
          ["is-dot", "小圆点", "boolean", "—", "false"],
          ["hidden", "隐藏 badge", "boolean", "—", "false"],
          [
            "type",
            "类型",
            "string",
            "primary / success / warning / danger / info",
            "—",
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
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>


