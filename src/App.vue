<template>
  <GithubCorner />
  <section class="wrapper">
    <div class="panel">
      <h1 class="title">
        Hello, my name<br />
        is Bruce Jenn
      </h1>
      <div class="content">
        <p>
          <strong> Ounce UI </strong>is a Vue3-based UI toolkit for the web.
          <br />

          It is optimized for building complex, data-dense web interfaces for
          desktop applications which run in modern browsers and IE11. This is
          not a mobile-first UI toolkit.
        </p>
      </div>
    </div>
    <!-- button -->
    <div class="panel">
      <h3 class="title">Buttons</h3>
      <div class="content">
        <OButton>this is button!</OButton>
        <OButton className="mlr" type="light">type="light" button!</OButton>
        <OButton size="small">size="small" button!</OButton>
      </div>
    </div>
    <!-- input -->
    <div class="panel">
      <h3 class="title">Input</h3>
      <div class="content">
        <OInput label="name:" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GithubCorner from "./GithubCorner.vue";

import { OButton, OInput } from "@/components";

export default defineComponent({
  name: "App",
  components: {
    GithubCorner,
    OButton,
    OInput,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss"></style>
