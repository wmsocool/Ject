<template>
  <el-row style="padding:10px;background-color: #409eff;">
    <el-col :span="12">
      <i class="el-icon-moon-night" style="font-size:50px;color:#fff" />
    </el-col>
    <el-col :span="12" style="text-align: right;">
      <!-- <el-button @click="jumpTo()">Home</el-button> -->
    </el-col>
  </el-row>
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
    if (!this.objectValue[this.object.id]) {
      this.objectValue[this.object.id] = this.object.defaultValue || ''
    }
  },
  mounted() {
  },
  destroyed() {},
  methods: {
    onChange(val) {
      this.object.onChange.call(this, this.object, this.objectValue)
    },
    jumpTo(tar) {
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
