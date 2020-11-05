<template>
  <div class="box">
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
</style>


