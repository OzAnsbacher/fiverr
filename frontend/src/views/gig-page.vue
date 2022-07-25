<!-- <template>
    <section v-if="gig" class="gig-page main-layout">
        <div class="info-side">
            <div class="details-title-info">
             
                <h1>{{ gig.title }}</h1>
                <div class="seller-info">
                    <div class="profile-img">
                        <img
                            :src="gig.owner.imgUrl"
                            alt=""
                            class="seller-img"
                        />
                    </div>
                    <p class="owner-name">{{ gig.owner.fullname }}</p>
                    <p>Level {{ gig.owner.level }} Seller</p>
                </div>
            </div>
            <carousel-details-cmp :images="images"></carousel-details-cmp>
            <div class="about-gig">
                <p class="about-title">About This Gig</p>
                <p class="about-text">{{ gig.description }}</p>
            </div>
            <img class="main-gig-image" :src="gig.imgUrl" alt="" />
            <p class="about-title">About The Seller</p>
            <div class="about-seller">
                <div class="seller-profile">
                    <div class="profile-img-about">
                        <img
                            :src="gig.owner.imgUrl"
                            alt=""
                            class="seller-img"
                        />
                    </div>
                </div>
                <div class="rate-profile">
                    <p>{{ gig.owner.fullname }}</p>
                    <span class="star-details"> {{ getStars }} </span>
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
                            Average response time
                            <br />
                            <b>{{ gig.averageResponseTime }}</b>
                        </li>
                        <li>
                            Member since
                            <br />
                            <b>{{ gig.memberSince }}</b>
                        </li>
                        <li>
                            Last delivery
                            <br />
                            <b>{{ gig.lastDelivery }}</b>
                        </li>
                    </ul>
                </div>
                <div class="seller-description">
                    {{ gig.owner.description }}
                </div>
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
                            <img
                                src="https://img.freepik.com/free-vector/wall-office-clock-with-black-red-hands-white-dial_1284-8992.jpg?w=2000"
                                alt
                            />
                            <p>{{ gig.daysToMake }} Days Delivery</p>
                        </div>
                    </div>
                </div>
                <div class="promises-section">
                    <div class="guarentee-section">
                        <p>✔ High quality product guarenteed</p>
                    </div>
                    <div class="guarentee-section">
                        <p>✔ Delivery on time guarentee </p>
                    </div>
                                        <div class="guarentee-section">
                        <p>✔ Refund if ur not satisfied </p>
                    </div>
                </div>
                <div class="buy-btn">
                    <span>Continue</span>
                </div>
            </div>
        </div>
    </section>
</template> -->

