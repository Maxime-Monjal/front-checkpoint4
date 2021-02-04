<template>
  <div class="cardWilder">
    <div class="name">
      <h2>{{ wilder.firstname }}</h2>
      <h3>{{ wilder.lastname }}</h3>
    </div>
    <img :src="wilder.picture" alt="profil" />
    <p>
      {{ wilder.description }}
    </p>
    <div class="link">
      <a :href="wilder.linkedin">LinkedIn</a>
      <a :href="wilder.github">Github</a>
    </div>
    <router-link to="./profil">
      <button type="button">Modifier son profil</button></router-link
    >
  </div>
</template>

<script>
export default {
  props: ["wilder"],
};
</script>

<style lang="scss">
.cardWilder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 45rem;
  width: 30rem;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 10px;
  margin: 5rem;
  padding-bottom: 1rem;
  text-align: center;
  .name {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h2 {
      margin: 0;
    }
  }
  img {
    height: 20rem;
    width: 20rem;
  }

  p {
    color: black;
    margin: 0.5rem 1rem;
  }
  a {
    padding: 1rem;
  }
  button {
    margin: 1rem;
  }
}

@media screen and (max-width: 550px) {
  .cardWilder {
    height: 50rem;
    width: 100%;
  }
}
</style>
