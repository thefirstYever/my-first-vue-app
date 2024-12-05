<script setup>

import Article_Data from "../Article_Data.js";
import MixesData from "../MixesData.js";
</script>

<template>
  <section class="container">
    <div v-for="(data, index) in MixesData.data" :key="index" class="mix-container">
      <div class="link-button">
<!--        <router-link :to="{ name: 'MixedContentLink', params: { id: data.id } }">Click</router-link>-->
      </div>
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
    </div>
  </section>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.main-container {
  padding: .5rem;
  border: 1px solid #bc0000;
  max-width: 400px;


    .first-half{
      display: flex;
      margin: 0;

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
      word-break: break-word;
      overflow-clip-margin: content-box;
      margin-top: 0.25rem;

    }
  }
  }


</style>