<template>
  <LoadUnit :objects="objects" :objectValue="objectValue" />
</template>
<script>
import { objects } from "./object"
import { mixina } from "@/mixins"
import LoadUnit from "@/unit/load-unit"
export default {
  mixins: [mixina],
  components: {
    LoadUnit,
  },
  data() {
    return {
      objects: objects,
      objectValue: {},
      units: {},
    }
  },
  created() {
    objects.map((item) => {
      this.units[item.id] = item
      this.$set(this.objectValue, item.id, item.defaultValue || null)
    })
  },
  mounted() {},
  destroyed() {},
  computed: {},
  watch: {},
  methods: {},
}
</script>
<style></style>
