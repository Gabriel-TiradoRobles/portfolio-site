<template>
  <div class="pageGrid">
    <nav>
      <NavigationComponent />
    </nav>

    <span id="routerPages">
      <router-view/>
    </span>
  </div>
  
</template>

<script lang="ts">
  import NavigationComponent from './components/NavigationComponent.vue';

  export default {
    components: {
      NavigationComponent
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  position: sticky;
  top: 0;
  padding: 0;
  margin: 0;
  height: 100vh;
  /* border-right: 1px solid gray; */
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.pageGrid {
  display: grid;
  grid-template-columns: 20% 80%;
  justify-content: space-between;
}

#routerPages {
  /* display: flex; */
  /* flex-wrap: wrap; */
}
</style>
