<template>
  <el-row>
    <template v-for="(object, index) in objects">
      <el-col :key="index" :span="object.span">
        <TheUnit :object="object" :object-value="objectValue">
          <template v-if="object.children">
            <LoadUnit :objects="object.children" :object-value="objectValue" :units="units" />
          </template>
        </TheUnit>
      </el-col>
    </template>
  </el-row>
</template>

<script>
import LoadUnit from '@/unit/load-unit'
export default {
  name: 'LoadUnit',
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
      this.$set(this.units, item.id, item)
      this.$set(this.objectValue, item.id, item.defaultValue || null)
    })
  }
}
</script>
