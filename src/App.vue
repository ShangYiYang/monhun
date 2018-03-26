<template>
  <div ref="app" id="app">
    <div id="navbar">
      <md-tabs id="nav">
        <md-tab id="main" md-label="Main" to="/"></md-tab>
        <md-tab id="old" md-label="OldMain" to="/old"></md-tab>
        <md-tab id="gen" md-label="Auto" to="/gen"></md-tab>
      </md-tabs>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    toggleSideBarOn: function() {
    }
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
  body{
    margin: 0px;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: beige;
  }

  li {
    float: left;
  }

  li div {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }

  li a:hover {
    background-color: white;
  }
  #toggleOn {
    background-color: mediumpurple;
  }

  #nav {
    background-color: powderblue;
  }
</style>
