<template>
  <LoadUnit :objects="objects" :object-value="objectValue" :units="units" />
</template>

<script>
import { objects } from '../objects'
export default {
  props: {
    units: { type: Object, default: null },
    object: { type: Object, default: null },
    objectValue: { type: Object, default: null }
  },
  data() {
    return {
      objects
    }
  },
  computed: {},
  watch: {
    'objectValue.rightbox'(id) {
      this.getObjectValue(id)
    }
    // '$root.Bus.theUnit.id'(id) {
    //   this.getObjectValue(id)
    // }
  },
  created() {
  },
  mounted() {
  },
  destroyed() {},
  methods: {
    getObjectValue(id) {
      // this.objectValue = {}
      var node = this.$root.Bus.theUnit
      for (const key in node) {
        var value = node[key]
        if (typeof value !== 'string') {
          value = JSON.stringify(node[key])
        }
        this.$set(this.objectValue, key, value)
      }
    }
  }
}
</script>

<style></style>
