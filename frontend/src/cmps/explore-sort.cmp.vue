<template>
  <div class="flex align-center">
    <p>Sort By</p>
    <el-select class="ex-filter-popular ex-btn"  v-model="value" @change="sortBy">
      <el-option value="Name">Name</el-option>
      <el-option value="Price">Price </el-option>
    </el-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value:"Name"
    };
  },
  created() {},
  methods: {
    sortBy(val) {
      const sortBy = val;
      this.$emit("sortBy", sortBy);
    },
  },
  computed: {},
  unmounted() {},
};
</script>
