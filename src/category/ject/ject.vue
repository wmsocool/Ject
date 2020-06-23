<template>
  <el-row>
    <el-col :span="24">{{ objectValue }}</el-col>
    <el-col :span="24">
      <LoadUnit :objects="objects" :object-value="objectValue" :units="units" />
    </el-col>
  </el-row>
</template>
<script>
import { objects } from './object'
import { mapState } from 'vuex'
import { mixina } from '@/mixins'
export default {
  mixins: [mixina],
  props: {
    units: { type: Object, default: null },
    objectValue: { type: Object, default: null }
  },
  data() {
    return {
      objects: objects
    }
  },
  computed: {
    ...mapState(['info'])
  },
  watch: {},
  created() {
  },
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>
<style></style>
