<template>
  <div class="conteiner-tags">
    <explore-tags @setTag="getCategory" :tags="tags" />
    <explore-category @setCategory="getCategory" :res="res" />
    <explore-carousel-category
      :categories="categories"
      @setCategory="getCategory"
    />
    <!-- <explore-filters @filter="getFilter" /> -->
    <explore-filters />
    <explore-cards :gigs="getGigs" />
  </div>
</template>

<script>
import exploreTags from "../cmps/explore-tags-header.cmp.vue";
import exploreCarouselCategory from "../cmps/explore-carousel-category.cmp.vue";
import exploreCategory from "../cmps/explore-category.cmp.vue";
import exploreFilters from "../cmps/explore-filters.cmp.vue";
import exploreCards from "../cmps/explore-cards.cmp.vue";
export default {
  data() {
    return {
      gigs: null,
      categories: null,
      filter: {},
      tags: [
        "lading page",
        "minimal logo",
        "voice active",
        "2d animation",
        "marketing video",
        "instegram",
      ],
      res: "All Categories",
    };
  },
  components: {
    exploreTags,
    exploreCategory,
    exploreFilters,
    exploreCards,
    exploreCarouselCategory,
  },
  created() {
    this.categories = this.$store.getters.categoriesToShow;
  },
  methods: {
    async getCategory(filterBy) {
      try {
        await this.$store.dispatch({ type: "loadGigs", filterBy });
        this.gigs = this.$store.getters.gigsToShow;
      } catch (error) {
        console.log("error explore", error);
      }
    },
    // getFilter(filter) {
    //   for (const key in filter) {
    //     this.filter[key] = filter[key];
    //   }
    // },
    getFilterGigs() {
      var gigs = this.gigs;
      const filter = this.$store.getters.setFilterEx;
      // gigs = gigs.filter((gig) => gig.price > filter.min);
      // console.log("this.gigs", this.gigs);
      console.log("gigs", gigs);

      return gigs;
    },
  },
  computed: {
    getGigs() {
      const gigs = this.getFilterGigs();
      console.log(gigs);
      return gigs;
    },
  },
  unmounted() {},
};
</script>
