<template>
  <div class="px-6 py-10 shadow-custom rounded-2xl">
    <div v-for="dado in dados" :key="dado.text">
      <div class="flex gap-10 mb-5 items-start">
        <img src="/icon-check.svg" alt="" />
        <p>{{ dado.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardBeneficios',
  props: {
    dados: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style>
.shadow-custom {
  box-shadow: 0 0 1em rgba(0, 0, 0, 10%);
}
</style>
