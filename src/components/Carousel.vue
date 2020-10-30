<template>
<q-carousel class="q-mb-lg" style="border-radius: 5px;" animated arrows swipeable v-model="slide" navigation infinite :autoplay="autoplay" transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
    <q-carousel-slide :name="1" img-src="~assets/banners/b1.jpg" />
    <q-carousel-slide :name="2" img-src="~assets/banners/b2.jpg" />
    <q-carousel-slide :name="3" img-src="~assets/banners/b3.jpg" />
</q-carousel>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            slide: 1,
            autoplay: true
        }
    }
}
</script>
