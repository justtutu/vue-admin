<template>
  <div class="app-container">
    <el-table :data="tableData" border >
      <el-table-column label="日期" prop="date" width="180"/>
      <el-table-column label="姓名" prop="name" width="180"/>
      <el-table-column label="地址" prop="address"/>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button type="text">查看</el-button>
          <el-button type="text">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'ExportExcel',
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ]
    }
  }
}
</script>
<style>
</style>
