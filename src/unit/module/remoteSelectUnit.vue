<template>
  <div class="width100p">
    <el-select
      v-model="objectValue[object.id]"
      multiple
      placeholder="请选择"
      filterable
      remote
      reserve-keyword
      :remote-method="objectValue.onSearchFn||onSearchFn"
      :loading="loading"
    >
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
    return {
      loading: false
    }
  },
  computed: {},
  watch: {},
  created() {
    if (!this.objectValue[this.object.id]) {
      this.objectValue[this.object.id] = this.object.defaultValue || ''
    } else if (typeof (this.objectValue[this.object.id]) === 'string' || typeof (this.objectValue[this.object.id]) === 'array') {
      this.objectValue[this.object.id]
    } else {
      this.objectValue[this.object.id] = this.object.defaultValue || ''
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    onSearchFn() {

    }
  }
}
</script>

<style></style>
