<template>
     <div>
          <div class="red" :data-i="[desc,num]" :value='title'>1231231</div>
          <input type="text" v-model="msg">
          <br>
          <span v-text='msg'></span>
          <br>
          <button @click="getJson()" class="layui-btn layui-btn-mini">GetJson</button>
          <br>
          <ul>
            <li v-for="(val,index) in list">{{index}}=>{{val}}</li>
          </ul>
          <button @click="add()">change</button>
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
                title: 'hello world',
                desc: 'title',
                num: 1,
                msg: '数据绑定',
                list: ['a', 'b', 'c'],
                isList: true
            }
        },
        computed: {
            ...mapGetters(['tom']),
        },
        methods: {
            ...mapActions(['add', 'output']),
            getJson() {
                this.$http.get('../../static/hall.json')
                    .then(function(res) {
                        console.log(res);
                    }, function(res) {
                        console.log(res);
                    });
            },
            sendJson() {
                this.$http.post('../../static/post.php', {
                    name: 'jerry',
                    age: 18
                }, {
                    emulateJSON: true //请求数据是否以json形式
                }).then(function(res) {
                    console.log(res);
                }, function(res) {
                    console.log(res);
                });
            }
        },
        created: function() {

        }
    }
</script>