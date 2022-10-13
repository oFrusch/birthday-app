<template>
  <div class="acl-container" @click="showRiddle()">
    <h1 class="current-acronym">{{ currentSpelledState }}</h1>
    <hr />
    <br />

    <p class="riddle">
      {{ riddles[currIdx + 1] }}
    </p>
  </div>
</template>

<script setup>
let currentSpelledState = $ref("");
let currIdx = $ref(-1);
const riddles = $ref([
  "Which letter occurs at the beginning of both its name and the thing its name describes?",
  "What do chevy cars, cats, and carpets all have in common?",
  "If I were to express my feelings for you in their truest form, what would be the first letter of the word I would use to describe them?",
]);
const letters = $ref(["A", "C", "L"]);

const showRiddle = () => {
  currIdx += 1;
  currentSpelledState += letters[currIdx] || "";
};
</script>

<style lang="scss">
.acl-container {
  height: 500px;
  width: 500px;
}
</style>
