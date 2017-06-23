<template>
    <div>
        <div>{{title}}</div>
        <button @click="reduce()">reduce</button>
        <button @click="output()">out</button>
    </div>
</template>

<script>
    import {
        mapGetters,
        mapActions
    } from 'vuex'

    export default {
        data() {
            return {
                title: 'hello list'
            }
        },
        computed: {
            ...mapGetters(['tom'])
        },
        methods: {
            ...mapActions(['reduce', 'output'])
        }
    }
</script>