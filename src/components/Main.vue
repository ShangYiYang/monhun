<template>
  <div class="hello">
    <div id="container">
      <div ref="sidebar" id="sidebar" v-on:click="toggleSideBarOff">
        <div ref="toggleOff" id="toggleOff"></div>
        <div id="search"></div>
        <p> This is the sidebar </p>
      </div>
      <label ref="toggleOn" id="toggleOn" v-on:click="toggleSideBarOn">☰</label>
      <div ref="content" id="content">
        <div></div>
        <router-view/>
        <div id="armor">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div id="info">
          <h1>This is where the info goes</h1>
        </div>
        <div id="test"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main',
  methods: {
    toggleSideBarOn: function() {
      this.$refs["sidebar"].style.marginLeft = "0px";
    },
    toggleSideBarOff: function() {
      this.$refs["sidebar"].style.marginLeft = "-250px";
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #container {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  #container {
    display: flex;
  }

  #toggleOn {
    width: 25px;
    height: 25px;
    display: inline-block;
    background-color: aqua;
    cursor: pointer;
    text-align: center;
  }

  #toggleOff {
    width: 35px;
    height: 35px;
    background-color: aqua;
    display: inline-block;
  }

  #search {
    height: 35px;
    width: 75%;
    background-color: black;
    display: inline-block;
  }

  #sidebar {
    height: 100vh;
    background-color:gray;
    width: 250px;
    transition: all 1s;
    /*left: -25%;*/
    margin-left: -250px;
  }

  #armor {
    height: 50px;
    width: 625px;
    padding-top: 25px;
  }

  #armor div {
    width: 50px;
    height: 50px;
    background-color: black;
    display: inline-block;
    margin-left: 25px;
  }

  #info {
    margin-left: 25px;
  }

  #test {
    height: 100px;
    width: 100px;
    background-color: #009926;
    transition: width 2s;
  }

  #test:hover {
    width: 300px;
  }
</style>
