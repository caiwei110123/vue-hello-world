<template>
  <div class="box">
    <div>{{count}}</div>
      <el-table class="tableBox" :data="tableData" height="auto" >
      <el-table-column align="center" :fixed="item.fixed" :label="item.label"  :min-width="item.width"  v-for="(item,index) in tableConfig" :key="index" >
        <template slot-scope="scope">
          <div v-if="!item.canOperate">
            {{scope.row[item.prop]}}
          </div>
          <div v-else>
            <el-button v-for="(button,i) in item.operateConfig" :key="i" type="text" size="small" @click="doClick(button.mehtodName,scope)">
              {{button.name}}
            </el-button>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <!-- <el-table class="tableBox" :data="tableData" height="auto">
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
              @click="editDialogFirst"
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
    </el-table> -->
    <DialogFirst ref="dialogFirstRef" :formIsDisabled = 'formIsDisabled'></DialogFirst>
  </div>
</template>

<script>
import DialogFirst from '@/views/first/components/DialogFirst'
import {mapState} from 'vuex'
export default {
  name:'',
  //注册
  components: {
    DialogFirst,
  },
  props: {
  tableConfig: {
    default: () => [],
    type: Array
  }
  },
  data() {
    return {
      formIsDisabled: false,
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
    console.log(this.$store.state);

  },
  computed: mapState({
    count: state => state.count,
  }),
  methods: {
    doClick(mehtodName,scope) {
      console.log(scope)
      this[mehtodName]();
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    showDialogFirst(){
      // 自动变更 store 的count 属性
      this.$store.commit('increment');
      // 设置子组件 dialog 是否显示
    this.$refs.dialogFirstRef.dialogFormVisible = true;
    // 设置弹框无法编辑---方法1：通过 props 传参 
    // this.formIsDisabled = true;
    // 设置弹框无法编辑---方法2：设置子组件属性无法编辑
   this.$refs.dialogFirstRef.isDisabled = true;
    },
    editDialogFirst(){
 // 设置子组件 dialog 是否显示
    this.$refs.dialogFirstRef.dialogFormVisible = true;
    },
    getTableDataList(){
      const api = "https://getman.cn/echo";
      this.axios.get(api).then((response) => {
        console.log(response.data)
      });


      this.axios.post(api,{}).then((response) => {
        console.log(response.data)
      });
      // 请求后台数据
      const res = [
        
        {
          date: "2016-05-03",
          name: "王小虎123",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
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