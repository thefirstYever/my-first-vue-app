<script setup>

</script>

<template>
  <section class="primary-template">
    <div class="container">
    <header>MusicMe</header>

      <div class="albums">
        <slot/>
      </div>

      <div class="right">
        <p>just extra content</p>
      </div>

    <section class="main">
      <div class="students">
        <a>basic info </a>
      </div>
    </section>

    <footer>
      <div class="back-to-top">Go to top of page</div>
      <div class="copyright">This year</div>
    </footer>
    </div>
    </section>
</template>

<style scoped>
section.primary-template {
  background: #2b2929;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.albums{
  display: flex;
  justify-content: center;
}

.container{
  width: 95%;
  background-color: #bababa;
}

section.main{
  display: flex;
  background-color: #dcd3d3;
  width: 100%;
  border-radius: 10px;

  .students{
    display: flex;
    width: 100%;
    flex-direction: column;
    border: #da0000 1px solid;
    border-radius: 5px;
    gap: 1rem;

      a{
        text-align: left;
        color: #000000;
        text-transform: uppercase;
        padding-left: 1rem;
      }
  }
}

header, footer {
  background-color: #d16666;
  color: white;
}
</style>