<script setup>

import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
import AlbumData from "../Dummy_Data.js";
import AlbumPreview from "./AlbumPreview.vue";
import Article_Data from "../Article_Data.js";
import article_Data from "../Article_Data.js";
import TopTenCharts from "./TopTenCharts.vue";
import MusicThumbnail from "./MusicThumbnail.vue";
import ArticleComponent from "./ArticleComponent.vue";
</script>

<template>
  <primary-template>
    <div class="body">
      <article class="featured-content">
        <div class="top-feature-container">
          <div class="featured-images">
            <img src="../../public/article_imgs/Helena_Hauff.jpg" alt="">
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
            <a>Rap</a>
            <a>Atlanta</a>
            <a>Trap</a>
            <a>Hip-Hop</a>
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
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="Coco Man" song-name="CocoPuffas"
                      song-number="1"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="Bold Man" song-name="FRUIT"
                      song-number="2"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="Short Man" song-name="ring the doorbell"
                      song-number="3"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="Hairy Man" song-name="Waterfall"
                      song-number="4"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="Michelle Obama" song-name="You Dont Love Me Like You Used To"
                      song-number="5"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="Barack Obama" song-name="Ring!!"
                      song-number="6"></TopTenCharts>
        <TopTenCharts artwork="TYC_Chromakopia.webp" artist-name="Green Man" song-name="Uglyyy"
                      song-number="7"></TopTenCharts>
      </div>

      <div class="mixes">
        <h1>MIXES</h1>
        <a>Praesent laoreet et tortor sit amet accumsan. Aliquam vitae orci vitae quam facilisis conse
          ctetur. In ut commodo dui proin et augue.</a>
        <span class="mix-thumbnails">
          <router-link :to="{ name: 'Mixes' }">
          <span class="mix-container" :href=" 'https://www.youtube.com/watch?v=AI7F8qlN44E' " target="_blank"
                rel="noopener noreferrer">
            <music-thumbnail music-img="Pop.png" music-description="POP"></music-thumbnail>
            <music-thumbnail music-img="Rap.png" music-description="Rap"></music-thumbnail>
            <music-thumbnail music-img="R&b.png" music-description="funk"></music-thumbnail>
            <music-thumbnail music-img="Funk.png" music-description="Kpop"></music-thumbnail>
            <music-thumbnail music-img="Jazz.png" music-description="view more"></music-thumbnail>
          </span>
          </router-link>
      </span>
      </div>

      <section class="home-articles">
        <h1>Articles</h1>
        <ArticleComponent/>
      </section>

    </div>
  </primary-template>
</template>

<style scoped>
* {
  color: white;
}

.body {
  padding: 2rem;
  display: block;

}

.featured-content {
  justify-content: flex-start;
  align-items: baseline;


  @media screen and (width >= 400px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }

  .top-feature-container {
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    align-content: baseline;
    align-self: center;

    @media screen and (width <= 1000px) {
      flex-direction: column;

      .featured-text{
        align-self: baseline;
        max-width: fit-content;
      }
    }
  }

  .featured-images {
    display: flex;
    width: fit-content;

    img {
      max-width: 900px;
      width: 100%;
      border-radius: 1rem;
    }
  }

  .featured-text {
    align-self: center;
    max-width: 500px;
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

      @media screen and (width <= 940px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 0;
        margin-top: 1rem;
        a{
          margin: .25rem;
        }
      }
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

  h1{
    text-align: center;
    margin-bottom: 1.5rem;
  }

  img{
    display: block;
    width: 100%;
  }
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
    padding: 1.5rem;
    display: flex;
    flex-direction: row;

    .mix-container{
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 1.5rem 3rem;
      max-width: fit-content;
      width: inherit;
    }

    music-thumbnail {
      width: 100%;
      border: black 10px solid;
    }
    a{
      text-decoration: none;
    }

  }
}

h3 {
  text-align: center;
  margin: 2rem;
}

.home-articles {
  margin: 2rem;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center ;
}
</style>