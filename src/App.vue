<template>
  <NavBar />
  <router-view />
</template>

<script>
import NavBar from "./components/common/NavBar";
export default {
  name: "App",
  components: { NavBar },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
