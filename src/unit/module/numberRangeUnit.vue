<template>
  <el-input-number
    v-model="objectValue[object.id]"
    controls-position="none"
    :min="1"
    :max="10"
  />
</template>

<script>
export default {
  props: {
    units: { type: Object, default: null },
    object: { type: Object, default: null },
    objectValue: { type: Object, default: null }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    if (!this.objectValue[this.object.id]) {
      this.objectValue[this.object.id] = 0
    }
  },
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>

<style></style>
