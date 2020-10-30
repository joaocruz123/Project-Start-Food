<template>
<q-page :class="{ 'q-mx-xl': !this.$q.platform.is.mobile }">
    <Carousel></Carousel>
    <hr class="q-mx-lg">
    <div class="row q-pa-sm justify-center text-center gutter-sm">
        <div class="col-xs-12 col-sm-12">
            <p class="text-weight-thin destaque">
                <q-icon name="fastfood" color="secondary" style="font-size: 24px;" /> Restaurantes
            </p>
        </div>
    </div>
    <ListStores></ListStores>
</q-page>
</template>

<script>
import Carousel from './../components/Carousel'
import ListStores from './../components/stores/ListStores'
export default {
    name: 'PageIndex',
    components: {
        Carousel,
        ListStores
    },
    data() {
        return {

        }
    }
}
</script>
<style>
hr{
    height: 1px;
	border-width:0;
    background: #e4e3e3 ;
}
.destaque{
    font-size: 28px;
}
</style>
