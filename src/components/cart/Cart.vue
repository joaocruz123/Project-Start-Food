<template>
<span class="item-menu">
    <span v-if="cart != ''">
        <q-badge color="secondary" text-color="white" :label="cart.length" />
    </span>
    <q-icon name="shopping_cart" style="font-size: 24px;" /> Carrinho
    <q-menu width="600px">
        <div v-if="cart == ''">
            <span class="row q-pa-lg justify-center items-center text-center gutter-sm" style="min-width: 500px; height: 300px;">
                <div class="col-xl-12 col-sm-12">
                    <img src="~assets/shopping-cart.png" width="70px" /><br>
                    <span class="text-h5">Carrinho Vazio!</span>
                </div>
            </span>
        </div>
        <div v-else>
            <span class="row q-pa-lg" style="min-width: 500px;">
                <div class="col-xl-12 col-sm-12">
                    <span class="text-h5">Seu Pedido</span>
                </div>
                <div class="col-xl-12 col-sm-12">
                    <span class="text-weight-light text-primary">No restaurante {{store.name}}</span>
                </div>
            </span>
            <q-separator />
            <span class="row q-px-lg q-pt-md" v-for="product in cart" :key="product.id">
                <div class="col-xl-9 col-sm-9">
                    <p class="item-cart">{{product.quantity}}x {{product.product_name}}</p>
                </div>
                <div class="col-xl-3 col-sm-3">
                    <p class="value-cart">R$ {{product.product_value}}</p>
                </div>
            </span>
            <q-separator />
            <span class="row q-px-lg q-pt-md">
                <div class="col-xl-9 col-sm-9">
                    <p class="item-cart">Subtoral</p>
                </div>
                <div class="col-xl-3 col-sm-3">
                    <p class="value-cart">R$ {{subtotal}}</p>
                </div>
                <div class="col-xl-9 col-sm-9">
                    <p class="item-cart">Frete</p>
                </div>
                <div class="col-xl-3 col-sm-3">
                    <p class="value-cart">{{`${store.delivery_value === 'Grátis' ?  store.delivery_value : 'R$ ' + store.delivery_value}`}}</p>
                </div>
                <div class="col-xl-9 col-sm-9">
                    <p class="item-cart">Total</p>
                </div>
                <div class="col-xl-3 col-sm-3">
                    <p class="value-cart"><b>{{`${store.delivery_value === 'Grátis' ? 'R$ ' + subtotal.toFixed(2) : 'R$ ' + (parseFloat(store.delivery_value) + parseFloat(subtotal)).toFixed(2) }`}}</b></p>
                </div>
            </span>
            <q-separator />
            <span class="row q-px-lg q-py-md">
                <div class="col-xl-12 col-sm-12">
                    <q-btn color="primary" class="full-width" label="Seguir para o Pagamento" />
                </div>
            </span>
        </div>
    </q-menu>
</span>
</template>

<script>
import {
    mapState,
    mapActions
} from 'vuex'
export default {
    name: "Cart",
    data() {
        return {}
    },
    computed: {
        ...mapState("cart", ["cart", "store", "subtotal"])
    },
    methods: {

    }
}
</script>

<style>
.value-cart {
    font-size: 17px;
}

.item-cart {
    font-size: 17px;
    color: rgb(102, 102, 102);
}

.item-menu {
    padding: 14px;
    cursor: pointer;
}
.item-menu:hover {
    background-color: #3b5b86;
    border-radius: 5px;
    color: #c7c7c7;
}
</style>
