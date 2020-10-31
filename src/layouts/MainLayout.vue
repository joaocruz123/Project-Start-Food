<template>
<q-layout view="hHh lpR fFr">

    <q-header elevated class="bg-primary text-white" style="height: 80px">
        <q-toolbar>
            <q-toolbar-title class="q-pa-sm">
                <img src="~assets/logo-vertical-white.png" style="height: 60px;">
            </q-toolbar-title>

            <Menu></Menu>

            <q-btn dense flat round icon="menu" @click="right = !right" v-if="this.$q.platform.is.mobile" />
        </q-toolbar>
    </q-header>

    <q-drawer v-model="right" side="right" bordered>
        <MenuMobile></MenuMobile>
    </q-drawer>

    <q-page-container >
        <router-view />
    </q-page-container>

    <q-footer v-if="this.$q.platform.is.mobile">
        <FooterMenuMobile></FooterMenuMobile>
      </q-footer>

</q-layout>
</template>

<script>
import { Platform } from 'quasar'
import Menu from './../components/menus/Menu'
import FooterMenuMobile from './../components/menus/FooterMenuMobile'
import MenuMobile from './../components/menus/MenuMobile'
export default {
    name: 'MainLayout',
    components:{
        Menu,
        FooterMenuMobile,
        MenuMobile
    },
    data() {
        return {
            right: false
        }
    }
}
</script>
