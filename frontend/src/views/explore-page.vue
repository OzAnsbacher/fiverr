<template>
  <div class="conteiner-tags">
    <explore-categories :tags="tags" />
    <explore-results @setCategory="getCategory" :res="res" />
    <explore-filters />
    <explore-cards :gigs="gigs" />
  </div>
  <!-- <div>{{ gigs }}</div> -->
</template>

<script>
import exploreCategories from "../cmps/explore-categories.cmp.vue";
import exploreResults from "../cmps/explore-results.cmp.vue";
import exploreFilters from "../cmps/explore-filters.cmp.vue";
import exploreCards from "../cmps/explore-cards.cmp.vue";
export default {
  data() {
    return {
      gigs: null,
      tags: [
        "logo-design",
        "wordpress",
        "voice-over",
        "artisitic",
        "proffesional",
        "accessible",
      ],
      res: "All Categories",
    };
  },
  components: {
    exploreCategories,
    exploreResults,
    exploreFilters,
    exploreCards,
  },
  async created() {
    // try {
    //   await this.$store.dispatch({ type: "loadGigs" });
    //   this.gigs = this.$store.getters.gigsToShow;
    // } catch (error) {
    //   console.log("error explore", error);
    // }
  },
  methods: {
   async getCategory(category){
    console.log(category);
                  try {
      await this.$store.dispatch({ type: "loadGigs", category });
      this.gigs = this.$store.getters.gigsToShow;
    } catch (error) {
      console.log("error explore", error);
    }
    }
  },
  computed: {
    gigs() {
      return this.$store.getters.gigsToShow;
    },
    getTags() {
      return;
    },
  },
  unmounted() {},
};
</script>

<style lang="scss" scoped></style>
