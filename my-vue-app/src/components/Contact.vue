<script setup>

import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
import BodyWithImg from "./BodyWithImg.vue";
</script>

<template>
<primary-template>
  <div class="container">
    <div class="main-container">
      <BodyWithImg class="main-body" header="Want to get into Contact?"
                   subheader="Our contact number is 612-505-4486"
                   paragraph="Feugiat tempor leo tortor consequat ad aliquam ac habitasse vivamus. Ridiculus urna tortor; orci condimentum cras egestas. Cubilia gravida leo per habitant est, nulla commodo conubia ullamcorper."
      image="655e0fa544c67c1ee5ce11c2_live-performance-tips-to-help-you-put-on-a-great-show-header.jpeg"
      />
      <div class="p-container">
        <p>Want to join the MusicMe team? Email natinael.yeshiwas@gmail.com to join!</p>
      </div>
    </div>
    <div class="right-container">
      <div class="contactSVGS">
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path
              d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"/>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
          <path
              d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
        </svg>
      </div>
    </div>
  </div>
</primary-template>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  height: 100vh;

}
.main-container {
  display: flex;
  flex-direction: column;
  margin: 0;
.p-container{
  display: flex;
  justify-content: center;
  padding: 1rem;

}
  p{
    color: white;
    text-align: center;
    margin: 0;
    }
}

.contactSVGS{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 2rem;
  svg{
    transform: scale(2);
    gap: 1rem;
  }
}

</style>