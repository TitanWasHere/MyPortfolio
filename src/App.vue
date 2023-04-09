<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import Home from './views/Home.vue'
import { def } from '@vue/shared';

</script>

<template>
  
  <div class="navbar navbar-expand-lg d-flex flex-wrap justify-content-center py-2 mb-3 border-bottom sticky-top" style="background-color: white;">
    <div class="container-fluid" style="margin-left: 30px;">
      <a class="navbar-brand" href="#Home"> AG </a>
      <button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown" style="float: right; text-align: center;">
        <div id="scrollspy1" class="">
        <ul class="navbar nav nav-pills menu-sidebar" style="float: right ;">
          <!-- Todo: add underline color #009ed0 on hover on hover of those links -->
          <!-- Make those elements floated to left -->

          <li class="nav-item"><a href="#Home" class="nav-link" aria-current="page">Home</a></li>
          <li class="nav-item"><a href="#About" class="nav-link">About</a></li>
          <li class="nav-item"><a href="#Resume" class="nav-link">Resume</a></li>
          <li class="nav-item"><a href="#Skills" class="nav-link">Skills</a></li>
          <li class="nav-item"><a href="#Projects" class="nav-link">Projects</a></li>
          <li class="nav-item"><a href="#Contacts" class="nav-link">Contact</a></li>
        </ul>
        </div>
      </div>
    </div>
  </div>
  
  <!-- Start of the body -->
  <div class="container">
    <div
      data-mdb-spy="scroll"
      data-mdb-target="#scrollspy1"
      data-mdb-offset="0"
      class="scrollspy-example"
    >
      <section id="#Home">
        <Home/>
      </section>
      <section id="#About">

        
      </section>
      <section id="#Resume">

        
      </section>
      <section id="#Skills">

        
      </section>
      <section id="#Projects">

        
      </section>
      <section id="#Contacts">

      </section>
    </div>
  </div>

  <!-- Importing then the pages-->
  <Footer />
</template>

<script>
  export default{
    components:{
      Footer, Home
    }
  }
</script>


<style scoped>
  .navbar-collapse{
    flex-grow: 0;
  }
  .nav-link{
    color: black;
  };
  .nav-link:hover{
    color: #009ed0 !important;
  };
</style>