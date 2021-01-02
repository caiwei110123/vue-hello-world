<template>
  <div class="box">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="160px">
          <Menu></Menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: "Home",
  components:{
    Menu,
  },
  props: {
    msg: String,
  },
};
</script>

<style>
  .box {
    overflow: hidden;
    height: 100%;
  }
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    height: 100%;
  }
  
  .el-container {
    height: 100%;
    overflow-x: auto;
  }
  
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>