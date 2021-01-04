<template>
  <div>

    <el-dialog title="维护信息" :visible.sync="dialogFormVisible" @closed="closeDialog">
     <form-create v-model="formSources" :rule="rule" @on-submit="onSubmit"></form-create>
    </el-dialog>
  </div>
</template>
<script>
import formCreate from '@form-create/element-ui'
export default {
  components: {
    formCreate:formCreate.$form()
  }, 
  props: {
    // 接收父组件传来的属性
    formIsDisabled: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    // 弹框关闭时候，把控制表单是否编辑的属性设置成 false
    closeDialog(){
      this.isDisabled = false;
    },
     onSubmit(formData){
          //TODO 提交表单
          console.log(formData);
          alert(123);
      }
  },
  data() {
    return {
       //表单实例对象
     formSources:{},
      //表单生成规则
     rule:[
       {
          type:'input',
          field:'goods_name',
          title:'商品名称'
        },
        {
          type:'datePicker',
          field:'created_at',
          title:'创建时间'
        },
        {
          type:"radio",
          title:"是否包邮",
          field:"is_postage",
          value:"0",
          options:[
              {value:"0",label:"不包邮",disabled:false},
              {value:"1",label:"包邮",disabled:true},
          ],
      }
     ],
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      // 是否显示
      isDisabled: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      formLabelWidth: "120px",
    };
  },
};
</script>