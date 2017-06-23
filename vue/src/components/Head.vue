<template>
    <header class="layui-form">
      <button id="back" v-show="data.isBack" @click.stop="back"><</button>
      <input type="text" id="searchTxt" name="searchstr" required lay-verify="required" placeholder="诚信" autocomplete="off" class="layui-input searchInput">
      <button id="searchBtn"  lay-submit><i class="layui-icon">&#xe615;</i></button>
      <button id="msgBtn" ><i class="layui-icon">&#xe63a;</i></button>
    </header>
</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    export default {
        data() {
            return {}
        },
        computed: {
            ...mapGetters(['data'])
        },
        methods: {
            back() {
                this.$store.dispatch("back");
            }
        }
    }
</script>