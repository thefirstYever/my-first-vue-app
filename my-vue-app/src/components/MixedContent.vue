<script setup>

import {onMounted} from "vue";
import {useRoute, useRouter} from "vue-router";
import MixesData from "../MixesData.js";

const route = useRoute();
const router = useRouter();

const paramId = route.params.id;
const mix = MixesData.data.filter(mix => mix.id === paramId)[0]

onMounted(() => {
  if (!mix) {
    router.push({
      name: 'Home'
    })
  }
})
</script>

<template>

  <div class="main-container">

    <div class="first-half">
      <img :src="(mix.img)" alt=" ' ' "/>
    </div>

    <div class="second-half">
      <h1>{{mix.title}}</h1>
      <p>{{mix.description}}</p>
    </div>

  </div>

</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid white;

  .first-half{
    img{
      width: 100%;
      display: block;
    }
  }

  .second-half{
    display: flex;
    flex-direction: column;

    h1{
      font-weight: bold;
      color: white;
    }

    p{
      color: white;
      word-break: break-word;
    }
  }
}

</style>