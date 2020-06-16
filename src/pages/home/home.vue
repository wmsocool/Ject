<template>
  <el-row>
    <el-col :span="24">{{ objectValue }}</el-col>
    <el-col :span="24">
      <LoadUnit :objects="objects" :objectValue="objectValue" :units="units" />
    </el-col>
  </el-row>
</template>
<script>
import { objects } from "./object";
import { mixina } from "@/mixins";
import LoadUnit from "@/unit/load-unit";
export default {
  mixins: [mixina],
  components: {
    LoadUnit
  },
  // props: [objectValue, units],
  props: {
    objectValue: Object,
    units: Object
  },
  data() {
    return {
      objects: objects
    };
  },
  created() {},
  mounted() {},
  destroyed() {},
  computed: {},
  watch: {},
  methods: {}
};
</script>
<style></style>
