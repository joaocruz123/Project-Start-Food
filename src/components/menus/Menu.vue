<template>
<div>
    <div class="menu" v-if="!this.$q.platform.is.mobile">
        <span class="item-menu">
            <q-icon name="monetization_on" style="font-size: 24px;" /> Promoções
        </span>
        <span class="item-menu">
            <q-icon name="shopping_cart" style="font-size: 24px;" /> Carrinho
        </span>
        <span class="item-menu">
            <Login></Login>
        </span>
    </div>
</div>
</template>
<script>
import Login from './../../components/auth/Login'
export default {
    name: 'Menu',
    components:{
        Login
    },
    data(){
        return{
            
        }
    }

}
</script>
<style>
.menu{
  font-size: 16px;
}
.menu .item-menu{
    padding: 14px;
    cursor: pointer;
}
.menu .item-menu:hover{
    background-color: #3b5b86;
    border-radius: 5px;
    color: #c7c7c7;
}
</style>