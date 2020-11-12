<template>
  <div class="box">
    <el-divider>顶栏</el-divider>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect1"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      >
    </el-menu>
    <div class="line"></div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">处理中心</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的工作台</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>消息中心</el-menu-item>
      <el-menu-item index="4"
        ><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item
      >
    </el-menu>
    <el-divider>侧栏</el-divider>
    <el-row class="tac">
      <el-col :span="12">
        <h5>默认颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen2"
          @close="handleClose2"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="12">
        <h5>自定义颜色</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen2"
          @close="handleClose2"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-divider>折叠</el-divider>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      @open="handleOpen3"
      @close="handleClose3"
      :collapse="isCollapse"
    >
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <span slot="title">分组一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <span slot="title">选项4</span>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>

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
  methods: {
    handleSelect1(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen2(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose2(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen3(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose3(key, keyPath) {
      console.log(key, keyPath);
    },
  },
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      isCollapse: true,
      datas1: {
        title: "Menu Attribute",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["mode", "模式", "string", "horizontal / vertical", "vertical"],
          [
            "collapse",
            "是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）",
            "boolean",
            "—",
            "false",
          ],
          [
            "background-color",
            "菜单的背景色（仅支持 hex 格式）",
            "string",
            "—",
            "#ffffff",
          ],
          [
            "text-color",
            "菜单的文字颜色（仅支持 hex 格式）",
            "string",
            "—",
            "#303133",
          ],
          [
            "active-text-color",
            "当前激活菜单的文字颜色（仅支持 hex 格式）",
            "string",
            "—",
            "#409EFF",
          ],
          ["default-active", "当前激活菜单的 index", "string", "—", "—"],
          [
            "default-openeds",
            "当前打开的 sub-menu 的 index 的数组",
            "Array",
            "—",
            "—",
          ],
          [
            "unique-opened",
            "是否只保持一个子菜单的展开",
            "boolean",
            "—",
            "false",
          ],
          [
            "menu-trigger",
            "子菜单打开的触发方式(只在 mode 为 horizontal 时有效)",
            "string",
            "hover / click",
            "hover",
          ],
          [
            "router",
            "是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转",
            "boolean",
            "—",
            "false",
          ],
          ["collapse-transition", "是否开启折叠动画", "boolean", "—", "true"],
        ],
      },
      datas2: {
        title: "Menu Methods",
        head: ["方法名称", "说明", "参数"],
        body: [
          [
            "open",
            "展开指定的 sub-menu",
            "index: 需要打开的 sub-menu 的 index",
          ],
          [
            "close",
            "收起指定的 sub-menu",
            "index: 需要收起的 sub-menu 的 index",
          ],
        ],
      },
      datas3: {
        title: "Menu Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          [
            "select",
            "菜单激活回调",
            "index: 选中菜单项的 index, indexPath: 选中菜单项的 index path",
          ],
          [
            "open",
            "sub-menu 展开的回调",
            "index: 打开的 sub-menu 的 index， indexPath: 打开的 sub-menu 的 index path",
          ],
          [
            "close",
            "sub-menu 收起的回调",
            "index: 收起的 sub-menu 的 index， indexPath: 收起的 sub-menu 的 index path",
          ],
        ],
      },
      datas4: {
        title: "SubMenu Attribute",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["index", "唯一标志", "string/null", "—", "null"],
          ["popper-class", "弹出菜单的自定义类名", "string", "—", "—"],
          ["show-timeout", "展开 sub-menu 的延时", "number", "—", "300"],
          ["hide-timeout", "收起 sub-menu 的延时", "number", "—", "300"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          [
            "popper-append-to-body",
            "是否将弹出菜单插入至 body 元素。在菜单的定位出现问题时，可尝试修改该属性",
            "boolean",
            "—",
            "一级子菜单：true / 非一级子菜单：false",
          ],
        ],
      },
      datas5: {
        title: "Menu-Item Attribute",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["index", "唯一标志", "string", "—", "—"],
          ["route", "Vue Router 路径对象", "Object", "—", "—"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
        ],
      },
      datas6: {
        title: "Menu-Group Attribute",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [["title", "分组标题", "string", "—", "—"]],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>


