<template>
<span>
    <div class="row q-ma-md">
        <div class="col-xs-12 col-sm-3 q-pa-sm" v-for="store in stores" :key="store.id">
            <q-card class="my-card">
                <q-img :src="store.thumbnail" style="width: 463 px; height: 230px;" />

                <q-card-section>
                    <q-btn fab color="primary" icon="place" class="absolute" style="top: 0; right: 12px; transform: translateY(-50%);" />

                    <div class="row no-wrap items-center">
                        <div class="col text-h6 ellipsis text-primary">
                            {{store.name}}
                        </div>
                        <div class="col-auto text-grey text-caption q-pt-md row no-wrap items-center">
                            <q-icon name="place" />
                            {{store.distance}} Km
                        </div>
                    </div>

                    <q-rating v-model="store.score" :max="5" size="24px" />
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <div class="text-subtitle2">
                        $・{{store.type}}
                    </div>
                    <div class="text-caption text-grey">
                        {{store.description.substr(0, 79)}} ...
                    </div>
                </q-card-section>

                <q-separator />

                <q-card-actions>
                    <q-btn flat round icon="store" color="primary" />
                    <q-btn flat color="primary">
                        Ver Restaurante
                    </q-btn>
                </q-card-actions>
            </q-card>
        </div>
    </div>
</span>
</template>

<script>
export default {
    name: 'ListStores',
    data() {
        return {
            stores: [{
                id: 1,
                name: "Burger King",
                type: "Hamburgueria",
                distance: "1.7",
                score: 4,
                description: "Uma rede de restaurantes especializada em fast-food, fundada nos Estados Unidos",
                thumbnail: "https://pbs.twimg.com/media/Eg2VQRZWAAEaZlF.jpg"
            },
            {
                id: 2,
                name: "Domino's Pizza",
                type: "Pizzaria",
                distance: "0.4",
                score: 5,
                description: "Uma empresa de alimentação baseada em pizzas. Atualmente, é a maior rede de entregas de pizzas do mundo, com 13.000 lojas em 83 países.",
                thumbnail: "https://mercadoeconsumo.com.br/wp-content/uploads/2019/11/Dominos-Pizza-recebe-pedidos-via-Whatsapp-com-assistente-virtual.jpg"
            }]
        }
    },
    created() {}
}
</script>
