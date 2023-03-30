<template>
  <div id="app">
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
        <h3>PostNord Delivered 2023</h3>
        <img
          alt=""
          height="388"
          src="https://www.postnord.se/siteassets/illustrationer-och-ikoner-sverige/illu-med-bakgrundsfarg/illu-computer-letter-flowers.svg"
          width="690"
        />
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
  </div>
</template>

<script>
// Optional. When using fullpage extensions
// import './fullpage.scrollHorizontally.min'

export default {
  name: "app",
  data() {
    return {
      options: {
        licenseKey: "20LQ8-KCZ36-GKD3I-YJ7H7-SBPOM",
        afterLoad: this.afterLoad,
        scrollOverflow: true,
        scrollBar: false,
        navigation: true,
        anchors: ["page1", "page2", "page3"],
        sectionsColor: ["#fbc2c1", "#005d92", "#8eddf9"],
      },
    };
  },
  methods: {
    afterLoad() {
      console.log("After load");
    },
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
.section {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
a {
  color: #42b983;
}
</style>
