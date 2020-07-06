<template>
  <el-checkbox-group
    v-model="objectValue[object.id]"
  >
    <el-checkbox v-for="(item, index) in object.optionals" :key="index" :label="item.label" />
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
