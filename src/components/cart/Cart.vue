<template>
<span>
    <span v-if="cart != ''">
        <q-badge color="secondary" text-color="white" :label="cart.length" />
    </span>
    <q-icon name="shopping_cart" style="font-size: 24px;" /> Carrinho
    <q-menu width="600px">
        <q-list style="min-width: 500px">
            <q-item clickable>
                <q-item-section>
                    <q-item-label lines="1">New tab</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable>
                <q-item-section>
                    <q-item-label lines="1">New incognito tab</q-item-label>
                </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
                <q-item-section>
                    <q-item-label lines="1">Recent tabs</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable>
                <q-item-section>
                    <q-item-label lines="1">History</q-item-label>
                </q-item-section>
            </q-item>
            <q-item clickable>
                <q-item-section>
                    <q-item-label lines="1">Downloads</q-item-label>
                </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
                <q-item-section>
                    <q-item-label lines="1">Settings</q-item-label>
                </q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable>
                <q-item-section>
                    <q-item-label lines="1">Help & Feedback</q-item-label>
                </q-item-section>
            </q-item>
        </q-list>
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
    computed: {
        ...mapState("cart", ["cart"])
    }
}
</script>
