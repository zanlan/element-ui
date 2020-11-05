<template>
  <div class="box">
    <el-menu :default-active="defaultActive" mode="horizontal">
      <template v-for="(item, index) in items">
        <el-menu-item :index="String(index)">
          <router-link :to="'/tree/tree' + (index + 1)">
            {{ item }}
          </router-link>
        </el-menu-item>
      </template>
    </el-menu>
    <router-view />
    <!-- <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
    <zl-table :datas="datas5" key="5"></zl-table> -->
  </div>
</template>

<script>
export default {
  mounted() {
    this.defaultActive = String(Number(this.$route.fullPath.slice(10)) - 1);
  },

  data() {
    return {
      defaultActive: "0",
      items: [
        "基础用法",
        "可选择",
        "懒加载自定义叶子节点",
        "默认展开和默认选中",
        "禁用状态",
        "树节点的选择",
        "自定义节点内容",
        "节点过滤",
        "手风琴模式",
        "可拖拽节点",
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.el-menu--horizontal.el-menu > li > a {
  display: block;
  text-decoration: none;
}
.el-menu--horizontal > .el-menu-item {
  margin: 2px;
  background:rgba(151, 121, 151,.4);
}
.el-menu--horizontal > .el-menu-item.is-active {
  background: purple;
}
</style>


