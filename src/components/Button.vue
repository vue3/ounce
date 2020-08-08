<template>
  <button class="o-button" :class="[className, type, size]">
    <slot></slot>
  </button>
</template>

<script lang="ts">
// as "button" | "submit" | "reset"
// type: "button",
// size: "small" large | middle | small,
import { defineComponent } from "vue";
export default defineComponent({
  name: "OButton",
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
    type: {
      type: String,
      require: false,
      default: "dark", // "light" | "dark"
    },
    // text: String,
  },
  //   setup(props) {},
});
</script>

<style scoped>
.o-button {
  appearance: none;
  transition: background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out,
    color 0.2s ease-in-out;
  background-color: transparent;
  border: 0;
  border-radius: 0.25rem;
  box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.25);
  color: rgba(255, 255, 255, 0.875);
  cursor: pointer;
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.6rem;
  font-weight: 700;
  height: 2.75rem;
  letter-spacing: 0.15rem;
  line-height: 2.75rem;
  padding: 0 1.5rem 0 1.65rem;
  text-align: center;
  text-decoration: none;
  outline: none;
  /*  text-transform: uppercase; */
  white-space: nowrap;
}
.o-button:hover {
  box-shadow: inset 0 0 0 2px #ffe4b4;
  color: #ffe4b4 !important;
}
.o-button:active {
  background-color: rgba(255, 228, 180, 0.125);
}

/* size */
.o-button.small {
  font-size: 0.4rem;
  height: 1.875rem;
  line-height: 1.875rem;
  padding: 0 1.25rem 0 1.4rem;
}

/* type */
.o-button.light {
  color: #e37b7c;
  background-color: white;
  box-shadow: none;
}
.o-button.light:hover {
  background-color: #ffe4b4;
  color: #e37b7c !important;
}
</style>
