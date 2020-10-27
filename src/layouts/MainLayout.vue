<template>
<q-layout view="hHh lpR fFr">

    <q-header elevated class="bg-primary text-white" style="height: 80px">
        <q-toolbar>
            <q-toolbar-title class="q-pa-sm">
                <img src="~assets/logo-vertical-white.png" style="height: 60px;">
            </q-toolbar-title>

            <div class="menu" v-if="!this.$q.platform.is.mobile">
              <span class="item-menu">
                    <q-icon name="monetization_on" style="font-size: 24px;" /> Promoções
                </span>
                <span class="item-menu">
                    <q-icon name="shopping_cart" style="font-size: 24px;" /> Carrinho
                </span>
                <span class="item-menu">
                    <q-icon name="login" style="font-size: 24px;" /> Entrar
                </span>
            </div>

            <q-btn dense flat round icon="menu" @click="right = !right" v-if="this.$q.platform.is.mobile" />
        </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" bordered>
        <!-- drawer content -->
    </q-drawer>

    <q-page-container>
        <router-view />
    </q-page-container>

</q-layout>
</template>

<script>
import {
    Platform
} from 'quasar'
export default {
    name: 'MainLayout',
    data() {
        return {
            right: false
        }
    }
}
</script>
<style>
.menu{
  font-size: 16px;
}
.menu .item-menu{
    padding: 0 15px 0 0;
}
</style>
