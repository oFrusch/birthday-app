<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main>
    <div class="container">
      <div>
        <h1>Happy Birthday Sweetie ♥</h1>
        <br />
        <h3>
          We're gonna play a lil game. I gots ya lots of different presents, but
          instead of just giving them all to you, I'm gonna make you play stupid
          games to get them!
        </h3>
        <br />
        <h3>
          So, click the start button, and get ready to start playing my games!
        </h3>
      </div>
      <div>
        <button @click="router.push({ name: 'game' })">Play Owie's game</button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: 80% 20%;
  align-items: center;
  grid-gap: 50px;
  width: 100%;
}

button {
  width: 150px;
  height: 50px;
  border-radius: 35px;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(96, 9, 121, 1) 0%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;
  border: none;
  cursor: pointer;

  a {
    color: white;
  }
}
</style>
