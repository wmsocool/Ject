<template>
  <div class="width100p">
    <template v-for="(item, index) in object.optionals">
      <el-radio :key="index" v-model="objectValue[object.id]" :label="item.value">{{ item.label }}</el-radio>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    units: { type: Object, default: null },
    object: { type: Object, default: null },
    objectValue: { type: Object, default: null }
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
  methods: {}
}
</script>

<style></style>
