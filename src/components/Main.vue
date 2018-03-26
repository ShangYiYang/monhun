<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-20" id="side"></div>

    <div class="md-layout md-layout-item md-size-80" id="mixer">
      <div class="md-layout md-layout-item md-gutter" id="pieces">
        <div class="md-layout-item armor"></div>
        <div class="md-layout-item armor"></div>
        <div class="md-layout-item armor"></div>
        <div class="md-layout-item armor"></div>
        <div class="md-layout-item armor"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "main"
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

</style>
