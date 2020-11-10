<template>
  <div class="box">
    <el-divider>基本用法</el-divider>
    <el-row class="demo-avatar demo-basic">
      <el-col :span="12">
        <div class="sub-title">circle</div>
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar :size="50" :src="circleUrl"></el-avatar>
          </div>
          <div class="block" v-for="size in sizeList" :key="size">
            <el-avatar :size="size" :src="circleUrl"></el-avatar>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="sub-title">square</div>
        <div class="demo-basic--circle">
          <div class="block">
            <el-avatar shape="square" :size="50" :src="squareUrl"></el-avatar>
          </div>
          <div class="block" v-for="size in sizeList" :key="size">
            <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-divider>展示类型</el-divider>
    <div class="demo-type">
      <div>
        <el-avatar icon="el-icon-user-solid"></el-avatar>
      </div>
      <div>
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        ></el-avatar>
      </div>
      <div>
        <el-avatar> user </el-avatar>
      </div>
    </div>

    <el-divider>图片加载失败的 fallback 行为</el-divider>
    <div class="demo-type">
      <el-avatar :size="60" src="https://empty" @error="errorHandler">
        <img
          src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
        />
      </el-avatar>
    </div>

    <el-divider>图片如何适应容器框</el-divider>
    <div class="demo-fit">
      <div class="block" v-for="fit in fits" :key="fit">
        <span class="title">{{ fit }}</span>
        <el-avatar shape="square" :size="100" :fit="fit" :src="url"></el-avatar>
      </div>
    </div>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    errorHandler() {
      return true;
    },
  },
  data() {
    return {
      fits: ["fill", "contain", "cover", "none", "scale-down"],
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      squareUrl:
        "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
      sizeList: ["large", "medium", "small"],
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["icon", "设置头像的图标类型，参考 Icon 组件", "string", ""],
          [
            "size",
            "设置头像的大小",
            "number/string",
            "number / large / medium / small",
            "large",
          ],
          ["shape", "设置头像的形状", "string", "circle / square", "circle"],
          ["src", "图片头像的资源地址", "string", ""],
          [
            "srcSet",
            "以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像",
            "string",
            "",
          ],
          ["alt", "描述图像的替换文本", "string", ""],
          [
            "fit",
            "当展示类型为图片的时候，设置图片如何适应容器框",
            "string",
            "fill / contain / cover / none / scale-down",
            "cover",
          ],
        ],
      },
      datas2: {
        title: "Events",
        head: ["事件名", "说明", "回调参数"],
        body: [
          [
            "error",
            "图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为",
            "(e: Event)",
          ],
        ],
      },
      datas3: {
        title: "Slot",
        head: ["名称", "说明"],
        body: [["default", "自定义头像展示内容"]],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.box{
  text-align: center;
}
</style>


