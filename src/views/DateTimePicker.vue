<template>
  <div class="box">
    <el-divider>日期和时间点</el-divider>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="选择日期时间"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">带快捷选项</span>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="选择日期时间"
        align="right"
        :picker-options="pickerOptions2"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">设置默认时间</span>
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="选择日期时间"
        default-time="12:00:00"
      >
      </el-date-picker>
    </div>

    <el-divider>日期和时间范围</el-divider>
     <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value4"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">带快捷选项</span>
    <el-date-picker
      v-model="value5"
      type="datetimerange"
      :picker-options="pickerOptions5"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
  </div>

    <el-divider>默认的起始与结束时刻</el-divider>
     <div class="block">
    <span class="demonstration">起始日期时刻为 12:00:00</span>
    <el-date-picker
      v-model="value6"
      type="datetimerange"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00']">
    </el-date-picker>
  </div>
  <div class="block">
    <span class="demonstration">起始日期时刻为 12:00:00，结束日期时刻为 08:00:00</span>
    <el-date-picker
      v-model="value7"
      type="datetimerange"
      align="right"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      :default-time="['12:00:00', '08:00:00']">
    </el-date-picker>
  </div>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
    <zl-table :datas="datas5" key="5"></zl-table>
    <zl-table :datas="datas6" key="6"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
         pickerOptions5: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value4: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value5: '',
        value6: '',
        value7: '',
        pickerOptions2: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
        value1: '',
        value2: '',
        value3: '',
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "value / v-model",
            "绑定值",
            "date(DateTimePicker) / array(DateTimeRangePicker)",
            "—",
            "—",
          ],
          ["readonly", "完全只读", "boolean", "—", "false"],
          ["disabled", "禁用", "boolean", "—", "false"],
          ["editable", "文本框可输入", "boolean", "—", "true"],
          ["clearable", "是否显示清除按钮", "boolean", "—", "true"],
          ["size", "输入框尺寸", "string", "large, small, mini", "—"],
          ["placeholder", "非范围选择时的占位内容", "string", "—", "—"],
          [
            "start-placeholder",
            "范围选择时开始日期的占位内容",
            "string",
            "—",
            "—",
          ],
          [
            "end-placeholder",
            "范围选择时结束日期的占位内容",
            "string",
            "—",
            "—",
          ],
          [
            "time-arrow-control",
            "是否使用箭头进行时间选择",
            "boolean",
            "—",
            "false",
          ],
          [
            "type",
            "显示类型",
            "string",
            "year/month/date/week/ datetime/datetimerange/daterange",
            "date",
          ],
          [
            "format",
            "显示在输入框中的格式",
            "string",
            "见日期格式",
            "yyyy-MM-dd HH:mm:ss",
          ],
          ["align", "对齐方式", "string", "left, center, right", "left"],
          ["popper-class", "DateTimePicker 下拉框的类名", "string", "—", "—"],
          [
            "picker-options",
            "当前时间日期选择器特有的选项参考下表",
            "object",
            "—",
            "{}",
          ],
          ["range-separator", "选择范围时的分隔符", "string", "-", "'-'"],
          [
            "default-value",
            "可选，选择器打开时默认显示的时间",
            "Date",
            "可被new Date()解析",
            "—",
          ],
          [
            "default-time",
            "选中日期后的默认具体时刻",
            "非范围选择时：string / 范围选择时：string[]",
            "非范围选择时：形如12:00:00的字符串；范围选择时：数组，长度为 2，每项值为字符串，形如12:00:00，第一项指定开始日期的时刻，第二项指定结束日期的时刻。不指定会使用时刻 00:00:00",
            "—",
          ],
          [
            "value-format",
            "可选，绑定值的格式。不指定则绑定值为 Date 对象",
            "string",
            "见日期格式",
            "—",
          ],
          ["name", "原生属性", "string", "—", "—"],
          [
            "unlink-panels",
            "在范围选择器里取消两个日期面板之间的联动",
            "boolean",
            "—",
            "false",
          ],
          [
            "prefix-icon",
            "自定义头部图标的类名",
            "string",
            "—",
            "el-icon-date",
          ],
          [
            "clear-icon",
            "自定义清空图标的类名",
            "string",
            "—",
            "el-icon-circle-close",
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
        head: ["Event Name", "Description", "Parameters"],
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
      datas6: {
        title: "Slots",
        head: ["Name", "说明"],
        body: [["range-separator", "自定义分隔符"]],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
}
</style>