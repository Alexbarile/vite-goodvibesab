<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import './styles/aos.css';
import AOS from 'aos';

export default{
  components:{
    AppHeader,
    AppFooter
  },
  mounted() {
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-out',
    });
  },
}
</script>

<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
  <AppFooter></AppFooter>
</template>

<style lang="scss">
@use './styles/app.scss' as *;

</style>
