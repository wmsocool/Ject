<template>
  <div>
    {{ id }}
    <el-button @click="handleClick">HOME</el-button>
    {{ units[id] }}
  </div>
</template>

<script>
import { objects } from '@/pages/home/object'
export default {
  props: {
    objectValue: Object,
    units: Object
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
