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
      <div class="image-container">
        <img :src="(article.image)" alt="' '"/>
        <div class="title"></div>
      </div>


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

  @media screen and (width <= 850px) {
    padding: 1rem 7rem;
  }

  @media screen and (width <= 550px) {
    padding: 1rem 4rem;
  }
}


.image-container {
  margin-bottom: 1rem;
  img{
    width: 100%;
    height: 500px;
    display: block;
    object-fit: cover;
    object-position: 50% 10%;
  }
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