<template>
  <el-input-number
    v-model="objectValue[object.id]"
    controls-position="none"
    :min="1"
    :max="10"
  ></el-input-number>
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
      this.objectValue[this.object.id] = 0
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
