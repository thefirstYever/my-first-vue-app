<script setup>

import PrimaryTemplate from "../Templates/PrimaryTemplate.vue";
import MixedContent from "./MixedContent.vue";
import MixedContentLinkComponent from "./MixedContentLinkComponent.vue";
import BodyWithImg from "./BodyWithImg.vue";
</script>

<template>
<primary-template>

  <div class="main-container">
    <div class="top">
      <MixedContentLinkComponent/>
    </div>
    <BodyWithImg class="main-content"
                 header="Want to share your Mix?"
                 paragraph="Join the team and you can! By becoming a team member not only do you get access to our large music catalog, but you also are able to meet and learn about artists in a deeper larger way!"
                 image="FashionPhase1-026.jpg"
    ></BodyWithImg>
    <div class="bottom">
      <div class="join-button">
        <router-link :to="{ name: 'Contact' }" class="contact-link">Join Us!</router-link>
      </div>
    </div>
  </div>
</primary-template>
</template>

<style scoped>

.main-container {
  display: flex;
  flex-direction: column;
}
.top{
  margin-bottom: 4rem;
  padding: 2rem;
  border-bottom: 1px solid white;
}
.bottom {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;

  .join-button {
    width: 100%;
    margin: 1rem;
    transform: scale(1.5);

    .contact-link {
      text-decoration: none;
      color: white;
      margin-top: 5rem;
      padding: 0.5rem;
      border-radius: 1rem;
      border: 1px solid white;
    }
  }
}
.main-content{
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 80vw;

  @media screen and (max-width: 500px) {
    width: 100%;
  }

  }

</style>