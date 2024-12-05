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
    <div class="container">

      <section class="image">
        <img :src="(article.img)" :alt=" ' ' "/>
      </section>


      <div class="article-full">
        <div class="article-header">
          <h1>{{ article.title }}</h1>
          <h2>{{ article.author }} </h2>
          <p>{{ article.genre }}</p>
        </div>

        <section class="articleMain">
          <p>{{ article.paragraph }}</p>
        </section>
      </div>

    </div>

  </primary-template>
</template>

<style scoped>

.container {
  display: block;
  padding: 1rem 10rem;
}

img{
    width: 100%;
    display: block;
}

.article-full{
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.article-header{
  color: white;

  h2{
    font-weight: lighter;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  p{
    font-weight: 600;
    margin-top: 1rem;
  }
}

.articleMain{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: center;

  p{
    color: #c6c5c5;
    white-space: pre-line;
    word-break: break-word;
    font-size: 1.1rem;
    line-height: 1.6;
  }

}
</style>