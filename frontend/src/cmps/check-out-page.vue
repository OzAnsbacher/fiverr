<!-- <template>
    <section class="gig-page main-layout">
        <div class="info-side">
            <div class="details-title-info">
                <h1>{{ gig.title }}</h1>
                <div class="seller-info">
                    <div class="profile-img">
                        <img
                            :src="gig.owner.imgUrl"
                            alt="seller image"
                            class="seller-img"
                        />
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
                        <img
                            :src="gig.owner.imgUrl"
                            alt="seller image"
                            class="seller-img"
                        />
                    </div>
                </div>
                <div class="rate-profile">
                    <p>{{ gig.owner.fullname }}</p>
                    <span class="stars-details"
                        >{{ getStars }} 3
                        <h1 class="review-length">(1k+)</h1></span
                    >
                    <img src="getStars" alt="">
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
                            <img src="" alt />
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
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 11 9"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentFill"
                                    style='<svg width=
    "16" height="16" viewBox="0 0 11 9" xmlns="http: //www.w3.org/2000/svg" fill="currentFill"><path d="M3.645 8.102.158 4.615a.536.536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"></path></svg>;
'
                                >
                                    <path
                                        d="M3.645 8.102.158 4.615a.536.npm536 0 0 1 0-.759l.759-.758c.21-.21.549-.21.758 0l2.35 2.349L9.054.416c.21-.21.55-.21.759 0l.758.758c.21.21.21.55 0 .759L4.403 8.102c-.209.21-.549.21-.758 0Z"
                                    ></path>
                                </svg>
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
                    <router-link to="/checkout">
                        <button>Continue</button>
                    </router-link>
                </div>
            </div>
        </div>
        <p>ayo
        
        </p>
    </section>
</template>


<script>
import { gigService } from "../services/gig-service";

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
        console.log(this.images);
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
    },
};
</script>

<style></style> -->

<template>
<section v-if="gig" class="check-out-page main-layout">
    <h1>{{ gig.title }}</h1>
    <p> <img :src="gig.images[0].image" alt=""></p>
    <p>${{ gig.price }}</p>
    </section>
</template>

<script>
import { gigService } from "../services/gig-service";
export default {
    data() {
        return {
            gig: null,
            images: null,
        };
    },
    async created() {
        try {
            var { gigid } = this.$route.params;
            console.log(gigid);
            const res = await gigService.getById(gigid);
            console.log(res);
            this.gig = res;
            this.images = res.images;
        } catch (error) {}
    },
};
</script>
