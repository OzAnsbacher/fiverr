<template>
    <div class="carousel">
        <vueper-slides
            ref="vueperslides1"
            :touchable="false"
            fade
            :autoplay="false"
            :bullets="false"
            @slide="
                $refs.vueperslides2.goToSlide($event.currentSlide.index, {
                    emit: false,
                })
            "
        >
            <vueper-slide v-for="(image, i) in images" :key="i" :image="image">
                <img :src="(image, i)" alt />
            </vueper-slide>
        </vueper-slides>

        <div class="thumbnails">
            <vueper-slides
                class="no-shadow thumbnails"
                ref="vueperslides2"
                @slide="
                    $refs.vueperslides1.goToSlide($event.currentSlide.index, {
                        emit: false,
                    })
                "
                fixed-height="75px"
                :bullets="false"
                :touchable="false"
                :gap="2.5"
                :arrows="false"
            >
                <vueper-slide v-for="(image, i) in images" :key="i" :image="image" @click.native="$refs.vueperslides2.goToSlide(i)">
                    <img :src="(image, i)" alt />
                </vueper-slide>
            </vueper-slides>
        </div>
    </div>
</template>

<script>
import { VueperSlide, VueperSlides } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    props: ['images'],
    data() {
        return {}
    },
    created() {},
    componets: {
        VueperSlides,
        VueperSlide,
    },
}
</script>

<style>
.carousel {
    width: 100%;
}

.vueperslides.vueperslide {
    height: 400px;
}
</style>
