<template>
<span>
    <div class="row q-ma-md">
        <div class="col-xs-12 col-sm-3 q-pa-sm" v-for="store in homeStores" :key="store.id">
            <q-card class="store-card" @click="getStore(store)">
                <q-img :src="store.thumbnail" style="width: 463 px; height: 230px;" />

                <q-card-section>
                    <q-avatar size="100px" class="absolute" style="top: 0; right: 12px; transform: translateY(-50%);">
                        <img :src="store.logo">
                    </q-avatar>

                    <div class="row no-wrap items-center">
                        <div class="col text-h6 ellipsis text-primary">
                            {{store.name}}
                        </div>
                    </div>

                    <q-rating v-model="store.score" :max="5" size="24px" />
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <div class="text-subtitle2 text-grey">
                        {{store.type}}・{{store.distance}} Km
                        <q-icon name="place" />
                    </div>
                    <div class="text-caption text-grey">
                        {{store.description.substr(0, 79)}} ...
                    </div>
                </q-card-section>

                <q-separator />

                <!-- <q-card-actions>
                    <q-btn flat round icon="store" color="primary" />
                    <q-btn flat color="primary">
                        Ver Restaurante
                    </q-btn>
                </q-card-actions> -->
            </q-card>
        </div>
    </div>
</span>
</template>

<script>
import stores from 'src/store/modules/stores'
import {
    mapState,
    mapActions
} from 'vuex'
export default {
    name: 'ListStores',
    data() {
        return {
            homeStores: null,
        }
    },
    created() {
        this.homeStores = this.stores
    },
    methods:{
        getStore(store){
            localStorage.store = JSON.stringify(store)
            this.$router.push({ name: 'store', params: { id: store.id } })
        }
    },
    computed: {
        ...mapState("stores", ["stores"])
    }
}
</script>
<style>
.store-card{
    cursor:pointer;
}
</style>