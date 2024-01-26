<template>
  <div :class="`${secondary ? 'bg-[#D8F2EE]' : 'bg-[#D01E4E]'} py-10 lg:py-5`">
    <VContainer>
      <div v-if="secondary" class="mt-4 lg:flex lg:items-center lg:justify-between">
        <p class="text-[#232323] text-[14px] lg:text-[16px] lg:font-[400] lg:w-4/12 text-center lg:text-left leading-5">
          suporte@mulheresbemresolvidas.com.br 
          CNPJ: 23.705.563.0001/80SHTN Quadra 1 Ed Le Quartier Sala 15 14- Asa Norte, Brasília - 
          CEP: 70701-000
        </p>
        <img class="my-8 mx-auto lg:w-1/12" :src="logo" :alt="alt">
        <p class="text-[#232323] text-[14px] lg:text-[16px] lg:font-[400] text-center lg:text-left leading-5 lg:w-4/12">
          Política de privacidade | Termos de uso © 2022 Todos os direitos reservados
        </p>
      </div>
      <div v-else class="mt-4 lg:flex lg:items-center lg:justify-between">
        <p class="text-[#fff] text-[14px] lg:text-[16px] lg:font-[400] lg:w-4/12 text-center lg:text-left leading-5">
          suporte@mulheresbemresolvidas.com.br
          CNPJ: 23.705.563.0001/80SHTN Bloco D RUV,
          SHCS CLS 216 - Asa Sul, Brasília - DF, 70294-530
        </p>
        <img class="my-8 mx-auto lg:w-[116px]" :src="logo" :alt="alt">
        <p class="text-[#fff] text-[14px] lg:text-[16px] lg:font-[400] text-center lg:text-left leading-5 lg:w-4/12">
          Política de privacidade | Termos de uso © 2022 Todos os direitos reservados
        </p>
      </div>
    </VContainer>
  </div>
</template>

<script>
export default {
  name: 'VFooter',
  props: {secondary: Boolean},
  computed: {
    logo() {
      return this.secondary ? '/aperta-e-solta-logo.svg' : '/senta-suga-esfrega-logo.svg'
    },

    alt() {
      return this.secondary ? 'Aperta e Solta - Logo`' : 'Senta, Suga e Esfrega - Logo`'
    }
  }
}
</script>

<style scoped>
</style>