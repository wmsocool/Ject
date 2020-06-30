<template>
  <el-checkbox-group
    v-model="objectValue[object.id]"
    :disabled="object.disabled"
    @change="onChange"
  >
    <el-checkbox label="复选框 A" />
    <el-checkbox label="复选框 B" />
    <el-checkbox label="复选框 C" />
    <el-checkbox label="禁用" />
    <el-checkbox label="选中且禁用" />
  </el-checkbox-group>
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
    }
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {},
  destroyed() {},
  methods: {
    onChange(val) {
      this.object.onChange.call(this, this.object, this.objectValue)
    }
  }
}
</script>

<style></style>
