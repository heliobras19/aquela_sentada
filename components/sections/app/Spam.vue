<template>
  <div class="bg-white pt-10 mt-5">
    <VContainer class="mb-8 lg:mb-0">
      <hr class="w-20 h-3 rounded-full bg-[#58A6BA] lg:mb-8" />
      <div class="lg:flex">
        <div class="mt-4 lg:w-6/12">
          <p
            class="text-[#232323] text-[14px] lg:text-[18px] lg:font-[400] text-left"
          >
            Se, por algum acaso, o e-mail não chegar na sua caixa de entrada,
            <strong class="font-[800]"
              >verifique no lixo eletrônico (SPAM) ou na aba
              “promoções”.</strong
            >.
          </p>
          <p
            class="text-[#232323] text-[14px] lg:text-[18px] lg:font-[400] lg:w-10/12 mt-5 text-left"
          >
            Quem faz Ginástica Íntima com o aplicativo tem chances de colher
            resultados mais rápidos e intensos. Aproveite. Você fez uma ótima
            escolha :)
          </p>
        </div>
        <div class="hidden lg:block w-6/12 h-[480px] -mt-36 relative">
          <img
            class="min-w-[955px] absolute bottom-0"
            :src="`${prefix}/app-dispositivos-lg.png`"
            alt="Dispositivos"
          />
        </div>
      </div>
    </VContainer>
    <img
      class="block lg:hidden ml-auto"
      :src="`${prefix}/app-dispositivos.png`"
      alt="Dispositivos"
    />
  </div>
</template>

<script>
export default {
  name: 'AppSpam',
  props: {
    prefix: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>