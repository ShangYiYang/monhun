<template>
  <div class="md-layout md-gutter">
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script>
    export default {
        name: "auto-gen"
    }
</script>

<style scoped>
  .md-layout-item {
    height: 40px;
  }

  .md-layout-item:after {
    width: 100px;
    height: 100px;
    display: block;
    background: #ef9a9a;
    content: " ";
  }

</style>
