<template>
  <div class="ex-filter-conteiner">
    <explore-filter-popularity @populary="getFilter" />
    <explore-filter-price @price="getFilter" />
    <explore-filter-time @time="getFilter" />
    <explore-budget />
  </div>
  <div class="ex-btn count-gigs flex align-center space-between">
    <p >{{ gigs.length }} services available</p>
    <explore-sort @sortBy="getSortby" />
  </div>
</template>

<script>
import exploreBudget from "./explore-budget.cmp.vue";
import exploreSort from "./explore-sort.cmp.vue";
import exploreFilterTime from "./explore-filter-time.cmp.vue";
import exploreFilterPrice from "./explore-filter-price.cmp.vue";
import exploreFilterPopularity from "./explore-filter-popularity.cmp.vue";
export default {
  props: ["gigs"],
  data() {
    return {};
  },
  components: {
    exploreFilterPopularity,
    exploreFilterPrice,
    exploreFilterTime,
    exploreSort,
    exploreBudget
  },
  created() {
    console.log(this.gigs);
  },
  methods: {
    getFilter(filter) {
      this.$store.dispatch({ type: "getFilterExp", filter });
    },
    getSortby(sort) {
       this.$store.dispatch({ type: "getSortEx", sort });
    },
  },
  computed: {},
  unmounted() {},
};
</script>
