<template>
  <HeaderMenuComponentVue />
  <MainContentComponent />
</template>

<script>
import HeaderMenuComponentVue from '../components/HeaderMenuComponent.vue';
import MainContentComponent from '../components/MainContent/MainContent.component.vue';

export default {
  name: "HomeView",
  components: {
    HeaderMenuComponentVue,
    MainContentComponent
  }
}
</script>

<style>

</style>