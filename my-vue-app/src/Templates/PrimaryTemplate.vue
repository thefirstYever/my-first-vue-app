<script setup>

import Article from "../components/Article.vue";
import DropdownHeader from "../components/DropdownHeader.vue";
import FooterMain from "../components/FooterMain.vue";
</script>

<template>
  <section class="primary-template">
    <div class="container">
      <header>

        <DropdownHeader/>
      </header>

      <section class="slot-info">
        <slot></slot>
      </section>

      <footer>
        <FooterMain/>
      </footer>
    </div>
  </section>
</template>

<style scoped>
section.primary-template {
  background: #1e1b1b;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    justify-content: center;
    flex-direction: column;

    section.slot-info {
      padding: 1rem;
    }

    footer {
      background-color: #000000;
      color: white;
    }
  }
}
</style>