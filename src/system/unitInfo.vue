<template>
  <div>
    {{ id }}
    <el-button @click="handleClick">HOME</el-button>
    {{ units[id] }}
  </div>
</template>

<script>
import { objects } from '@/category/ject/object'
export default {
  props: {
    units: { type: Object, default: null },
    objectValue: { type: Object, default: null }
  },
  data() {
    return {
      objects: objects,
      id: this.$route.query.id
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    handleClick() {
      this.$router.push('/')
    }
  }
}
</script>

<style></style>
