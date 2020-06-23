<template>
  <el-form label-position="right" :label-width="object.labelWidth||'auto'" :model="objectValue">
    <slot />
  </el-form>
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
  methods: {}
}
</script>

<style></style>
