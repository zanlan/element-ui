<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <el-tabs v-model="activeName" @tab-click="handleClick1">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-divider>选项卡样式</el-divider>
    <el-tabs v-model="activeName2" type="card" @tab-click="handleClick2">
      <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-divider>卡片化</el-divider>
    <el-tabs type="border-card">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-divider>位置</el-divider>
    <el-radio-group v-model="tabPosition3" style="margin-bottom: 30px">
      <el-radio-button label="top">top</el-radio-button>
      <el-radio-button label="right">right</el-radio-button>
      <el-radio-button label="bottom">bottom</el-radio-button>
      <el-radio-button label="left">left</el-radio-button>
    </el-radio-group>

    <el-tabs :tab-position="tabPosition3" style="height: 200px">
      <el-tab-pane label="用户管理">用户管理</el-tab-pane>
      <el-tab-pane label="配置管理">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-divider>自定义标签页</el-divider>
    <el-tabs type="border-card">
      <el-tab-pane>
        <span slot="label"><i class="el-icon-date"></i> 我的行程</span>
        我的行程
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <el-divider>动态增减标签页</el-divider>
    <el-tabs
      v-model="editableTabsValue4"
      type="card"
      editable
      @edit="handleTabsEdit4"
    >
      <el-tab-pane
        :key="item.name"
        v-for="(item, index) in editableTabs4"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>
    <el-divider>自定义增加标签页触发器</el-divider>
    <div style="margin-bottom: 20px">
      <el-button size="small" @click="addTab5(editableTabsValue5)">
        add tab
      </el-button>
    </div>
    <el-tabs
      v-model="editableTabsValue5"
      type="card"
      closable
      @tab-remove="removeTab5"
    >
      <el-tab-pane
        v-for="(item, index) in editableTabs5"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        {{ item.content }}
      </el-tab-pane>
    </el-tabs>

    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick1(tab, event) {
      console.log(tab, event);
    },
    handleClick2(tab, event) {
      console.log(tab, event);
    },
    handleTabsEdit4(targetName, action) {
      if (action === "add") {
        let newTabName = ++this.tabIndex4 + "";
        this.editableTabs4.push({
          title: "New Tab",
          name: newTabName,
          content: "New Tab content",
        });
        this.editableTabsValue4 = newTabName;
      }
      if (action === "remove") {
        let tabs = this.editableTabs4;
        let activeName = this.editableTabsValue4;
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1];
              if (nextTab) {
                activeName = nextTab.name;
              }
            }
          });
        }

        this.editableTabsValue4 = activeName;
        this.editableTabs4 = tabs.filter((tab) => tab.name !== targetName);
      }
    },
    addTab5(targetName) {
      let newTabName = ++this.tabIndex5 + "";
      this.editableTabs5.push({
        title: "New Tab",
        name: newTabName,
        content: "New Tab content",
      });
      this.editableTabsValue5 = newTabName;
    },
    removeTab5(targetName) {
      let tabs = this.editableTabs5;
      let activeName = this.editableTabsValue5;
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            let nextTab = tabs[index + 1] || tabs[index - 1];
            if (nextTab) {
              activeName = nextTab.name;
            }
          }
        });
      }

      this.editableTabsValue5 = activeName;
      this.editableTabs5 = tabs.filter((tab) => tab.name !== targetName);
    },
  },
  data() {
    return {
      activeName1: "second",
      activeName2: "first",
      tabPosition3: "left",
      editableTabsValue4: "2",
      editableTabs4: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex4: 2,
      editableTabsValue5: "2",
      editableTabs5: [
        {
          title: "Tab 1",
          name: "1",
          content: "Tab 1 content",
        },
        {
          title: "Tab 2",
          name: "2",
          content: "Tab 2 content",
        },
      ],
      tabIndex5: 2,
      datas1: {
        title: "Tabs Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "value / v-model",
            "绑定值，选中选项卡的 name",
            "string",
            "—",
            "第一个选项卡的 name",
          ],
          ["type", "风格类型", "string", "card/border-card", "—"],
          ["closable", "标签是否可关闭", "boolean", "—", "false"],
          ["addable", "标签是否可增加", "boolean", "—", "false"],
          ["editable", "标签是否同时可增加和关闭", "boolean", "—", "false"],
          [
            "tab-position",
            "选项卡所在位置",
            "string",
            "top/right/bottom/left",
            "top",
          ],
          ["stretch", "标签的宽度是否自撑开", "boolean", "-", "false"],
          [
            "before-leave",
            "切换标签之前的钩子，若返回 false 或者返回 Promise 且被 reject，则阻止切换。",
            "Function(activeName, oldActiveName)",
            "—",
            "—",
          ],
        ],
      },
      datas2: {
        title: "Tabs Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["tab-click", "tab 被选中时触发", "被选中的标签 tab 实例"],
          ["tab-remove", "点击 tab 移除按钮后触发", "被删除的标签的 name"],
          ["tab-add", "点击 tabs 的新增按钮后触发", "—"],
          [
            "edit",
            "点击 tabs 的新增按钮或 tab 被关闭后触发",
            "(targetName, action)",
          ],
        ],
      },
      datas3: {
        title: "Tab-pane Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["label", "选项卡标题", "string", "—", "—"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          [
            "name",
            "与选项卡绑定值 value 对应的标识符，表示选项卡别名",
            "string",
            "—",
            "该选项卡在选项卡列表中的顺序值，如第一个选项卡则为'1'",
          ],
          ["closable", "标签是否可关闭", "boolean", "—", "false"],
          ["lazy", "标签是否延迟渲染", "boolean", "—", "false"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
</style>


