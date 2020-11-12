<template>
  <div class="box">
    <el-page-header @back="goBack" content="详情页面"> </el-page-header>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      console.log("go back");
    },
  },
  data() {
    return {
      datas1: {
        title: "Attributes",
        head: ["参数	说明	类型	可选值	默认值"],
        body: [["title	标题	string	—	返回"], ["content	内容	string	—	—"]],
      },
      datas2: {
        title: "Events",
        head: ["事件名称	说明	回调参数"],
        body: [["back	点击左侧区域触发	—"]],
      },
      datas3: {
        title: "Slots",
        head: ["事件名称	说明"],
        body: [["title	标题内容"], ["content	内容"]],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


