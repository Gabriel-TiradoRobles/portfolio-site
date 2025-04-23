<template>
    <h1>{{ projectTitle }}</h1>
    <router-link to="../">Back to Project Portfolio</router-link>

    <hr style="width: 95%;">
    <div class="portfolioAlignment">
        <h2>Project Information</h2>
        <ul>
            <li v-if="projectType === 'School'">Course Name: {{ projectClassInfo.Course_Name }}</li>
            <li v-if="projectType === 'School'">Course Code: {{ projectClassInfo.Course_Code }}</li>
            <li v-if="projectType === 'School'">Project Grade: {{ projectClassInfo.Grade }}</li>
            <li>Language(s): {{ projectLanguages }}</li>
            <li>Source Code Repository: {{ projectRepository }}</li>
        </ul>

        <h2>Project Description</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero consequuntur inventore quaerat nobis omnis saepe totam quis blanditiis eum sint in veniam at nisi illo necessitatibus praesentium quas, soluta a.
            Aut cumque nobis exercitationem itaque ipsam, tenetur eius earum saepe, aspernatur recusandae laborum ipsa dolorum? Et dicta, maxime laborum sequi, excepturi aliquid placeat quidem ea laudantium iusto ipsam voluptate qui!
            Tempore, facere vero maiores nostrum officiis velit, omnis consectetur odio quasi culpa ex veniam pariatur repellendus? Soluta cum ut, blanditiis, nihil harum dolorem expedita accusamus animi ducimus, iure suscipit aspernatur.
            Commodi, excepturi aperiam. Molestiae iusto ullam repellendus aut consectetur, officiis, modi odit quae voluptate ea vero expedita, possimus maxime. Ratione temporibus magni atque aspernatur illum nostrum quod quas deleniti. Est.
            Perferendis laboriosam similique ullam, officiis illo nostrum, consequuntur id illum voluptatem quibusdam enim mollitia nam exercitationem et veritatis excepturi natus dolorum iusto quisquam aspernatur ratione in iste ea. Natus, ratione.
        </p>

        <h2>How to compile and run the program</h2>
        <p>The following commands must be run in sequence in the same folder where the program is located</p>

        <div class="codeSnippet">
            <div>cd 'test/test/test'</div><br>

            <div>npm run tester</div>
        </div>

        <h2>UI Design</h2>


        <h2>Additional Considerations</h2>
    </div>
    

</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';


export default {
    props: {
        id: Int32Array,
        title: String,
        type: String,
        // Keys: (Course_Name, Course_Code, Grade)
        classInfo: Object,
        languages: Array,
        sourceCodeRepo: String,

    },

    setup (props) {
        const route = useRoute();

        const projectID = ref(route.params.id);
        
        const projectTitle = ref(props.title);
        const projectType = ref(props.type);
        // Keys: (Course_Name, Course_Code, Grade)
        const projectClassInfo = ref(props.classInfo);
        const projectLanguages = ref(props.languages);
        const projectRepository = ref(props.sourceCodeRepo);

        return { projectID, projectTitle, projectType, projectClassInfo, projectLanguages, projectRepository }
    }
}
</script>

<style>
    .portfolioAlignment {
        text-align: left;
        margin: 2vw 3vw;
    }

    .codeSnippet {
        background-color: #eee;
        border: 1px solid #aaa;
        border-radius: 5px;
        padding: 1rem;
        width: 50%;
        margin: 1rem;
    }
</style>