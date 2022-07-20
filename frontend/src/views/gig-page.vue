<template>
<section v-if="gig" class="gig-page main-layout">
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
      var { gigid } = this.$route.params;
      console.log(gigid)
      const res = await gigService.getById(gigid) 
      console.log(res)
      // this.gig = res;
      // this.images = res.images
    },
  methods: {},
  computed: {
    gigImg() {
      return this.gig.image;
    }
  // return this.gig and save it in the created 
  },
  unmounted() {},
};
</script>

<style></style>
