<template>
<span>
    <div class="row q-ma-lg">
        <div class="col-xs-12 col-sm-12">
            <p class="text-weight-thin destaque">Destaques</p>
            <hr>
        </div>
    </div>
    <div class="row q-ma-lg" v-if="highlights && highlights.length > 0">
        <div class="col-xl-4 col-sm-4" v-for="highlight in highlights" :key="highlight.id">
            <q-card class="highlights-card" flat bordered>
                <q-card-section horizontal @click="openProducts(highlight)">
                    <q-card-section class="q-pt-xs">
                        <div class="text-h5 q-mt-sm q-mb-xs">{{highlight.name}}</div>
                        <div class="text-caption text-grey">
                            {{highlight.description}}
                        </div>
                    </q-card-section>

                    <q-card-section class="col-5 flex flex-center">
                        <q-img class="rounded-borders" :src="highlight.img" />
                    </q-card-section>
                </q-card-section>

                <q-separator />

                <q-card-actions>
                    <span v-if="highlight.promotional_value == ''">
                        <q-btn flat>
                            R$ {{highlight.value}}
                        </q-btn>
                    </span>
                    <span v-else>
                        <q-btn flat>
                            <s>R$ {{highlight.value}}</s>
                        </q-btn>
                        <q-btn flat color="positive">
                            R$ {{highlight.promotional_value}}
                        </q-btn>
                    </span>
                </q-card-actions>
            </q-card>
        </div>
    </div>
    <div class="row q-ma-lg" v-else>
        <div class="col-xl-12 col-sm-12 q-pa-sm">
            <q-banner class="bg-blue-grey-2 text-center full-width">
                Sem destaques cadastrados nesse estabelecimento.
            </q-banner>
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

            <!-- Grupo de Detalhes -->

            <div class="row q-pa-md q-mx-xl" v-for="option in modal_options" :key="option.id">
                <div class="col-xl-6 col-sm-6">
                    <span class="group-title">{{ option.name }}</span>
                </div>
                <div class="col-xl-6 col-sm-6" v-if="option.options_required">
                    <span class="float-right">
                        <q-chip>Obrigatório</q-chip>
                    </span>
                </div>
                <!-- <span v-if="">
                    
                </span> -->
                <div class="q-pa-md">
                    <q-option-group
                    :options="option.itens"
                    label="Notifications"
                    type="checkbox"
                    v-model="selected_options"
                    />
                </div>
            </div>

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
</template>

<script>
import { Notify } from 'quasar'
import { mapState, mapActions } from 'vuex'
export default {
    name: "Highlights",
    data() {
        return {
            highlights: null,
            products: null,
            detail_modal: false,
            maximizedToggle: false,
            modal_product: null,
            modal_options: null,
            selected_options: [],
            qtd: 1
        }
    },
    created() {
        const obj = JSON.parse(localStorage.store)
        this.highlights = obj.highlights
    },
    methods: {
        ...mapActions("cart", ["addItemToCart", "addStore", "getSubtotal"]),
        openProducts(product) {
            console.log(product.options)
            this.detail_modal = true
            this.qtd = 1
            this.modal_product = product
            this.modal_options = product.options
        },
        removeQtd() {
            if (this.qtd != 1) return this.qtd--
        },
        saveStore() {
            if (this.store === '') {
                const store = JSON.parse(localStorage.store)
                this.addStore(store)
            }
        },
        addToCart(product) {
            const subtotal = parseFloat(product.value) * parseFloat(this.qtd)
            let cart = new Array()

            if (localStorage.hasOwnProperty("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"))
            }
            const item = {
                "product_id": product.id,
                "product_name": product.name,
                "product_value": subtotal,
                "promocional_value": product.promotional_value,
                "quantity": this.qtd
            }

            this.addItemToCart(item)

            cart.push(item)
            localStorage.setItem("cart", JSON.stringify(cart))
            this.detail_modal = false

            Notify.create({
                message: 'Item adicionado(a) ao carrinho!',
                color: 'positive'
            })

            this.saveStore()
            this.getSubtotal(item)
        }
    },
    computed: {
        ...mapState("cart", ["cart", "store"])
    }
}
</script>

<style>
.highlights-card:hover {
    border: 1px solid #000;
    transition: border-color 1s linear 0.1s;
    cursor: pointer;
}

s {
    color: rgb(139, 139, 139);
}
 
hr {
    height: 1px;
    border-width: 0;
    background: #e4e3e3;
}

.destaque {
    font-size: 28px;
}
.group-title{
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
}
</style>
