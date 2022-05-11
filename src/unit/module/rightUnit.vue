<template>
  <LoadUnit
    v-if="optionValue"
    :objects="objects"
    :object-value="optionValue"
    :units="units"
    style="background:#ddd;"
  />
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
      objects: objects,
      optionValue: null
    }
  },
  computed: {},
  watch: {
    'objectValue.rightbox'(id) {
      this.getOptionValue(id)
    }
  },
  created() {
  },
  mounted() {
  },
  destroyed() {},
  methods: {
    getOptionValue(id) {
      this.optionValue = this.units[id]
    }
  }
}
</script>
