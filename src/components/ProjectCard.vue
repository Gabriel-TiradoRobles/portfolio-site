<template>
  <div class="card">
    <div id="cardInfo">
        <h2 id="cardTitle">{{ projectTitle }} | {{ projectType }} Project</h2>
        <div>Language(s) Used: <span v-for="language in projectLanguages" :key="language">{{ language }}</span></div>
    </div>
    

    <img src="https://picsum.photos/800/500" alt="Testing" id="cardThumbnail">
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        title: String,
        languages: Array,
        type: String,
        thumbnail: String
    },
    setup(props) {
        const projectTitle = ref(props.title);
        const projectLanguages = ref(props.languages);
        const projectType = ref(props.type);
        const projectThumbnail = ref(props.thumbnail);

        
        return { projectTitle, projectLanguages, projectType, projectThumbnail }
    }
}
</script>

<style>
    .card {
        /* width: 33vw; */
        margin: 1rem;
        border: 3px solid black;
        border-radius: 1rem;
    }

    #cardTitle {
        grid-column: 1 / span 2;
    }

    #cardThumbnail {
        max-width: 90%;
        margin: 2% auto;
    }
</style>