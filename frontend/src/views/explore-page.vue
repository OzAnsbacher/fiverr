<template>
  <div class="conteiner-tags">
    <explore-tags :tags="tags" />
    <explore-category @setCategory="getCategory" :res="res" />
    <explore-filters />
    <explore-cards :gigs="gigs" />
  </div>
  <!-- <div>{{ gigs }}</div> -->
</template>

<script>
import exploreTags from "../cmps/explore-tags-header.cmp.vue";
import exploreCategory from "../cmps/explore-category.cmp.vue";
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
    exploreTags,
    exploreCategory,
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
    async getCategory(filterBy) {
      console.log(filterBy);
      try {
        await this.$store.dispatch({ type: "loadGigs", filterBy });
        this.gigs = this.$store.getters.gigsToShow;
      } catch (error) {
        console.log("error explore", error);
      }
    },
 
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
