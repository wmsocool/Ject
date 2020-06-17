<template>
  <div>列表</div>
</template>
<script>
export default {
  name: 'Home',
  components: {
    // "el-button": ELEMENT.Button,
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
