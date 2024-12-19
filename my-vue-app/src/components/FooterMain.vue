<script setup>

</script>

<template>
  <div class="main-container">
    <div class="contact">
      <h1>Contact Us</h1>
      <div class="contact-info">
        <h2>Email</h2>
        <p>natinael.yeshiwas@gmail.com</p>
        <h2>Phone</h2>
        <p>612-505-4486</p>
      </div>
    </div>
  <div class="nav-container">
    <div class="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'About' }">About</router-link>
    <router-link :to="{ name: 'Contact' }">Contact</router-link>
    <router-link :to="{ name: 'Mixes' }">Mixes</router-link>
    <router-link :to="{ name: 'Articles' }">Article</router-link>
    </div>
  </div>
    <div class="logo-container">
      <div class="logo">
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
    </div>

  </div>

</template>

<style scoped>
*{
  color: white;
}

.main-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 2rem;
  height: 30vh;
  margin-top: 4rem;

  @media screen and (width <= 500px) {
    flex-direction: column;
    height: 80vh;
    align-items: center;
    align-content: center;
  }

}
.contact{
  h1{
    font-size: 2rem;
    margin: 0 0 0.5rem 0;
    font-weight: 100;
  }
  .contact-info{
    display: flex;
    flex-direction: column;
    h2{
      margin: 0.5rem 0;
      font-size: 1.25rem;
      font-weight: 600;
    }
    p{
      margin: 0.5rem 0;
      padding: 0;
    }
  }
  @media screen and (width <= 500px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 2rem;
  }

  }
.logo-container{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.logo {
  svg {
    width: 6rem;
    fill: white;

    :hover {
      fill: red;
      transition: ease-in 0.1s;
    }
  }
}
.nav-container {
  margin: 0 0 0 1.5rem;
  padding-right: 4rem;
  @media screen and (width <= 500px) {
    text-align: center;
    margin: 0;
    padding: 0;
  }

  .nav{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: center;
    flex-wrap: wrap;
    }
  a{
    padding-bottom: 1rem;
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 100;
    width:100%;

    @media screen and (width <= 500px) {
      font-size: 1.25rem;
      font-weight: 400;
    }
  }
}

</style>