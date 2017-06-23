<template>
  <div id="app">
    <head-div></head-div>
    <div id="container">
      <transition name="fade" keep=alive>
        <router-view></router-view>
      </transition>
    </div>
    <foot-div></foot-div>
  </div>
</template>

<script>
    import headDiv from './components/Head.vue'
    import footDiv from './components/Foot.vue'
    export default {
        name: 'app',
        components: {
            headDiv,
            footDiv
        },
        data() {
            return {
                title: 'hello world'
            }
        }
    }
</script>

<style>
    .fade-enter-active,
    .fade-leave {
        transition: all .6s ease-in;
    }
    
    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }
    
    #container {
        position: absolute;
        width: 100%;
        padding-top: 3rem;
    }
</style>