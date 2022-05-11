<template>
  <LoadUnit
    v-if="objectValue.objects.length&&objectValue.middleValue"
    :objects="objectValue.objects"
    :object-value="objectValue.middleValue"
    :units="units"
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
    return {
    }
  },
  computed: {},
  watch: {
  },
  created() {
    if (this.objectValue && this.objectValue.middleValue) {
      this.objectValue.middleValue
    } else {
      this.objectValue.middleValue = {}
    }
  },
  mounted() {
  },
  destroyed() {},
  methods: {
  }
}
</script>

<style></style>
