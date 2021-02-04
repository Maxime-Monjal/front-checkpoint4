<template>
  <div id="wilders" class="wilders">
    <CardWilder
      v-bind:wilder="wilder"
      v-for="(wilder, index) in wilder"
      :key="index"
    />
  </div>
</template>

<script>
import axios from "axios";

import CardWilder from "../components/common/CardWilder";

const { VUE_APP_SERVER_ADDRESS } = process.env;

export default {
  name: "Wilders",
  components: { CardWilder },
  data() {
    return {
      wilder: null,
    };
  },
  mounted() {
    axios
      .get(`${VUE_APP_SERVER_ADDRESS}/`)
      .then((res) => res.data)
      .then((data) => {
        this.wilder = data;
      });
  },
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
