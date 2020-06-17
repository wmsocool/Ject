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
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from '@/common/header'
import MyMenu from '@/common/menu'
export default {
  name: 'Home',
  components: {
    MyMenu,
    Header
  },
  methods: {
  }
}
</script>
