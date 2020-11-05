<template>
  <div class="box">
    <el-divider>固定时间点</el-divider>
    <el-time-select
      v-model="value1"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
      placeholder="选择时间"
    >
    </el-time-select>
    <el-divider>任意时间点</el-divider>
    <el-time-picker
      v-model="value2"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
      placeholder="任意时间点"
    >
    </el-time-picker>
    <el-time-picker
      arrow-control
      v-model="value3"
      :picker-options="{
        selectableRange: '18:30:00 - 20:30:00',
      }"
      placeholder="任意时间点"
    >
    </el-time-picker>
    <el-divider>固定时间段</el-divider>
    <el-time-select
      placeholder="起始时间"
      v-model="startTime4"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
      }"
    >
    </el-time-select>
    <el-time-select
      placeholder="结束时间"
      v-model="endTime4"
      :picker-options="{
        start: '08:30',
        step: '00:15',
        end: '18:30',
        minTime: startTime4,
      }"
    >
    </el-time-select>

    <el-divider>任意时间范围</el-divider>
    <el-time-picker
      is-range
      v-model="value5"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    >
    </el-time-picker>
    <el-time-picker
      is-range
      arrow-control
      v-model="value6"
      range-separator="至"
      start-placeholder="开始时间"
      end-placeholder="结束时间"
      placeholder="选择时间范围"
    >
    </el-time-picker>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value5: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value6: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      startTime4: "",
      endTime4: "",
      value1: "",
      value2: new Date(2016, 9, 10, 18, 40),
      value3: new Date(2016, 9, 10, 18, 40),
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "value / v-model",
            "绑定值",
            "date(TimePicker) / string(TimeSelect)",
            "—",
            "—",
          ],
          ["readonly", "完全只读", "boolean", "—", "false"],
          ["disabled", "禁用", "boolean", "—", "false"],
          ["editable", "文本框可输入", "boolean", "—", "true"],
          ["clearable", "是否显示清除按钮", "boolean", "—", "true"],
          ["size", "输入框尺寸", "string", "medium / small / mini", "—"],
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
            "范围选择时开始日期的占位内容",
            "string",
            "—",
            "—",
          ],
          [
            "is-range",
            "是否为时间范围选择，仅对<el-time-picker>有效",
            "boolean",
            "—",
            "false",
          ],
          [
            "arrow-control",
            "是否使用箭头进行时间选择，仅对<el-time-picker>有效",
            "boolean",
            "—",
            "false",
          ],
          ["align", "对齐方式", "string", "left / center / right", "left"],
          ["popper-class", "TimePicker 下拉框的类名", "string", "—", "—"],
          [
            "picker-options",
            "当前时间日期选择器特有的选项参考下表",
            "object",
            "—",
            "{}",
          ],
          ["range-separator", "选择范围时的分隔符", "string", "-", "" - ""],
          [
            "value-format",
            "可选，仅TimePicker时可用，绑定值的格式。不指定则绑定值为 Date 对象",
            "string",
            "见日期格式",
            "—",
          ],
          [
            "default-value",
            "可选，选择器打开时默认显示的时间",
            "Date(TimePicker) / string(TimeSelect)",
            "可被new Date()解析(TimePicker) / 可选值(TimeSelect)",
            "—",
          ],
          ["name", "原生属性", "string", "—", "—"],
          [
            "prefix-icon",
            "自定义头部图标的类名",
            "string",
            "—",
            "el-icon-time",
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
        title: "Time Select Options",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["start", "开始时间", "string", "—", "09:00"],
          ["end", "结束时间", "string", "—", "18:00"],
          ["step", "间隔时间", "string", "—", "00:30"],
          [
            "minTime",
            "最小时间，小于该时间的时间段将被禁用",
            "string",
            "—",
            "00:00",
          ],
          [
            "maxTime",
            "最大时间，大于该时间的时间段将被禁用",
            "string",
            "—",
            "—",
          ],
        ],
      },
      datas3: {
        title: "Time Picker Options",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "selectableRange",
            "可选时间段，例如'18:30:00 - 20:30:00'或者传入数组['09:30:00 - 12:00:00', '14:30:00 - 18:30:00']",
            "string / array",
            "—",
            "—",
          ],
          [
            "format",
            "时间格式化(TimePicker)",
            "string",
            "小时：HH，分：mm，秒：ss，AM/PM A",
            "HH:mm:ss",
          ],
        ],
      },
      datas4: {
        title: "Events",
        head: ["事件名", "说明", "参数"],
        body: [
          ["change", "用户确认选定的值时触发", "组件绑定值"],
          ["blur", "当 input 失去焦点时触发", "组件实例"],
          ["focus", "当 input 获得焦点时触发", "组件实例"],
        ],
      },
      datas4: {
        title: "Methods",
        head: ["方法名", "说明", "参数"],
        body: [["focus", "使 input 获取焦点", "-"]],
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
