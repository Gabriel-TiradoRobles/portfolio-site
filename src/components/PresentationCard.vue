<template>
  <router-link :to="presLink" target="_blank" style="text-decoration: none;">
    <div class="presCard">
        <h2 id="presCardTitle">{{ presTitle }}</h2>
        <div>
            <strong>Class:</strong> {{ presClassCode }} |
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
        classTitle: String,
        classCode: String,
        grade: String,
        link: String
    },
    setup(props) {
        const presTitle = ref(props.title);
        const presClassName = ref(props.classTitle)
        const presClassCode = ref(props.classCode);
        const presGrade = ref(props.grade);
        const presLink = ref(props.link)
        
        return { presTitle, presClassName, presClassCode, presGrade, presLink }
    }
}
</script>

<style>
    .presCard {
        width: 100%;
        height: 15vh;
        margin: 1rem;
        padding: 0 1rem 1rem;
        border: 1px solid gray;
        border-radius: 1rem;
        box-shadow: 1px 1px 1px 0px #888888;
        text-decoration: none;
        color: black;
        transition: 0.1s;
        align-content: space-around;
    }

    .presCard:hover {
        position: relative;
        top: -1px;
        box-shadow: 2px 2px 5px 0px #888888;
    }

    #presCardTitle {
        grid-column: 1 / span 2;
        color: #267CB9;
    }
</style>