<template>
<span>
    <!-- <q-btn label="Medium" color="primary" @click="medium = true" /> -->
    <span @click="modalLogin = true" v-if="profile.name == ''">
        <q-icon name="login" style="font-size: 24px" /> Entrar
    </span>

    <span v-else>
        <q-avatar size="md">
            <img :src="profile.img" />
        </q-avatar>
        {{ profile.name }}

        <q-menu fit transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 280px;">
                <span class="q-gutter-md justify-center text-center">
                    <p class="name-user">Olá, {{ profile.name }}</p>
                </span>
                <q-item clickable>
                    <q-item-section>
                        <span class="profile-item">
                            <q-icon name="person" class="text-primary q-pa-sm" style="font-size: 32px;" /> Perfil
                        </span>
                    </q-item-section>
                </q-item>
                <q-item clickable>
                    <q-item-section>
                        <span class="profile-item">
                            <q-icon name="receipt_long" class="text-primary q-pa-sm" style="font-size: 32px;" /> Meus Pedidos
                        </span>
                    </q-item-section>
                </q-item>
                 <q-item clickable>
                    <q-item-section>
                        <span class="profile-item">
                            <q-icon name="confirmation_number" class="text-primary q-pa-sm" style="font-size: 32px;" /> Meus Cupons
                        </span>
                    </q-item-section>
                </q-item>
                <q-item clickable @click="logout('facebook')">
                    <q-item-section>
                        <span class="profile-item">
                            <q-icon name="close" class="text-primary q-pa-sm" style="font-size: 32px;" /> Sair
                        </span>
                    </q-item-section>
                </q-item>
            </q-list>
        </q-menu>
    </span>
    <q-dialog v-model="modalLogin">
        <q-card style="width: 700px; max-width: 80vw" class="q-pa-xl">
            <div class="row justify-center text-center">
                <div class="col-xs-12 col-sm-12">
                    <h4>Estamos quase lá, vamos matar sua fome!</h4>
                </div>
            </div>
            <q-form class="q-gutter-md q-mb-lg" @reset="onReset">
                <q-input outlined v-model="email" label="E-mail" hint="Deve inserir um e-mail válido" />
                <q-input outlined type="password" v-model="password" label="Senha" />
                <div class="row justify-center text-center">
                    <div class="col-xs-12 col-sm-12">
                        <q-btn label="Entrar" type="submit" color="primary" />
                        <q-btn label="Limpar" type="reset" flat class="q-ml-sm" />
                    </div>
                </div>
            </q-form>
            <hr />
            <div class="row q-gutter-md justify-center text-center q-mt-sm">
                <p class="text-weight-thin" style="font-size: 18px">
                    Ou acesse com suas redes sociais!
                </p>
            </div>
            <div class="row justify-center text-center">
                <div class="col-xs-12 col-sm-12">
                    <q-btn icon="facebook" class="full-width" label="Entrar com o Facebook" color="blue-8" @click="authSocial('facebook')" />
                </div>
                <!-- <div class="col-xs-12 col-sm-12 q-mt-sm">
                    <q-btn icon="gmail" class="full-width text-black" label="Entrar com o Gmail" color="grey-4" />
                </div> -->
            </div>
        </q-card>
    </q-dialog>
</span>
</template>

<script>
import {
    Loading,
    QSpinnerPuff
} from 'quasar'

export default {
    name: "Login",
    data() {
        return {
            modalLogin: false,
            email: null,
            password: null,
            profile: {
                name: "",
                img: "",
            },
        };
    },
    methods: {
        onReset() {
            this.email = null;
            this.password = null;
        },
        authSocial(network) {
            Loading.show({
                spinner: QSpinnerPuff,
                spinnerColor: 'primary',
            })
            this.$hello(network)
                .login()
                .then((res) => {
                    localStorage.user = JSON.stringify(res.authResponse);
                    this.$hello(network)
                        .api("me")
                        .then((res) => {
                            localStorage.profile = JSON.stringify(res);
                            this.getProfile();
                            this.modalLogin = false
                            Loading.hide()
                        });
                });
        },
        logout(network) {
            this.$hello(network, true)
                .logout()
                .then((res) => {
                    localStorage.user = "";
                    localStorage.profile = "";
                    this.profile.name = '';
                    this.profile.img = '';
                });
        },
        getProfile() {
            if (localStorage.profile) {
                const user = JSON.parse(localStorage.profile);
                this.profile.name = user.name;
                this.profile.img = user.thumbnail;
            }
        },
    },
    mounted() {
        this.getProfile();
    },
};
</script>

<style>
.name-user {
    font-size: 22px;
}

.profile-item {
    color: rgb(156, 156, 156);
    font-size: 15px;
    font-weight: 500;
}

.profile-item:hover {
    color: #34507b;
}
</style>
