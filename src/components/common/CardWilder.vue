<template>
  <div class="cardWilder">
    <img src=../../assets/Maxime_profil.png alt="profil" >
    <span>Prénom</span>
    <span>Nom</span>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere eius
      dolorem omnis, debitis, laboriosam qui corrupti culpa tempore, inventore
      numquam maiores? Eum fuga quam enim ab praesentium possimus, minus
      impedit.
    </p>
    <a href="https://www.linkedin.com/">LinkedIn</a>
    <a href="https://www.github.com/">Github</a>
    <button type="button">Modifier son profil</button>
  </div>
</template>

<script>
export default {};
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
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  margin: 5rem;
  padding-bottom: 1rem;
  text-align: center;
  .img {
    height: 20rem;
    width: 20rem;
  }

  .p {
    color: black;
    margin: 0.5rem 1rem;
  }
}

@media screen and (max-width: 550px) {
  .cardWilder {
    height: 50rem;
    width: 100%;
  }
}
</style>
