<template>
  <header class="header">
    <div id="navbar">
      <router-link to="/">
        <img class="homeIcon" src=../../assets/icon/home-icon.png alt="home" />
      </router-link>
      <h1>After Wild</h1>
      <router-link to="./livre">Livre</router-link>
    </div>
  </header>
  <img class="logo" src=../../assets/logo/wild.png alt="logo-wild">
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style lang="scss">
.header {
  background-color: #f76c6c;
  height: 3rem;
  width: 100%;
  #navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    .homeIcon {
      height: 2rem;
      width: 2rem;
    }
    h1 {
      margin: 0;
    }
  }
}
.logo {
  padding: 2rem;
}
</style>
