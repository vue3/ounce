<template>
  <div :class="className">
    <label :for="uniqueID">{{ label }}</label>
    <input
      :name="uniqueID"
      :id="uniqueID"
      class="o-input"
      type="text"
      :class="[]"
      value
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { genRandomString } from "@/common/tools";

export default defineComponent({
  name: "OInput",
  props: {
    className: {
      type: String,
      require: false,
    },
    placeholder: {
      type: String,
      require: false,
      default: "pls enter ...",
    },
    label: {
      type: String,
      require: false,
    },
    value: {
      type: String,
      require: false,
    },
    type: {
      type: String,
      require: false,
      default: "dark", // "light" | "dark"
    },
    // text: String,
  },
  // setup(props) {
  setup() {
    const uniqueID = `o-input-${genRandomString()}`;
    return {
      uniqueID,
    };
  },
});
</script>

<style scoped>
label {
  color: rgba(255, 255, 255, 0.875);
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0 0 0.4875rem 0;
}
.o-input {
  appearance: none;
  background: transparent;
  border: solid 2px rgba(255, 255, 255, 0.25);
  border-radius: 0.25rem;
  color: inherit;
  display: block;
  outline: 0;
  padding: 0 0.75rem;
  text-decoration: none;
  width: 100%;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.65;
  color: rgba(255, 255, 255, 0.75);
}
.o-input:focus {
  border-color: #ffe4b4;
}
::-webkit-input-placeholder {
  /* WebKit browsers */
  color: rgba(255, 255, 255, 0.25);
  /* font-size: 16px; */
}
</style>
