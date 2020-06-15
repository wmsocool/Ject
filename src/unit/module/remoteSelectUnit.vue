<template>
  <el-select multiple v-model="objectValue[object.id]" placeholder="请选择">
    <el-option
      v-for="item in object.optionals"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    object: Object,
    objectValue: Object,
  },
  data() {
    return {
      tableData: Array(20).fill({
        date: "2016-05-02",
        name: "王小虎",
        address: "上海市普陀区金沙江路 1518 弄",
      }),
    }
  },
  created() {
    if (!this.objectValue[this.object.id]) {
      this.objectValue[this.object.id] = ""
    }
  },
  mounted() {},
  destroyed() {},
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style></style>
