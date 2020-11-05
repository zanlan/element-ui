<template>
  <div class="box">
    <el-divider>线形进度条</el-divider>
    <el-progress :percentage="50"></el-progress>
    <el-progress :percentage="100" :format="format1"></el-progress>
    <el-progress :percentage="100" status="success"></el-progress>
    <el-progress :percentage="100" status="warning"></el-progress>
    <el-progress :percentage="50" status="exception"></el-progress>

    <el-divider>百分比内显</el-divider>

    <el-progress
      :text-inside="true"
      :stroke-width="26"
      :percentage="70"
    ></el-progress>
    <el-progress
      :text-inside="true"
      :stroke-width="24"
      :percentage="100"
      status="success"
    ></el-progress>
    <el-progress
      :text-inside="true"
      :stroke-width="22"
      :percentage="80"
      status="warning"
    ></el-progress>
    <el-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    ></el-progress>

    <el-divider>自定义颜色</el-divider>
    <el-progress :percentage="percentage3" :color="customColor3"></el-progress>

    <el-progress
      :percentage="percentage3"
      :color="customColorMethod3"
    ></el-progress>

    <el-progress :percentage="percentage3" :color="customColors3"></el-progress>
    <div>
      <el-button-group>
        <el-button icon="el-icon-minus" @click="decrease3"></el-button>
        <el-button icon="el-icon-plus" @click="increase3"></el-button>
      </el-button-group>
    </div>

    <el-divider>环形进度条</el-divider>
    <el-progress type="circle" :percentage="0"></el-progress>
    <el-progress type="circle" :percentage="25"></el-progress>
    <el-progress type="circle" :percentage="100" status="success"></el-progress>
    <el-progress type="circle" :percentage="70" status="warning"></el-progress>
    <el-progress
      type="circle"
      :percentage="50"
      status="exception"
    ></el-progress>

    <el-divider>仪表盘形进度条</el-divider>
    <el-progress
      type="dashboard"
      :percentage="percentage5"
      :color="colors5"
    ></el-progress>
    <div>
      <el-button-group>
        <el-button icon="el-icon-minus" @click="decrease5"></el-button>
        <el-button icon="el-icon-plus" @click="increase5"></el-button>
      </el-button-group>
    </div>
    <zl-table :datas="datas1" key="1"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    format1(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    customColorMethod3(percentage) {
      if (percentage < 30) {
        return "#909399";
      } else if (percentage < 70) {
        return "#e6a23c";
      } else {
        return "#67c23a";
      }
    },
    increase3() {
      this.percentage3 += 10;
      if (this.percentage3 > 100) {
        this.percentage3 = 100;
      }
    },
    decrease3() {
      this.percentage3 -= 10;
      if (this.percentage3 < 0) {
        this.percentage3 = 0;
      }
    },
    increase5() {
      this.percentage5 += 10;
      if (this.percentage5 > 100) {
        this.percentage5 = 100;
      }
    },
    decrease5() {
      this.percentage5 -= 10;
      if (this.percentage5 < 0) {
        this.percentage5 = 0;
      }
    },
  },
  data() {
    return {
      percentage5: 10,
      colors5: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      percentage3: 20,
      customColor3: "#409eff",
      customColors3: [
        { color: "#f56c6c", percentage: 20 },
        { color: "#e6a23c", percentage: 40 },
        { color: "#5cb87a", percentage: 60 },
        { color: "#1989fa", percentage: 80 },
        { color: "#6f7ad3", percentage: 100 },
      ],
      datas1: {
        title: "Attributes",
        head: ["参数	说明	类型	可选值	默认值"],
        body: [
          ["percentage	百分比（必填）	number	0-100	0"],

          ["type	进度条类型	string	line/circle/dashboard	line"],

          ["stroke-width	进度条的宽度，单位 px	number	—	6"],

          [
            "text-inside	进度条显示文字内置在进度条内（只在 type=line 时可用）	boolean	—	false",
          ],

          ["status	进度条当前状态	string	success/exception/warning	—"],

          [
            "color	进度条背景色（会覆盖 status 状态颜色）	string/function/array	—	''",
          ],

          [
            "width	环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用）	number		126",
          ],

          ["show-text	是否显示进度条文字内容	boolean	—	true"],

          [
            "stroke-linecap	circle/dashboard 类型路径两端的形状	string	butt/round/square	round",
          ],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


