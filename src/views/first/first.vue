<template>
  <Table ref='table' :tableConfig="tableConfig" @operate="operate"></Table>
</template>

<script>
import Table from "@/components/Table";
export default {
  name: "first",
  components: { Table },
  data() {
    return {
       tableConfig: []
    };
  },
  methods: {
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    operate(mehtodName) {
      this[mehtodName]();
    },
    showDialogFirst(){
      // 自动变更 store 的count 属性
      this.$store.commit('increment');
      // 设置子组件 dialog 是否显示
      console.log(this.$refs.table);
    this.$refs.table.$children[1].dialogFormVisible = true;
    // 设置弹框无法编辑---方法1：通过 props 传参 
    // this.formIsDisabled = true;
    // 设置弹框无法编辑---方法2：设置子组件属性无法编辑
   this.$refs.table.$children[1].isDisabled = true;
    },
    editDialogFirst(){
 // 设置子组件 dialog 是否显示
    this.$refs.table.$children[1].dialogFormVisible = true;
    },
  },
  created() {
    // 调接口
    this.tableConfig = [{
        prop: "date",
        label: "日期",
        width: "120px",
        fixed: "",
        type: '',
      },{
        prop: "name",
        label: "姓名11211",
        width: "120px",
        isShow: true,
        fixed: ""
      },{
        prop: "province",
        label: "省份",
        width: "120px",
        fixed: ""
      },{
        prop: "city",
        label: "市区",
        width: "120px",
        fixed: ""
      },{
        prop: "address",
        label: "地址",
        width: "120px",
        fixed: ""
      },{
        prop: "zip",
        label: "邮编",
        width: "120px",
        fixed: ""
      },{
        prop: "",
        label: "操作",
        width: "120px",
        fixed: "right",
        canOperate: true,
        operateConfig: [{
          type: 1,
          name: '查看',
          mehtodName: "showDialogFirst"
        },{
          type: 2,
          name: '编辑',
          mehtodName: "editDialogFirst"
        },{
          type: 3,
          name: '删除',
          mehtodName: "showDialogFirst"
        }]
      }];
  }
};
</script>