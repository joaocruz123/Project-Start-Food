<template>
<span>
    <div class="row q-ma-md">
        <div class="col-xs-12 col-sm-2 q-pa-sm" v-for="store in stores" :key="store.id">
            <q-card class="my-card">
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
                        {{store.type}}・{{store.distance}} Km <q-icon name="place" />
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
                logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoUfh4ag5RWHEsKjQUKzl-WJLJ8jGtX77Esw&usqp=CAU',
                thumbnail: "https://pbs.twimg.com/media/Eg2VQRZWAAEaZlF.jpg"
            },
            {
                id: 2,
                name: "Domino's Pizza",
                type: "Pizzaria",
                distance: "0.4",
                score: 5,
                description: "Uma empresa de alimentação baseada em pizzas. Atualmente, é a maior rede de entregas de pizzas do mundo, com 13.000 lojas em 83 países.",
                logo:'https://media-cdn.tripadvisor.com/media/photo-s/09/5c/90/5f/domino-s-pizza-secunda.jpg',
                thumbnail: "https://mercadoeconsumo.com.br/wp-content/uploads/2019/11/Dominos-Pizza-recebe-pedidos-via-Whatsapp-com-assistente-virtual.jpg"
            }]
        }
    },
    created() {}
}
</script>
