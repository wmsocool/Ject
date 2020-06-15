<template>
  <el-row :gutter="20">
    {{ objectValue }}
    <template v-for="(object, index) in objects">
      <el-col :span="object.span" :key="index">
        <TheUnit :object="object" :objectValue="objectValue" />
      </el-col>
    </template>
  </el-row>
</template>

<script>
export default {
  props: {
    objects: Array,
    objectValue: Object,
  },
}
</script>
