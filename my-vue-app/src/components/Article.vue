<script setup>

import {onMounted} from "vue";
import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
import {useRoute, useRouter} from "vue-router";
import ArticleData from "../Article_Data.js";

const route = useRoute();
const router = useRouter();

const paramId = route.params.id;
const article = ArticleData.data.filter(article => article.id === paramId)[0]

onMounted(() => {
  if (!article) {
    router.push({
      name: 'Home'
    })
  }
})

</script>

<template>
  <primary-template v-if="article">
    <h1>{{ article.title }}</h1>
    <h2>{{ article.author }} {{ article.genre }}</h2>
    <router-link :to="{ name: 'AllArticles' }"></router-link>/
    <p>{{ article.description }}</p>
  </primary-template>
</template>

<style scoped>

</style>