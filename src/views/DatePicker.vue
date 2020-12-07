<template>
  <div class="box">
    <el-divider>选择日</el-divider>
    <div class="block">
      <span class="demonstration">默认</span>
      {{value1}}
      <el-date-picker text="11" v-model="value1" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" @change="changefun" @focus="focusfun" @blur="blurfun">
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        align="right"
        placeholder="选择日期"
        type="date"
        :picker-options="pickerOptions2"
      >
      </el-date-picker>
    </div>
    <el-divider>其他日期单位</el-divider>
    <div class="container">
      <div class="block">
        <span class="demonstration">周</span>
        <el-date-picker
          v-model="value3"
          type="week"
          format="yyyy 第 WW 周"
          placeholder="选择周"
        >
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">月</span>
        <el-date-picker v-model="value4" type="month" placeholder="选择月">
        </el-date-picker>
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">年</span>
        <el-date-picker v-model="value5" type="year" placeholder="选择年">
        </el-date-picker>
      </div>
      <div class="block">
        <span class="demonstration">多个日期</span>
        <el-date-picker
          type="dates"
          v-model="value6"
          placeholder="选择一个或多个日期"
        >
        </el-date-picker>
      </div>
    </div>

    <el-divider>选择日期范围</el-divider>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value7"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value8"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions8"
      >
      </el-date-picker>
    </div>

    <el-divider>选择月份范围</el-divider>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value9"
        type="monthrange"
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value10"
        type="monthrange"
        align="right"
        unlink-panels
        range-separator="至"
        start-placeholder="开始月份"
        end-placeholder="结束月份"
        :picker-options="pickerOptions10"
      >
      </el-date-picker>
    </div>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
    <zl-table :datas="datas5" key="5"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pickerOptions10: {
        shortcuts: [
          {
            text: "本月",
            onClick(picker) {
              picker.$emit("pick", [new Date(), new Date()]);
            },
          },
          {
            text: "今年至今",
            onClick(picker) {
              const end = new Date();
              const start = new Date(new Date().getFullYear(), 0);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近六个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setMonth(start.getMonth() - 6);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value9: "",
      value10: "",
      pickerOptions8: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value7: "",
      value8: "",
      pickerOptions2: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",
      value6: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      value1: "",
      value2: "",

      datas1: {
        title: "Picker Options",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "shortcuts",
            "设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表",
            "Object[]",
            "—",
            "—",
          ],
          [
            "disabledDate",
            "设置禁用状态，参数为当前日期，要求返回 Boolean",
            "Function",
            "—",
            "—",
          ],
          ["cellClassName", "设置日期的 className", "Function(Date)", "—", "—"],
          ["firstDayOfWeek", "周起始日", "Number", "1 到 7", "7"],
          [
            "onPick",
            "选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效",
            "Function({ maxDate, minDate })",
            "—",
            "—",
          ],
        ],
      },
      datas2: {
        title: "Picker Options",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "shortcuts",
            "设置快捷选项，需要传入 { text, onClick } 对象用法参考 demo 或下表",
            "Object[]",
            "—",
            "—",
          ],
          [
            "disabledDate",
            "设置禁用状态，参数为当前日期，要求返回 Boolean",
            "Function",
            "—",
            "—",
          ],
          ["cellClassName", "设置日期的 className", "Function(Date)", "—", "—"],
          ["firstDayOfWeek", "周起始日", "Number", "1 到 7", "7"],
          [
            "onPick",
            "选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效",
            "Function({ maxDate, minDate })",
            "—",
            "—",
          ],
        ],
      },
      datas3: {
        title: "Shortcuts",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["text", "标题文本", "string", "—", "—"],
          [
            "onClick",
            "选中后的回调函数，参数是 vm，可通过触发 'pick' 事件设置选择器的值。例如 vm.$emit('pick', new Date())",
            "function",
            "—",
            "—",
          ],
        ],
      },

      datas4: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          [
            "change",
            "用户确认选定的值时触发",
            "组件绑定值。格式与绑定值一致，可受 value-format 控制",
          ],
          ["blur", "当 input 失去焦点时触发", "组件实例"],
          ["focus", "当 input 获得焦点时触发", "组件实例"],
        ],
      },
      datas5: {
        title: "Methods",
        head: ["方法名", "说明", "参数"],
        body: [["focus", "使 input 获取焦点", "—"]],
      },
    };
  },
  methods:{
    changefun(v){
      console.log('change事件',v);
    },
    focusfun(v){
      console.log('focus事件',v);
    },
    blurfun(v){
      console.log('blur事件',v);
    },
  }
};
</script>
<style lang="scss" scoped>
.box {
  text-align: center;
}
</style>
