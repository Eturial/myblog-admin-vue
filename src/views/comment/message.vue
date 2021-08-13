<template>
  <div>
    <div class="message-description-title">留言板：</div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="time" label="日期" align="center"></el-table-column>
      <el-table-column prop="nickname" label="用户" align="center"></el-table-column>
      <el-table-column prop="content" label="内容" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
    import axios from 'axios'
export default { 
  name: 'Commentmessage',
  data() { 
    return {
        tableData: []
    }
  },
    mounted:function() {
        this.getAllMessage();
    },
  components: {},
  methods: {
      getAllMessage() {
          axios({
              method:"get",
              url:"http://localhost:14000/message/getAll",
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
  .message-description-title{
    font-size: 20px;
    font-weight: 700;
    padding: 10px;
    margin-bottom: 10px;
  }

  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background: transparent;
  }
</style>