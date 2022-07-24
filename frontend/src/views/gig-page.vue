<template>
    <section v-if="gig" class="gig-page main-layout">
        <div class="info-side">
            <div class="details-title-info">
                <!-- <p class="gig-tags">{{ gig.tags }}</p> -->
                <p class="gig-category">{{ gig.category }} > Technical Press > Programming</p>
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
                        <p>✔ Refund guarentee if not satisfied </p>
                    </div>
                </div>
                <div class="buy-btn">
                    <button>Continue</button>
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
