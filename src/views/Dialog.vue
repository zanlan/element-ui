<template>
  <div class="box">
    <el-divider>Dialog 对话框</el-divider>
    <el-button type="text" @click="dialogVisible1 = true"
      >点击打开 Dialog</el-button
    >

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible1"
      width="30%"
      :before-close="handleClose1"
    >
      <span>这是一段信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible1 = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <el-divider>自定义内容</el-divider>
    <!-- Table -->
    <el-button type="text" @click="dialogTableVisible2 = true"
      >打开嵌套表格的 Dialog</el-button
    >

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible2">
      <el-table :data="gridData2">
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
    </el-dialog>

    <!-- Form -->
    <el-button type="text" @click="dialogFormVisible2 = true"
      >打开嵌套表单的 Dialog</el-button
    >

    <el-dialog title="收货地址" :visible.sync="dialogFormVisible2">
      <el-form :model="form2">
        <el-form-item label="活动名称" :label-width="formLabelWidth2">
          <el-input v-model="form2.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth2">
          <el-select v-model="form2.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible2 = false"
          >确 定</el-button
        >
      </div>
    </el-dialog>
    <el-divider>嵌套的 Dialog</el-divider>
    <el-button type="text" @click="outerVisible3 = true"
      >点击打开外层 Dialog</el-button
    >

    <el-dialog title="外层 Dialog" :visible.sync="outerVisible3">
      <el-dialog
        width="30%"
        title="内层 Dialog"
        :visible.sync="innerVisible3"
        append-to-body
      >
      </el-dialog>
      <div slot="footer" class="dialog-footer">
        <el-button @click="outerVisible3 = false">取 消</el-button>
        <el-button type="primary" @click="innerVisible3 = true"
          >打开内层 Dialog</el-button
        >
      </div>
    </el-dialog>

    <el-divider>居中布局</el-divider>
    <el-button type="text" @click="centerDialogVisible = true"
      >点击打开 Dialog</el-button
    >

    <el-dialog
      title="提示"
      :visible.sync="centerDialogVisible"
      width="30%"
      center
    >
      <span>需要注意的是内容是默认不居中的</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="centerDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="centerDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
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
  },
  data() {
    return {
      dialogVisible1: false,
      gridData2: [
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
      dialogTableVisible2: false,
      dialogFormVisible2: false,
      form2: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth2: "120px",
      outerVisible3: false,
      innerVisible3: false,
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "visible",
            "是否显示 Dialog，支持 .sync 修饰符",
            "boolean",
            "—",
            "false",
          ],
          [
            "title",
            "Dialog 的标题，也可通过具名 slot （见下表）传入",
            "string",
            "—",
            "—",
          ],
          ["width", "Dialog 的宽度", "string", "—", "50%"],
          ["fullscreen", "是否为全屏 Dialog", "boolean", "—", "false"],
          ["top", "Dialog CSS 中的 margin-top 值", "string", "—", "15vh"],
          ["modal", "是否需要遮罩层", "boolean", "—", "true"],
          [
            "modal-append-to-body",
            "遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上",
            "boolean",
            "—",
            "true",
          ],
          [
            "append-to-body",
            "Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true",
            "boolean",
            "—",
            "false",
          ],
          [
            "lock-scroll",
            "是否在 Dialog 出现时将 body 滚动锁定",
            "boolean",
            "—",
            "true",
          ],
          ["custom-class", "Dialog 的自定义类名", "string", "—", "—"],
          [
            "close-on-click-modal",
            "是否可以通过点击 modal 关闭 Dialog",
            "boolean",
            "—",
            "true",
          ],
          [
            "close-on-press-escape",
            "是否可以通过按下 ESC 关闭 Dialog",
            "boolean",
            "—",
            "true",
          ],
          ["show-close", "是否显示关闭按钮", "boolean", "—", "true"],
          [
            "before-close",
            "关闭前的回调，会暂停 Dialog 的关闭",
            "function(done)，done 用于关闭 Dialog",
            "—",
            "—",
          ],
          ["center", "是否对头部和底部采用居中布局", "boolean", "—", "false"],
          [
            "destroy-on-close",
            "关闭时销毁 Dialog 中的元素",
            "boolean",
            "—",
            "false",
          ],
        ],
      },
      datas2: {
        title: "Slot",
        head: ["name", "说明"],
        body: [
          ["—", "Dialog 的内容"],
          ["title", "Dialog 标题区的内容"],
          ["footer", "Dialog 按钮操作区的内容"],
        ],
      },
      datas3: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["open", "Dialog 打开的回调", "—"],
          ["opened", "Dialog 打开动画结束时的回调", "—"],
          ["close", "Dialog 关闭的回调", "—"],
          ["closed", "Dialog 关闭动画结束时的回调", "—"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


