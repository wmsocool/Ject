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
      // this.getObjectValue(id)
      this.getOptionValue(id)
    }
    // optionValue() {
    //   return this.objectValue.objects.map(item => item.id === this.objectValue.rightbox)
    // }
  },
  created() {
  },
  mounted() {
  },
  destroyed() {},
  methods: {
    // getObjectValue(id) {
    //   var node = this.$root.Bus.theUnit
    //   for (const key in node) {
    //     var value = node[key]
    //     if (typeof value !== 'string') {
    //       value = JSON.stringify(node[key])
    //     }
    //     this.$set(this.objectValue, key, value)
    //   }
    // },
    getOptionValue(id) {
      this.optionValue = this.units[id]
      // this.objectValue.objects.map(item => {
      //   if (item.id === this.objectValue.rightbox) {
      //     this.optionValue = item
      //   }
      // })
    }
  }
}
</script>
