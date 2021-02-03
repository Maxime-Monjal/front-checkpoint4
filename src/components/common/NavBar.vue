<template>
  <header class="header">
    <div class="navbar">
      <img class="homeIcon" src=../../assets/icon/home-icon.png alt="home" />
      <h1>After Wild</h1>
    </div>
  </header>
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
  .navbar {
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
</style>
