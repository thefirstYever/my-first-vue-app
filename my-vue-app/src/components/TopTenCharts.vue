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
      <div class="number">{{songNumber}}</div>
      <a>{{songName}}</a>
      <a>{{artistName}}</a>
    </div>
    <div class="right">
      <img :src="'../src/assets/images/' + artwork" />
    </div>
  </div>


</template>

<style scoped>

.top-charts {
  display: flex;
  gap: 1rem;
  border: black solid 1px;
  justify-content: flex-start;

    .left{
      display: flex;
      flex-direction: row;
      border: black solid 1px;
      text-align: center;
      justify-content: space-between;

      .number{
        margin: 1rem;
        font-size: 2rem;
        font-weight: bold;
     }

     a{
       color: aquamarine;
       font-size: 1.25rem;
       align-self: center;
       margin: 1.5rem;
     }
  }
   .right{
    background-color: #da0000;
    border: black solid 1px;
  }
}

</style>