<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <div class="div1">
      <div class="block">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="block">
        <span class="demonstration">Click 指示器触发</span>
        <el-carousel trigger="click" height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <el-divider>指示器</el-divider>
    <div class="div2">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-divider>切换箭头</el-divider>
    <div class="div3">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-divider>卡片化</el-divider>
    <div class="div4">
      <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-divider>方向</el-divider>
    <div class="div5">
      <el-carousel height="200px" direction="vertical" :autoplay="false">
        <el-carousel-item v-for="item in 3" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <el-divider>基础用法</el-divider>
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
      datas1: {
        title: "Carousel Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["height", "走马灯的高度", "string", "—", "—"],
          [
            "initial-index",
            "初始状态激活的幻灯片的索引，从 0 开始",
            "number",
            "—",
            "0",
          ],
          ["trigger", "指示器的触发方式", "string", "click", "—"],
          ["autoplay", "是否自动切换", "boolean", "—", "true"],
          ["interval", "自动切换的时间间隔，单位为毫秒", "number", "—", "3000"],
          ["indicator-position", "指示器的位置", "string", "outside/none", "—"],
          [
            "arrow",
            "切换箭头的显示时机",
            "string",
            "always/hover/never",
            "hover",
          ],
          ["type", "走马灯的类型", "string", "card", "—"],
          ["loop", "是否循环显示", "boolean", "-", "true"],
          [
            "direction",
            "走马灯展示的方向",
            "string",
            "horizontal/vertical",
            "horizontal",
          ],
        ],
      },
      datas2: {
        title: "Carousel Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          [
            "change",
            "幻灯片切换时触发",
            "目前激活的幻灯片的索引，原幻灯片的索引",
          ],
        ],
      },
      datas3: {
        title: "Carousel Methods",
        head: ["方法名", "说明", "参数"],
        body: [
          [
            "setActiveItem",
            "手动切换幻灯片",
            "需要切换的幻灯片的索引，从 0 开始；或相应 el-carousel-item 的 name 属性值",
          ],
          ["prev", "切换至上一张幻灯片", "—"],
          ["next", "切换至下一张幻灯片", "—"],
        ],
      },
      datas4: {
        title: "Carousel-Item Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "name",
            "幻灯片的名字，可用作 setActiveItem 的参数",
            "string",
            "—",
            "—",
          ],
          ["label", "该幻灯片所对应指示器的文本", "string", "—", "—"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.div1 {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
.div2 {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
.div3 {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
.div4 {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
.div5 {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}
</style>


