<script setup>
import Button from "primevue/button";
import Card from "primevue/card";
import { useRouter } from "vue-router";
import ACLFestivalTicket from "../components/ACLFestivalTicket.vue";
import BirkenstocksRiddle from "../components/BirkenstocksRiddle.vue";
import CowgirlBoots from "../components/CowgirlBoots.vue";
import NoMorePayingForCO from "../components/NoMorePayingForCO.vue";
import RunningShoesRiddle from "../components/RunningShoesRiddle.vue";

const router = useRouter();

let amtChosen = $ref(0);
let presents = $ref([
  {
    riddleComponent: BirkenstocksRiddle,
  },
  {
    riddleComponent: RunningShoesRiddle,
  },
  {
    riddleComponent: ACLFestivalTicket,
  },
  {
    riddleComponent: NoMorePayingForCO,
  },
  {
    riddleComponent: CowgirlBoots,
  },
]);
let activePresent = $ref({});
let activeRiddle = $ref({});

const choosePresent = () => {
  if (amtChosen === 5) {
    router.push({ name: "complete" });
  }

  const idx = Math.floor(Math.random() * presents.length);
  const elem = presents[idx];
  amtChosen += 1;
  activeRiddle = null;

  presents = presents.filter((p) => p.riddleComponent !== elem.riddleComponent);

  activePresent = elem;

  return elem;
};

const showRiddle = () => {
  activeRiddle = activePresent.riddleComponent;
  activePresent = null;
};
</script>

<template>
  <div class="container">
    <Card v-if="!activeRiddle" @click="showRiddle()">
      <template #header>
        <img alt="user header" src="/question-mark.png" />
      </template>
      <template #title> Present {{ amtChosen }} / 5</template>
    </Card>

    <component v-if="activeRiddle" :is="activeRiddle" />

    <Button
      v-if="activeRiddle || amtChosen === 0"
      :label="
        amtChosen < 5 ? 'Click me for prezzie!' : 'You got all your prezzies!'
      "
      @click="choosePresent"
    />
  </div>
</template>

<style lang="scss">
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .p-card {
    height: 500px;
    width: 300px;
    margin: auto;
    position: relative;
    margin-top: 10%;
    margin-bottom: 0;
    cursor: pointer;

    .p-card-title {
      font-size: 30px;
      text-align: center;
    }
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
  }
}
</style>
