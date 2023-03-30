<template>
  <div id="app">
    <ul id="menu">
      <li data-menuanchor="start" class="active">
        <a href="#start">Start</a>
      </li>
      <li data-menuanchor="future"><a href="#future">Environment</a></li>
      <li data-menuanchor="products"><a href="#products">Products</a></li>
      <li data-menuanchor="speed"><a href="#speed">Speed</a></li>
      <li data-menuanchor="ratings"><a href="#speed">Ratings</a></li>
      <li data-menuanchor="demography"><a href="#speed">Demography</a></li>
      <li data-menuanchor="future"><a href="#speed">Future</a></li>
      <li data-menuanchor="you"><a href="#speed">Your stats!</a></li>
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
        sectionsColor: ["#005d92", "#fbc2c1", "#abe3bb", "#8eddf9", "#ffc8a3"],
        credits: {
          enabled: false,
        },
        scrollingSpeed: 400,
        loopTop: true,
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
.section,
.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.section p {
  display: inline-block;
  max-width: 800px;
  margin-top: 30px;
  margin-bottom: 20px;
}
a {
  color: #42b983;
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
.form-row {
  margin: 20px 0;
}
.form-row label {
  display: block;
  margin-bottom: 10px;
}
</style>
