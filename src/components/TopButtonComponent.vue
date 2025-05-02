<template>
  <button id="topBtn" @click="topFunc">
    <span class="material-icons" style="font-size: 28px;">keyboard_double_arrow_up</span>
  </button>
</template>

<script>
export default {
    setup () {
        function scrollFunc () {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                document.getElementById("topBtn").style.opacity = 100;
                document.getElementById("topBtn").style.cursor = "pointer";
            }
            else {
                document.getElementById("topBtn").style.opacity = 0;
                document.getElementById("topBtn").style.cursor = "default";
            }
        }

        function topFunc () {
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
        }

        onscroll = () => { scrollFunc() }

        return { topFunc }
    }
}
</script>

<style>
    #topBtn {
        opacity: 0;
        position: fixed;
        bottom: 20px;
        right: 20px;
        transition: 0.33s;

        border: none;
        background-color: #267CB9;
        color: white;
        border-radius: 50%;
        height: 50px;
        width: 50px;
        z-index: 99;
    }
</style>