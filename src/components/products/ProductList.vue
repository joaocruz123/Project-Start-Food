<template>
<div>
    <span>
        <div class="row q-ma-lg gutter-sm">
            <div class="col-xs-12 col-sm-12">
                <p class="text-weight-thin destaque">Produtos</p>
                <hr>
            </div>
        </div>
        <div class="row q-ma-lg">
            <div class="col-xl-4 col-sm-4 q-pa-sm" v-for="product in products" :key="product.id">
                <q-card class="highlights-card" flat bordered @click="openProducts(product)">
                    <q-card-section horizontal>
                        <q-card-section class="q-pt-xs">
                            <div class="text-h5 q-mt-sm q-mb-xs">{{product.name}}</div>
                            <div class="text-caption text-grey">
                                {{product.description}}
                            </div>
                        </q-card-section>

                        <q-card-section class="col-5 flex flex-center">
                            <q-img class="rounded-borders" :src="product.img" />
                        </q-card-section>
                    </q-card-section>

                    <q-separator />

                    <q-card-actions>
                        <span v-if="product.promotional_value == ''">
                            <q-btn flat>
                                R$ {{product.value}}
                            </q-btn>
                        </span>
                        <span v-else>
                            <q-btn flat>
                                <s>R$ {{product.value}}</s>
                            </q-btn>
                            <q-btn flat color="positive">
                                R$ {{product.promotional_value}}
                            </q-btn>
                        </span>
                    </q-card-actions>
                </q-card>
            </div>
        </div>
        <q-dialog v-model="detail_modal" :maximized="maximizedToggle" v-if="modal_product !== null">
            <q-card style="width: 700px; max-width: 80vw;">
                <q-card-section class="row items-center">
                    <div class="text-h5">{{modal_product.name}}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-separator />

                <q-card-section class="justify-center text-center gutter-sm">
                    <q-img :src="modal_product.img" spinner-color="black" class="q-mx-xl" style="height: auto; width: 300px" />
                </q-card-section>
                <q-card-section style="max-height: 70vh" class="scroll q-mx-xl">
                    {{modal_product.description}}
                </q-card-section>

                <q-separator />

                <q-card-actions align="right">
                    <span class="row button-actions q-mx-sm">
                        <div class="actions">
                            <q-icon name="remove" size="xs" @click="removeQtd()" />
                        </div>
                        <div class="actions">{{qtd}}</div>
                        <div class="actions">
                            <q-icon name="add" size="xs" @click="qtd++" />
                        </div>
                    </span>
                    <q-btn align="between" class="btn-fixed-width" color="primary" label="Adicionar ao carrinho" icon="add" @click="addToCart(modal_product)" />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </span>
</div>
</template>

<script>
import {
    Notify
} from 'quasar'
import {
    mapState,
    mapActions
} from 'vuex'
export default {
    name: "ProductList",
    components: {},
    data() {
        return {
            products: null,
            detail_modal: false,
            maximizedToggle: false,
            modal_product: null,
            qtd: 1
        }
    },
    created() {
        if (this.$q.platform.is.mobile) this.maximizedToggle = true
        const obj = JSON.parse(localStorage.store)
        this.products = obj.products
    },
    methods: {
        ...mapActions("cart", ["AddItemToCart"]),
        openProducts(product) {
            this.detail_modal = true
            this.qtd = 1
            this.modal_product = product
        },
        removeQtd() {
            if (this.qtd != 1) return this.qtd--
        },
        addToCart(product) {
            let cart = new Array()

            if (localStorage.hasOwnProperty("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"))
            }
            const item = {
                "product_id": product.id,
                "product_name": product.name,
                "product_value": product.value,
                "promocional_value": product.promotional_value,
                "quantity": this.qtd
            }

            this.AddItemToCart(item)

            cart.push(item)
            localStorage.setItem("cart", JSON.stringify(cart))
            this.detail_modal = false

            Notify.create({
                message: 'Item adicionado(a) ao carrinho!',
                color: 'positive'
            })

            console.log(this.cart)
        }
    },
    computed: {
        ...mapState("cart", ["cart"])
    }
}
</script>

<style>
.actions {
    padding: 0 8px;
    cursor: pointer;
}

.button-actions {
    border: 1px solid #34507b;
    padding: 7px;
    border-radius: 5px;
}

.destaque {
    font-size: 28px;
}
</style>
