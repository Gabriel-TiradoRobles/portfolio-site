<template>
  <router-link :to="presLink" target="_blank" class="presCard">
    <div id="cardInfo">
        <h2 id="presCard">{{ presTitle }}</h2>
        <div>
            <strong>Class:</strong> {{ presClass }} |
            <strong>Grade:</strong> {{ presGrade }}
        </div>
    </div>
    
  </router-link>
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        title: String,
        class: String,
        grade: String,
        link: String
    },
    setup(props) {
        const presTitle = ref(props.title);
        const presClass = ref(props.class);
        const presGrade = ref(props.grade);
        const presLink = ref(props.link)
        
        return { presTitle, presClass, presGrade, presLink }
    }
}
</script>

<style>
    .presCard {
        width: 100%;
        margin: 1rem;
        padding: 1rem;
        border: 3px solid black;
        border-radius: 1rem;
        text-decoration: none;
        color: black;
    }

    #presCardTitle {
        grid-column: 1 / span 2;
    }
</style>