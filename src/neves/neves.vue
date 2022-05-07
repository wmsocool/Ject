<template>
  <LoadUnit :objects="objects" :object-value="objectValue" :units="units" />
</template>
<script>
import { objects } from './neves'
export default {
  name: 'Home',
  data() {
    return {
      objects: objects,
      units: {},
      objectValue: {}
    }
  },
  methods: {
  }
}
</script>
