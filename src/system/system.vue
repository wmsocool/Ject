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
import MyMenu from '@/common/menu'
export default {
  components: {
    Header,
    MyMenu
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
  },
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>
<style></style>
