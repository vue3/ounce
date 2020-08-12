<template>
  <div class="o-select" :class="className">
    <label :for="uniqueID">Category</label>
    <div class="o-select-wrapper">
      <select :name="uniqueID" :id="uniqueID">
        <option value="">-</option>
        <option value="1">Manufacturing</option>
        <option value="1">Shipping</option>
        <option value="1">Administration</option>
        <option value="1">Human Resources</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { genRandomString } from "@/common/tools";

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
  // setup(props) {
  setup() {
    const uniqueID = `o-select-${genRandomString()}`;
    return {
      uniqueID,
    };
  },
});
</script>

<style scoped>
.o-select {
}
.o-select label {
  color: rgba(255, 255, 255, 0.875);
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  margin: 0 0 0.4875rem 0;
}
.o-select-wrapper {
  text-decoration: none;
  display: block;
  position: relative;
}
.o-select-wrapper:before {
  display: block;
  content: "\f107";
  position: absolute;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 2.5rem;
  line-height: 2.5rem;
  color: rgba(255, 255, 255, 0.75);
  pointer-events: none;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  font-family: FontAwesome;
  font-style: normal;
  font-weight: normal;
  text-transform: none !important;
}
.o-select-wrapper select {
  appearance: none;
  background: transparent;
  border: solid 2px rgba(255, 255, 255, 0.25);
  border-radius: 0.25rem;
  display: block;
  outline: 0;
  padding: 0 0.75rem;
  text-decoration: none;
  width: 100%;
  height: 2.5rem;
  color: rgba(255, 255, 255, 0.75);
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.65;
}
.o-select-wrapper select:focus {
  border-color: #ffe4b4;
}
.o-select-wrapper select option {
  background-color: rgba(255, 255, 255, 0.875);
  color: #2e2b37;
}
</style>
