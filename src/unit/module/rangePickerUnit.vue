<template>
  <el-date-picker
    v-model="objectValue[object.id]"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
  >
  </el-date-picker>
</template>

<script>
export default {
  props: {
    object: Object,
    objectValue: Object,
  },
  data() {
    return {}
  },
  created() {
    if (!this.objectValue[this.object.id]) {
      this.objectValue[this.object.id] = ""
    }
  },
  mounted() {},
  computed: {},
  watch: {},
  methods: {},
}
</script>

<style></style>
