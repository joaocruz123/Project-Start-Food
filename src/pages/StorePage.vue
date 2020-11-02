<template>
<span>
    <q-parallax :src="store.thumbnail" :height="250">
        <router-link to="/">
            <q-page-sticky position="top-left" :offset="[5, 5]">
                <q-icon size="lg" name="keyboard_backspace" color="white" />
            </q-page-sticky>
        </router-link>
        <q-card class="my-card" :class="{'desktop-width' : !this.$q.platform.is.mobile}" style="opacity:.9">
            <q-card-section horizontal>
                <q-card-section class="col-4 flex flex-center">
                    <q-img :src="store.logo" style="width: 100px; height: 100px;border-radius: 50%" />
                </q-card-section>
                <q-card-section class="q-pt-sm">
                    <div class="text-h5 q-mt-sm q-mb-xs">{{store.name}}</div>
                    <div class="text-caption text-grey">
                        {{store.description}}
                    </div>
                    <q-separator class="q-mb-md" />
                    <div class="text-caption subtitle-store">
                        {{store.type}}
                        <q-icon name="stop_circle" style="font-size: 5px; padding: 0 5px;" />
                        <q-chip icon="query_builder">40-55 min</q-chip>
                        <q-icon name="stop_circle" style="font-size: 5px; padding: 0 5px;" />
                        <q-icon size="xs" name="place" /> {{store.distance}} Km
                        <q-icon name="stop_circle" style="font-size: 5px; padding: 0 5px;" />
                        <q-chip :color="store.delivery_value === 'Grátis' ? 'positive' : 'secondary'" text-color="white">{{`${store.delivery_value === 'Grátis' ? 'Entrega ' + store.delivery_value : 'Entrega R$ ' + store.delivery_value}`}}</q-chip>
                        <q-icon name="stop_circle" style="font-size: 5px; padding: 0 5px;" />
                        <q-icon name="star" size="xs" color="yellow" /> {{store.score}}
                    </div>
                </q-card-section>
            </q-card-section>
        </q-card>
    </q-parallax>
    <q-page :class="{ 'q-mx-md': !this.$q.platform.is.mobile }">
        <Highlights></Highlights>
    </q-page>
    
</span>
</template>

<script>
import Highlights from './../components/products/Highlights'
export default {
    name: 'StorePage',
    components: {
        Highlights
    },
    data() {
        return {
            store: null,
        }
    },
    created() {
        this.store = JSON.parse(localStorage.store)
    }
}
</script>

<style>
.subtitle-store {
    font-size: 0.9em;
    color: rgb(134, 134, 134);
}

.desktop-width {
    width: 900px;
}
</style>
