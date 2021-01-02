<template>
  <Table :tableConfig="tableConfig"></Table>
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
  created() {
    // 调接口
    this.tableConfig = [{
        prop: "date",
        label: "日期",
        width: "120px",
        fixed: ""
      },{
        prop: "name",
        label: "姓名11211",
        width: "120px",
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