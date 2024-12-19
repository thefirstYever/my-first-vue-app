<script setup>

import Article_Data from "../Article_Data.js";
import MixesData from "../MixesData.js";
</script>

<template>
  <section class="container">
    <div v-for="(data, index) in MixesData.data" :key="index" class="mix-container">
      <a :href=" 'https://www.youtube.com/watch?v=AI7F8qlN44E' " target="_blank" rel="noopener noreferrer">
      <div class="main-container">
        <div class="content">
      <span class="first-half">
        <img :src="(data.img)" alt=" ' ' "/>
      </span>

          <div class="second-half">
            <h1>{{ data.title }}</h1>
            <p>{{ data.description }}</p>
          </div>
        </div>
      </div>
      </a>
    </div>
  </section>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 2 0 auto;
  gap: 1rem;
  justify-content: center;

}
a{
  text-decoration: none;
}

.main-container {
  padding: .5rem;
  display: flex;

    .first-half{
      display: flex;
      max-width: 400px;
      margin: 0;
      padding: 0;

      img{
        overflow-clip-margin: content-box;
        width: 100%;
        display: block;
    }
  }

  .second-half {
    margin-top: .5rem;
    display: flex;
    flex-direction: column;

    h1 {
      font-weight: bold;
      color: white;
    }

    p {
      color: white;
      max-width: 400px;
      word-break: break-word !important;
      overflow-clip-margin: content-box;
      margin-top: 0.25rem;

    }
  }
  }


</style>