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
                <q-card-section horizontal>
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
</span>
</template>

<script>
export default {
    name: "Highlights",
    data() {
        return {
            highlights: null,
            products: null,
        }
    },
    created() {
        const obj = JSON.parse(localStorage.store)
        console.log(obj)
        this.highlights = obj.highlights
    }
}
</script>

<style>
.highlights-card:hover{
    border: 1px solid #000;
    transition: border-color 1s linear 0.1s;
    cursor: pointer;
}
s{
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
</style>