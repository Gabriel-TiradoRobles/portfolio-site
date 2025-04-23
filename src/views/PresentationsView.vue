<template>
  <div class="project">
    <h1>School Presentations and Papers</h1>
    <div>This page contains a list of any presentations or ethics papers I have created for the completion of my Bachelor's degree.</div>
    
    <hr style="width: 95%;">
    <h2>Ethics Papers</h2>
    <div class="presCardArea">
      <PresentationCard 
      v-for="paper in ethicsPapers"
      :key="paper.id"
      :title="paper.presTitle"
      :className="paper.presClassName"
      :classCode="paper.presClassCode"
      :grade="paper.presGrade"
      :link="paper.presLink"/>
    </div>

    <hr style="width: 95%;">
    <h2>Presentations</h2>
    <div class="presCardArea">
      <PresentationCard 
      v-for="presentation in presentations"
      :key="presentation.id"
      :title="presentation.presTitle"
      :className="presentation.presClassName"
      :classCode="presentation.presClassCode"
      :grade="presentation.presGrade"
      :link="presentation.presLink"/>
    </div>

  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import PresentationCard from '@/components/PresentationCard.vue';

export default {
  components: {
    PresentationCard
  },

  setup() {
    const projectCount = ref(0);

    const ethicsPapers = ref([
      {id: 0, presTitle: "Information Explosion, Ai, and Privacy", presClassName: "Procedural Programming", presClassCode: "CSCI-235", presGrade: "A", presLink: "/pdf_files/Gabriel Tirado - Ethics Paper CSCI235.pdf"},
      {id: 1, presTitle: "Ethics of Copying Code", presClassName: "Survey of Scripting Languages", presClassCode: "CSCI-301", presGrade: "A", presLink: "/pdf_files/Gabriel Tirado - Ethics Paper CSCI301.pdf"},
      {id: 2, presTitle: "The Ethics of Artificial Intelligence", presClassName: "Object Oriented Programming", presClassCode: "CSCI-325", presGrade: "A", presLink: "/pdf_files/Gabriel Tirado - Ethics Paper CSCI325.pdf"},
    ])

    const presentations = ref([
      {id: 0, presTitle: "Intel 64-bit Architecture Paging Presentation", presClassName: "Procedural Programming", presClassCode: "CSCI-235", presGrade: "A", presLink: "/pdf_files/Gabriel Tirado - Paging Presentation CSCI325.pdf"},
      {id: 1, presTitle: "IST-166 Final Project Presentation", presClassName: "Survey of Scripting Languages", presClassCode: "CSCI-301", presGrade: "A", presLink: "/pdf_files/Gabriel Tirado - IST166 Final Project.pdf"},
    ])

    return { projectCount, ethicsPapers, presentations }
  },

  mounted() {
    console.log("Entered projects page");
  },
}
</script>

<style>
  .presCardArea {
    display: grid;
    grid-template-columns: 25% 25% 25%;
    justify-content: space-evenly;
  }
</style>