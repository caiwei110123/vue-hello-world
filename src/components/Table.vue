<template>
  <div class="box">
    <el-table class="tableBox" :data="tableData" height="auto">
      <el-table-column fixed prop="date" label="日期" min-width="120">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
      <el-table-column prop="province" label="省份" min-width="120">
      </el-table-column>
      <el-table-column prop="city" label="市区" min-width="120"> </el-table-column>
      <el-table-column prop="address" label="地址" min-width="300">
      </el-table-column>
      <el-table-column prop="zip" label="邮编" min-width="120"> </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="120">
        <template slot-scope="scope">
           <el-button
            @click="showDialogFirst"
            type="text"
            size="small"
          >
            查看
          </el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            编辑
          </el-button>
             <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="text"
            size="small"
          >
            移除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <DialogFirst ref="dialogFirstRef"></DialogFirst>
  </div>
</template>

<script>
import DialogFirst from '@/views/first/components/DialogFirst'
export default {
  name:'',
  //注册
  components: {
    DialogFirst,
  },
  data() {
    return {
      tableData: [],
      msg: '王苑'
    };
  },
  // 页面初始化，但是没加载 dom 。
  created(){
    this.getTableDataList();
  },
  // 页面加载完以后，可以取到页面 dom 元素
  mounted(){

  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    showDialogFirst(){
    this.$refs.dialogFirstRef.dialogFormVisible = true;
      // dialogFormVisible
    },
    getTableDataList(){
      // 请求后台数据
      const res = [
        
        {
          date: "2016-05-03",
          name: "王小虎123",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333,
        },
      ];
      this.tableData = res;
    }
  },
};
</script>

<style scoped>
.box {
  /* 
  表格自适应 css 的属性：
  height="auto"
  
  <style scoped>
  .box {
      height: 100%;
    display:flex;
    flex-direction: column;
  }


     .tableBox {
        width: 100%;
        overflow: auto;
      }
   */
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tableBox {
  width: 100%;
  overflow: auto;
}
</style>