<template>
  <el-row>
    <template v-for="(object, index) in objects">
      <el-col :span="object.span" :key="index">
        <TheUnit :object="object" :objectValue="objectValue">
          <template v-if="object.children">
            <LoadUnit :objects="object.children" :objectValue="objectValue" :units="units" />
          </template>
        </TheUnit>
      </el-col>
    </template>
  </el-row>
</template>

<script>
import LoadUnit from "@/unit/load-unit";
export default {
  name: "LoadUnit",
  components: {
    LoadUnit
  },
  props: {
    objects: Array,
    objectValue: Object,
    units: Object
  },
  created() {
    this.objects.map(item => {
      this.$set(this.units, item.id, item);
      this.$set(this.objectValue, item.id, item.defaultValue || null);
    });
  }
};
</script>
