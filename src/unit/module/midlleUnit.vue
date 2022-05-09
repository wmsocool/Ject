<template>
  <LoadUnit v-if="objectValue.objects" :objects="objectValue.objects" :object-value="objectValue" :units="units" />
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
  },
  mounted() {
  },
  destroyed() {},
  methods: {
  }
}
</script>

<style></style>
