<script setup>
defineProps({
  header:{
    type: Number,
    required: false
  },
  subheader:{
    type: String,
    required: false
  },
  paragraph:{
    type: String,
    required: false
  },
  image:{
    type: String,
    required: false
  }
})
</script>

<template>
  <div class="main-container">
    <div class="img-container">
      <div class="left"
           :style="'background-image: url(../src/assets/' + image + ');'">
      </div>
    </div>
    <div class="text-container">
      <h1>{{header}}</h1>
      <h2>{{subheader}}</h2>
      <p>{{paragraph}}</p>
    </div>
  </div>
</template>

<style scoped>
*{
  color: white;
}
.main-container {
  //border: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3rem;

    @media screen and (width <= 950px) {
      flex-wrap: wrap;
    }
}

.left{
  width: 49vw;
  height: 50vh;
  background-size: cover;
  background-position: 50% 50%;
  @media screen and (width <= 950px) {
    width: 90vw;
  }
  }


.text-container{
  //border: 1px solid white;
  width: 50vw;
  padding: 1.5rem;
  @media screen and (width <= 950px) {
    width: 90vw;
  }

  h1{
    margin: 0;
    font-size: 2.5rem;
  }
  h2{
    margin-top: 0.5rem;
    font-weight: 100;
  }
  P{
    margin-top: 0.5rem;
    word-break: break-all;
  }
}
</style>