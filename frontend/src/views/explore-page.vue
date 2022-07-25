<template>
  <div class="conteiner-explore main-layout">
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
        "Lading Page",
        "Minimal Logo",
        "Voice Active",
        "2D Animation",
        "Marketing Video",
        "Instegram",
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

  methods: {
    async getCategory(filterBy) {
      try {
        await this.$store.dispatch({ type: "loadGigs", filterBy });
        this.gigs = this.$store.getters.gigsToShow;
      } catch (error) {
        console.log("error explore", error);
      }
    },
  },
  computed: {
    // gigs() {
    //   return this.$store.getters.gigsToShow;
    // },
    getTags() {
      return this.tags;
    },
    getGigs() {
      const filterEx = this.$store.getters.getFilterEx;
      var gigs = this.gigs;
      if (!gigs) return;
      if (filterEx.min) {
        var gigs = gigs.filter((gig) => gig.price > filterEx.min);
      }
      if (filterEx.max) {
        var gigs = gigs.filter((gig) => gig.price < filterEx.max);
      }
      if (filterEx.populary) {
        var gigs = gigs.filter((gig) => gig.owner.rate >= filterEx.populary);
      }
      if (filterEx.time) {
        var gigs = gigs.filter((gig) => gig.daysToMake <= filterEx.time);
      }
      return gigs;
    },
  },
  unmounted() {},
};
</script>
