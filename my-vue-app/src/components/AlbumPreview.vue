<script setup>
defineProps({
  albumName: {
    type: String,
    required: true
  },
  artistName: {
    type: String,
    required: true
  },
  releaseDate: {
    type: String,
    required: true
  },
  artwork: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="album_info">
    <div class="left">
      <img :src="'../src/assets/images/' + artwork" />
    </div>

    <div class="right">
      <aside class="album_name">{{ albumName }}</aside>
      <span>{{ artistName }}</span>
      <div class="release_date">{{ releaseDate }}</div>
    </div>
  </div>
</template>

<style scoped>

div.album_info {
  display: flex;
  gap: 1rem;
  border: #000000 1px solid;

  .album_name {
    font-size: 3rem;
    font-weight: bold;
  }

  div {
    font-size: 1.5rem;

    &.release_date {
      font-weight: bold;
      font-size: 1rem;
    }
  }

  @media screen and (min-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;

    .right{
      flex-direction: column;
      flex-wrap: wrap;
    }
  }
}
</style>