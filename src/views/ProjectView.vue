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
      :id="project.id"
      :title="project.projTitle"
      :languages="project.projLanguages"
      :type="project.projectType"
      :thumbnail="project.projThumbnail"/>
    </div>
    
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

export default {
  components: {
    ProjectCard
  },

  setup() {
    const projectCount = ref(0);

    const projects = ref([])

    // Load database data for papers/presentations into corresponding arrays
    onMounted(async () => {
      await fetch('http://localhost:8000/portInfo/projects/')
        .then(res => res.json())
        .then(data => projects.value = data)
        // .then(() => console.log(projects.value[0]))
        .catch(err => console.log(err.message))
    })

    return { projectCount, projects }
  }
}
</script>

<style>
  .cardArea {
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-evenly;
    row-gap: 2rem;
    margin-top: 2rem;

    /* background-color: aquamarine; */
  }
</style>