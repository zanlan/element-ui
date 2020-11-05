<template>
  <div class="box">
    <el-divider>基础用法</el-divider>
    <el-select v-model="value1" placeholder="请选择">
      <el-option
        v-for="item in options1"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-divider>有禁用选项</el-divider>
    <el-select v-model="value2" placeholder="请选择">
      <el-option
        v-for="item in options2"
        :key="item.value"
        :label="item.label"
        :value="item.value"
        :disabled="item.disabled"
      >
      </el-option>
    </el-select>

    <el-divider>禁用状态</el-divider>
    <el-select v-model="value3" disabled placeholder="请选择">
      <el-option
        v-for="item in options3"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-divider>可清空单选</el-divider>
    <el-select v-model="value4" clearable placeholder="请选择">
      <el-option
        v-for="item in options4"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-divider>可清空单选</el-divider>
    <el-select v-model="value5" clearable placeholder="请选择">
      <el-option
        v-for="item in options5"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-divider>基础多选</el-divider>
    <el-select v-model="value6" multiple placeholder="请选择">
      <el-option
        v-for="item in options6"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-select
      v-model="value7"
      multiple
      collapse-tags
      style="margin-left: 20px"
      placeholder="请选择"
    >
      <el-option
        v-for="item in options7"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-divider>自定义模板</el-divider>
    <el-select v-model="value8" placeholder="请选择">
      <el-option
        v-for="item in options8"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{
          item.value
        }}</span>
      </el-option>
    </el-select>

    <el-divider>分组</el-divider>
    <el-select v-model="value9" placeholder="请选择">
      <el-option-group
        v-for="group in options9"
        :key="group.label"
        :label="group.label"
      >
        <el-option
          v-for="item in group.options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-option-group>
    </el-select>

    <el-divider>可搜索</el-divider>
    <el-select v-model="value10" filterable placeholder="请选择">
      <el-option
        v-for="item in options10"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <el-divider>可远程搜索</el-divider>
    <el-select
      v-model="value11"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod11"
      :loading="loading11"
    >
      <el-option
        v-for="item in options11"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <el-divider>创建条目</el-divider>
    <el-select
      v-model="value12"
      multiple
      filterable
      allow-create
      default-first-option
      placeholder="请选择文章标签"
    >
      <el-option
        v-for="item in options12"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    <zl-table :datas="datas1" key="11"></zl-table>
    <zl-table :datas="datas2" key="22"></zl-table>
    <zl-table :datas="datas3" key="33"></zl-table>
    <zl-table :datas="datas4" key="44"></zl-table>
    <zl-table :datas="datas5" key="55"></zl-table>
    <zl-table :datas="datas6" key="66"></zl-table>
  </div>
