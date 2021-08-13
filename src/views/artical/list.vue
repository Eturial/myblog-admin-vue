<template>
  <div>
    <div class="blog-description-title">文章列表：</div>
    <el-table :data="articleList" border style="width: 100%">
      <el-table-column prop="createTime" label="日期" align="center"></el-table-column>
      <el-table-column prop="title" label="标题" align="center"></el-table-column>
      <el-table-column prop="content" label="内容" align="center" show-overflow-tooltip></el-table-column>
      <el-table-column prop="description" label="描述" align="center"></el-table-column>
      <el-table-column prop="tagName" label="类别" align="center"></el-table-column>
    </el-table>
  </div>
</template>

<script>
    import axios from 'axios';
export default {
  name: 'articallist',
  data() { 
    return {
        articleList: []
    }
  },
    mounted() {
        axios({
            url : 'http://localhost:14000/blog/getAllBlog',
            method : 'get',
        }).then((res)=>{
            this.articleList = res.data;
            console.log(res.data);
        })
    },
  components: {},
  methods: {},
  created () {}
}
</script>

<style scoped>
  .blog-description-title{
    font-size: 20px;
    font-weight: 700;
    padding: 10px;
    margin-bottom: 10px;
  }

  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background: transparent;
  }
</style>