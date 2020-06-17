<template>
  <div>
    <el-button type="warning" @click="jumpTo('')">Home</el-button>
    <el-button type="primary" @click="jumpTo('ject')">Ject</el-button>
    <el-button type="success" @click="jumpTo('gpc')">GPC</el-button>
    <el-button type="primary" @click="jumpTo('pms')">PMS</el-button>
  </div>
</template>
<script>
export default {
  name: 'Header',
  methods: {
    jumpTo(tar) {
      this.$router.push('/' + tar)
    }
  }
}
</script>
