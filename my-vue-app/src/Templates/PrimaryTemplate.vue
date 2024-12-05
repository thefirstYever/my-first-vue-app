<script setup>

import Article from "../components/Article.vue";
</script>

<template>
  <section class="primary-template">
    <div class="container">
      <header>
        MusicMe
        <nav class="top-nav">
          <router-link :to="{ name: 'Home' }">Home</router-link>
          <router-link :to="{ name: 'About' }">About</router-link>
          <router-link :to="{ name: 'Opinion' }">Opinions</router-link>
          <router-link :to="{ name: 'Mixes' }">Mixes</router-link>
          <router-link :to="{ name: 'Articles' }">Article</router-link>
        </nav>
      </header>

      <section class="slot-info">
        <slot></slot>
      </section>

      <footer>
        <div class="back-to-top">Go to top of page</div>
        <div class="copyright">This year</div>
      </footer>
    </div>
  </section>
</template>

<style scoped>
section.primary-template {
  background: #2b2929;
  display: flex;
  flex-direction: column;

  header {

    nav {
      font-size: 1rem;
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
      justify-content: center;

      @media screen and (max-width: 500px){
        flex-direction: column;
        gap: .25rem;

      }

      a {
        padding: 1rem;
        color: white;
        text-decoration: none;
        border-radius: 10px;
        border: 1px solid #000000;

        &router-link-active {
          font-weight: bold;
          text-decoration: underline;
          font-size: 105%;
        }
      }
    }
  }

  section.slot-info {
    padding: 1rem;
  }

  footer {
    background-color: #d16666;
    color: white;
  }
}
</style>