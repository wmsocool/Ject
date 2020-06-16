<template>
  <div>
    {{id}}
    <el-button @click="handleClick">HOME</el-button>
    {{units[id]}}
  </div>
</template>

<script>
import { objects } from "@/pages/home/object";
export default {
  data() {
    return {
      objects: objects,
      id: this.$route.query.id
    };
  },
  props: {
    objectValue: Object,
    units: Object
  },
  created() {},
  mounted() {},
  destroyed() {},
  computed: {},
  watch: {},
  methods: {
    handleClick() {
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
