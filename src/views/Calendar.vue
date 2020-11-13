<template>
  <div class="box">
    <el-divider>基本</el-divider>
    <el-calendar v-model="value1"> </el-calendar>
    <el-divider>自定义内容</el-divider>
    <el-calendar>
      <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
      <template slot="dateCell" slot-scope="{ date, data }">
        <p :class="data.isSelected ? 'is-selected' : ''">
          {{ data.day.split("-").slice(1).join("-") }}
          {{ data.isSelected ? "✔️" : "" }}
        </p>
      </template>
    </el-calendar>
    <el-divider>自定义范围</el-divider>
    <el-calendar :range="['2019-03-04', '2019-03-24']"> </el-calendar>
    <el-divider>配置</el-divider>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: new Date(),
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "Date/string/number", "—", "—"],
          [
            "range",
            "时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。",
            "Array",
            "—",
            "—",
          ],
          ["first-day-of-week", "周起始日", "Number", "1 到 7", "1"],
        ],
      },
      datas2: {
        title: "dateCell scoped slot 参数",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["date", "单元格代表的日期", "Date", "—", "—"],
          [
            "data",
            "{ type, isSelected, day}，type 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；isSelected 标明该日期是否被选中；day 是格式化的日期，格式为 yyyy-MM-dd",
            "Object",
            "—",
            "—",
          ],
        ],
      },
    };
  },
};
</script>

<style>
.is-selected {
  color: #1989FA;
}
</style>