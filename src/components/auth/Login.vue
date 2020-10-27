<template>
<span>
    <!-- <q-btn label="Medium" color="primary" @click="medium = true" /> -->
    <span @click="medium = true">
        <q-icon name="login" style="font-size: 24px;" /> Entrar
    </span>

    <q-dialog v-model="medium">
        <q-card style="width: 700px; max-width: 80vw;" class="q-pa-xl">
            <q-form class="q-gutter-md" @reset="onReset">
                <q-input outlined v-model="email" label="E-mail" hint="Deve inserir um e-mail válido" />

                <q-input outlined type="password" v-model="password" label="Senha" />
                <div>
                    <q-btn label="Entrar" type="submit" color="primary" />
                    <q-btn label="Limpar" type="reset" color="primary" flat class="q-ml-sm" />
                </div>
            </q-form>

        </q-card>
    </q-dialog>

</span>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            medium: false,
            email: null,
            password: null,
        }
    },
    methods: {
        onReset() {
            this.email = null
            this.password = null
        }
    }
}
</script>
