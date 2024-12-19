<script setup>
defineProps({
  songNumber:{
    type: Number,
    required: true
  },
  songName:{
    type: String,
    required: true
  },
  artistName:{
    type: String,
    required: true
  },
  artwork:{
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="top-charts">
    <div class="left">
      <div class="number">{{ songNumber }}</div>
      <section class="text-content">
        <a class="song">{{ songName }}</a>
        <a class="artist">{{ artistName }}</a>
      </section>
    </div>
    <div class="right"
         :style="'background-image: url(../src/assets/' + artwork + ');'">
    </div>
  </div>


</template>

<style scoped>

.top-charts {
  display: flex;
  gap: 1rem;
  border: #ffffff solid 1px;
  justify-content: space-between;

    .left{
      display: flex;
      flex-direction: row;
      text-align: center;
      align-items: baseline;
      width: 100%;

      .text-content{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        gap: .25rem;
        @media screen and (width <= 600px) {
          gap: .5rem;
        }
      }

      .number{
        margin-left: 1rem;
        align-self: baseline;
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
     }

     a{
       color: #ffffff;
       font-size: 1.25rem;
       align-self: center;
       margin: 1.5rem;

       &.song{
         font-weight: bold;
         text-transform: uppercase;
       }

       &.artist{
         text-transform: uppercase;
       }
     }

      @media screen and (width <= 600px) {
        flex-direction: column;

        .number{
          margin: 0.25rem;
          font-size: 1rem;
        }

        a{
          align-content: center;
          font-size: 1.15rem;
          margin: 0.25rem;
        }
      }

      }
   .right{
     display: flex;
     flex-wrap: wrap;
     width: 400px;
     background-size: cover;
     background-position: 50% 50%;
     border-left: white solid 1px;

     @media screen and (width <= 600px) {
       width: 50%;
     }
     }
}

</style>