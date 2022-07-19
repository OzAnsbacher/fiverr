<template>
  <div class="conteiner-tags">
    {{ tags }}
  </div>
  <div>{{ gigs }}</div>
</template>

<script>
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
    };
  },
  components: {},
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
