<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { def } from '@vue/shared';

</script>

<template>
  <RouterView />
  <Footer />
</template>

<script>
  export default{
    components:{
      Footer
    }
  }
</script>


