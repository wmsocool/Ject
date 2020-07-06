<template>
  <div class="width100p">
    <el-select
      v-model="objectValue[object.id]"
      style="width:100%"
      placeholder="请选择"
      :disabled="object.disabled"
      @change="onChange"
    >
      <el-option
        v-for="item in object.optionals"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <slot />
  </div>
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
      this.objectValue[this.object.id] = ''
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
