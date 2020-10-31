<template>
<span>
    <q-parallax :src="store.thumbnail" :height="250">
        <router-link to="/">
            <q-page-sticky position="top-left" :offset="[5, 5]">
                <q-btn round color="primary" icon="arrow_back" />
            </q-page-sticky>
        </router-link>
        <h1 class="text-white">Basic</h1>
    </q-parallax>
</span>
</template>

<script>
export default {
    name: 'StorePage',
    data(){
        return{
            store: null,
        }
    },
    created(){
        this.store = JSON.parse(localStorage.store)
    }
}
</script>
