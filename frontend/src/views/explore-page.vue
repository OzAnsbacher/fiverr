<template>
  <div class="conteiner-tags">
  <explore-tags :tags="tags" />
  <explore-results :res="res" />
  
   </div>
  <!-- <div>{{ gigs }}</div> -->
</template>

<script>
import exploreTags from '../cmps/explore-tags.cmp.vue'
import exploreResults from '../cmps/explore-results.cmp.vue'
export default {
  data() {
    return {
      gigs: null,
      tags: [
        "modern logo",
        "logo",
        "custom logo",
        "creative logo",
        "professional logo",
        "logo maker",
      ],
      res:"All Categories"
    };
  },
  components: {
    exploreTags,
    exploreResults,
  },
  async created() {
    try {
      await this.$store.dispatch({ type: "loadGigs" });
      this.gigs = this.$store.getters.gigsToShow;
    } catch (error) {
      console.log("error explore", error);
    }
  },
  methods: {},
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
