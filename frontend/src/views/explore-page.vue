<template>
  <!-- <div class="conteiner-tags">{{ getTags }}</div> -->
  <div>{{ gigs }}</div>
</template>

<script>
export default {
  data() {
    return {
      gigs: null,
    };
  },
  components: {},
  async created() {
    await this.$store.dispatch({ type: "loadGigs" });
  },
  methods: {},
  computed: {
    gigs() {
      return this.$store.getters.gigsToShow;
    },
    // getTags() {
    //   return this.gigs.map(gig)
    // },
  },
  unmounted() {},
};
</script>

<style lang="scss" scoped></style>
