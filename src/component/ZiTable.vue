<template>
  <div class="table">
    <div class="lefttop">{{datas.title}}</div>
    <div class="secondtitle">{{datas.stitle?datas.stitle:''}}</div>
    <table>
      <thead>
        <tr>
          <td v-for="item in datas.head">{{item}}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in datas.body">
          <td v-for="item in items">{{item}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    datas: {
      type: Object,
      default: {},
    },
  },
};
</script>

<style lang='scss' scoped>
.table {
  margin: 0 auto;
  width: 80%;
  table {
      margin-bottom: 20px;
    width: 100%;
    thead {
      td {
        color: #444;
      }
    }
    td {
      padding-right: 20px;
      text-align: left;
      line-height: 50px;
      height: 50px;
      border-bottom: 1px solid #eee;
    }
  }
  .lefttop {
    color: red;
    font-weight: 600;
    text-align: left;
  }
  .secondtitle{
    color: purple;
    font-size: 14px;
  }
}
</style>