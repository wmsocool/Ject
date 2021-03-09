<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container>
      <el-aside width="300px" style="background-color: #ddd">
        <MyMenu />
      </el-aside>
      <el-main>
        PMS
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
  methods: {
  }
}
</script>
