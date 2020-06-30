<template>
  <span>
    <el-select v-model="objectValue[object.id]" multiple placeholder="请选择">
      <el-option
        v-for="item in object.optionals"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <slot />
  </span>
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
