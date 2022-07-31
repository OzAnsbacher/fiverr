<template>
  <div>
    <li class="order-item flex">
      <section class="order-preview flex">
        <div class="main">
          <img class="bo-img-gig" :src="order.gig.images[0].image" alt="" />

          <div class="gig-info flex column">
            <span class="price">Price</span>
            <span class="_price">{{ order.gig.price }}.00$</span>
          </div>
          <div class="delivery-container flex column">
            <span class="delivery-time">Delivery Time</span>
            <span class="days">{{ order.timeToDeliver }} Days</span>
          </div>
          <div class="order-date flex column">
            <span class="title">Issued At</span>
            <span class="date">09:48 יולי 2022</span>
          </div>
          <div class="flex column">
            <img class="bo-img-seller" :src="order.seller.imgUrl" alt="" />
            <h5>{{ order.seller.fullname }}</h5>
          </div>
        </div>
        <div class="status-container">
          <span class="order-type">Order Status:</span>
          <span class="status gray">Pending</span>
        </div>
      </section>
    </li>
  </div>
</template>

<script>
export default {
props:["order"],
  data() {
    return {};
  },
  created() {
  },
  methods: {},
  computed: {

    getBuyer() {
      return this.order.buyer;
    },
  },
  unmounted() {},
}
</script>

<style lang="scss" scoped></style>
