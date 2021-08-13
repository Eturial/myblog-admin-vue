<template>
  <div>
    <div class="reward-description-title">赞赏列表：</div>
    <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="time" label="日期" align="center"></el-table-column>
    <el-table-column prop="nickname" label="赞赏人" align="center"></el-table-column>
    <el-table-column prop="money" label="金额" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
    import axios from 'axios'
export default { 
  name: 'Reward', 
  data() { 
    return {
        tableData: []
    }
  },
  mounted:function() {
      this.getAllReward();
  },
  components: {},
  methods: {
      getAllReward() {
          axios({
              method:"get",
              url:"http://localhost:14000/reward/getAllReward",
              params:{},
          }).then(response => {
                  this.tableData = response.data
                  console.log(response.data)
              })
      }
  },
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

  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background: transparent;
  }
</style>