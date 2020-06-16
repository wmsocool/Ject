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
import { mixina } from '@/mixins'
import LoadUnit from '@/unit/load-unit'
export default {
  components: {
    LoadUnit
  },
  mixins: [mixina],
  data() {
    return {
      objects: objects,
      objectValue: {},
      units: {}
    }
  },
  computed: {},
  watch: {},
  created() {
    // objects.map(item => {
    //   this.units[item.id] = item;
    //   this.$set(this.objectValue, item.id, item.defaultValue || null);
    // });
  },
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>
<style></style>
