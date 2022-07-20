<template>
  <div class="explore-cards-conteiner">cards</div>
  <ul>
    <li class="explore-card" v-for="gig in gigs" :key="gig._id">
      <img class="img-gig" :src="gig.imgUrl" />
      <div class="explore-grid-details">
        <img class="explore-img-owner" :src="gig.owner.imgUrl" />
        <h3 class="explore-card-name">{{ gig.owner.fullname }}</h3>
        <p class="explore-card-degree">{{ gig.owner.level }}</p>
        <p class="explore-card-title">{{ gig.title }}</p>
        <p class="explore-card-rate">{{ gig.owner.rate }}</p>
        <p class="explore-card-like">🤍</p>
        <p class="explore-card-price">STARTING AT:{{ gig.price }}</p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["gigs"],
  data() {
    return {};
  },
  created() {},
  methods: {},
  computed: {},
  unmounted() {},
};
</script>
