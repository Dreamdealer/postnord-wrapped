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
          <h3>Top products used</h3>
        </div>
        <div class="slide">
          <h3>Varubrev 🎉</h3>
          <h4>10.183 parcels</h4>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Lightning fast delivery</h3>
        </div>
        <div class="slide">
          <h3>From order to pickup time</h3>
          <p>Average: 1 day, 6 hours and 5 minutes</p>
        </div>
        <div class="slide">
          <h3>Average pickup time</h3>
          <p>
            How long does it take for receivers to pickup their parcels from a
            service point or parcel locker: 12 hours and 8 minutes
          </p>
        </div>
        <div class="slide">
          <h3>Fastest pickup time</h3>
          <p>
            From getting the notification to picking up the parcel: 18 minutes,
            3 seconds and 150 milliseconds
          </p>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <h3>How did we help the environment?</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            maximus, nunc ut laoreet tincidunt, metus nulla gravida massa, vel
            imperdiet ante ligula id velit. Cras commodo ornare porta. Quisque
            luctus tortor a sapien congue, ac consequat metus euismod. Cras arcu
            enim, tincidunt eu dolor at, faucibus consequat magna. Ut quis
            sodales est, non pellentesque felis. Praesent enim nibh, rutrum
            interdum maximus ut, hendrerit id ipsum.
          </p>
        </div>
        <div class="slide">
          <h3>🌱 511.423 kg of CO2 saved</h3>
          <p>
            Our fossilfree delivery options have saved 511.423 kilos of CO2.
          </p>
        </div>
        <div class="slide">
          <h3>🚙 389 new electric vehicles</h3>
          <p>
            We got rid of 389 fossil fuel vehicles and we replaced them with
            fossil free vehicles.
          </p>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <h3>What do people think about us?</h3>
          <p>Some of the feedback we got:</p>
          <h4>"I love postnord. I would like to dy my hair blue! - Johan</h4>
          <h4>"Postnord is the greatest thing since sliced bread! - Anna</h4>
        </div>
        <div class="slide">
          <h3>Service point</h3>
          <p>Average score: 4.3 / 5 ⭐️⭐️⭐️⭐️</p>
          <h3>Varubrev</h3>
          <p>Average score: 5 / 5 ⭐️⭐️⭐️⭐️⭐️</p>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Where are your customers?</h3>
          <img
            src="https://community.qlik.com/legacyfs/online/35405_heatmap.PNG"
            alt=""
          />
        </div>
        <div class="slide">
          <h3>Service point</h3>
          <p>Average score: 4.3 / 5 ⭐️⭐️⭐️⭐️</p>
          <h3>Varubrev</h3>
          <p>Average score: 5 / 5 ⭐️⭐️⭐️⭐️⭐️</p>
        </div>
      </div>
      <div class="section">
        <div class="slide">
          <h3>What are we going to do?</h3>
          <p>
            We don't sit still! Next year we're going to keep innovating. This
            means this for your business
          </p>
        </div>
        <div class="slide">
          <h3>New fossilfree corridor to Örebro 🔴⚪️</h3>
          <p>
            This means that all of your 3001 customers in the Örebro län will
            save up to 30.000kg of CO2
          </p>
        </div>
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
</style>
