<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination layout="prev, pager, next" :total="1000"> </el-pagination>
    </div>
    <el-divider>设置最大页码按钮数</el-divider>
    <el-pagination
      :page-size="20"
      :pager-count="11"
      layout="prev, pager, next"
      :total="1000"
    >
    </el-pagination>

    <el-divider>带有背景色的分页</el-divider>
    <el-pagination background layout="prev, pager, next" :total="1000">
    </el-pagination>
    <el-divider>小型分页</el-divider>
    <el-pagination small layout="prev, pager, next" :total="50">
    </el-pagination>

    <el-divider>附加功能</el-divider>
    <div class="block">
      <span class="demonstration">显示总数</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">调整每页显示条数</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage2"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">直接前往</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage3"
        :page-size="100"
        layout="prev, pager, next, jumper"
        :total="1000"
      >
      </el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">完整功能</span>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>

    <div>
      <el-switch v-model="value"> </el-switch>
      <el-pagination
        :hide-on-single-page="value"
        :total="5"
        layout="prev, pager, next"
      >
      </el-pagination>
    </div>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
  data() {
    return {
      value: false,
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4,
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["small", "是否使用小型分页样式", "boolean", "—", "false"],
          ["background", "是否为分页按钮添加背景色", "boolean", "—", "false"],
          [
            "page-size",
            "每页显示条目个数，支持 .sync 修饰符",
            "number",
            "—",
            "10",
          ],
          ["total", "总条目数", "number", "—", "—"],
          [
            "page-count",
            "总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性",
            "Number",
            "—",
            "—",
          ],
          [
            "pager-count",
            "页码按钮的数量，当总页数超过该值时会折叠",
            "number",
            "大于等于 5 且小于等于 21 的奇数",
            "7",
          ],
          ["current-page", "当前页数，支持 .sync 修饰符", "number", "—", "1"],
          [
            "layout",
            "组件布局，子组件名用逗号分隔",
            "String",
            "sizes, prev, pager, next, jumper, ->, total, slot",
            "'prev, pager, next, jumper, ->, total'",
          ],
          [
            "page-sizes",
            "每页显示个数选择器的选项设置",
            "number[]",
            "—",
            "[10, 20, 30, 40, 50, 100]",
          ],
          [
            "popper-class",
            "每页显示个数选择器的下拉框类名",
            "string",
            "—",
            "—",
          ],
          ["prev-text", "替代图标显示的上一页文字", "string", "—", "—"],
          ["next-text", "替代图标显示的下一页文字", "string", "—", "—"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["hide-on-single-page", "只有一页时是否隐藏", "boolean", "—", "-"],
        ],
      },
      datas2: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["size-change", "pageSize 改变时会触发", "每页条数"],
          ["current-change", "currentPage 改变时会触发", "当前页"],
          ["prev-click", "用户点击上一页按钮改变当前页后触发", "当前页"],
          ["next-click", "用户点击下一页按钮改变当前页后触发", "当前页"],
        ],
      },
      datas3: {
        title: "Slot",
        head: ["name", "说明"],
        body: [["—", "自定义内容，需要在 layout 中列出 slot"]],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.box {
  text-align: center;
}
.el-pagination {
  margin: 10px;
}
</style>


