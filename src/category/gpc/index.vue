<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
    <el-container style="background-color: #eee;padding:10px;">
      <el-main style="background-color: #fff;padding:30px;">
        GPC
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import Header from '@/common/header.vue'
export default {
  name: 'Home',
  components: {
    Header
  },
  methods: {
  }
}
</script>
