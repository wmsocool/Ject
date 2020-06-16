<template>
  <el-container>
    <el-header>
      <div>
        <el-button type="warning" @click="jumpTo('')">Home</el-button>
        <el-button type="primary" @click="jumpTo('plm')">Demo</el-button>
        <el-button type="success" @click="jumpTo('gpc')">Menu</el-button>
        <el-button type="primary" @click="jumpTo('pms')">Demo</el-button>
      </div>
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
import MyMenu from '@/menu/menu'
export default {
  name: 'Home',
  components: {
    MyMenu
  },
  methods: {
    jumpTo(tar) {
      this.$router.push('/' + tar)
    }
  }
}
</script>
