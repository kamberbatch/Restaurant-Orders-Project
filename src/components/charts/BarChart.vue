<template>
  <div class="chart">
    <h1>Load data from Firebase</h1>
    <chart></chart>
  </div>
</template>

<script>
import barchart from './BarChart.js';
export default {
  components: {
    'chart': barchart
  }
};
</script>

<style>
</style>