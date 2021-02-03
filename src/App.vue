<template>
  <NavBar />
  <Home />
  <Wilders />
</template>

<script>
import Home from "./view/Home";
import NavBar from "./components/common/NavBar";
import Wilders from "./components/Wilders";

export default {
  name: "App",
  components: { Home, NavBar, Wilders },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");
#app {
  font-family: Lato, Helvetica, Arial, sans-serif;
  text-align: center;
}
</style>
