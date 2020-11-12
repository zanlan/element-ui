<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <el-dropdown>
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-divider>触发对象</el-divider>
    <el-dropdown>
      <el-button type="primary">
        更多菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-dropdown split-button type="primary" @click="handleClick">
      更多菜单
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-divider>触发方式</el-divider>
    <el-row class="block-col-2">
      <el-col :span="12">
        <span class="demonstration">hover 激活</span>
        <el-dropdown>
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus"
              >狮子头</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >螺蛳粉</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check"
              >蚵仔煎</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="12">
        <span class="demonstration">click 激活</span>
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item icon="el-icon-plus">黄金糕</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-plus"
              >狮子头</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-circle-plus-outline"
              >螺蛳粉</el-dropdown-item
            >
            <el-dropdown-item icon="el-icon-check">双皮奶</el-dropdown-item>
            <el-dropdown-item icon="el-icon-circle-check"
              >蚵仔煎</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
    </el-row>
    <el-divider>菜单隐藏方式</el-divider>
    <el-dropdown :hide-on-click="false">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-divider>指令事件</el-divider>
    <el-dropdown @command="handleCommand">
      <span class="el-dropdown-link">
        下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="a">黄金糕</el-dropdown-item>
        <el-dropdown-item command="b">狮子头</el-dropdown-item>
        <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
        <el-dropdown-item command="d" disabled>双皮奶</el-dropdown-item>
        <el-dropdown-item command="e" divided>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-divider>不同尺寸</el-divider>
    <el-dropdown split-button type="primary">
      默认尺寸
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown size="medium" split-button type="primary">
      中等尺寸
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown size="small" split-button type="primary">
      小型尺寸
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>

    <el-dropdown size="mini" split-button type="primary">
      超小尺寸
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      alert("button click");
    },
    handleCommand(command) {
      this.$message("click on item " + command);
    },
  },
  data() {
    return {
      datas1: {
        title: "Dropdown Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "type",
            "菜单按钮类型，同 Button 组件(只在split-button为 true 的情况下有效)",
            "string",
            "—",
            "—",
          ],
          [
            "size",
            "菜单尺寸，在split-button为 true 的情况下也对触发按钮生效",
            "string",
            "medium / small / mini",
            "—",
          ],
          ["split-button", "下拉触发元素呈现为按钮组", "boolean", "—", "false"],
          [
            "placement",
            "菜单弹出位置",
            "string",
            "top/top-start/top-end/bottom/bottom-start/bottom-end",
            "bottom-end",
          ],
          ["trigger", "触发下拉的行为", "string", "hover, click", "hover"],
          [
            "hide-on-click",
            "是否在点击菜单项后隐藏菜单",
            "boolean",
            "—",
            "true",
          ],
          [
            "show-timeout",
            "展开下拉菜单的延时（仅在 trigger 为 hover 时有效）",
            "number",
            "—",
            "250",
          ],
          [
            "hide-timeout",
            "收起下拉菜单的延时（仅在 trigger 为 hover 时有效）",
            "number",
            "—",
            "150",
          ],
          ["tabindex", "Dropdown 组件的 tabindex", "number", "—", "0"],
        ],
      },
      datas2: {
        title: "Dropdown Slots",
        head: ["Name", "说明"],
        body: [
          ["—", "触发下拉列表显示的元素。 注意： 必须是一个元素或者或者组件"],
          ["dropdown", "下拉列表，通常是 <el-dropdown-menu> 组件"],
        ],
      },
      datas3: {
        title: "Dropdown Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["click", "split-button 为 true 时，点击左侧按钮的回调", "—"],
          ["command", "点击菜单项触发的事件回调", "dropdown-item 的指令"],
          [
            "visible-change",
            "下拉框出现/隐藏时触发",
            "出现则为 true，隐藏则为 false",
          ],
        ],
      },
      datas4: {
        title: "Dropdown Menu Item Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["command", "指令", "string/number/object", "—", "—"],
          ["disabled", "禁用", "boolean", "—", "false"],
          ["divided", "显示分割线", "boolean", "—", "false"],
          ["icon", "图标类名", "string", "—", "—"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown {
  vertical-align: top;
}
.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.el-icon-arrow-down {
  font-size: 12px;
}

.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>


