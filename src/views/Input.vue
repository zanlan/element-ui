<template>
  <div class="box">
    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>基本用法</el-divider>
    <div>@keyup.13 可以使用keycode码</div>
    <div>
      @keyup.enter.alt.ctrl.shift.esc.space.left.right.top.bottom.tab.delete
      组合键
    </div>
    <div>@keyup.enter.native 如果使用在封装组件内 则后面需要加native</div>
    <el-input
      v-model="input0"
      placeholder="请输入内容"
      @keyup.enter.native="enterfun"
    ></el-input>
    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>禁用状态</el-divider>
    <el-input placeholder="请输入内容" v-model="input2" :disabled="true">
    </el-input>
    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>可清空</el-divider>
    <el-input placeholder="请输入内容" v-model="input3" clearable> </el-input>
    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>密码框</el-divider>
    <el-input
      placeholder="请输入密码"
      v-model="input4"
      show-password
    ></el-input>
    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>带icon的输入框</el-divider>
    <div class="demo-input-suffix">
      属性方式：
      <el-input
        placeholder="请选择日期"
        suffix-icon="el-icon-date"
        v-model="input1"
      >
      </el-input>
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="input2"
      >
      </el-input>
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <el-input placeholder="请选择日期" v-model="input3">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>文本域</el-divider>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入内容"
      v-model="textarea"
    >
    </el-input>
    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>可以自适应文本高度文本域</el-divider>
    <el-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="textarea1"
    >
    </el-input>
    <div style="margin: 20px 0"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="请输入内容"
      v-model="textarea2"
    >
    </el-input>

    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>复合型输入框</el-divider>
    <div>
      <el-input placeholder="请输入内容" v-model="input5">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>
    <div style="margin-top: 15px">
      <el-input placeholder="请输入内容" v-model="input6">
        <template slot="append">.com</template>
      </el-input>
    </div>
    <div style="margin-top: 15px">
      <el-input
        placeholder="请输入内容"
        v-model="input7"
        class="input-with-select"
      >
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>尺寸</el-divider>
    <el-input
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input8"
    >
    </el-input>
    <br />
    <el-input
      size="large"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input9"
    >
    </el-input>
    <br />
    <el-input
      size="medium"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input10"
    >
    </el-input>
    <br />
    <el-input
      size="small"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input11"
    >
    </el-input>
    <br />
    <el-input
      size="mini"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input12"
    >
    </el-input>

    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>带输入建议</el-divider>
    <el-row>
      <div class="sub-title">激活即列出输入建议</div>
      <el-autocomplete
        class="inline-input"
        v-model="state1"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect"
      ></el-autocomplete>
    </el-row>
    <el-row>
      <div class="sub-title">输入后匹配输入建议</div>
      <el-autocomplete
        class="inline-input"
        v-model="state2"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        :trigger-on-focus="false"
        @select="handleSelect"
      ></el-autocomplete>
    </el-row>
    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>自定义模板</el-divider>
    <el-autocomplete
      popper-class="my-autocomplete"
      v-model="state3"
      :fetch-suggestions="querySearch3"
      placeholder="请输入内容"
      @select="handleSelect3"
    >
      <i
        class="el-icon-edit el-input__icon"
        slot="suffix"
        @click="handleIconClick3"
      >
      </i>
      <template slot-scope="{ item }">
        <div class="name">{{ item.value }}</div>
        <span class="addr">{{ item.address }}</span>
      </template>
    </el-autocomplete>
    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>远程搜索</el-divider>
    <el-autocomplete
      v-model="state4"
      :fetch-suggestions="querySearchAsync4"
      placeholder="请输入内容"
      @select="handleSelect4"
    ></el-autocomplete>
    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>输入长度限制</el-divider>
    <el-input
      type="text"
      placeholder="请输入内容"
      v-model="text5"
      maxlength="10"
      show-word-limit
    >
    </el-input>
    <div style="margin: 20px 0"></div>
    <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="textarea5"
      maxlength="30"
      show-word-limit
    >
    </el-input>

    <!-- ------------------------------------------------------------------------------- -->
    <el-divider>参数</el-divider>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
    <zl-table :datas="datas5" key="5"></zl-table>
    <zl-table :datas="datas6" key="6"></zl-table>
    <zl-table :datas="datas7" key="7"></zl-table>
    <zl-table :datas="datas8" key="8"></zl-table>
    <zl-table :datas="datas9" key="9"></zl-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input0: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      textarea: "",
      textarea1: "",
      textarea2: "",
      input5: "",
      input6: "",
      input7: "",
      select: "",
      input8: "默认",
      input9: "large",
      input10: "medium",
      input11: "small",
      input12: "mini",
      restaurants: [],
      state1: "",
      state2: "",
      restaurants3: [],
      state3: "",
      restaurants4: [],
      state4: "",
      timeout4: null,
      text5: "",
      textarea5: "",
      datas1: {
        title: "Input Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "type",
            "类型",
            "string",
            "text，textarea 和其他 原生 input 的 type 值",
            "text",
          ],
          ["value / v-model", "绑定值", "string / number", "—", "—"],

          ["maxlength", "原生属性，最大输入长度", "number", "—", "—"],
          ["minlength", "原生属性，最小输入长度", "number", "—", "—"],
          [
            "show-word-limit",
            "是否显示输入字数统计，只在 type = 'text' 或 type = 'textarea' 时有效",
            "boolean",
            "—",
            "false",
          ],
          ["placeholder", "输入框占位文本", "string", "—", "—"],
          ["clearable", "是否可清空", "boolean", "—", , "false"],
          ["show-password", "是否显示切换密码图标", "boolean", "—", "false"],
          ["disabled", "禁用", "boolean", "—", "false"],
          [
            "size",
            "输入框尺寸，只在 type!='textarea' 时有效",
            "string",
            "medium / small / mini",
            "—",
          ],
          ["prefix-icon", "输入框头部图标", "string", "—", "—"],
          ["suffix-icon", "输入框尾部图标", "string", "—", "—"],
          ["rows", "输入框行数，只对 type='textarea' 有效", "number", "—", "2"],
          [
            "autosize",
            '自适应内容高度，只对 type="textarea" 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }',
            "boolean / object",
            "—",
            "false",
          ],
          ["autocomplete	原生属性，自动补全", "string", "on, off", "off"],
          ["auto-complete", "下个主版本弃用", "string", "on, off", "off"],
          ["name", "原生属性", "string", "—", "—"],
          ["readonly", "原生属性，是否只读", "boolean", "—", "false"],
          ["max", "原生属性，设置最大值", "—", "—", "—"],
          ["min", "原生属性，设置最小值", "—", "—", "—"],
          ["step", "原生属性，设置输入字段的合法数字间隔", "—", "—", "—"],
          [
            "resize",
            "控制是否能被用户缩放",
            "string",
            "none, both, horizontal, vertical",
            "—",
          ],
          [
            "autofocus",
            "原生属性，自动获取焦点",
            "boolean",
            "true, false",
            "false",
          ],
          ["form", "原生属性", "string", "—", "—"],
          ["label", "输入框关联的label文字", "string", "—", "—"],
          ["tabindex", "输入框的tabindex", "string", "-", "-"],
          [
            "validate-event",
            "输入时是否触发表单的校验",
            "boolean",
            "-",
            "true",
          ],
        ],
      },
      datas2: {
        title: "Input Slots",
        head: ["name", "说明"],
        body: [
          ["prefix", "输入框头部内容，只对 type='text' 有效"],
          ["suffix", '输入框尾部内容，只对 type="text" 有效'],
          ["prepend", '输入框前置内容，只对 type="text" 有效'],
          ["append", '输入框后置内容，只对 type="text" 有效'],
        ],
      },
      datas3: {
        title: "Input Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["blur", "在 Input 失去焦点时触发", "(event: Event)"],
          ["focus", "在 Input 获得焦点时触发", "(event: Event)"],
          [
            "change",
            "仅在输入框失去焦点或用户按下回车时触发",
            "(value: string | number)",
          ],
          ["input", "在 Input 值改变时触发", "(value: string | number)"],
          ["clear", "在点击由 clearable 属性生成的清空按钮时触发", "—"],
        ],
      },
      datas4: {
        title: "Input Methods",
        head: ["方法名", "说明", "参数"],
        body: [
          ["focus", "使 input 获取焦点", "—"],
          ["blur", "使 input 失去焦点", "—"],
          ["select", "选中 input 中的文字", "—"],
        ],
      },
      datas5: {
        title: "Autocomplete Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["placeholder", "输入框占位文本", "string", "—", "—"],
          ["disabled", "禁用", "boolean", "—", "false"],
          ["value-key", "输入建议对象中用于显示的键名", "string", "—", "value"],
          ["value", "必填值，输入绑定值", "string", "—", "—"],
          ["debounce", "获取输入建议的去抖延时", "number", "—", "300"],
          [
            "placement",
            "菜单弹出位置",
            "string",
            "top / top-start / top-end / bottom / bottom-start / bottom-end",
            "bottom-start",
          ],
          [
            "fetch-suggestions",
            "返回输入建议的方法，仅当你的输入建议数据 resolve 时，通过调用 callback(data:[]) 来返回它",
            "Function(queryString, callback)",
            "—",
            "—",
          ],
          [
            "popper-class",
            "Autocomplete",
            "下拉列表的类名",
            "string",
            "—",
            "—",
          ],
          [
            "trigger-on-focus",
            "是否在输入框 focus 时显示建议列表",
            "boolean",
            "—",
            "true",
          ],
          ["name", "原生属性", "string", "—", "—"],
          [
            "select-when-unmatched",
            "在输入没有任何匹配建议的情况下，按下回车是否触发 select 事件",
            "boolean",
            "—",
            "false",
          ],
          ["label", "输入框关联的label文字", "string", "—", "—"],
          ["prefix-icon", "输入框头部图标", "string", "—", "—"],
          ["suffix-icon", "输入框尾部图标", "string", "—", "—"],
          [
            "hide-loading",
            "是否隐藏远程加载时的加载图标",
            "boolean",
            "—",
            "false",
          ],
          [
            "popper-append-to-body",
            "是否将下拉列表插入至 body 元素。在下拉列表的定位出现问题时，可将该属性设置为 false",
            "boolean",
            "-",
            true,
          ],
          [
            "highlight-first-item",
            "是否默认突出显示远程搜索建议中的第一项",
            "boolean",
            "—",
            "false",
          ],
        ],
      },
      datas6: {
        title: "Autocomplete Slots",
        head: ["name", "说明"],
        body: [
          ["prefix", "输入框头部内容"],
          ["suffix", "输入框尾部内容"],
          ["prepend", "输入框前置内容"],
          ["append", "输入框后置内容"],
        ],
      },
      datas7: {
        title: " Autocomplete Scoped Slot",
        head: ["name", "说明"],
        body: [["—", "自定义输入建议，参数为 { item }"]],
      },
      datas8: {
        title: "Autocomplete Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          ["select", "点击选中建议项时触发", "选中建议项"],
          ["change", "在 Input 值改变时触发", "(value: string | number)"],
        ],
      },
      datas9: {
        title: "Autocomplete Methods",
        head: ["方法名", "说明", "参数"],
        body: [["focus", "使 input 获取焦点", "-"]],
      },
    };
  },
  methods: {
    enterfun(v) {
      console.log(v);
    },
    querySearch(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createFilter(queryString))
        : restaurants;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
      ];
    },
    handleSelect(item) {
      console.log(item);
    },
    querySearch3(queryString, cb) {
      var restaurants3 = this.restaurants3;
      var results = queryString
        ? restaurants3.filter(this.createFilter3(queryString))
        : restaurants3;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    createFilter3(queryString) {
      return (restaurant) => {
        return (
          restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
          0
        );
      };
    },
    loadAll3() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
      ];
    },
    handleSelect3(item) {
      console.log(item);
    },
    handleIconClick3(ev) {
      console.log(ev);
    },

    loadAll4() {
      return [
        { value: "三全鲜食（北新泾店）", address: "长宁区新渔路144号" },
        {
          value: "Hot honey 首尔炸鸡（仙霞路）",
          address: "上海市长宁区淞虹路661号",
        },
      ];
    },
    querySearchAsync4(queryString, cb) {
      var restaurants = this.restaurants4;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 2000 * Math.random());
    },
    createStateFilter4(queryString) {
      return (state) => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect4(item) {
      console.log(item);
    },
  },
  mounted() {
    this.restaurants = this.loadAll();
    this.restaurants3 = this.loadAll3();
    this.restaurants4 = this.loadAll4();
  },
};
</script>
<style lang="scss" scoped>
.box {
  text-align: center;
}
.el-input,
.el-textarea {
  margin: 10px;
  width: 500px !important;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.my-autocomplete {
  li {
    line-height: normal;
    padding: 7px;
    .name {
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 16px;
    }
    .addr {
      font-size: 12px;
      color: red;
    }

    .highlighted .addr {
      color: #ddd;
    }
  }
}
</style>