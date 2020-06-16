<template>
  <el-button type="success" @click="onclickFn">成功按钮</el-button>
</template>

<script>
export default {
  props: {
    object: Object,
    objectValue: Object
  },
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
  created() {
    if (!this.objectValue[this.object.id]) {
      this.objectValue[this.object.id] = ''
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    onclickFn() {
      console.log(this.objectValue)
    }
  }
}
</script>

<style></style>
