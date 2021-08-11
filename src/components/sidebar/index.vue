<template>
  <div>
    <el-menu :router="true" class="el-menu-vertical-content" text-color="#bfcbd9" active-text-color="#20a0ff" @open="handleOpen" @close="handleClose">
      <el-menu-item index="/">
        <i class="el-icon-s-home"></i>
        <span solt="title">首页</span>
      </el-menu-item>
      <el-submenu index="/artical">
        <template slot="title">
          <i class="el-icon-document"></i>
          <span slot="title">文章</span>
        </template>
        <el-menu-item index="/artical/list">文章列表</el-menu-item>
        <el-menu-item index="/artical/add">发表文章</el-menu-item>
      </el-submenu>
      <el-submenu index="/comment">
        <template slot="title">
          <i class="el-icon-message"></i>
          <span slot="title">评论</span>
        </template>
        <el-menu-item index="/comment/list">评论列表</el-menu-item>
        <el-menu-item index="/comment/message">留言列表</el-menu-item>
      </el-submenu>
      <el-menu-item index="/friends">
        <i class="el-icon-link"></i>
        <span slot="title">友链</span>
      </el-menu-item>
      <el-menu-item index="/reward">
        <i class="el-icon-coin"></i>
        <span slot="title">赞赏</span>
      </el-menu-item>
      <el-menu-item index="/setting">
        <i class="el-icon-setting"></i>
        <span slot="title">设置</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
    return {

    }
  },
  components: {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  },
  created () { }
}
</script>

<style lang="less">
  .el-menu-vertical-content.el-menu{
    background-color:rgb(50, 64, 87);
    border: none;
    .el-menu-item:focus, .el-menu-item:hover, .el-submenu__title:hover{
      background-color: #48576a;
    }
    .el-menu-item.is-active {
      i{
        color: #20a0ff;
      }
      background-color:rgb(50, 64, 87);
    }
    .el-submenu .el-menu{
      background-color: #1f2d3d;
      .el-submenu__title{
        background-color:rgb(50, 64, 87);
      }
    }
    .el-menu-item, .el-submenu__title {
      i {
        color: #bfcbd9;
      }
    }
    
  }
</style>