<template>
  <div class="box">
    <el-divider>基本用法</el-divider>
    <el-radio-group v-model="direction1">
      <el-radio label="ltr">从左往右开</el-radio>
      <el-radio label="rtl">从右往左开</el-radio>
      <el-radio label="ttb">从上往下开</el-radio>
      <el-radio label="btt">从下往上开</el-radio>
    </el-radio-group>

    <el-button @click="drawer1 = true" type="primary" style="margin-left: 16px">
      点我打开
    </el-button>

    <el-drawer
      title="我是标题"
      :visible.sync="drawer1"
      :direction="direction1"
      :before-close="handleClose1"
    >
      <span>我来啦!</span>
    </el-drawer>
    <el-divider>不添加 Title</el-divider>
    <el-button @click="drawer2 = true" type="primary" style="margin-left: 16px">
      点我打开
    </el-button>

    <el-drawer title="我是标题" :visible.sync="drawer2" :with-header="false">
      <span>我来啦!</span>
    </el-drawer>

    <el-divider>自定义内容</el-divider>
    <el-button type="text" @click="table3 = true"
      >打开嵌套表格的 Drawer</el-button
    >
    <el-button type="text" @click="dialog3 = true"
      >打开嵌套 Form 的 Drawer</el-button
    >
    <el-drawer
      title="我嵌套了表格!"
      :visible.sync="table3"
      direction="rtl"
      size="50%"
    >
      <el-table :data="gridData3">
        <el-table-column
          property="date"
          label="日期"
          width="150"
        ></el-table-column>
        <el-table-column
          property="name"
          label="姓名"
          width="200"
        ></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-drawer>

    <el-drawer
      title="我嵌套了 Form !"
      :before-close="handleClose3"
      :visible.sync="dialog3"
      direction="ltr"
      custom-class="demo-drawer"
      ref="drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="form3">
          <el-form-item label="活动名称" :label-width="formLabelWidth3">
            <el-input v-model="form3.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth3">
            <el-select v-model="form3.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="cancelForm3">取 消</el-button>
          <el-button
            type="primary"
            @click="$refs.drawer.closeDrawer()"
            :loading="loading3"
            >{{ loading3 ? "提交中 ..." : "确 定" }}</el-button
          >
        </div>
      </div>
    </el-drawer>
    <el-divider>多层嵌套</el-divider>
    <el-button @click="drawer4 = true" type="primary" style="margin-left: 16px">
      点我打开
    </el-button>
    <el-drawer title="我是外面的 Drawer" :visible.sync="drawer4" size="50%">
      <div>
        <el-button @click="innerDrawer4 = true">打开里面的!</el-button>
        <el-drawer
          title="我是里面的"
          :append-to-body="true"
          :before-close="handleClose4"
          :visible.sync="innerDrawer4"
        >
          <p>_(:зゝ∠)_</p>
        </el-drawer>
      </div>
    </el-drawer>
    <el-divider>配置</el-divider>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose1(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    handleClose3(done) {
      if (this.loading3) {
        return;
      }
      this.$confirm("确定要提交表单吗？")
        .then((_) => {
          this.loading3 = true;
          this.timer3 = setTimeout(() => {
            done();
            // 动画关闭需要一定的时间
            setTimeout(() => {
              this.loading3 = false;
            }, 400);
          }, 2000);
        })
        .catch((_) => {});
    },
    cancelForm3() {
      this.loading3 = false;
      this.dialog3 = false;
      clearTimeout(this.timer);
    },
    handleClose4(done) {
      this.$confirm("还有未保存的工作哦确定关闭吗？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
  data() {
    return {
      drawer1: false,
      direction1: "rtl",
      drawer2: false,

      table3: false,
      dialog3: false,
      loading3: false,
      gridData3: [
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
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      form3: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth3: "80px",
      timer3: null,
      drawer4: false,
      innerDrawer4: false,
      datas1: {
        title: "Drawer Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "append-to-body",
            "Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true",
            "boolean",
            "—",
            "false",
          ],
          [
            "before-close",
            "关闭前的回调，会暂停 Drawer 的关闭",
            "function(done)，done 用于关闭 Drawer",
            "—",
            "—",
          ],
          [
            "close-on-press-escape",
            "是否可以通过按下 ESC 关闭 Drawer",
            "boolean",
            "—",
            "true",
          ],
          ["custom-class", "Drawer 的自定义类名", "string", "—", "—"],
          [
            "destroy-on-close",
            "控制是否在关闭 Drawer 之后将子元素全部销毁",
            "boolean",
            "-",
            "false",
          ],
          ["modal", "是否需要遮罩层", "boolean", "—", "true"],
          [
            "modal-append-to-body",
            "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上",
            "boolean",
            "—",
            "true",
          ],
          [
            "direction",
            "Drawer 打开的方向",
            "Direction",
            "rtl / ltr / ttb / btt",
            "rtl",
          ],
          ["show-close", "是否显示关闭按钮", "boolean", "—", "true"],
          [
            "size",
            "Drawer 窗体的大小, 当使用 number 类型时, 以像素为单位, 当使用 string 类型时, 请传入 'x%', 否则便会以 number 类型解释",
            "number / string",
            "-",
            "'30%'",
          ],
          [
            "title",
            "Drawer 的标题，也可通过具名 slot （见下表）传入",
            "string",
            "—",
            "—",
          ],
          [
            "visible",
            "是否显示 Drawer，支持 .sync 修饰符",
            "boolean",
            "—",
            "false",
          ],
          [
            "wrapperClosable",
            "点击遮罩层是否可以关闭 Drawer",
            "boolean",
            "-",
            "true",
          ],
          [
            "withHeader",
            "控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效",
            "boolean",
            "-",
            "true",
          ],
        ],
      },
      datas2: {
        title: "Drawer Slot",
        head: ["name", "说明"],
        body: [
          ["—", "Drawer 的内容"],
          ["title", "Drawer 标题区的内容"],
        ],
      },
      datas3: {
        title: "Drawer Methods",
        head: ["name", "说明"],
        body: [
          [
            "closeDrawer",
            "用于关闭 Drawer, 该方法会调用传入的 before-close 方法",
          ],
        ],
      },
      datas4: {
        title: "Drawer Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["open", "Drawer 打开的回调", "—"],
          ["opened", "Drawer 打开动画结束时的回调", "—"],
          ["close", "Drawer 关闭的回调", "—"],
          ["closed", "Drawer 关闭动画结束时的回调", "—"],
        ],
      },
    };
  },
};
</script>

<style>
</style>