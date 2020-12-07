<template>
  <div class="box">
    <el-divider>典型表单</el-divider>
    <el-form ref="form" :model="form1" label-width="80px">
      <el-form-item label="活动名称">
        <el-input v-model="form1.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="form1.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form1.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="form1.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form1.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form1.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form1.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form1.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit1">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-divider>行内表单</el-divider>
    <el-form :inline="true" :model="formInline2" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline2.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline2.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit2">查询</el-button>
      </el-form-item>
    </el-form>
    <el-divider>对齐方式</el-divider>
    <el-radio-group v-model="labelPosition3" size="small">
      <el-radio-button label="left">左对齐</el-radio-button>
      <el-radio-button label="right">右对齐</el-radio-button>
      <el-radio-button label="top">顶部对齐</el-radio-button>
    </el-radio-group>
    <div style="margin: 20px"></div>
    <el-form
      :label-position="labelPosition3"
      label-width="80px"
      :model="formLabelAlign3"
    >
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign3.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign3.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign3.type"></el-input>
      </el-form-item>
    </el-form>
    <el-divider>表单验证</el-divider>
    <el-form
      :model="ruleForm4"
      :rules="rules4"
      ref="ruleForm4"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm4.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" prop="region">
        <el-select v-model="ruleForm4.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间" required>
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm4.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker
              placeholder="选择时间"
              v-model="ruleForm4.date2"
              style="width: 100%"
            ></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm4.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm4.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm4.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm4.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm4('ruleForm4')"
          >立即创建</el-button
        >
        <el-button @click="resetForm4('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>

    <el-divider>自定义校验规则</el-divider>
    <el-form
      :model="ruleForm5"
      status-icon
      :rules="rules5"
      ref="ruleForm5"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="密码" prop="pass">
        <el-input
          type="password"
          v-model="ruleForm5.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input
          type="password"
          v-model="ruleForm5.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model.number="ruleForm5.age"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm5('ruleForm5')"
          >提交</el-button
        >
        <el-button @click="resetForm5('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-divider>动态增减表单项</el-divider>
    <el-form
      :model="dynamicValidateForm6"
      ref="dynamicValidateForm6"
      label-width="100px"
      class="demo-dynamic"
    >
      <el-form-item
        prop="email"
        label="邮箱"
        :rules="[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input v-model="dynamicValidateForm6.email"></el-input>
      </el-form-item>
      <el-form-item
        v-for="(domain, index) in dynamicValidateForm6.domains"
        :label="'域名' + index"
        :key="domain.key"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          message: '域名不能为空',
          trigger: 'blur',
        }"
      >
        <el-input v-model="domain.value"></el-input
        ><el-button @click.prevent="removeDomain6(domain)">删除</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm6('dynamicValidateForm6')"
          >提交</el-button
        >
        <el-button @click="addDomain6">新增域名</el-button>
        <el-button @click="resetForm6('dynamicValidateForm6')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-divider>数字类型验证</el-divider>
    <el-form
      :model="numberValidateForm7"
      ref="numberValidateForm7"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="年龄"
        prop="age"
        :rules="[
          { required: true, message: '年龄不能为空' },
          { type: 'number', message: '年龄必须为数字值' },
        ]"
      >
        <el-input
          type="age"
          v-model.number="numberValidateForm7.age"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm7('numberValidateForm7')"
          >提交</el-button
        >
        <el-button @click="resetForm7('numberValidateForm7')">重置</el-button>
      </el-form-item>
    </el-form>

    <el-divider>表单内组件尺寸控制</el-divider>
    <el-form ref="form" :model="sizeForm8" label-width="80px" size="mini">
      <el-form-item label="活动名称">
        <el-input v-model="sizeForm8.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="sizeForm8.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="活动时间">
        <el-col :span="11">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="sizeForm8.date1"
            style="width: 100%"
          ></el-date-picker>
        </el-col>
        <el-col class="line" :span="2">-</el-col>
        <el-col :span="11">
          <el-time-picker
            placeholder="选择时间"
            v-model="sizeForm8.date2"
            style="width: 100%"
          ></el-time-picker>
        </el-col>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="sizeForm8.type">
          <el-checkbox-button
            label="美食/餐厅线上活动"
            name="type"
          ></el-checkbox-button>
          <el-checkbox-button label="地推活动" name="type"></el-checkbox-button>
          <el-checkbox-button
            label="线下主题活动"
            name="type"
          ></el-checkbox-button>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="sizeForm8.resource" size="medium">
          <el-radio border label="线上品牌商赞助"></el-radio>
          <el-radio border label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="onSubmit8">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
    <zl-table :datas="datas4" key="4"></zl-table>
    <zl-table :datas="datas5" key="5"></zl-table>
    <zl-table :datas="datas6" key="6"></zl-table>
    <zl-table :datas="datas7" key="7"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit8() {
      console.log("submit!");
    },
    submitForm6(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm6(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain6(item) {
      var index = this.dynamicValidateForm6.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm6.domains.splice(index, 1);
      }
    },
    addDomain6() {
      this.dynamicValidateForm6.domains.push({
        value: "",
        key: Date.now(),
      });
    },
    onSubmit1() {
      console.log("submit!");
    },
    onSubmit2() {
      console.log("submit!");
    },
    submitForm4(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm4(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm5(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm5(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm7(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm7(formName) {
      this.$refs[formName].resetFields();
    },
  },
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm5.checkPass !== "") {
          this.$refs.ruleForm5.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm5.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      sizeForm8: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      numberValidateForm7: {
        age: "",
      },
      dynamicValidateForm6: {
        domains: [
          {
            value: "",
          },
        ],
        email: "",
      },
      ruleForm5: {
        pass: "",
        checkPass: "",
        age: "",
      },
      rules5: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
      },
      ruleForm4: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      rules4: {
        name: [
          { required: true, message: "请输入活动名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
        ],
        region: [
          { required: true, message: "请选择活动区域", trigger: "change" },
        ],
        date1: [
          {
            type: "date",
            required: true,
            message: "请选择日期",
            trigger: "change",
          },
        ],
        date2: [
          {
            type: "date",
            required: true,
            message: "请选择时间",
            trigger: "change",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
            trigger: "change",
          },
        ],
        resource: [
          { required: true, message: "请选择活动资源", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
      labelPosition3: "right",
      formLabelAlign3: {
        name: "",
        region: "",
        type: "",
      },
      formInline2: {
        user: "",
        region: "",
      },
      form1: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      datas1: {
        title: "Form Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["model", "表单数据对象", "object", "—", "—"],
          ["rules", "表单验证规则", "object", "—", "—"],
          ["inline", "行内表单模式", "boolean", "—", "false"],
          [
            "label-position",
            "表单域标签的位置，如果值为 left 或者 right 时，则需要设置 label-width",
            "string",
            "right/left/top",
            "right",
          ],
          [
            "label-width",
            "表单域标签的宽度，例如 '50px'。作为 Form 直接子元素的 form-item 会继承该值。支持 auto。",
            "string",
            "—",
            "—",
          ],
          ["label-suffix", "表单域标签的后缀", "string", "—", "—"],
          [
            "hide-required-asterisk",
            "是否显示必填字段的标签旁边的红色星号",
            "boolean",
            "—",
            "false",
          ],
          ["show-message", "是否显示校验错误信息", "boolean", "—", "true"],
          [
            "inline-message",
            "是否以行内形式展示校验信息",
            "boolean",
            "—",
            "false",
          ],
          [
            "status-icon",
            "是否在输入框中显示校验结果反馈图标",
            "boolean",
            "—",
            "false",
          ],
          [
            "validate-on-rule-change",
            "是否在 rules 属性改变后立即触发一次验证",
            "boolean",
            "—",
            "true",
          ],
          [
            "size",
            "用于控制该表单内组件的尺寸",
            "string",
            "medium / small / mini",
            "—",
          ],
          [
            "disabled",
            "是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效",
            "boolean",
            "—",
            "false",
          ],
        ],
      },
      datas2: {
        title: "Form Methods",
        head: ["方法名", "说明", "参数"],
        body: [
          [
            "validate",
            "对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise",
            "Function(callback: Function(boolean, object))",
          ],
          [
            "validateField",
            "对部分表单字段进行校验的方法",
            "Function(props: array | string, callback: Function(errorMessage: string))",
          ],
          [
            "resetFields",
            "对整个表单进行重置，将所有字段值重置为初始值并移除校验结果",
            "—",
          ],
          [
            "clearValidate",
            "移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果",
            "Function(props: array | string)",
          ],
        ],
      },
      datas3: {
        title: "Form Events",
        head: ["事件名称", "说明", "回调参数"],
        body: [
          [
            "validate",
            "任一表单项被校验后触发",
            "被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）",
          ],
        ],
      },
      datas4: {
        title: "Form-Item Attributes",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          [
            "prop",
            "表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的",
            "string",
            "传入 Form 组件的 model 中的字段",
            "—",
          ],
          ["label", "标签文本", "string", "—", "—"],
          [
            "label-width",
            "表单域标签的的宽度，例如 '50px'。支持 auto。",
            "string",
            "—",
            "—",
          ],
          [
            "required",
            "是否必填，如不设置，则会根据校验规则自动生成",
            "boolean",
            "—",
            "false",
          ],
          ["rules", "表单验证规则", "object", "—", "—"],
          [
            "error",
            "表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息",
            "string",
            "—",
            "—",
          ],
          ["show-message", "是否显示校验错误信息", "boolean", "—", "true"],
          ["inline-message", "以行内形式展示校验信息", "boolean", "—", "false"],
          [
            "size",
            "用于控制该表单域下组件的尺寸",
            "string",
            "medium / small / mini",
            "-",
          ],
        ],
      },
      datas5: {
        title: "Form-Item Slot",
        head: ["name", "说明"],
        body: [
          ["—", "Form Item 的内容"],
          ["label", "标签文本的内容"],
        ],
      },
      datas6: {
        title: "Form-Item Scoped Slot",
        head: ["name", "说明"],
        body: [["error", "自定义表单校验信息的显示方式，参数为 { error }"]],
      },
      datas7: {
        title: "Form-Item Methods",
        head: ["方法名", "说明", "参数"],
        body: [
          [
            "resetField",
            "对该表单项进行重置，将其值重置为初始值并移除校验结果",
            "-",
          ],
          ["clearValidate", "移除该表单项的校验结果", "-"],
        ],
      },
    };
  },
};
</script>
<style lang="scss" scoped>
.el-form,
.el-divider {
  width: 50%;
}
</style>


