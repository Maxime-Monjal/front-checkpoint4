<template>
  <NavBar />
  <Home />
</template>

<script>
import Home from "./view/Home";
import NavBar from "./components/common/NavBar";

export default {
  name: "App",
  components: { Home, NavBar },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
