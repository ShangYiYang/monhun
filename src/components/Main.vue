<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-20" id="side"></div>

    <div class="md-layout md-layout-item md-size-80" id="mixer">
      <div class="md-layout md-layout-item md-gutter md-size-100" id="pieces">
        <div class="md-layout-item armor md-size-20"></div>
        <div class="md-layout-item armor md-size-20"></div>
        <div class="md-layout-item armor md-size-20"></div>
        <div class="md-layout-item armor md-size-20"></div>
        <div class="md-layout-item armor md-size-20"></div>
      </div>
      <div class="md-layout-item md-size-100" id="sBar">
        <md-autocomplete v-model="selectedCountry" :md-options="countries">
          <label>Search</label>
        </md-autocomplete>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "main",
    data: () => ({
      selectedCountry: null,
      countries: [
        'One',
        'Two',
        'Three'
      ]
    })
  }
</script>

<style scoped>
  .md-layout {
    height: 100vh;
  }
  .md-layout-item {
    height: 100%;
  }
  #side {
    background-color: pink;
  }

  #mixer {
    background-color: azure;
  }

  #pieces {
    height: 100px;
    padding-left: 10%;
    padding-top: 100px;
  }

  .armor {
    height: 40px;
  }

  .armor:after {
    width: 100px;
    height: 100px;
    display: block;
    background: #ef9a9a;
    content: " ";
  }

  #sBar {
    padding-top: 200px;
    width: 80%;
    border-bottom: black;
  }

</style>
