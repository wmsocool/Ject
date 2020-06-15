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
import MyMenu from "@/menu/menu"
import MyDemo from "@/pages/demo/demo"
export default {
  props: {
    object: Object,
    objectValue: Object,
  },
  name: "Home",
  components: {
    MyDemo,
    MyMenu,
  },
  data() {
    return {}
  },
  props: {},
  created() {},
  mounted() {},
  destroyed() {},
  computed: {},
  watch: {},
  methods: {},
}
</script>
