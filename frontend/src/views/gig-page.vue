<template>
  <div>
    <h1>Good</h1>
    <p>a</p>
  </div>
</template>

<script>
import { gigService } from "../services/gig-service";
export default {
  data() {
    return {};
  },
  created() {
    this.get()
  },
  methods: {
    async get() {
      const res=await gigService.query();
      console.log(res);
    },
  },
  computed: {},
  unmounted() {},
};
</script>

<style></style>
