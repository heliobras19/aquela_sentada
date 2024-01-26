<template>
  <div class="bg-[#B40735] lg:bg-white home pt-10">
    <VContainer>
      <div
        class="flex flex-col items-center mt-28 lg:mt-12 lg:w-6/12 lg:mx-auto h-[100%]"
      >
        <h1 class="caslon text-white text-[49.88px] lg:text-[96px] font-bold">
          Parabéns!
        </h1>
        <div class="mt-4 w-11/12 lg:w-10/12 mx-auto">
          <p
            class="text-white text-[14px] lg:text-[18px] lg:font-[400] text-center"
          >
            Os dados de acesso ao aplicativo Aperta & Solta
            <strong class="font-[800]">foram enviados para o seu e-mail</strong
            >.
          </p>
          <p
            class="text-white text-[14px] lg:text-[18px] lg:font-[400] lg:w-[135%] lg:-ml-[15%] mt-10 text-center"
          >
            Se você tiver problemas de acesso, por favor, entre em contato com o
            nosso suporte técnico através do botão “Fale Conosco”, dentro do
            próprio aplicativo, ou envie um e-mail para
            <a
              class="font-bold"
              href="mailto:suporte@mulheresbemresolvidas.com.br"
            >
              suporte@mulheresbemresolvidas.com.br
            </a>
          </p>
        </div>
      </div>
    </VContainer>
  </div>
</template>

<script>
export default {
  name: 'AppTopo',
}
</script>

<style scoped>
@media (max-width: 1023px) {
  .home {
    background: url('/app-obrigado-bg-sm.png');
    background-color: white !important;
    background-size: cover;
    background-position: center;
    min-height: 95vh;
  }
}
@media (min-width: 1024px) {
  .home {
    background: url('/app-obrigado-topo.png');
    background-color: white !important;
    background-size: cover;
    min-height: 95vh;
    background-position: bottom;
  }
}

@media (min-width: 1600px) {
  .home {
    background: url('/app-obrigado-topo.png');
    background-color: white !important;
    background-size: cover;
    min-height: 80vh;
    background-position: bottom;
  }
}
</style>
