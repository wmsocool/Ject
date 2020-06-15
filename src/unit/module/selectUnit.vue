<template>
  <el-select v-model="objectValue[object.id]" placeholder="请选择">
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
    return {}
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
