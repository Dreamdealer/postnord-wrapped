<template>
  <div class="section" data-anchor="you">
    <template v-if="!loggedIn">
      <h3>What about you?</h3>
      <p>Login to find out all about your business!</p>
      <div class="form-row">
        <label>PostNord Login:</label>
        <input value="johan.van-tongeren@postnord.com" />
      </div>
      <div class="form-row">
        <label>Password:</label>
        <input type="password" value="HAH!GOTYOU" />
      </div>
      <div class="form-row">
        <button @click="loggedIn = true">Submit</button>
      </div>
    </template>
    <template v-else>
      <h3>Hello Johan!</h3>
      <h4>🌱 511.423 kg of CO2 saved</h4>
      <p>Our fossilfree delivery options have saved 511.423 kilos of CO2.</p>
      <h4>🚕 Volvos are cool</h4>
      <p>Hahaha</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "You",

  data() {
    return { loggedIn: false };
  },
};
</script>
