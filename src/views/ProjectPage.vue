<template>
    <h1>{{ project.projTitle }}</h1>
    <router-link to="../">Back to Project Portfolio</router-link>

    <hr style="width: 95%;">
    <div class="portfolioAlignment">
        <h2>Project Information</h2>
        <ul>
            <li v-if="project.projectType === 'School'">Course Name: {{ project.courseCode.courseName }}</li>
            <li v-if="project.projectType === 'School'">Course Code: {{ project.courseCode.courseCode }}</li>
            <li v-if="project.projectType === 'School'">Project Grade: {{ project.courseGrade }}</li>
            <li>Language(s): <span v-for="language in project.projLanguages" :key="language">{{ language }}</span></li>
            <li>Source Code Repository: <a target="_blank" :href="project.sourceCodeRepo">Github Repository</a></li>
            <div>Please <a href="mailto:gabrieltirado756@gmail.com?subject=GitHub%20Access">email me</a> to request access</div>
        </ul>

        <h2>Project Description</h2>
        <p>{{ projectInfo.projDescription }}</p>

        <h2>How to compile and run the program</h2>
        <p v-html="projectInfo.projCompileInfo"></p>

        <!-- <div class="codeSnippet">
            <div>cd 'test/test/test'</div><br>

            <div>npm run tester</div>
        </div> -->

        <h2>UI Design</h2>
        <p v-html="projectInfo.projUiInfo"></p>

        <h2>Additional Considerations</h2>
        <p v-html="projectInfo.projAddConsiderations"></p>
    </div>
    

</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';


export default {
    setup (props) {
        const route = useRoute();

        const project = ref([]);
        const projectInfo = ref([]);

        async function replaceFigTags () {
            for (var i = 0; i < projectInfo.value.ui_images.length; i++) {
                projectInfo.value.projUiInfo =
                    projectInfo.value.projUiInfo.replace("[fig" + (i + 1) + "]", 
                        '<p><strong>' + projectInfo.value.ui_images[i].imgHeader + '</strong></p> <p><img src="' + projectInfo.value.ui_images[i].imgLink + '" alt="fig1"></p>')
            }
        }

        onMounted(async () => {
            await fetch('http://localhost:8000/portInfo/projects/' + route.params.id)
                .then(res => res.json())
                .then(data => project.value = data)
                // .then(() => console.log(project.value))
                .catch(err => console.log(err.message))

            await fetch('http://localhost:8000/portInfo/project-info/' + route.params.id)
                .then(res => res.json())
                .then(data => projectInfo.value = data)
                // .then(() => console.log(projectInfo.value))
                .catch(err => console.log(err.message))


            // console.log(projectInfo.value.ui_images.length);
            replaceFigTags();
        })

        return { project, projectInfo }
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