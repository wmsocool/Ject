<template>
  <el-select v-model="objectValue[object.id]" placeholder="请选择">
    <el-option
      v-for="item in object.optionals"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>

<script>
export default {
  props: {
    object: Object,
    objectValue: Object
  },
  data() {
    return {}
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
