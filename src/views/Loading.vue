<template>
  <div class="box">
    <el-divider>区域加载</el-divider>
    <el-table v-loading="loading1" :data="tableData1">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-divider>自定义加载</el-divider>
    <el-table
      v-loading="loading2"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      :data="tableData2"
    >
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-divider>整页加载</el-divider>
    <el-button
      type="primary"
      @click="openFullScreen1"
      v-loading.fullscreen.lock="fullscreenLoading"
    >
      指令方式
    </el-button>
    <el-button type="primary" @click="openFullScreen2"> 服务方式 </el-button>
    <el-divider>服务</el-divider>
    <el-card>
      <header>Loading 还可以以服务的方式调用。引入 Loading 服务：</header>
      <div>import { Loading } from 'element-ui';</div>
    </el-card>
    <el-card>
      <header>在需要调用时：</header>
      <div>Loading.service(options);</div>
    </el-card>
    <el-card>
      <header>
        其中 options 参数为 Loading 的配置项，具体见下表。LoadingService
        会返回一个 Loading 实例，可通过调用该实例的 close 方法来关闭它：
      </header>
      <div>
        let loadingInstance = Loading.service(options); 
        <br>
        this.$nextTick(() => {// 以服务的方式调用的 Loading 需要异步关闭 loadingInstance.close(); });
      </div>
    </el-card>
    <el-card>
      <header>
        需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏
        Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading
        实例，而是返回现有全屏 Loading 的实例：
      </header>
      <div>
        let loadingInstance1 = Loading.service({ fullscreen: true }); 
        <br>
        let loadingInstance2 = Loading.service({ fullscreen: true });
        <br>
        console.log(loadingInstance1 === loadingInstance2); // true
      </div>
    </el-card>
    <header>
      此时调用它们中任意一个的 close 方法都能关闭这个全屏 Loading。
      如果完整引入了 Element，那么 Vue.prototype 上会有一个全局方法
      $loading，它的调用方式为：this.$loading(options)，同样会返回一个 Loading
      实例。
    </header>

    <zl-table :datas="datas1" key="1"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    openFullScreen1() {
      this.fullscreenLoading = true;
      setTimeout(() => {
        this.fullscreenLoading = false;
      }, 2000);
    },
    openFullScreen2() {
      const loading = this.$loading({
        lock: true,
        text: "Loading",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.7)",
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    },
  },
  data() {
    return {
      fullscreenLoading: false,
      tableData1: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      loading1: true,
      tableData2: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      loading2: true,
      datas1: {
        title: "Options",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "target",
            "Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点",
            "object/string",
            "—",
            "document.body",
          ],
          [
            "body",
            "同 v-loading 指令中的 body 修饰符",
            "boolean",
            "—",
            "false",
          ],
          [
            "fullscreen",
            "同 v-loading 指令中的 fullscreen 修饰符",
            "boolean",
            "—",
            "true",
          ],
          [
            "lock",
            "同 v-loading 指令中的 lock 修饰符",
            "boolean",
            "—",
            "false",
          ],
          ["text", "显示在加载图标下方的加载文案", "string", "—", "—"],
          ["spinner", "自定义加载图标类名", "string", "—", "—"],
          ["background", "遮罩背景色", "string", "—", "—"],
          ["customClass", "Loading 的自定义类名", "string", "—", "—"],
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
.el-table {
  margin: 0 auto;
  width: 800px;
  margin-top: 10px;
  border: 2px solid blue;
}
.el-card{
  margin: 10px;
}
header{
  font-weight: 600;
}
</style>


