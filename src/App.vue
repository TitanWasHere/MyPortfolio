<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Footer from './components/Footer.vue'
import { def } from '@vue/shared';

</script>

<template>
  <!-- Creating header home for all the One-Page application -->
  <!-- The header will have a responsive navigation bar that will collapse in case of mobile device -->
  <!-- It will consists in 6 links floated on right -->

  <!--<div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <span style="margin-left: 40px;" class="fs-4">AG</span>
      </a>

      <ul class="navbar nav nav-pills">
        <li class="nav-item"><a href="/" class="nav-link" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="/about" class="nav-link">About</a></li>
        <li class="nav-item"><a href="/skills" class="nav-link">Skills</a></li>
        <li class="nav-item"><a href="/projects" class="nav-link">Projects</a></li>
        <li class="nav-item"><a href="/contact" class="nav-link">Contact</a></li>
        <li class="nav-item"><a href="/login" class="nav-link">Login</a></li>
      </ul>
    </header>
  </div>-->
  <div class="navbar navbar-expand-lg d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom sticky-top" style="background-color: white;">
    <div class="container-fluid" style="margin-left: 30px;">
      <a class="navbar-brand" href="/"> AG </a>
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
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        
      </section>
      <section id="#About">
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        
      </section>
      <section id="#Resume">
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        
      </section>
      <section id="#Skills">
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        
      </section>
      <section id="#Projects">
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        prova<br>
        
      </section>
      <section id="#Contacts">

      </section>
    </div>
  </div>

  <!-- Importing then the pages-->
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


<style scoped>
  .nav-link{
    color: black;
  };
  .nav-link:hover{
    color: #009ed0 !important;
  };
</style>