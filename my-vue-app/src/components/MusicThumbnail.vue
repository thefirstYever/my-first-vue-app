<script setup>
defineProps({
  musicImg:{
    type:String,
    required:false
  },
  musicDescription:{
    type:String,
    required:false
  }
})
</script>

<template>

  <div class="full-content">
    <section class="full-container">
      <div class="img-container"
           :style="'background-image: url(../src/assets/images/' + musicImg + ');'">
      <span class="txt-container">
      <p>{{ musicDescription }}</p>
        </span>
      </div>
    </section>
  </div>

</template>

<style scoped>
.full-content {
  display: inline-block;
  color: #2d65a6;
  width: fit-content;
}
.full-container {
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: fit-content;
  justify-content: center;
  align-self: center;

  :hover{
    color: red;
    font-weight: 900;
  }
}

.img-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 485px;
  height: 160px;
  border: 1px solid white;
  background-size: cover;
  background-position: center;

  @media screen and (width <= 1105px) {
    width: 40vw;
    height: 98px;
  }
  @media screen and (width <= 730px) {
    width: 80vw;
    height: 98px;
  }

    p{
    margin: 0;
    text-align: center;
    color: white;
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: uppercase;
      backdrop-filter: blur(10px);
  }

}





</style>