<script setup>
</script>
<template>
  <div class="menu_hamburguer">
    <ul>
      <li><a href="#" @click="gotToExercises">exercises</a></li>
      <li><a href="#" @click="gotToTrrainers">trainers</a></li>
      <li><a href="#" @click="gotToPricing">pricing</a></li>
      <li><a href="#" @click="gotToLogin">login</a></li>
    </ul>
  </div>
  <div class="main_container">
    <span class="main_logo"> workout </span>
    <nav class="main_menu_items">
      <ul class="menu">
        <li><a href="#" @click="gotToExercises">exercises</a></li>
        <li><a href="#" @click="gotToTrrainers">trainers</a></li>
        <li><a href="#" @click="gotToPricing">pricing</a></li>
        <li><a href="#" @click="gotToLogin">login</a></li>
      </ul>
      <div class="hamburger">&#9776;</div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderMenuComponent",
  methods: {
    gotToExercises() {
      console.log("TODO: Go to exercises page");
    },
    gotToTrrainers() {
      console.log("TODO: Go to Trainers");
    },
    gotToPricing() {
      console.log("TODO: Go to prices");
    },
    gotToLogin() {
      console.log("The login pop-up");
    },
  },
  mounted() {
    const hamburguer = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu_hamburguer");

    hamburguer.addEventListener("click", () => {
      menu.classList.toggle("expanded");
    });
  },
};
</script>

<style scoped>
.main_container {
  padding: 39px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.main_logo {
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 1px;
  color: #ffffff;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main_menu_items ul,
.menu_hamburguer ul {
  list-style-type: none;
}

.main_menu_items ul li {
  margin-left: 40px;
}

.main_menu_items ul li,
.menu_hamburguer ul li {
  display: inline-block;
  text-transform: uppercase;
}

.main_menu_items ul li a,
.menu_hamburguer ul li a {
  padding: 8px 12px;
  cursor: pointer;
  color: #ffffff;
}

.hamburger {
  display: none; /* Inicialmente oculto em telas maiores */
}

.menu_hamburguer {
  height: 0;
  overflow: hidden;
  transition: height 0.5s ease;
  display: none;
}

.menu_hamburguer.expanded {
  height: 200px;
  display: block;
}

.menu_hamburguer {
  padding-top: 5px;
  padding-bottom: 2px;
  background-color: #35363a;
}

.menu_hamburguer ul {
  padding-inline-start: 0;
  text-align: center;
}

.menu_hamburguer ul li {
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.menu_hamburguer .expanded {
  height: 200px;
  display: block;
}

@media (max-width: 600px) {
  .main_container {
    padding: 40px;
  }

  .hamburger {
    display: flex;
    cursor: pointer;
  }

  .menu {
    display: none;
  }
}
</style>