<template>
  <section v-if="gig" class="gig-page main-layout">
    <div class="info-side">
      <div class="details-title-info">
        <p class="gig-category">{{ gig.category }}</p>
        <h1>{{ gig.title }}</h1>
        <div class="seller-info">
          <div class="profile-img">
            <img :src="gig.owner.imgUrl" alt="" class="seller-img" />
          </div>
          <p class="owner-name">{{ gig.owner.fullname }}</p>
          <p>Level {{ gig.owner.level }} Seller</p>
        </div>
      </div>
      <carusel-details :images="images"></carusel-details>
  
      <div class="about-gig">
        <p class="about-title">About This Gig</p>
        <p class="about-text">{{ gig.description }}</p>
      </div>
        <img class="main-gig-image" :src="gig.imgUrl" alt="">
      <p class="about-title">About The Seller</p>
      <div class="about-seller">
        <div class="seller-profile">
          <div class="profile-img-about">
            <img :src="gig.owner.imgUrl" alt="" class="seller-img" />
          </div>
        </div>
        <div class="rate-profile">
          <p>{{ gig.owner.fullname }}</p>
          <button class="contact-me-btn">Contact Me</button>
        </div>
      </div>
      <div class="seller-info-details">
        <div class="info-table">
          <ul>
            <li>
              From
              <br />
              <b>{{ gig.owner.country }}</b>
            </li>
            <li>
              Avg. response time
              <br />
              <b>Way too long</b>
            </li>
            <li>
              Member since
              <br />
              <b>August 1993</b>
            </li>
            <li>
              Last delivery
              <br />
              <b>Three months ago</b>
            </li>
          </ul>
        </div>
        <div class="seller-description">{{ gig.owner.description }}</div>
      </div>
        </div>
    <div class="check-out-section">
      <div class="check-out-part">
        <div class="checkout-title">
          <p class="service">{{ gig.category }}</p>
          <p class="price">${{ gig.price }}</p>
        </div>
        <div class="additional-info">
          <div class="delivery-wrapper">
            <div class="img-clock">
              <img src="../assets/logo/clock.png" alt />
              <p>{{ gig.daysToMake }} Days Delivery</p>
            </div>
          </div>
        </div>
        <div class="promises-section">
          <div class="guarentee-section">
            <p>High quality product guarenteed</p>
          </div>
          <div class="guarentee-section">
            <p>Delivery on time guarentee</p>
          </div>
          <div class="guarentee-section">
            <p>1 Product</p>
          </div>
        </div>
        <div class="buy-btn">
          <button>Continue to checkout {{ gig.price }}</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gigService } from "../services/gig-service";
import carouselDetails from "../cmps/carousel-details-cmp.vue";

export default {
    name: "gig-detail",
    data() {
        return {
            gig: null,
            images: "",
            rates: "",
            currUser: null,
            reviewToAdd: {
              txt: "",
              createdAt: new Date().getMinutes(),
              flag: "",
            }
        };
    },
    async created() {
        var { gigid } = this.$route.params;
        console.log(gigid);
        const res = await gigService.getById(gigid);
        console.log(res);
        this.gig = res;
        this.images = res.images;
        const userId = this.gig.owner._id; 
    },
    methods: {},
    computed: {
        gigImg() {
            return this.gig.image;
        },
        // return this.gig and save it in the created
    },
    unmounted() { },
    components: { 
        carouselDetails
      }
};
</script>

<style></style>
