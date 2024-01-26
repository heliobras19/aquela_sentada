<template>
  <div>
    <SectionsAppTopo/>
    <SectionsAppSpam/>
    <VFooter :secondary="true"/>
  </div>
</template>

<script>
export default {
  name: 'IndexApp',
}
</script>
<style>
  body {
    font-family: 'Roboto', sans-serif;
    overflow-x: hidden;
  }
</style>