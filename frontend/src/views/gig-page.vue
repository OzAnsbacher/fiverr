<template>
<section class="gig-page main-layout">
  <div class="info-side">
    <div class="details-title-info">
      <!-- <h1>{{ gig.title }}</h1> -->
      <h1>this is supposed to be the title</h1>
      <div class="seller-info">
        <p class="owner-name">ayo lamo</p>
        <p class="owner-level">omal oya</p>
      </div>
    </div>

  </div>
  </section>
</template>

<script>
import { gigService } from '../services/gig-service';

export default {
  name: "gig-detail",
  data() {
    return {
      gig: null,
      images: "",
      rates: "",
    };
  },
  async created() {
    var { _id } = this.$route.params;
    await gigService.getById(_id).then((gig) => {
      this.gig = gig;
      this.images = gig.images
      });
    },
  methods: {},
  computed: {
  },
  unmounted() {},
};
</script>

<style></style>
