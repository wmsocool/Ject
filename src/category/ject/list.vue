<template>
  <LoadUnit :objects="listObjects" :object-value="objectValue" :units="units" />
</template>
<script>
import { listObjects } from './object'
import { mixina } from '@/mixins'
export default {
  name: 'Home',
  mixins: [mixina],
  props: {
    units: { type: Object, default: null },
    objectValue: { type: Object, default: null }
  },
  data() {
    return {
      listObjects: listObjects,
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
