<template>
  <v-app class="app">
        <NavBar />
      <div class="content">
          <router-view />
      </div>
  </v-app>
</template>
<script>


import NavBar from "./components/NavBar";

export default {
    components: {
        NavBar,
    }
}
</script>

<style>
* {
    color: white;
}
.app {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.content {
    height: 100vh;
    overflow: auto;
    padding: 30px;
    width: calc(100% - 300px);
    background-color: #2a2a2a;
    color: white;
}
</style>
