<template>
  <div class="project">
    <h1>Completed Programming Projects</h1>
    <div>This page contains a list of any projects I have completed either for school or personal endeavors.</div>
    <p>*For access to my private project repositories, please email me with the subject line, GitHub Access.</p>
    <hr style="width: 95%;">
    
    <div class="cardArea">
      <ProjectCard 
      v-for="project in projects"
      :key="project.id"
      :title="project.title"
      :languages="project.languages"
      :type="project.projectType"
      :thumbnail="project.thumbnail"/>
    </div>
    
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },

  setup() {
    const projectCount = ref(0);

    const projects = ref([
      {id: 0, title: "Job Web Scraper", languages: ["Python"], projectType: "School", thumbnail: "Placeholder"},
      {id: 1, title: "Inventory Manager", languages: ["Java"], projectType: "School", thumbnail: "Placeholder"},
      {id: 2, title: "Portfolio Website", languages: ["HTML, CSS, Javascript"], projectType: "Personal", thumbnail: "Placeholder"},
    ])

    return { projectCount, projects }
  },

  mounted() {
    console.log("Entered projects page");
  },
}
</script>

<style>
  .cardArea {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;

    /* background-color: aquamarine; */
  }
</style>