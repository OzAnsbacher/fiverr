<template>
  <div>
    <el-select
      class="ex-btn"
      @select="filterPrice"
      multiple
      placeholder="Budget"
      
      :class="{ 'full-filter': min > 0 || max > 0 }"
    >
      <el-option value="">
        <input
          v-model="min"
          @change="filterPrice"
          class="w-50 m-2"
          placeholder="Min"
          :prefix-icon="Search"
        />
      </el-option>
      <el-option value="">
        <input
          class="w-50 m-2"
          placeholder="Max"
          v-model="max"
          @change="filterPrice"
          :prefix-icon="Search"
        />
      </el-option>
      <el-option value="">Aplly</el-option>
    </el-select>
  </div>
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
