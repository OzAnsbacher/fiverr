<template>
  <div class="header-back-office flex">
    <div class="main-layout">
      <h4 v-if="isBuyer" @click="switchBuyer">Switch to Seller</h4>
      <h4 v-else @click="switchBuyer">Switch to Buyer</h4>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBuyer: true,
    };
  },
  created() {},
  methods: {
      switchBuyer(){
        this.isBuyer = !this.isBuyer;
        console.log('this.isBuyer', this.isBuyer)
        
        this.$emit("order", this.isBuyer );
      },
  },
  computed: {
  },
  unmounted() {},
};
</script>

<style lang="scss" scoped></style>
