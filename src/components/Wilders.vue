<template>
  <div class="wilders">
    <CardWilder v-for="(card, index) in 18" :key="index" />
  </div>
</template>

<script>
import CardWilder from "../components/common/CardWilder";

export default {
  name: "Wilders",
  components: { CardWilder },
};
</script>

<style lang="scss">
.wilders {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
