// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import store from './store/'
import '../static/layui/css/layui.css'
import '../static/reset.css'

Vue.config.productionTip = false;
Vue.use(VueResource);

Vue.prototype.hasClass = function(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})