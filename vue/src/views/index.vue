<template>
   <div>
      <!--大厅数据列表-->
      <main v-show="!data.isBack">
          <div id="banner">
          </div>
          <p id="online">在线人数：<span id="lineNum" v-text="data.number"></span>人</p>
          <div id="main">
             <ul @click.capture="requestDo($event)">
                <li v-for="value in list">
                  <div>
                        <div class="logoImg">
                            <img src="" alt="">
                        </div>
                        <div class="desc">
                            <p class="title">{{value.title}}</p>
                            <p class="num">{{value.dl}}</p>
                            <p><button :data-i="value.id" class="layui-btn layui-btn-small t5" :class="value.is==1?'layui-btn-warm':'layui-btn-disabled'">
                              {{value.is==1?'申请代理':'已代理'}}</button></p>
                        </div>
                    </div>
                    <div class="dealInfo">
                        <p>最高：<span>{{value.max}}</span>/个</p>
                        <p>最低：<span>{{value.min}}</span>/个</p>
                        <p class="dealNum">成交量 <span>{{value.deal}}</span></p>
                    </div>
                </li>
            </ul>
          </div>
      </main>
      <InfoDiv v-show="data.isBack" :gameId="id"></InfoDiv>
    </div>
</template>

<script>
    import {
        mapGetters
    } from 'vuex'
    import InfoDiv from '../components/Info.vue'


    export default {
        data() {
            return {
                list: [],
                id: null
            }
        },
        components: {
            InfoDiv
        },
        computed: {
            ...mapGetters(['data']),
            age: function() {
                return 1;
            }
        },
        methods: {
            getJson() {
                this.$http.get('../../static/data.json')
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
            },
            requestDo($event) {
                var node = $event.srcElement;
                if (node.nodeName === 'BUTTON' && this.hasClass(node, 'layui-btn-disabled') === null) {
                    this.id = node.dataset.i;
                    this.$store.dispatch("back");
                }
            }
        },
        created: function() {
            this.$http.get('../../static/hall.json')
                .then(function(res) {
                    this.list = res.data.list;
                }, function(res) {
                    console.log(res);
                });
        }
    }
</script>

<style scoped>
    .red {
        background: #333;
        color: #fff;
    }
    
    ul li {
        font-size: 12px;
    }
</style>