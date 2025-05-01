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
      :title="paper.title"
      :className="paper.courseCode.courseName"
      :classCode="paper.courseCode.courseCode"
      :grade="paper.courseGrade"
      :link="paper.fileLink"/>
    </div>

    <hr style="width: 95%;">
    <h2>Presentations</h2>
    <div class="presCardArea">
      <PresentationCard 
      v-for="presentation in presentations"
      :key="presentation.id"
      :title="presentation.title"
      :className="presentation.courseCode.courseName"
      :classCode="presentation.courseCode.courseCode"
      :grade="presentation.courseGrade"
      :link="presentation.fileLink"/>
    </div>

  </div>
</template>

<script>
import { onMounted, Ref, ref } from 'vue';
import PresentationCard from '@/components/PresentationCard.vue';

export default {
  components: {
    PresentationCard
  },

  setup() {
    const projectCount = ref(0);
    const papersAndPresentations = ref([]);

    const ethicsPapers = ref([])
    const presentations = ref([])

    // Load database data for papers/presentations into corresponding arrays
    onMounted(async () => {
      console.log("Entered projects page");
      await fetch('http://localhost:8000/portInfo/papers-and-presentations/')
        .then(res => res.json())
        .then(data => {
          for (var i = 0; i < data.length; i++) {
            if (data[i].type == 'Paper') {
              ethicsPapers.value.push(data[i])
            }
            else {
              presentations.value.push(data[i])
            }
          }
        })
        .catch(err => console.log(err.message))
    })

    return { projectCount, ethicsPapers, presentations, papersAndPresentations }
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