<template>
  <!--   
    <li class="li-back-office flex">
      <h5>Seller: Mosh</h5>
      <h5 class="">Price: $40.00</h5>
      <h5 class="">Time To Deliver:4 Days</h5>
      <h5>Message To Seller</h5>
    </li> -->
  <li class="li-back-office flex">
   <div class=" wd-cell-bo">
    <img class="" :src="order.seller.imgUrl" alt="" />
   </div>
    <div class="flex column wd-cell-bo">
      <h4>Seller:</h4>
      <h5>{{ order.seller.fullname }}</h5>
    </div>
    <div class="flex column wd-cell-bo-price">
      <h4 class="">Price:</h4>
      <h5>${{ order.gig.price }}.00</h5>
    </div>
    <div class="flex column wd-cell-bo">
      <h4 class="">Time To Deliver:</h4>
      <h5>{{ order.timeToDeliver }} Days</h5>
    </div>
    <div class="flex align-center btn-bo">
      <h4 class="pending-back-office">Pending</h4>
      <h4 class="msg-back-office">Message To Seller</h4>
    </div>
  </li>
  <!-- <li class="order-item flex">
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
    </li> -->
</template>

<script>
export default {
    props: ['order'],
    data() {
        return {}
    },
    created() {},
    methods: {},
    computed: {
        getBuyer() {
            return this.order.buyer
        },
    },
    unmounted() {},
}
</script>

<style lang="scss" scoped></style>
