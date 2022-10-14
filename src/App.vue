<script setup>
import { RouterView } from "vue-router";

let image1 = $ref("/us1.jpeg");
let image2 = $ref("/us2.jpeg");
let image3 = $ref("/us3.jpeg");
let image4 = $ref("/us4.jpeg");

setInterval(() => {
  const images = [];
  const currImgs = new Set();

  while (images.length < 4) {
    const rand = Math.ceil(Math.random() * 42);
    const newImage = `/us${rand}.jpeg`;

    if (!currImgs.has(newImage)) images.push(newImage);
  }

  images.forEach((image, index) => {
    if (index === 0) image1 = image;
    if (index === 1) image2 = image;
    if (index === 2) image3 = image;
    if (index === 3) image4 = image;
  });
}, 5 * 1000);
</script>

<template>
  <div class="images-1">
    <img :src="image1" />
    <img :src="image2" />
  </div>

  <RouterView />

  <div class="images-2">
    <img :src="image3" />
    <img :src="image4" />
  </div>
</template>

<style scoped>
.images-1 img,
.images-2 img {
  width: 300px;
  height: 400px;
}
</style>
