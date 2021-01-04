<template>
  <div>
    <el-dialog
      title="维护信息"
      :visible.sync="dialogFormVisible"
      @closed="closeDialog"
    >
      <Form   :form='form' :formConfig='formConfig'></Form>
    </el-dialog>
  </div>
</template>
<script>
import Form from '@/components/Form'
export default {
  components: {Form},
  props: {
    // 接收父组件传来的属性
    formIsDisabled: {
      default: false,
      type: Boolean,
    },
  },
  created() {
  },
  methods: {
    // 弹框关闭时候，把控制表单是否编辑的属性设置成 false
    closeDialog() {
      this.isDisabled = false;
    },
    onSubmit() {
      //TODO 提交表单
      console.log(this.form);
      alert(123);
    },
  },
  data() {
    return {
      count: 0,
      dialogTableVisible: false,
      dialogFormVisible: false,
      // 是否显示
      isDisabled: false,
      formConfig: {
        isDisabled: false,
        formColumn: [
          {
            label: '活动名称',
            prop: 'name',
            type: 'input',
            placeholder: '',
            span: 12
          },
          {
            label: '活动区域',
            prop: 'region',
            type: 'select',
            placeholder: '',
            selectData: [{
              value: 'test',
              label: '王苑'
            },{
              value: 'test1',
              label: '王苑1 '
            }]
          },{
             label: '时间',
             prop: 'time',
             type: 'daterange',
          },{
             label: '开关',
             prop: 'delivery',
             type: 'switch',
          },{
             label: '多选',
             prop: 'type',
             type: 'checkbox',
             checkboxData: [
               {
                 label: '美食/餐厅线上活动',
                 name: 'type'
               },
               {
                 label: '线下主题活动',
                 name: 'type'
               }
             ]
          },{
             label: '单选',
             prop: 'resource',
             type: 'radio',
             radioData: [
               {
                 label: '美食/餐厅线上活动',
                 name: 'type'
               },
               {
                 label: '线下主题活动',
                 name: 'type'
               }
             ]
          },{
            label: '描述',
            prop: 'desc',
            type: 'textarea'
          }
        ]    
      },
      form: {
        name: "",
        region: "",
        time: [],
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        value2: ''
      },
    };
  },
};
</script>