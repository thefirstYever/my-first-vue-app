<script setup>
defineProps({
  musicImg:{
    type:String,
    required:true
  },
  musicDescription:{
    type:String,
    required:false
  }
})
</script>

<template>
  <span class="music-image">
    <img :src="'../src/assets/images/' + musicImg"/>
    <p>{{musicDescription}}</p>
  </span>

</template>

<style scoped>
  .music-image {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: black solid 1px;
    object-fit: cover;
    height: 160px;
    width: 500px;
    position: relative;

    p{
      display: flex;
      text-align: center;
      position: absolute;
      color: white;
      font-weight: bold;
      font-size: 1.2rem;
      text-transform: uppercase;
      align-self: center;
    }

    &:hover{
      color: white;
      font-style: italic;
    }

    img{
      width: 100%;
      object-fit: cover;
    }
    @media screen and (max-width: 500px) {
      .music-image{
        width: 100%;
        height: auto;
      }
      img{
        width: 100%;
      }
    }
  }
</style>