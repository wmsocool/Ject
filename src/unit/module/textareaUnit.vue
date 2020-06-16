<template>
  <el-input
    v-model="objectValue[object.id]"
    type="textarea"
    :rows="2"
    placeholder="请输入内容"
  />
  <!-- @input="onInput" -->
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
      this.objectValue[this.object.id] = 'ooo'
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    // onInput(value) {
    //   debugger
    //   this.objectValue[this.object.id] = value
    // },
  }
}
</script>

<style></style>
