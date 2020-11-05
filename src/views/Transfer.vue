<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <el-transfer v-model="value1" :data="data1"></el-transfer>
    <el-divider>可搜索</el-divider>
    <el-transfer
      filterable
      :filter-method="filterMethod2"
      filter-placeholder="请输入城市拼音"
      v-model="value2"
      :data="data2"
    >
    </el-transfer>

    <el-divider>可自定义</el-divider>

    <p style="text-align: center; margin: 0 0 20px">
      使用 render-content 自定义数据项
    </p>
    <div style="text-align: center">
      <el-transfer
        style="text-align: left; display: inline-block"
        v-model="value3"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc3"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        @change="handleChange3"
        :data="data3"
      >
        <el-button class="transfer-footer" slot="left-footer" size="small"
          >操作</el-button
        >
        <el-button class="transfer-footer" slot="right-footer" size="small"
          >操作</el-button
        >
      </el-transfer>
    </div>
    <p style="text-align: center; margin: 50px 0 20px">
      使用 scoped-slot 自定义数据项
    </p>
    <div style="text-align: center">
      <el-transfer
        style="text-align: left; display: inline-block"
        v-model="value4"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :button-texts="['到左边', '到右边']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        @change="handleChange3"
        :data="data3"
      >
        <span slot-scope="{ option }"
          >{{ option.key }} - {{ option.label }}</span
        >
        <el-button class="transfer-footer" slot="left-footer" size="small"
          >操作</el-button
        >
        <el-button class="transfer-footer" slot="right-footer" size="small"
          >操作</el-button
        >
      </el-transfer>
    </div>

    <el-divider>数据项属性别名</el-divider>
    <el-transfer
      v-model="value5"
      :props="{
        key: 'value',
        label: 'desc',
      }"
      :data="data5"
    >
    </el-transfer>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
    <zl-table :datas="datas5" key="5"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleChange3(value, direction, movedKeys) {
      console.log(value, direction, movedKeys);
    },
  },
  data() {
    const generateData1 = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    const generateData2 = (_) => {
      const data = [];
      const cities = ["上海", "北京", "广州", "深圳", "南京", "西安", "成都"];
      const pinyin = [
        "shanghai",
        "beijing",
        "guangzhou",
        "shenzhen",
        "nanjing",
        "xian",
        "chengdu",
      ];
      cities.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index],
        });
      });
      return data;
    };
    const generateData3 = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          key: i,
          label: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    const generateData5 = (_) => {
      const data = [];
      for (let i = 1; i <= 15; i++) {
        data.push({
          value: i,
          desc: `备选项 ${i}`,
          disabled: i % 4 === 0,
        });
      }
      return data;
    };
    return {
      
      data1: generateData1(),
      data2: generateData2(),
      data3: generateData3(),
      data5: generateData5(),
      value5: [],
      value1: [1, 4],
      value2: [],
      filterMethod2(query, item) {
        return item.pinyin.indexOf(query) > -1;
      },
      value3: [1],
      value4: [1],
      renderFunc3(h, option) {
        return (
          <span>
            {option.key} - {option.label}
          </span>
        );
      },
      datas1: {
        title: "Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "array", "—", "—"],
          [
            "data",
            "Transfer 的数据源",
            "array[{ key, label, disabled }]",
            "—",
            "[ ]",
          ],
          ["filterable", "是否可搜索", "boolean", "—", "false"],
          [
            "filter-placeholder",
            "搜索框占位符",
            "string",
            "—",
            "请输入搜索内容",
          ],
          ["filter-method", "自定义搜索方法", "function", "—", "—"],
          [
            "target-order",
            "右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前",
            "string",
            "original / push / unshift",
            "original",
          ],
          ["titles", "自定义列表标题", "array", "—", "['列表 1', '列表 2']"],
          ["button-texts", "自定义按钮文案", "array", "—", "[ ]"],
          [
            "render-content",
            "自定义数据项渲染函数",
            "function(h, option)",
            "—",
            "—",
          ],
          [
            "format",
            "列表顶部勾选状态文案",
            "object{noChecked, hasChecked}",
            "—",
            "{ noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' }",
          ],
          [
            "props",
            "数据源的字段别名",
            "object{key, label, disabled}",
            "—",
            "—",
          ],
          [
            "left-default-checked",
            "初始状态下左侧列表的已勾选项的 key 数组",
            "array",
            "—",
            "[ ]",
          ],
          [
            "right-default-checked",
            "初始状态下右侧列表的已勾选项的 key 数组",
            "array",
            "—",
            "[ ]",
          ],
        ],
      },

      datas2: {
        title: "Slot",
        head: ["name", "说明"],
        body: [
          ["left-footer", "左侧列表底部的内容"],
          ["right-footer", "右侧列表底部的内容"],
        ],
      },

      datas3: {
        title: "Scoped Slot",
        head: ["name", "说明"],
        body: [["—", "自定义数据项的内容，参数为 { option }"]],
      },

      datas4: {
        title: "Methods",
        head: ["方法名", "说明", "参数"],
        body: [
          [
            "clearQuery",
            "清空某个面板的搜索关键词",
            "'left' / 'right'，指定需要清空的面板",
          ],
        ],
      },
      datas5: {
        title: "Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          [
            "change",
            "右侧列表元素变化时触发",
            "当前值、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组",
          ],
          [
            "left-check-change",
            "左侧列表元素被用户选中 / 取消选中时触发",
            "当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组",
          ],
          [
            "right-check-change",
            "右侧列表元素被用户选中 / 取消选中时触发",
            "当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组",
          ],
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
}
</style>