    <template>
     <nav id="nav">
            <ul>
                <router-link to="/index" tag=li active-class="select"><i class="layui-icon">&#xe63b;</i><span>大厅</span></router-link>
                <router-link to="/deal" tag=li active-class="select"><i class="layui-icon">&#xe600;</i><span>交易</span></router-link>
                <li @click="publish()"><div id="public"><i class="layui-icon">&#xe608;</i><span>发布</span></div></li>
                <router-link to="/service" tag=li active-class="select"><i class="layui-icon">&#xe606;</i><span>客服</span></router-link>
                <router-link to="/person" tag=li active-class="select"><i class="layui-icon">&#xe620;</i><span>个人</span></router-link>
            </ul>
        </nav>
    </template>

    <script>
      export default {
        name:'footMenu',
        methods: {
          publish(){
            alert('发布');
          }
        }
      }
    </script>