</template>
<script>
export default {
  mounted() {
    this.list11 = this.states11.map((item) => {
      return { value: `value:${item}`, label: `label:${item}` };
    });
  },
  methods: {
    remoteMethod11(query) {
      if (query !== "") {
        this.loading11 = true;
        setTimeout(() => {
          this.loading11 = false;
          this.options11 = this.list11.filter((item) => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options11 = [];
      }
    },
  },
  data() {
    return {
      options12: [
        {
          value: "HTML",
          label: "HTML",
        },
        {
          value: "CSS",
          label: "CSS",
        },
        {
          value: "JavaScript",
          label: "JavaScript",
        },
      ],
      value12: [],
      options11: [],
      value11: [],
      list11: [],
      loading11: false,
      states11: ["Alabama", "Alaska", "Wisconsin", "Wyoming"],

      options10: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value10: "",
      options9: [
        {
          label: "热门城市",
          options: [
            {
              value: "Shanghai",
              label: "上海",
            },
            {
              value: "Beijing",
              label: "北京",
            },
          ],
        },
        {
          label: "城市名",
          options: [
            {
              value: "Chengdu",
              label: "成都",
            },
            {
              value: "Shenzhen",
              label: "深圳",
            },
            {
              value: "Guangzhou",
              label: "广州",
            },
            {
              value: "Dalian",
              label: "大连",
            },
          ],
        },
      ],
      value9: "",
      options1: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value1: "",

      options2: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true,
        },
      ],
      value2: "",

      options3: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value3: "",

      options4: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value4: "",

      options5: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value5: "",

      options6: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      options7: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
      ],
      value6: [],
      value7: [],

      options8: [
        {
          value: "Beijing",
          label: "北京",
        },
        {
          value: "Shanghai",
          label: "上海",
        },
      ],
      value8: "",
      datas1: {
        title: "Select Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value / v-model", "绑定值", "boolean / string / number", "—", "—"],
          ["multiple", "是否多选", "boolean", "—", "false"],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          [
            "value-key",
            "作为 value 唯一标识的键名，绑定值为对象类型时必填",
            "string",
            "—",
            "value",
          ],
          ["size", "输入框尺寸", "string", "medium/small/mini", "—"],
          ["clearable", "是否可以清空选项", "boolean", "—", "false"],
          [
            "collapse-tags",
            "多选时是否将选中值按文字的形式展示",
            "boolean",
            "—",
            "false",
          ],
          [
            "multiple-limit",
            "多选时用户最多可以选择的项目数，为 0 则不限制",
            "number",
            "—",
            "0",
          ],
          ["name", "select input 的 name 属性", "string", "—", "—"],
          [
            "autocomplete",
            "select input 的 autocomplete 属性",
            "string",
            "—",
            "off",
          ],
          ["auto-complete", "下个主版本弃用", "string", "—", "off"],
          ["placeholder", "占位符", "string", "—", "请选择"],
          ["filterable", "是否可搜索", "boolean", "—", "false"],
          [
            "allow-create",
            "是否允许用户创建新条目，需配合 filterable 使用",
            "boolean",
            "—",
            "false",
          ],
          ["filter-method", "自定义搜索方法", "function", "—", "—"],
          ["remote", "是否为远程搜索", "boolean", "—", "false"],
          ["remote-method", "远程搜索方法", "function", "—", "—"],
          ["loading", "是否正在从远程获取数据", "boolean", "—", "false"],
          ["loading-text", "远程加载时显示的文字", "string", "—", "加载中"],
          [
            "no-match-text",
            '搜索条件无匹配时显示的文字，也可以使用slot="empty"设置',
            "string",
            "—",
            "无匹配数据",
          ],
          [
            "no-data-text",
            '选项为空时显示的文字，也可以使用slot="empty"设置',
            "string",
            "—",
            "无数据",
          ],
          ["popper-class", "Select 下拉框的类名", "string", "—", "—"],
          [
            "reserve-keyword",
            "多选且可搜索时，是否在选中一个选项后保留当前的搜索关键词",
            "boolean",
            "—",
            "false",
          ],
          [
            "default-first-option",
            "在输入框按下回车，选择第一个匹配项。需配合 filterable 或 remote 使用",
            "boolean",
            "-",
            "false",
          ],
          [
            "popper-append-to-body",
            "是否将弹出框插入至 body 元素。在弹出框的定位出现问题时，可将该属性设置为 false",
            "boolean",
            "-",
            "true",
          ],
          [
            "automatic-dropdown",
            "对于不可搜索的 Select，是否在输入框获得焦点后自动弹出选项菜单",
            "boolean",
            "-",
            "false",
          ],
        ],
      },
      datas2: {
        title: "Select Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["change", "选中值发生变化时触发", "目前的选中值"],
          [
            "visible-change",
            "下拉框出现/隐藏时触发",
            "出现则为 true，隐藏则为 false",
          ],
          ["remove-tag", "多选模式下移除tag时触发", "移除的tag值"],
          ["clear", "可清空的单选模式下用户点击清空按钮时触发", "—"],
          ["blur", "当 input 失去焦点时触发", "(event: Event)"],
          ["focus", "当 input 获得焦点时触发", "(event: Event)"],
        ],
      },
      datas3: {
        title: "Select Slots",
        head: ["name", "说明"],
        body: [
          ["—", "Option 组件列表"],
          ["prefix", "Select 组件头部内容"],
          ["empty", "无选项时的列表"],
        ],
      },
      datas4: {
        title: "Option Group Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["label", "分组的组名", "string", "—", "—"],
          [
            "disabled",
            "是否将该分组下所有选项置为禁用",
            "boolean",
            "—",
            "false",
          ],
        ],
      },
      datas5: {
        title: "Option Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["value", "选项的值", "string/number/object", "—", "—"],
          [
            "label",
            "选项的标签，若不设置则默认与 value 相同",
            "string/number",
            "—",
            "—",
          ],
          ["disabled", "是否禁用该选项", "boolean", "—", "false"],
        ],
      },
      datas6: {
        title: "Methods",
        head: ["方法名", "说明", "参数"],
        body: [
          ["focus", "使 input 获取焦点", "-"],
          ["blur", "使 input 失去焦点，并隐藏下拉框", "-"],
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.box {
  text-align: center;
}
</style>
