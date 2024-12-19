<script setup>

import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
import BodyWithImg from "./BodyWithImg.vue";
import BreakerAnimation from "./breaker.vue";
import Breaker from "./breaker.vue";
</script>


<template>
  <primary-template>
    <div class="main-body">
      <div class="header-container">
        <div class="header">
          <div class="header-img"
               :style="'background-image: url(../src/assets/Petrusich-TheEndofOtherMusic.webp);'">
          </div>
          <div class="header-txt">
            <h1>MusicMe</h1>
            <h2>THE MUSIC DESTINATION FOR MUSIC LOVERS, BY MUSIC LOVERS</h2>
          </div>
        </div>
        </div>
        <div class="guts-container">
          <BodyWithImg class="first"
                       header="Our Roots" subheader="We stared off in the gutters, analog and print"
                       paragraph="Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis nullam porta aptent sed id euismod vitae sodales. Imperdiet nisl cubilia malesuada non pharetra vel tincidunt. Metus nam lobortis senectus; nostra porttitor blandit. At duis eu curae ex nostra ex penatibus nulla diam. Sodales at porttitor volutpat velit potenti auctor phasellus. Faucibus ligula pretium tellus elit dictumst nisl mattis. Convallis magna lectus molestie maecenas sociosqu. Netus enim est auctor; maximus duis ante."
                       image="555276-R1-18-18.jpg">
          </BodyWithImg>

          <div class="blurb-container">
            <div class="blurb1">
              <p><strong>Sed inceptos sagittis proin potenti placerat; senectus vitae nisl.</strong>
                Cubilia curabitur lectus aliquet aenean commodo maecenas conubia. Tristique litora nulla eros etiam
                odio. Class mauris maximus; proin augue fermentum orci? Dignissim montes nisl non maecenas sed dictum.
                Et nostra eu in tortor nibh. Himenaeos nam fermentum vulputate suscipit hendrerit convallis libero est.
                Pretium faucibus imperdiet augue elementum aptent hendrerit congue feugiat.</p>
              <p><strong>Fusce taciti tortor nisi phasellus praesent venenatis vehicula curabitur. </strong>
                Ridiculus senectus varius senectus, elementum eros ad nulla. Pulvinar hac consequat dapibus ultricies
                fermentum lacinia. Pulvinar quis ad fusce senectus sodales neque feugiat dignissim. Curae sed tortor
                felis platea convallis orci. Congue penatibus ullamcorper tortor bibendum sodales lectus rutrum cras.
                Feugiat conubia inceptos cursus lacus molestie mattis pharetra. Tempus nibh penatibus nunc vel facilisi
                diam lacinia. Interdum nullam arcu quisque lacinia integer morbi curabitur. Nullam bibendum potenti
                ultricies eleifend convallis varius rhoncus sed.</p>
              <p>Inceptos porta suspendisse in sem ipsum nam. Eros metus vehicula facilisi ut torquent praesent. Nisi
                vestibulum senectus phasellus adipiscing sed arcu sollicitudin. Sem vulputate egestas a ipsum maximus,
                platea ut metus. Gravida aptent quam posuere ex laoreet aliquet. Neque eleifend per cubilia tristique
                leo vulputate turpis. Sem tristique etiam hendrerit laoreet consectetur scelerisque et leo.</p>
            </div>
          </div>

          <BodyWithImg class="second"
                       header="From 1990 to Infinity"
                       paragraph="Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis nullam porta aptent sed id euismod vitae sodales. Imperdiet nisl cubilia malesuada non pharetra vel tincidunt. Metus nam lobortis senectus; nostra porttitor blandit. At duis eu curae ex nostra ex penatibus nulla diam. Sodales at porttitor volutpat velit potenti auctor phasellus. Faucibus ligula pretium tellus elit dictumst nisl mattis. Convallis magna lectus molestie maecenas sociosqu. Netus enim est auctor; maximus duis ante."
                       image="90smusic.webp">
          </BodyWithImg>

          <div class="blurb-container">
            <div class="blurb2">
              <p class="team-info">Want to join the team? Follow the option below for career options.</p>
              <p>Cubilia curabitur lectus aliquet aenean commodo maecenas conubia. Tristique litora nulla eros etiam
                odio. Class mauris maximus; proin augue fermentum orci? Dignissim montes nisl non maecenas sed dictum.
                Et nostra eu in tortor nibh. Himenaeos nam fermentum vulputate suscipit hendrerit convallis libero est.
                Pretium faucibus imperdiet augue elementum aptent hendrerit congue feugiat.</p>
            </div>
          </div>
          <BodyWithImg class="third"
                       header="Live For The Music"
                       paragraph="Lorem ipsum odor amet, consectetuer adipiscing elit. Mollis nullam porta aptent sed id euismod vitae sodales. Imperdiet nisl cubilia malesuada non pharetra vel tincidunt. Metus nam lobortis senectus; nostra porttitor blandit. At duis eu curae ex nostra ex penatibus nulla diam. Sodales at porttitor volutpat velit potenti auctor phasellus. Faucibus ligula pretium tellus elit dictumst nisl mattis. Convallis magna lectus molestie maecenas sociosqu. Netus enim est auctor; maximus duis ante."
                       image="_.jpeg">
          </BodyWithImg>
        </div>
      </div>

  </primary-template>
</template>

<style scoped>
*{
  color: white;
}
.header-container{
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid white;
  padding-bottom: 4rem;
}
.header{
  display: flex;
  flex-direction: column;
  width: 90vw;

  .header-img{
    width: 90vw;
    height: 40vw;
    background-size: cover;
    background-position: 50% 20%;
    @media screen and (width <= 950px) {
      height: 60vw;
    }
  }
  .header-txt {
    margin-top: 1.5rem;
    width: 100%;
    h1 {
      font-size: 4rem;
      font-weight: 200;
    }

    h2 {
      font-size: 2rem;
      margin: 0;
      font-weight: 100;
    }

    :hover {
      color: #f61a1a;
      transition: 0.2s ease;
      font-style: italic;
    }
  }
}
.guts-container {
  .first {
    flex-direction: row-reverse;
  }
  .second {
    flex-direction: row;
    border-bottom: 1px solid white;
    padding-bottom: 4rem;
  }

  .third {
    border-top: 1px solid white;
    padding-top: 4rem;
    flex-direction: row-reverse;
  }
.blurb-container{
  display: flex;
  justify-content: center;
  align-items: center;
}
  .blurb1 {
    max-width: 75vw;
    margin: 5rem;
    @media screen and (width <= 950px) {
      margin: 0;
    }
  }
  .blurb2{
    max-width: 75vw;
    padding: 1rem;

  .team-info {
      font-size: 2rem;
      font-weight: 100;
      letter-spacing: .005em;

      p {
        word-wrap: break-word;
        letter-spacing: .04rem;
        line-height: 1.5rem;
        font-size: 1.1rem;
      }
    }
  }
}

</style>