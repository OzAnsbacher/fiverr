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
    const { category , price} = this.$route.query;
    console.log('category', category, price)
    const filterBy={category}
    this.stringCategory(filterBy)
    this.setCategory(filterBy)
  },
  methods: {
    stringCategory({category}) {
      if (!category) this.category = "All Categories";
      else this.category = category;
    },
  setCategory(filterBy){
    this.$emit('setCategory', filterBy)
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
