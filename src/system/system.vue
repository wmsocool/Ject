<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <MyMenu />
      </el-aside>
      <el-main>
        <LoadUnit :objects="objects" :object-value="objectValue" :units="units" />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { objects } from './objects'
import { mixina } from '@/mixins'
import Header from '@/common/header'
import { objects as jectObject } from '@/category/ject/object.js'
import MyMenu from '@/common/menu'
export default {
  components: {
    Header,
    MyMenu
  },
  mixins: [mixina],
  data() {
    return {
      jectObject: jectObject,
      id: this.$route.params.id,
      objects: objects,
      objectValue: {},
      units: {}
    }
  },
  computed: {},
  watch: {
    '$route.params.id'(id) {
      this.getObjectValue(id)
    }
  },
  created() {
    this.id && this.getObjectValue(this.id)
  },
  mounted() {},
  destroyed() {},
  methods: {
    getObjectValue(id) {
      // this.jectObject.forEach(element => {
      // if (element.id === this.id) {
      //   for (const key in element) {
      //     var value = element[key]
      //     if (typeof value !== 'string') {
      //       value = JSON.stringify(element[key])
      //     }
      //     this.$set(this.objectValue, key, value)
      //   }
      //   return false
      // }
      var node = this.$root.Bus.theUnit
      for (const key in node) {
        var value = node[key]
        if (typeof value !== 'string') {
          value = JSON.stringify(node[key])
        }
        this.$set(this.objectValue, key, value)
      }
      // })
    }
  }
}
</script>
<style></style>
