<template>
  <el-table :data="tableData">
    <el-table-column prop="date" label="日期" width="140" />
    <el-table-column prop="name" label="姓名" width="120" />
    <el-table-column prop="address" label="地址" />
  </el-table>
</template>

<script>
export default {
  props: {
    object: Object,
    objectValue: Object
  },
  props: {},
  data() {
    return {
      tableData: Array(20).fill({
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      })
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>

<style></style>
