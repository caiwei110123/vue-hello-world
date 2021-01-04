<template>
  <div>
      <el-form ref="form" :model="form" label-width="80px" label-position="right" v-for="(item,index) in formConfig.formColumn" :key="index">
        <el-row>
      <el-col :span="item.span">
         <el-form-item v-if="item.type == 'input'" :label="item.label">
          <el-input v-model="form[item.prop]"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
       
        <el-form-item  v-if="item.type == 'select'" :label="item.label">
          <el-select v-model="form[item.prop]" :placeholder="item.placeholder" >
            <el-option v-for="(optionData,i) in item.selectData" :key="i" :label="optionData.label" :value="optionData.value"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item  v-if="item.type == 'daterange'" :label="item.label" >
           <el-date-picker
            v-model="form[item.prop]"
            type="daterange"
            align="right"
            format="yyyy 年 MM 月 dd 日"
            value-format="yyyy-MM-dd"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
          </el-date-picker>
    
        </el-form-item>

          <el-form-item   v-if="item.type == 'switch'" :label="item.label">
          <el-switch v-model="form[item.prop]"></el-switch>
        </el-form-item>
          <el-form-item   v-if="item.type == 'checkbox'" :label="item.label">
          <el-checkbox-group v-model="form[item.prop]">
            <el-checkbox v-for="(checkboxObj,j) in item.checkboxData" :key="j" :label="checkboxObj.label" :name="checkboxObj.name"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item  v-if="item.type == 'radio'" :label="item.label">
          <el-radio-group v-model="form[item.prop]">
            <el-radio  v-for="(radaoObj,n) in item.radioData" :key="n" :label="radaoObj.label" ></el-radio>
          </el-radio-group>
        </el-form-item>

         <el-form-item  v-if="item.type == 'textarea'" :label="item.label">
          <el-input type="textarea" v-model="form[item.prop]"></el-input>
        </el-form-item>
      </el-form>
        <div>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    // 接收父组件传来的属性
    formConfig: {
        default: () => {},
        type: Object
    },
    form: {
        default: () => {},
        type: Object
    },
    formIsDisabled: {
      default: false,
      type: Boolean,
    },
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
    }
  },
  created() {
      console.log(this.formConfig);
  },
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      // 是否显示
      isDisabled: false,
     
       pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月的时间',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
    };
  },
};
</script>