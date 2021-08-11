<template>
  <div>
    <div class="reward-description-title">赞赏列表：</div>
    <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="pay_time" label="日期" align="center"></el-table-column>
    <el-table-column prop="name" label="赞赏人" align="center"></el-table-column>
    <el-table-column prop="money" label="金额" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default { 
  name: 'Reward', 
  data() { 
    return {tableData: [{//赞赏数据
        pay_time: '2016-05-02',
        name: '王小虎',
        money: '555'
    }]}
  },
  components: {},
  methods: {},
  created () {}
}
</script>

<style scoped>
  .reward-description-title{
    font-size: 20px;
    font-weight: 700;
    padding: 10px;
    margin-bottom: 10px;
  }

  .tRewardBox .donate-item {
    text-align: right;
    color: #44b549;
  }
  .tRewardBox .donate-item:last-child {
    text-align: left;
    color: #00a0e9;
  }
  .tRewardBox .donate-item img {
    width: 100%;
    display: block;
    height: auto;
  }
  .tRewardBox .donate-item div {
    display: inline-block;
    width: 150px;
    padding: 0 6px;
    text-align: center;
    box-sizing: border-box;
  }
  .tRewardBox .donate-item div span {
    display: inline-block;
    width: 100%;
    margin: 10px 0;
    text-align: center;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background: transparent;
  }
</style>