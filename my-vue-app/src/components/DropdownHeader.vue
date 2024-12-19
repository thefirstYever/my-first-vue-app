<script setup>

</script>

<template>
  <nav class="top-nav">
    <div class="logo-container">
      <router-link :to="{ name: 'Home' }">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 2000 2000">
          <g>
            <g id="Layer_1">
              <g>
                <polygon
                    points="833.7 561.77 833.07 561.59 859.34 464.71 480.98 464.42 225.41 1390.44 225.01 1391.86 171.64 1584.07 550.66 1588.66 550.65 1587.34 833.7 561.77"/>
                <polygon
                    points="1828.36 411.34 495.78 411.34 481.01 464.42 947.04 464.52 691.49 1390.44 691.09 1391.86 637.73 1584.07 1016.75 1588.66 1016.73 1587.34 1299.79 561.77 1299.15 561.59 1325.42 464.71 1131.7 464.56 1436 464.63 1180.48 1390.44 1180.08 1391.86 1126.72 1584.07 1505.73 1588.66 1505.72 1587.34 1788.78 561.77 1788.14 561.59 1814.41 464.71 1828.36 411.34"/>
              </g>
            </g>
          </g>
        </svg>
      </router-link>
    </div>
      <div class="top-nav-item">
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'About' }">About</router-link>
        <router-link :to="{ name: 'Contact' }">Contact</router-link>
        <router-link :to="{ name: 'Mixes' }">Mixes</router-link>
        <router-link :to="{ name: 'Articles' }">Article</router-link>
        </div>
  </nav>

</template>

<style scoped>

nav {
  font-size: 1rem;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  justify-content: flex-end;
  }
.top-nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  @media screen and (width <= 600px) {
    flex-direction: column;
    justify-content: center;
    align-self: center;
    flex-wrap: wrap;
  }


  :hover {
    fill: #f61a1a;
    color: #f61a1a;
    transition: 0.25s ease;
  }
}

  .logo-container {
    display: flex;
    justify-content: center;
    margin-left: 3rem;

    svg {
      width: 4rem;
      fill: white;
    }
    @media screen and (width <= 600px) {
      margin:0;
    }
    }

  @media screen and (width <= 940px) {
    flex-direction: column;
    gap: .25rem;
  }

  .top-nav-item{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;

    @media screen and (width <= 940px) {
      flex-direction: row;
      margin: 0;
    }
    @media screen and (max-width: 475px) {
      padding: -.5rem;
    }
      svg{
        display: flex;
        width: 3rem;
        margin: 0;
        fill: white;
        align-self: flex-start;
        }

  a {
    padding: 1rem;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 10px;
    @media screen and (max-width: 475px) {
      font-size: .8rem;
    }


    &router-link-active {
      font-weight: bold;
      text-decoration: underline;
      font-size: 105%;
    }
  }
  }


</style>