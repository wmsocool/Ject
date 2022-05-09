<template>
  <LoadUnit :objects="neves" :object-value="objectValue" :units="units" />
</template>
<script>
import { neves } from './neves'
import { objects } from '@/category/ject/object'
export default {
  name: 'Home',
  data() {
    return {
      neves: neves,
      units: {},
      objectValue: {
        objects: objects
      }
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
  }
}
</script>
