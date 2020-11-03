<template>
  <div class="home">
    <!-- --------------------------------------------------------------------- -->
    <el-divider>基本布局</el-divider>
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <!-- --------------------------------------------------------------------- -->
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <!-- --------------------------------------------------------------------- -->
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <!-- --------------------------------------------------------------------- -->
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <!-- --------------------------------------------------------------------- -->
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <!-- --------------------------------------------------------------------- -->
    <el-divider>分栏间隔</el-divider>
    <el-row :gutter="20" class="havegap">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <!-- --------------------------------------------------------------------- -->
    <el-divider>混合布局</el-divider>
    <el-row :gutter="20" class="havegap">
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20" class="havegap">
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row :gutter="20" class="havegap">
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <!-- --------------------------------------------------------------------- -->
    <el-divider>分栏偏移</el-divider>
    <el-row :gutter="20" class="havegap">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></el-col>
    </el-row>
    <el-row :gutter="20" class="havegap">
      <el-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></el-col>
      <el-col :span="6" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></el-col>
    </el-row>
    <el-row :gutter="20" class="havegap">
      <el-col :span="12" :offset="6"
        ><div class="grid-content bg-purple"></div
      ></el-col>
    </el-row>
    <!-- --------------------------------------------------------------------- -->
    <el-divider>对齐方式</el-divider>
    <el-row type="flex" class="row-bg">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="end">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-between">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <el-row type="flex" class="row-bg" justify="space-around">
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="6"
        ><div class="grid-content bg-purple-light"></div
      ></el-col>
      <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
    <!-- --------------------------------------------------------------------- -->
    <el-divider>响应式布局</el-divider>
    <el-row :gutter="10" class="havegap">
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"><div class="grid-content bg-purple"></div></el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <!-- --------------------------------------------------------------------- -->
    <el-card>
     引入样式表 import 'element-ui/lib/theme-chalk/display.css';
      <br>
      hidden-xs-only - 当视口在 xs 尺寸时隐藏
      <br>
      hidden-sm-only - 当视口在 sm 尺寸时隐藏
      <br>
      hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏
      <br>
      hidden-sm-and-up - 当视口在 sm 及以上尺寸时隐藏
      <br>
      hidden-md-only - 当视口在 md 尺寸时隐藏
      <br>
      hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏
      <br>
      hidden-md-and-up - 当视口在 md 及以上尺寸时隐藏
      <br>
      hidden-lg-only - 当视口在 lg 尺寸时隐藏
      <br>
      hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏
      <br>
      hidden-lg-and-up - 当视口在 lg 及以上尺寸时隐藏
      <br>
      hidden-xl-only - 当视口在 xl 尺寸时隐藏
      <br>
    </el-card>
     <el-image :src="src1"></el-image>
     <el-image :src="src2"></el-image>
    
  </div>
</template>
<!-- --------------------------------------------------------------------- -->
<script>
export default {
  data(){
    return{
      src1:require("@/assets/1.png"),
      src2:require("@/assets/2.png"),
    }
  }
};
</script>
<!-- --------------------------------------------------------------------- -->
<style lang='scss' scoped>
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #696b7c;
}
.havegap{
  margin-left: 0 !important;
  margin-right: 0 !important;
}
</style>
