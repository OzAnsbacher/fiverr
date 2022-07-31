<template>
  <div class="header-back-office flex">
    <div class="main-layout">
      <p @click="switch">Switch to Seller</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {
    switch() {
      this.$emit("seller");
    },
  },
  unmounted() {},
};
</script>

<style lang="scss" scoped></style>
