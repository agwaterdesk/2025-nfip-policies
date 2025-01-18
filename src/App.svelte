<script>
  import Window from "./components/Window.svelte";
  import DwEmbed from "./components/DWEmbed.svelte";
  // Handle responsive iframes for embeds
  import pym from "pym.js";

  new pym.Child({
    polling: 500,
  });

  let width;

  let unmitigated = 34111;
  let mitigated = 9666;
  let unit = 100;
</script>

<Window />
<!-- Outer div must have class 'chart-container' don't change -->
<div class="chart-container">
  <h1 class="headline">Decline in NFIP policies-in-force in Louisiana</h1>
  <p class="dek">
    Rising premiums under FEMA’s Risk Rating 2.0, implemented in 2022, have
    driven a significant drop in National Flood Insurance Program (NFIP)
    policies in Louisiana. As affordability becomes a growing concern, fewer
    residents are able to maintain coverage, leaving communities more vulnerable
    to flooding and increasing financial strain for those who remain insured.
  </p>

  <p class="sr-only">
    Bar chart showing the number of active NFIP policies in Louisiana from 2020
    to 2024, with a steady decline starting in 2022. The chart highlights the
    impact of rising premiums under Risk Rating 2.0 on policy retention.
  </p>

  <div id="g-viz" bind:clientWidth={width}>
    <DwEmbed />
  </div>

  <div class="credit">
    Note: Data is as of December each year; Data: <a
      target="_blank"
      href="https://www.fema.gov/openfema-data-page/nfip-multiple-loss-properties-v1"
      >FEMA</a
    >; Graphic by Jared Whalen /
    <a target="_blank" href="https://agwaterdesk.org/">Ag & Water Desk</a>
  </div>
</div>

<style lang="scss">
  .chart-container {
    max-width: 800px;
    width: 100%;
    padding: 2px;
  }
</style>
