<template>
  <div>
    <h2>{{ getCategory }}</h2>
  </div>
</template>

<script>
export default {
  props: [""],
  data() {
    return {
      category: null,
    };
  },
  created() {
    const { category } = this.$route.params;
    this.stringCategory(category)
    this.setCategory(category)
  },
  methods: {
    stringCategory(category) {
      if (!category) this.category = "All Categories";
      else this.category = category;
    },
  setCategory(category){
    this.$emit('setCategory', category)
  }
  },
  computed: {
    getCategory() {
      return this.category;
    },
  },
  unmounted() {},
};
</script>
