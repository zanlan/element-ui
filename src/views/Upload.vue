<template>
  <div class="box">
    <el-divider>点击上传</el-divider>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <el-divider>用户头像上传</el-divider>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
    >
      <img v-if="imageUrl" :src="imageUrl" class="avatar" />
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-divider>照片墙</el-divider>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>

    <el-divider>文件缩略图</el-divider>
    <el-upload action="#" list-type="picture-card" :auto-upload="false">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{ file }">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="el-upload-list__item-actions">
          <span
            class="el-upload-list__item-preview"
            @click="handlePictureCardPreview2(file)"
          >
            <i class="el-icon-zoom-in"></i>
          </span>
          <span
            v-if="!disabled2"
            class="el-upload-list__item-delete"
            @click="handleDownload2(file)"
          >
            <i class="el-icon-download"></i>
          </span>
          <span
            v-if="!disabled2"
            class="el-upload-list__item-delete"
            @click="handleRemove2(file)"
          >
            <i class="el-icon-delete"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="" />
    </el-dialog>
    <el-divider>图片列表缩略图</el-divider>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview3"
      :on-remove="handleRemove3"
      :file-list="fileList3"
      list-type="picture"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <el-divider>上传文件列表控制</el-divider>
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-change="handleChange4"
      :file-list="fileList4"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <el-divider>拖拽上传</el-divider>
    <el-upload
      class="upload-demo"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <el-divider>手动上传</el-divider>
    <el-upload
      class="upload-demo"
      ref="upload"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview6"
      :on-remove="handleRemove6"
      :file-list="fileList6"
      :auto-upload="false"
    >
      <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
      <el-button
        style="margin-left: 10px"
        size="small"
        type="success"
        @click="submitUpload6"
        >上传到服务器</el-button
      >
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过500kb
      </div>
    </el-upload>
    <zl-table :datas="datas1" key="1"></zl-table>
    <zl-table :datas="datas2" key="2"></zl-table>
    <zl-table :datas="datas3" key="3"></zl-table>
  </div>
</template>

<script>
export default {
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          files.length + fileList.length
        } 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove2(file) {
      console.log(file);
    },
    handlePictureCardPreview2(file) {
      this.dialogImageUrl2 = file.url;
      this.dialogVisible2 = true;
    },
    handleDownload2(file) {
      console.log(file);
    },
    handleRemove3(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview3(file) {
      console.log(file);
    },
    handleChange4(file, fileList) {
      this.fileList4 = fileList.slice(-3);
    },
    submitUpload6() {
      this.$refs.upload.submit();
    },
    handleRemove6(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview6(file) {
      console.log(file);
    },
  },
  data() {
    return {
      fileList6: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      fileList4: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      dialogImageUrl2: "",
      dialogVisible2: false,
      disabled2: false,
      dialogImageUrl: "",
      dialogVisible: false,
      fileList3: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
        },
      ],
      imageUrl: "",

      datas1: {
        title: "Attribute",
        head: ["参数", "说明", "类型", "可选值", "默认值"],
        body: [
          ["action", "必选参数，上传的地址", "string", "—", "—"],
          ["headers", "设置上传的请求头部", "object", "—", "—"],
          ["multiple", "是否支持多选文件", "boolean", "—", "—"],
          ["data", "上传时附带的额外参数", "object", "—", "—"],
          ["name", "上传的文件字段名", "string", "—", "file"],
          [
            "with-credentials",
            "支持发送 cookie 凭证信息",
            "boolean",
            "—",
            "false",
          ],
          ["show-file-list", "是否显示已上传文件列表", "boolean", "—", "true"],
          ["drag", "是否启用拖拽上传", "boolean", "—", "false"],
          [
            "accept",
            "接受上传的文件类型（thumbnail-mode 模式下此参数无效）",
            "string",
            "—",
            "—",
          ],
          [
            "on-preview",
            "点击文件列表中已上传的文件时的钩子",
            "function(file)",
            "—",
            "—",
          ],
          [
            "on-remove",
            "文件列表移除文件时的钩子",
            "function(file, fileList)",
            "—",
            "—",
          ],
          [
            "on-success",
            "文件上传成功时的钩子",
            "function(response, file, fileList)",
            "—",
            "—",
          ],
          [
            "on-error",
            "文件上传失败时的钩子",
            "function(err, file, fileList)",
            "—",
            "—",
          ],
          [
            "on-progress",
            "文件上传时的钩子",
            "function(event, file, fileList)",
            "—",
            "—",
          ],
          [
            "on-change",
            "文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用",
            "function(file, fileList)",
            "—",
            "—",
          ],
          [
            "before-upload",
            "上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传。",
            "function(file)",
            "—",
            "—",
          ],
          [
            "before-remove",
            "删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。",
            "function(file, fileList)",
            "—",
            "—",
          ],
          [
            "list-type",
            "文件列表的类型",
            "string",
            "text/picture/picture-card",
            "text",
          ],
          [
            "auto-upload",
            "是否在选取文件后立即进行上传",
            "boolean",
            "—",
            "true",
          ],
          [
            "file-list",
            "上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}]",
            "array",
            "—",
            "[]",
          ],
          [
            "http-request",
            "覆盖默认的上传行为，可以自定义上传的实现",
            "function",
            "—",
            "—",
          ],
          ["disabled", "是否禁用", "boolean", "—", "false"],
          ["limit", "最大允许上传个数", "number", "—", "—"],
          [
            "on-exceed",
            "文件超出个数限制时的钩子",
            "function(files, fileList)",
            "—",
            "-",
          ],
        ],
      },
      datas2: {
        title: "Slot",
        head: ["name", "说明"],
        body: [
          ["trigger", "触发文件选择框的内容"],
          ["tip", "提示说明文字"],
        ],
      },
      datas3: {
        title: "Methods",
        head: ["方法名", "说明", "参数"],
        body: [
          ["Methods"],
          ["方法名", "说明", "参数"],
          [
            "clearFiles",
            "清空已上传的文件列表（该方法不支持在 before-upload 中调用）",
            "—",
          ],
          ["abort", "取消上传请求", "（ file: fileList 中的 file 对象 ）"],
          ["submit", "手动上传文件列表", "—"],
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>