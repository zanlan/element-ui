<template>
  <div id="app">
    <div class="nav-wrap">
      <el-menu
        :default-active="activeIndex"
        mode="horizontal"
        @select="tabSelect"
      >
        <template v-for="(item, index) in items">
          <el-menu-item :index="String(index)">
            <router-link :to="item.path">{{ item.value }}</router-link>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "0",
    };
  },
  computed: {
    items() {
      return [
        ["/layout", "Layout布局"],
        ["/container", "Container布局容器"],
        ["/color", "Color色彩"],
        ["/typography", "Typography字体"],
        ["/border", "Border边框"],
        ["/icon", "Icon图标"],
        ["/button", "Button按钮"],
        ["/link", "Link文字链接"],
        ["/radio", "Radio单选框"],
        ["/checkbox", "Checkbox多选框"],
        ["/input", "Input输入框"],
        ["/inputNumber", "InputNumber计时器"],
        ["/select", "Select选择器"],
        ["/cascader", "Cascader级联选择器"],
        ["/switch", "Switch开关"],
        ["/slider", "Slider滑块"],
        ["/timePicker", "TimePicker时间选择器"],
        ["/datePicker", "DatePicker日期选择器"],
        ["/dateTimePicker", "DateTimePicker"],
        ["/upload", "Upload上传"],
        ["/rate", "Rate评分"],
        ["/colorPicker", "ColorPicker颜色选择器"],
        ["/transfer", "Transfer穿梭框"],
        ["/form", "Form表单"],
        ["/table", "Table表格"],
        ["/tag", "Tag标签"],
        ["/progress", "Progress进度条"],
        ["/tree", "Tree树形空间"],
        ["/pagination", "Pagination分页"],
        ["/badge", "Badge标记"],
        ["/avatar", "Avatar头像"],
        ["/alert", "Alert警告"],
        ["/loading", "Loading加载"],
        ["/message", "Message消息提示"],
        ["/messageBox", "MessageBox弹框"],
        ["/notification", "Notification通知"],
        ["/navMenu", "NavMenu导航菜单"],
        ["/tabs", "Tabs标签页"],
        ["/breadcrumb", "BreadCrumb面包屑"],
        ["/pageHeader", "PageHeader页头"],
        ["/dropdown", "Dropdown下拉菜单"],
        ["/steps", "Step步骤条"],
        ["/dialog", "Dialog对话框"],
        ["/tooltip", "Tooltip文字提示"],
        ["/popover", "Popover弹出框"],
        ["/popconfirm", "Popconfirm气泡确认框"],
        ["/card", "Card卡片"],
        ["/carousel", "Carousel走马灯"],
        ["/collapse", "Collapse折叠面板"],
        ["/timeline", "Timeline时间线"],
        ["/divider", "Divider分割线"],
        ["/calendar", "Calendar日历"],
        ["/image", "Image图片"],
        ["/backtop", "Backtop回到顶部"],
        ["/infiniteScroll", "InfiniteScroll无线滚动"],
        ["/drawer", "Drawer抽屉"],
      ].map(function (item) {
        return {
          path: item[0],
          value: item[1],
        };
      });
    },
  },
  mounted() {
    var route = window.location.hash.replace(/\//g,'');
    this.items.forEach((item, i) => {
      var regStr = '/'+item.path.slice(1)+'/g'
      var regExp = eval(regStr)
      if (regExp.test(route)) {
        this.activeIndex = String(i);
      }
    });
  },
  methods: {
    tabSelect(a, b) {
      console.log("a,b: ", a, b);
    },
  },
};
</script>
<style lang="scss" scoped>
#app {
  padding: 50px;
  border: 2px solid purple;
  box-sizing: border-box;
  min-height: 1000px;
}
.el-menu--horizontal.el-menu > li > a {
  display: block;
  text-decoration: none;
}
.el-menu--horizontal > .el-menu-item {
  margin: 2px;
  background: rgba(163, 60, 60, 0.2);
}
.el-menu--horizontal > .el-menu-item.is-active {
  background: rgb(255, 0, 0);
}
</style>

