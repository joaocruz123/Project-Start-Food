<template>
<q-page>
    <q-carousel class="q-ma-lg" animated v-model="slide" navigation infinite :autoplay="autoplay" arrows transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false" @mouseleave="autoplay = true">
        <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
        <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
        <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
        <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
</q-page>
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
