<template>
  <el-tree
    v-if="objectValue.objects"
    :data="objectValue.objects"
    :props="defaultProps"
    draggable
    style="background:#eee;"
    @node-click="handleNodeClick"
  >
    <span slot-scope="{ node, data }" class="custom-tree-node">
      <span>{{ node.label }}</span>
      <span>
        <i class="el-icon-plus" @click="() => append(data)" />
        <i class="el-icon-close" @click="() => remove(node, data)" />
      </span>
    </span>
  </el-tree>
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
      this.objectValue.rightbox = node.id
    },
    append(data) {
      const newChild = {
        id: Math.random().toString().replace('0.', ''),
        span: 24,
        label: 'id',
        required: false,
        disabled: false,
        defaultValue: '',
        optionals: [],
        placeholder: "Don't input me",
        unitType: 'inputUnit',
        onChange: function(object, objectValue) {
          // console.log(object, objectValue)
        }
      }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },

    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    }
  }
}
</script>
