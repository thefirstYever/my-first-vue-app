<script setup>

import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
</script>


<template>
  <primary-template>

    <h1>this is the about page for me!!</h1>

    <div class="albums">
      <slot/>
    </div>

  </primary-template>
</template>

<style scoped>

</style>