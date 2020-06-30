<template>
  <el-row>
    <template v-for="(object, index) in objects">
      <el-col :key="index" :span="object.span">
        <TheUnit :object="object" :object-value="objectValue" :units="units" :is-form="isForm">
          <template v-if="object.children">
            <el-form label-position="right" :model="objectValue" :label-width="object.labelWidth">
              <LoadUnit :objects="object.children" :object-value="objectValue" :units="units" :is-form="object.isForm" />
            </el-form>
          </template>
        </TheUnit>
      </el-col>
    </template>
  </el-row>
</template>

<script>
export default {
  name: 'LoadUnit',
  props: {
    units: { type: Object, default: null },
    objects: { type: Array, default: null },
    objectValue: { type: Object, default: null },
    isForm: { type: Boolean, default: null }
  },
  created() {
    this.objects.map(item => {
      this.$set(this.units, item.id, item)
      this.$set(this.objectValue, item.id, item.defaultValue || null)
    })
  }
}
</script>
