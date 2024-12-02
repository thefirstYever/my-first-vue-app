<script setup>

import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
import AlbumData from "../Dummy_Data.js";
import AlbumPreview from "./AlbumPreview.vue";
import Article_Data from "../Article_Data.js";
import article_Data from "../Article_Data.js";
import TopTenCharts from "./TopTenCharts.vue";
import MusicThumbnail from "./MusicThumbnail.vue";
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
          <img src="../assets/images/Helena_Hauff.jpg" alt="">
        </div>
        <div class="featured-text">
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
          <h1>your song of the day is</h1>
          <section class="img-container">
            <img src="../assets/images/SahBabii.jpg" alt="">
          </section>
          <span class="daily-txt">
          <h2>Viking</h2>
          <h3>by: SahBabii</h3>
        </span>
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
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas"
                      song-number="1"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas"
                      song-number="2"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas"
                      song-number="3"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas"
                      song-number="4"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas"
                      song-number="5"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas"
                      song-number="6"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="CocoMan" song-name="CocoPuffas"
                      song-number="7"></TopTenCharts>
      </div>

      <div class="mixes">
        <h1>MIXES</h1>
        <a>Praesent laoreet et tortor sit amet accumsan. Aliquam vitae orci vitae quam facilisis conse
          ctetur. In ut commodo dui proin et augue.</a>
        <span class="mix-thumbnails">
        <music-thumbnail music-img="Helena_Hauff.jpg" music-description="POP"></music-thumbnail>

        <music-thumbnail music-img="Helena_Hauff.jpg" music-description="Rap"></music-thumbnail>

        <music-thumbnail music-img="Helena_Hauff.jpg" music-description="funk"></music-thumbnail>

        <music-thumbnail music-img="Helena_Hauff.jpg" music-description="Kpop"></music-thumbnail>

        <music-thumbnail music-img="Helena_Hauff.jpg" music-description="brat"></music-thumbnail>

        <music-thumbnail music-img="Helena_Hauff.jpg" music-description="view more"></music-thumbnail>

      </span>
      </div>
      <section class="home-articles">
        <div v-for="(data, index) in Article_Data.data" :key="index" class="article-container">
          <img class="article-img" :src="data.img" alt=""/>
          <div class="article-text">
            <h1>{{ data.title }}</h1>
            <p>{{ data.genre }}</p>
            <router-link :to="{ name: 'ArticleDetails', params: { id: data.id  } }">Read More</router-link>
          </div>
        </div>
      </section>
    </div>
  </primary-template>
</template>

<style scoped>
* {
  color: white;
}

.body {
  //padding: 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-self: center;
}

.featured-content {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (width >= 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .featured-images {
    display: flex;
    width: 100%;
    flex-grow: 4;

    img {
      width: 100%;
    }
  }

  .featured-text {
    display: flex;
    flex-direction: column;
    flex-shrink: 2;
    padding: 2rem;

    h1 {
      margin-bottom: 1rem;
    }
  }
}

.daily-song {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  margin: 4rem;

  h1 {
    font-size: 2.5rem;
    width: 400px;
    word-break: break-word;
    text-align: center;

    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }

  .daily-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 400px) {
      width: 100%;
    }

    .img-container {
      display: flex;
      border-radius: 5%;
      align-self: center;
      overflow: clip;
      margin: 1rem;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        overflow: clip;
      }
    }

    .daily-txt {
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;


      h2 {
        font-size: 2.5rem;
        margin: 0;

      }

      h3 {
        margin: .25rem;
      }
    }

  }

  .daily-content {
    padding: 2rem;
    display: flex;
    flex-direction: column-reverse;

    .daily-content-genre {
      display: flex;
      justify-content: space-between;
      text-transform: uppercase;
      font-weight: bold;
      padding: 1.5rem;
    }

    p {
      padding: 1.5rem;
      margin: 0;
    }
  }

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .daily-content {
      flex-direction: column;
      padding: 0;
    }

  }
}

.top-10 {
  display: flex;
  flex-direction: column;
}


.mixes {
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    text-align: center;
    margin: 1rem;
  }

  a {
    text-align: center;
    margin-bottom: 1rem;
  }

  .mix-thumbnails {
    border: black 1px solid;
    background-color: #f44d4d;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;

    padding: 1rem;

  }
}

h3 {
  text-align: center;
  margin: 2rem;
}

.home-articles {
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

    @media screen and (max-width: 400px) {
      width: 100%;
    }
  }

  h1 {
    font-size: 1.25rem;
  }

  p {
    padding: 0.5rem;
    font-weight: bold;
    margin: 0.25rem;
  }

  span {
    display: flex;
    justify-content: right;
    margin: 0;
  }

  .article-img {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border: #ff0000 2px solid;

    @media screen and (max-width: 400px) {
      width: 100%;
    }

    img {
      width: 100%;
    }
  }
}
</style>