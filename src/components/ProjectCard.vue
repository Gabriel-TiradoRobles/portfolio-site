<template>
    <router-link :to="{ name: 'project', params: {id: projectID} }" style="text-decoration: none;">
        <div class="projCard">
            <div id="cardInfo">
                <h2 id="projCardTitle">{{ projectTitle }} | {{ projectType }} Project</h2>
                <div>Language(s) Used: <span v-for="language in projectLanguages" :key="language">{{ language }}</span></div><br>
            </div>

            <img src="https://picsum.photos/800/500" alt="Testing" id="cardThumbnail">
        </div>
    </router-link>
    
</template>

<script>
import { ref } from 'vue';

export default {

    props: {
        id: Number,
        title: String,
        languages: Array,
        type: String,
        thumbnail: String
    },
    setup(props) {
        const projectID = ref(props.id);
        const projectTitle = ref(props.title);
        const projectLanguages = ref(props.languages);
        const projectType = ref(props.type);
        const projectThumbnail = ref(props.thumbnail);

        
        return { projectID, projectTitle, projectLanguages, projectType, projectThumbnail }
    }
}
</script>

<style>


    #cardThumbnail {
        max-width: 80%;
        border-radius: 5px;
    }


    .projCard {
        width: 33vw;
        /* margin: 1rem; */
        padding: 0 1rem 1rem;
        border: 1px solid gray;
        border-radius: 1rem;
        box-shadow: 1px 1px 1px 0px #888888;
        text-decoration: none;
        color: black;
        transition: 0.1s;
        align-content: space-around;
    }

    .projCard:hover {
        position: relative;
        top: -1px;
        box-shadow: 2px 2px 5px 0px #888888;
    }

    #projCardTitle {
        grid-column: 1 / span 2;
        color: #267CB9;
    }
</style>