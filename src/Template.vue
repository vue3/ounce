<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "xxx", // entry u component name
  props: {
    className: {
      type: String,
      require: false,
    },
    size: {
      type: String,
      require: false,
      default: "middle", // "large" | "middle" | "small"
    },
  },
  //   setup(props) {},
});
</script>

<style scoped>
</style>
