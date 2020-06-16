<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <MyMenu />
      </el-aside>
      <el-main>
        <MyDemo />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import MyMenu from '@/menu/menu'
import MyDemo from '@/pages/demo/demo'
export default {
  name: 'Home',
  components: {
    MyDemo,
    MyMenu
  },
  props: {
    object: Object,
    objectValue: Object
  },
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  destroyed() {},
  methods: {}
}
</script>
