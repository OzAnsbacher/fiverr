<template>

    <el-select
      class="ex-btn ex-price"
      @select="filterPrice"
      multiple
      placeholder="Budget"
      :class="{ 'full-filter': min > 0 || max > 0 }"
    >
        <div class="input-min" >
      <h5>MIN.</h5>
      <el-option  value="">
        <el-input 
          v-model="min"
          @change="filterPrice"
          class="flex w-50 m-2"
          placeholder="Any"
          :prefix-icon="Search"
          
        />
      </el-option>
    </div>
    <div class="input-max">
      <h5>MAX.</h5>
      <el-option  value="">
        <el-input
          class="flex w-50 m-2"
          placeholder="Any"
          v-model="max"
          @change="filterPrice"
          :prefix-icon="Search"
           width="40px"
        />
      </el-option>
    </div>
    
    </el-select>
</template>

<script>
export default {
  data() {
    return {
      min: null,
      max: null,
    };
  },
  created() {},
  methods: {
    filterPrice() {
      const filter = {
        min: this.min,
        max: this.max,
      };
      this.$emit("price", filter);
    },
  },
  computed: {},
  unmounted() {},
};
</script>

<style lang="scss" scoped></style>
