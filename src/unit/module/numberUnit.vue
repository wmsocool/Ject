<template>
  <span>
    <el-input-number
      v-model="objectValue[object.id]"
      controls-position="none"
      :min="1"
      :max="10"
      :disabled="object.disabled"
      @change="onChange"
    />
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
  methods: {
    onChange(val) {
      this.object.onChange.call(this, this.object, this.objectValue)
    }
  }
}
</script>

<style></style>
