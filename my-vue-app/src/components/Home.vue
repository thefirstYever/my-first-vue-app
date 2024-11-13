<script setup>

import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
import AlbumData from "../Dummy_Data.js";
import AlbumPreview from "./AlbumPreview.vue";
import Article_Data from "../Article_Data.js";
import article_Data from "../Article_Data.js";
import TopTenCharts from "./TopTenCharts.vue";
</script>

<template>
  <primary-template>
<div class="body">

   <!-- <span class="album">
      <album-preview album-name="King" artist-name="Queen" release-date="May 10, 2024"
                     artwork="Queen_Pic.png"></album-preview>
      <album-preview album-name="Queen" artist-name="King" release-date="May 10, 2024"
                     artwork="Queen_Pic.png"></album-preview>
      <album-preview album-name="Queen" artist-name="King" release-date="May 10, 2024"
                     artwork="Queen_Pic.png"></album-preview>
      <album-preview album-name="Queen" artist-name="King" release-date="May 10, 2024"
                     artwork="Queen_Pic.png"></album-preview>
      <album-preview album-name="Queen" artist-name="King" release-date="May 10, 2024"
                     artwork="Queen_Pic.png"></album-preview>
      <album-preview album-name="Queen" artist-name="King" release-date="May 10, 2024"
                     artwork="Queen_Pic.png"></album-preview>
      <album-preview album-name="Queen" artist-name="King" release-date="May 10, 2024"
                     artwork="Queen_Pic.png"></album-preview>
      <album-preview album-name="Queen" artist-name="King" release-date="May 10, 2024"
                     artwork="Queen_Pic.png"></album-preview>
    </span> -->

   <!-- <section class="data-container">
    <div v-for="(album, index) in AlbumData.data" :key="index" class="album-container">
      <img class="image-class" :src="album.album_photo" alt=""/>
      <div class="album-text">
        <h2>{{album.album_name}}</h2>
        <h1>{{album.artist_name}}</h1>
        <p>{{album.release_date}}diuhlakjhslkjhaldfksjhalskjhflskajhflaksjhflksajhflaksjhfalksjfhalksjhfdlkadsjhlsakjdhflkajhflaksjhf</p>
      </div>
    </div>
    </section> -->
    <article class="featured-content">
      <div class="featured-images">
        <img src="#">
      </div>
      <div class="featured-images">
        <h1>Featured Content</h1>
        <a> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nullam bibendum, lorem sed pellentesque maximus, elit metus
          euismod odio, at fringilla tellus ante ut eros. Quisque
          vitae interdum mauris. Fusce vitae purus eget quam suscipit
          placerat eu vel lorem. Fusce tincidunt lobortis nulla sed
          ornare. Nunc sit amet commodo lacus, suscipit mollis nisi.</a>
      </div>
    </article>

    <section class="daily-song">
      <div class="daily-img">
        <img src="#">
        <h1>your song of the day is</h1>
        <h2>Viking</h2>
        <h3>SahBabii</h3>
      </div>
      <div class="daily-content">
        <div class="daily-content-genre">
          <a>Genre</a>
          <a>Genre</a>
          <a>Genre</a>
          <a>Genre</a>
        </div>
        <p>Vivamus faucibus libero lorem, eget eleifend justo scelerisque at.
          Aenean rutrum massa dolor, ac accumsan ante malesuada ac. Nulla
          eros arcu, dictum nec quam eget, congue tristique nisi. Sed
          dignissim sit amet mauris eget suscipit. Sed rhoncus odio nec augue
          laoreet viverra vel ac justo. Aliquam ut tellus in massa vehicula
          tempus eu a enim.</p>
      </div>
    </section>

    <div class="top-10">
      <h1>Top of the charts</h1>
      <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas" song-number="1"></TopTenCharts>
      <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas" song-number="1"></TopTenCharts>
      <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas" song-number="1"></TopTenCharts>
      <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas" song-number="1"></TopTenCharts>
      <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas" song-number="1"></TopTenCharts>
      <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas" song-number="1"></TopTenCharts>
      <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas" song-number="1"></TopTenCharts>
    </div>

    <div class="mixes"></div>

    <section class="home-articles">
      <div v-for="(data, index) in Article_Data.data" :key="index" class= "article-container">
        <img class="article-img" :src="data.img" alt=""/>
        <div class="article-text">
          <h1>{{data.title}}</h1>
          <p>{{data.genre}}</p>
          <span>Read More</span>
        </div>

      </div>
    </section>

</div>
  </primary-template>

</template>

<style scoped>
.body{
  padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
}

.top-10{
  display: flex;
  flex-direction: column;
}
span.album {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  padding: .5rem;


  @media screen and (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
}

.data-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;
  gap: 1rem;


  .album-text {
    margin-top: .5rem;
    border: #000000 2.5px solid;
    padding: 0.5rem;

    h2 {
      font-size: 2rem;
      margin: 0;
    }

    h1 {
      font-size: 1.5rem;
      margin: 0;
    }

    p {
      max-width: 350px;
      font-size: 1rem;
      margin: 0;
      word-break: break-all;
      overflow-wrap: break-word;
    }
  }
}
    .image-class {
      max-width: 400px;
      max-height: 400px;

      img {
        width: 100%;
        height: 100%;
      }
    }
h3{
  text-align: center;
  margin: 2rem;
}
.home-articles{
  margin: 2rem;
  gap: 1rem;
  background-color: #2D2B2B;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .article-container {
    color: white;
    max-width: 400px;
    border: white 1px solid;
  }


  h1{
    font-size: 1.25rem;
    margin: 0;
  }

  p{
    padding: 0.5rem;
    font-weight: bold;
    margin: 0.25rem;
  }

  span{
    display: flex;
    justify-content: right;
    margin: 0;
  }

  .article-img {
    width: 400px;
    height: 400px;
    object-fit: cover;
  }
}

</style>