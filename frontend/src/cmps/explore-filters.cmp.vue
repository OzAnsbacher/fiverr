<template>
  <div class="ex-filter-conteiner">
    <explore-filter-popularity @populary="getFilter" />
    <explore-filter-price @price="getFilter" />
    <explore-filter-time @time="getFilter" />
  </div>
</template>

<script>
import exploreFilterTime from "./explore-filter-time.cmp.vue";
import exploreFilterPrice from "./explore-filter-price.cmp.vue";
import exploreFilterPopularity from "./explore-filter-popularity.cmp.vue";
export default {
  data() {
    return {};
  },
  components: {
    exploreFilterPopularity,
    exploreFilterPrice,
    exploreFilterTime,
  },
  created() {},
  methods: {
    getFilter(filter) {
      console.log('filter', filter)
      
      this.$store.dispatch({ type: "getFilterExp", filter });
    },
  },
  computed: {},
  unmounted() {},
};
</script>