<template>
  <section v-if="gig" class="gig-page main-layout">
    <div class="info-side">
      <div class="details-title-info">
        <h1>{{ gig.title }}</h1>
        <div class="seller-info">
          <div class="profile-img">
            <img :src="gig.owner.imgUrl" alt="seller image" class="seller-img" />
          </div>
          <p class="owner-name">{{ gig.owner.fullname }}</p>
          <p>Level {{ gig.owner.level }} Seller</p>
          |
          <div v-if="gig.owner.rate">
            <span class="stars-details"
              >{{ getStars }} 3
              <p class="review-length">(1k+)</p></span
            >
          </div>
        </div>
      </div>
      <carousel-details-cmp :images="images"></carousel-details-cmp>
      <div class="about-gig">
        <p class="about-title">About This Gig</p>
        <p class="about-text">{{ gig.about }}</p>
      </div>
      <p class="about-title">About The Seller</p>
      <div class="about-seller">
        <div class="seller-profile">
          <div class="profile-img-about">
            <img :src="gig.owner.imgUrl" alt="seller image" class="seller-img" />
          </div>
        </div>
        <div class="rate-profile">
          <p>{{ gig.owner.fullname }}</p>
          <span class="stars-details"
            >{{ getStars }} 3 
            <h1 class="review-length">(1k+)</h1></span
          >
          <!-- <img src="getStars" alt=""> -->
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
              <b>{{ gig.averageResponseTime }}</b>
            </li>
            <li>
              Member since
              <br />
              <b>{{ gig.averageResponseTime }}</b>
            </li>
            <li>
              Last delivery
              <br />
              <b>{{ gig.lastDelivery }}</b>
            </li>
          </ul>
        </div>
        <div class="seller-description">{{ gig.description }}</div>
      </div>
      <progress-bar-details :user="currUser" v-if="currUser" />
      <div v-if="currUser">
        <form
          class="review-form"
          v-if="loggedInUser"
          @submit.prevent="addReview()"
        >
          <p class="add-review-seller-p">Add your review about the seller</p>
          <textarea
            placeholder="Your Opinion Matters..."
            v-model="reviewToAdd.txt"
            class="text-area-details"
          ></textarea>
          <div class="rate-and-save">
            <div class="">
              <p class="rate-p">Rate:</p>
              <select
                name="Rate the owner"
                class="rate-owner-review"
                v-model="reviewToAdd.rate"
                placeholder="Rate"
              >
                <option value="" disabled selected>Select your Rate</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div class="save-review-btn">
              <button>Save</button>
            </div>
          </div>
        </form>
        <div class="reviews-wrap" v-for="review in gig.reviews" :key="review">
          <ul class="review-list">
            <li class="review-user">
              <div class="user-profile-image">
                <img :src="review.by.imgUrl" alt />
              </div>
              <div class="header-info">
                <div class="reviewer-details">
                  <p>{{ review.by.fullname }}</p>
                  <div class="review-rating">
                    <span class="star">★</span>
                    <p>{{ review.rate }}</p>
                  </div>
                </div>
                <div class="reviewer-sub-details">
                  <div class="country">
                    <img :src="review.by.flag" alt class="country-flag" />
                    <p>{{ review.by.country }}</p>
                  </div>
                </div>
              </div>
              <div class="review-description">
                <p>{{ review.txt }}</p>
              </div>
              <div class="review-published">
                <p>{{ review.reviewedAt }}</p>
              </div>
            </li>
          </ul>
        </div>
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
          <div class="revision-wrapper">
            <img src="../assets/logo/cycle.png" alt />
          </div>
        </div>
        <div class="promises-section">
          <div class="guarentee-section">
            <div class="v-image">
              <img
                src="../img/Check-mark.jfif"
                class="v-details"
                alt=""
              />
            </div>
            <p>High quality product guarenteed</p>
          </div>
          <div class="guarentee-section">
            <div class="v-image">
              <img
                src="../img/Check-mark.jfif"
                class="v-details"
                alt=""
              />
            </div>
            <p>Delivery on time guarentee</p>
          </div>
          <div class="guarentee-section">
            <div class="v-image">
              <img
                src="../img/Check-mark.jfif"
                class="v-details"
                alt=""
              />
            </div>
            <p>1 Product</p>
          </div>
        </div>
        <div class="buy-btn">
          <button @click="addOrder">Continue (${{ gig.price }})</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gigService } from "../services/gig-service";
import carouselDetailsCmp from "../cmps/carousel-details-cmp.vue";

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
            },
        };
    },
    async created() {
        var { gigid } = this.$route.params;
        console.log(gigid);
        const res = await gigService.getById(gigid);
        console.log(res);
        this.gig = res;
        this.images = res.images;
        console.log(this.images)
    },
    methods: {},
    computed: {
        gigImg() {
            return this.gig.image;
        },
        getStars() {
            let stars = "";
            for (let index = 0; index < this.gig.owner.rate; index++) {
                stars += "★";
            }
            return stars;
        },
        // return this.gig and save it in the created
    },
    unmounted() {},
    components: {
        carouselDetailsCmp,
    },
};
</script>

<style></style>
