<template>
  <div>
    <el-select
      @select="filterPrice"
      multiple
      placeholder="Budget"
      style="width: 240px"
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
