<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <ul class="infinite-list" v-infinite-scroll="load1" style="overflow: auto">
      <li v-for="i in count1" class="infinite-list-item">{{ i }}</li>
    </ul>
    <el-divider>禁用加载</el-divider>
    <div class="infinite-list-wrapper" style="overflow: auto">
      <ul
        class="list"
        v-infinite-scroll="load2"
        infinite-scroll-disabled="disabled"
      >
        <li v-for="i in count2" class="list-item">{{ i }}</li>
      </ul>
      <p v-if="loading2">加载中...</p>
      <p v-if="noMore2">没有更多了</p>
    </div>
    <el-divider>配置</el-divider>
    <zl-table :datas="datas1" key="1"></zl-table>
  </div>
</template>

<script>
export default {
  computed: {
    noMore2() {
      return this.count2 >= 20;
    },
    disabled2() {
      return this.loading2 || this.noMore2;
    },
  },
  methods: {
    load1() {
      this.count1 += 2;
    },
    load2() {
      this.loading2 = true;
      setTimeout(() => {
        this.count2 += 2;
        this.loading2 = false;
      }, 2000);
    },
  },
  data() {
    return {
      count1: 0,
      count2: 10,
      loading2: false,
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["infinite-scroll-disabled", "是否禁用", "boolean", "-", "false"],
          ["infinite-scroll-delay", "节流时延，单位为ms", "number", "-", "200"],
          [
            "infinite-scroll-distance",
            "触发加载的距离阈值，单位为px",
            "number",
            "-",
            "0",
          ],
          [
            "infinite-scroll-immediate",
            "是否立即执行加载方法，以防初始状态下内容无法撑满容器。",
            "boolean",
            "-",
            "true",
          ],
        ],
      },
    };
  },
};
</script>

<style>
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #e8f3fe;
  margin: 10px;
  color: #7dbcfc;
}
.infinite-list {
  height: 300px;
  width: 500px;
  border: 2px dashed lime;
}
.infinite-list-wrapper .list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #fff6f6;
  color: #ff8484;
}
.infinite-list-wrapper .list-item + .list-item {
  margin-top: 10px;
}
.infinite-list-wrapper {
  width: 500px;
  height: 300px;
  text-align: center;
  overflow: auto;
}
</style>