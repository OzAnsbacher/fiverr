<template>
    <div class="hero-section">
        <div class="hero-img">
            <div :style="{ backgroundImage: 'url(${image})' }" class="hero-img-box"></div>
        </div>
        <div class="hero-box">
            <div class="hero-container main-layout flex space-between">
                <div class="hero-content">
                    <h1>
                        Find the perfect
                        <span class="freelance">freelance</span>
                        <br />
                        services for your business
                    </h1>

                    <gig-filter @setFilter="setFilter" />

                    <div class="popular-categories">
                        <p>Popular:</p>
                        <span>
                            <a>Website Design</a>
                        </span>
                        <span>
                            <a>WordPress</a>
                        </span>
                        <span>
                            <a>Logo Design</a>
                        </span>
                        <span>
                            <a>NFT Art</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import gigFilter from './gig-filter.cmp.vue'
export default {
    components: {
        gigFilter,
    },
}
</script>

<style></style>
