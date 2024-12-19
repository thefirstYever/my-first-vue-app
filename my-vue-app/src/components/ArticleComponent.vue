<script setup>
import Article_Data from "../Article_Data.js";
</script>

<template>
  <section class="container">
  <div v-for="(data, index) in Article_Data.data" :key="index" class="article-container">

    <section class="img-container">
      <img class="article-img" :src="data.image" alt=""/>
    </section>

    <div class="article-text">
      <h1>{{ data.title }}</h1>
      <p>{{ data.genre }}</p>

      <div class="article-button">
      <router-link :to="{ name: 'ArticleDetails', params: { id: data.id  } }" class="articleLink">Read More</router-link>
      </div>

    </div>
  </div>
  </section>
</template>

<style scoped>

.container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;

.article-container {
  color: white;
  max-width: 400px;
  background-color: rgba(0, 0, 0, 0.25);
  padding: .5rem;
  border-radius: 5px;

  @media screen and (max-width: 400px) {
    width: 100%;
  }

  h1 {
    font-size: 1.25rem;
  }

  p {
    padding: 0.5rem;
    margin: 0.25rem;
  }

  span {
    display: flex;
    justify-content: right;
    margin: 0;
  }

  .img-container{
    display: flex;
    margin: .5rem;
    justify-content: center;
  }
  .article-img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    object-position: 50%;
    border-radius: 5px;

    @media screen and (max-width: 400px) {
      width: 100%;
    }
    img {
      width: 100%;
    }
  }

  .article-text{
    padding: 0.5rem;
    color: white;

    .article-button{
      width: 100%;
      margin-top: 1rem;

      .articleLink {
        text-decoration: none;
        color: white;
        margin-top: 5rem;
        padding: 0.5rem;
        border-radius: 1rem;
        border: 1px solid white;
      }

      .articleLink:hover{
        transition: 0.2s;
        color: black;
        background-color: white;
        border: 1px solid #333333;
      }

    }

  }
}
}
</style>