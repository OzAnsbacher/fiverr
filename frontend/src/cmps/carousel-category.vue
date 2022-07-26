<template>
    <section class="categories-container">
        <h2 class="category-title">Popular professional services</h2>
        <vueper-slides
  class="no-shadow"
  fixed-height="345px"
  :visible-slides="5"
  slide-multiple
  :gap="3"
  :slide-ratio="1 / 4"
  :dragging-distance="200"
  :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
  <vueper-slide v-for="category in categories" :key="category.name"     :image="category.img"   >
    <template #content>
                    <li class="category-preview-box" @click="explore(category.name)">
                    <div class="category-txt-name-box">
                        <small class="category-txt">{{ category.txt }}</small>
                        <h4 class="category-name">{{ category.name }}</h4>
                    </div>
                </li>
    </template>
  </vueper-slide>
</vueper-slides>
        <!-- <Carousel :items-to-show="5" :wrap-around="true" v-if="categories">
            <Slide v-for="category in categories" :key="category.name">
                <li class="category-preview-box" @click="explore(category.name)">
                    <div class="category-txt-name-box">
                        <small class="category-txt">{{ category.txt }}</small>
                        <h4 class="category-name">{{ category.name }}</h4>
                    </div>
                    <img :src="category.img" alt="Cant load img right now" />
                </li>
            </Slide>

            <template #addons>
                <Navigation />
            </template>
        </Carousel> -->
    </section>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { gigService } from '../services/gig-service'

export default defineComponent({
    name: 'wrap-around',
    props: ['categories'],

    computed: {
        // categoryImg() {
        //     return this.category.img
        // },
        getCategories() {
            console.log(this.categories)
            return this.categories
        },
    },
    methods: {
        explore(category) {
            const filterBy = {
                category,
            }
            const queryStringParams = `explore?category=${filterBy.category}`
            const newUrl = queryStringParams
            console.log(newUrl)
            this.$router.push(newUrl)
        },
    },
    created() {
        console.log(this.categories)
    },
    components: {
        Carousel,
        Slide,
        Navigation,
        VueperSlides, VueperSlide
    },
})
</script>
<style>
/* .vueperslide.vueperslide--visible{
    border-radius:4px;
    
}

.vueperslide.vueperslide--visible:hover{
    transition: none;
        transform: unset;
}



.vueperslides--fixed-height.vueperslides--bullets-outside{
    width: 1215px;
} */
</style>