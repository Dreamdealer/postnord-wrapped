<template>
  <div id="app">
    <ul id="menu">
      <li data-menuanchor="start" class="active">
        <a href="#start">Start</a>
      </li>
      <li data-menuanchor="environment">
        <a href="#environment">Environment</a>
      </li>
      <li data-menuanchor="products"><a href="#products">Products</a></li>
      <li data-menuanchor="speed"><a href="#speed">Speed</a></li>
      <li data-menuanchor="ratings"><a href="#ratings">Satisfaction</a></li>
      <li data-menuanchor="demography"><a href="#demography">Demography</a></li>
      <li data-menuanchor="future"><a href="#future">Future</a></li>
      <li data-menuanchor="you"><a href="#you">Your stats!</a></li>
    </ul>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <Start />
      <Environment />
      <Products />
      <Speed />
      <Ratings />
      <Demography />
      <Future />
      <You />
    </full-page>
  </div>
</template>

<script>
import Environment from "./Sections/Environment.vue";
import Products from "./Sections/Products.vue";
import Demography from "./Sections/Demography.vue";
import Future from "./Sections/Future.vue";
import Ratings from "./Sections/Ratings.vue";
import Speed from "./Sections/Speed.vue";
import Start from "./Sections/Start.vue";
import You from "./Sections/You.vue";

export default {
  name: "postnordDelivered",

  components: {
    Environment,
    Products,
    Demography,
    Future,
    Speed,
    Start,
    Ratings,
    You,
  },

  data() {
    return {
      options: {
        licenseKey: "20LQ8-KCZ36-GKD3I-YJ7H7-SBPOM",
        scrollOverflow: true,
        scrollBar: false,
        navigation: true,
        menu: "#menu",
        anchors: [
          "start",
          "environment",
          "products",
          "speed",
          "ratings",
          "demography",
          "future",
          "you",
        ],
        credits: {
          enabled: false,
        },
        scrollingSpeed: 400,
        keyboardScrolling: true,
      },
    };
  },
};
</script>

<style>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
h1 {
  font-size: 5em;
  text-align: center;
  font-weight: 700;
}
h3 {
  font-size: 3em;
  text-align: center;
  font-weight: 700;
}
h4 {
  font-size: 1.5em;
  font-weight: 500;
  margin-top: -5px;
}
.section,
.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 110%;
}
.section p {
  display: inline-block;
  max-width: 800px;
  margin: 30px 0;
  overflow: hidden;
}
.section svg {
  height: 25vh;
  margin-bottom: 50px;
}
input,
button {
  padding: 10px;
  border: 0;
  border-radius: 4px;
  background: #fff;
  outline: none;
  width: 300px;
}
button:hover {
  box-shadow: 0 0 15px #0d234b;
  cursor: pointer;
}
#menu {
  position: fixed;
  z-index: 9999;
  text-align: center;
  width: 100vw;
  padding: 10px;
}
#menu:hover a {
  opacity: 1;
}
#menu a {
  color: #fff;
  font-weight: 100;
  opacity: 0.5;
  transition: opacity 700ms;
}
#menu a:hover,
#menu .active a {
  text-decoration: underline;
  opacity: 1;
}
.form-row {
  margin: 10px 0;
}
.form-row label {
  display: block;
  margin-bottom: 10px;
}
.fp-overflow {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section i {
  font-weight: 700;
  font-style: normal;
  position: relative;
  display: inline-block;
  font-size: 108%;
}
.section i::after {
  -webkit-animation: bounce 1.5s ease infinite alternate;
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  height: 1px;
  background: #fff;
}
@-webkit-keyframes bounce {
  100% {
    left: -5px;
    right: -5px;
  }
}

ol {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 20px 0;
}
table {
  text-align: left;
  margin-top: 30px;
}
td {
  padding: 6px 20px;
  position: relative;
}
</style>
