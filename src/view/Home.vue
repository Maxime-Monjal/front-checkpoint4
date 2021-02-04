<template>
  <div class="home">
    <img src=../assets/logo/wild.png alt="wild" >
    <Wilders />
  </div>
</template>

<script>
import Wilders from "../components/Wilders";

export default {
  name: "Home",
  components: { Wilders },
};
</script>

<style lang="scss">
.home {
  img {
    padding: 2rem;
  }
}
</style>
