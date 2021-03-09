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
        <router-view :object-value="objectValue" :units="units" />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from '@/common/header.vue'
import MyMenu from '@/common/menu.vue'
export default {
  name: 'Home',
  components: {
    MyMenu,
    Header
  },
  data() {
    return {
      units: {},
      objectValue: {}
    }
  },
  methods: {
  }
}
</script>
