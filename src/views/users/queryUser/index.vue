<template>
  <div class="app-container">
    <e-row>
      <el-col :span="24">
        <el-form :model="form" inline size="mini">
          <el-form-item label="组织机构">
            <el-select v-model="form.org" placeholder="">
              <el-option label="收费站" value="station"/>
              <el-option label="管理处" value="company"/>
            </el-select>
          </el-form-item>
          <el-form-item label="人员姓名">
            <el-input v-model="form.name" placeholder="请输入"/>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio v-model="form.sex" label="1">男</el-radio>
            <el-radio v-model="form.sex" label="2">女</el-radio>
          </el-form-item>
          <el-form-item label="学历">
            <el-select v-model="form.education" placeholder="请选择">
              <el-option label="1" value="1"/>
              <el-option label="2" value="2"/>
              <el-option label="3" value="3"/>
              <el-option label="4" value="4"/>
            </el-select>
          </el-form-item>
          <el-button type="primary" size="mini"><i class="el-icon-search"/> 查询</el-button>
          <el-button type="primary" size="mini" @click="dialogVisible=true"><i class="el-icon-edit" /> 添加</el-button>
        </el-form>
      </el-col>
    </e-row>
    <el-table :data="listData" border >
      <el-table-column label="姓名" prop="name"/>
      <el-table-column label="性别" prop="sex"/>
      <el-table-column label="政治面貌" prop="policialOutlook"/>
      <el-table-column label="手机号" prop="phone"/>
      <el-table-column label="邮箱" prop="email"/>
      <el-table-column label="岗位" prop="post"/>
      <el-table-column label="学历" prop="education"/>
      <el-table-column label="组织机构" prop="org"/>
    </el-table>
    <el-dialog :visible.sync="dialogVisible" title="新增人员">
      <el-row>
        <el-col :span="16">
          <el-form :model="addForm" label-width="90px">
            <el-form-item label="姓名">
              <el-input v-model="addForm.name" placeholder="请输入"/>
            </el-form-item>
            <el-form-item label="性别">
              <el-radio-group v-model="addForm.sex">
                <el-radio :label="1">男</el-radio>
                <el-radio :label="2">女</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="政治面貌">
              <el-select v-model="addForm.policialOutlook" placeholder="请选择">
                <el-option v-for="item in comboData.policialOutlook" :key="item.value" :label="item.label" :value="item.value"/>
              </el-select>
            </el-form-item>
            <el-form-item label="手机号码">
              <el-input v-model="addForm.phone" placeholder=""/>
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input v-model="addForm.email" placeholder=""/>
            </el-form-item>
            <el-form-item label="学历">
              <el-select v-model="addForm.education" placeholder="">
                <el-option v-for="item in comboData.education" :key="item.value" :label="item.label" :value="item.value"/>
              </el-select>
            </el-form-item>
            <el-form-item label="组织机构">
              <el-select v-model="addForm.org" placeholder="">
                <el-option v-for="item in comboData.org" :key="item.value" :value="item.value" :label="item.label"/>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <span slot="footer">
        <el-button @click="dialogVisible=false">取消</el-button>
        <el-button type="primary" @click="handleAdd">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'QueryUser',
  data() {
    return {
      form: {
        org: '',
        name: '',
        sex: '',
        education: 4
      },
      addForm: {
        name: '',
        sex: '',
        policialOutlook: '',
        phone: '',
        email: '',
        post: '',
        education: '',
        org: ''
      },
      comboData: {
        policialOutlook: [
          {
            value: '1',
            label: '党员'
          }, {
            value: '2',
            label: '团员'
          },
          {
            value: '3',
            label: '群众'
          }
        ],
        education: [
          {
            value: '1',
            label: '研究生'
          }, {
            value: '2',
            label: '本科'
          },
          {
            value: '3',
            label: '专科'
          }
        ],
        org: [
          { value: '1', label: '公司' },
          { value: '2', label: '管理处' }
        ]
      },
      listData: [
        {
          name: '黄磊'
        }
      ],
      dialogVisible: false
    }
  },
  methods: {
    handleAdd() {

    }
  }
}
</script>

<style>
</style>
