<template>
     <q-list bordered>
      <!-- <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="person" />
        </q-item-section>

        <q-item-section>Perfil</q-item-section>
      </q-item> -->

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded color="primary" text-color="white" icon="person" />
        </q-item-section>

        <q-item-section>Perfil</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded color="primary" text-color="white" icon="receipt_long" />
        </q-item-section>

        <q-item-section>Meus Pedidos</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded color="primary" text-color="white" icon="confirmation_number" />
        </q-item-section>

        <q-item-section>Meus Cupons</q-item-section>
      </q-item>

      <q-separator />
      
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-avatar rounded color="primary" text-color="white" icon="close" />
        </q-item-section>

        <q-item-section>Sair</q-item-section>
      </q-item>
    </q-list>
</template>
<script>
export default {
    name:'MenuMobile'
}
</script>