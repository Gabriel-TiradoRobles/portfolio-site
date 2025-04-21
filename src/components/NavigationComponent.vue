<template>
  <div id="navBody">
    <h1>Gabriel Tirado-Robles</h1>

    <img src="@/assets/selfImage.jpg" alt="self portrait" id="selfPortrait"><br /><br>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, excepturi fugiat? Natus hic nisi temporibus repellat? Magnam tempore veniam sapiente at possimus delectus quo non sit omnis. Praesentium, excepturi facere!
    </p>


    <router-link to="/">Home Page</router-link>
    <router-link to="/projects"><h4>Programming Projects</h4></router-link>
    <router-link to="/presentations"><h4>Papers and Presentations</h4></router-link>

    <a href="https://www.linkedin.com/in/gabriel-tiradorobles/"><h4>View My LinkedIn Profile</h4></a>
    <a href="https://github.com/Gabriel-TiradoRobles"><h4>View My Github Profile</h4></a>
    <router-link to="pdf_files/Gabriel_Tirado-Robles_Resume.pdf" target="_blank"><h4>View My Resume</h4></router-link>
    
  </div>
</template>

<script>
  
</script>

<style>
  #navBody {
    margin: 1rem;
  }

  #selfPortrait {
    max-width: 75%;
    border-radius: 1rem;
  }
</style>