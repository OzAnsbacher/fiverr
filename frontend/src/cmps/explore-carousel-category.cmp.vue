<template>
  <carousel :items-to-show="5">
    <slide v-for="category in getCategories" :key="category.name">
      <div
        class="explore-category-carusel"
        @click="loadCategory(category.name)"
      >
        <img :src="category.icon" />
        <h5>{{ category.name }}</h5>
      </div>
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  name: "App",
  props: ["categories"],
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  created() {},
  computed: {
    getCategories() {
      return this.categories;
    },
  },
  methods: {
    loadCategory(category) {
      const filterBy = { category };
      this.$emit("setCategory", filterBy);
    },
  },
};
</script>
