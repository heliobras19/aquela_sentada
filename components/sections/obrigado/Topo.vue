<template>
  <div class="bg-[#B40735] lg:bg-white home pt-10 lg:py-32">
    <VContainer>
      <div class="lg:w-6/12 lg:flex lg:flex-col">
        <h1 class="text-[#FF8C80] text-[22px] lg:text-[36px] font-[700]">
          Tudo bem...
        </h1>
        <h1 class="text-[#FF8C80] text-[22px] lg:text-[36px] lg:leading-[108.8%] font-[700] mt-5">
          O e-book “Senta, Suga e Esfrega” foi enviado para o seu e-mail.
        </h1>
        <div class="mt-12 lg:w-10/12">
          <p class="text-white text-[14px] lg:text-[18px] lg:font-[400]">
            Se, por algum acaso, o e-mail não chegar na sua caixa de entrada, <strong class="font-[800]">verifique no lixo eletrônico (SPAM) ou na aba “promoções”</strong>.
          </p>
          <p class="text-white text-[14px] lg:text-[18px] lg:font-[400] mt-3">
            Você também pode ter acesso ao material clicando em: <a class=" cursor-pointer text-blue-400 font-bold" href="https://app-vlc.hotmart.com/login?redirect=purchase.hotmart.com" target="_blank">Acessar material</a>.
          </p>
          <p class="text-white text-[14px] lg:text-[18px] lg:font-[400] mt-3">
            Basta fazer o login utilizando o mesmo e-mail do momento da compra. Caso não lembre a senha usada no cadastro, basta redefinir a senha clicando em: <a class=" cursor-pointer text-blue-400 font-bold" href="https://app-vlc.hotmart.com/password/forgot" target="_blank">Esqueci minha senha</a>.
          </p>
          <p class="text-white text-[14px] lg:text-[18px] lg:font-[400] mt-3">
            Caso esteja enfrentando problemas ao tentar abrir o link, recomendamos que você limpe o cache do seu navegador atual ou tente abrir o link acima em outro navegador. (Google Chrome, Mozilla, Opera)
          </p>
          <p class="text-white text-[14px] lg:text-[18px] lg:font-[400] mt-3">
            Se as dúvidas persistirem, você pode entrar em contato com o nosso suporte técnico através do e-mail 
            <a class="text-blue-400 font-bold" href="mailto:suporte@mulheresbemresolvidas.com.br">
              suporte@mulheresbemresolvidas.com.br
            </a>
          </p>
        </div>
      </div>
    </VContainer>
    <img class="block lg:hidden" src="/catia-obrigado.png" alt="Cátia Damasceno">
  </div>
</template>

<script>
export default {
    name: 'ObrigadoTopo'
  }
</script>

<style scoped>
@media( min-width: 1024px ) {
  .home {
    background: url('/obrigado-topo-bg.png');
    background-color: white !important;
    background-size: cover;
    min-height: 80vh;
  }
}
</style>