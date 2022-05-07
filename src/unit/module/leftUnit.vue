<template>
  <el-tree
    :data="objects"
    :props="defaultProps"
    @node-click="handleNodeClick"
  />
</template>

<script>
import { objects } from '@/category/ject/object'
export default {
  props: {
    units: { type: Object, default: null },
    object: { type: Object, default: null },
    objectValue: { type: Object, default: null }
  },
  data() {
    return {
      objects: objects,
      menuData: [],
      defaultProps: {
        children: 'children',
        label: 'id'
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    handleNodeClick(node) {
      this.$root.Bus.theUnit = node
      this.objectValue.rightbox = node.id
    }
  }
}
</script>

<style></style>
