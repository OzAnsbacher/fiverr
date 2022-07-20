<template>
    <section v-if="gig" class="gig-page main-layout">
        <div class="info-side">
            <div class="details-title-info">
                <h1>{{ gig.title }}</h1>
                <div class="seller-info">
                    <div class="profile-img">
                        <img
                            src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/d2b733c8f152a9baab1b8e2efc14e176-1655401248537/340ea128-2dbd-4524-83c3-321ae8101a44.jpeg"
                            alt=""
                            class="seller-img"
                        />
                    </div>
                    <p class="owner-name">{{ gig.owner.fullname }}</p>
                    <p class="owner-level">{{ gig.owner.level }}</p>
                </div>
            </div>
            <div class="gig-details-category">
                <p>{{ gig.tags }}</p>
            </div>
            <p>Price ${{ gig.price }}</p>
            <p>Days to make {{ gig.daysToMake }}</p>
            <p><img :src="gig.imgUrl" alt="" /></p>
        </div>
                <div class="buy-btn">
                  <button @click="addOrder">Continue (${{ gig.price }})</button>
        </div>
                  <div class="about-gig">
                    <p class="about-title">About this gig</p>
                      <p>{{ gig.description }}</p>
                  </div>
                  <p class="about-title">About the seller</p>
                  <div class="about-seller">
                    <div class="seller-profile">
                      
                    </div>
                  </div>
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
        };
    },
    async created() {
        var { gigid } = this.$route.params;
        console.log(gigid);
        const res = await gigService.getById(gigid);
        console.log(res);
        this.gig = res;
        this.images = res.images;
    },
    methods: {},
    computed: {
        gigImg() {
            return this.gig;
        },
        // return this.gig and save it in the created
    },
    unmounted() {},
};
</script>

<style></style>
