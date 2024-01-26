<template>
<div>

    <div class="bg-banner-upsell">
      <div class="bg-topo-upesell">
        <div class="container mx-auto">
          <div class="w-10/12 mx-auto flex justify-center">
            <div
              class="w-10/12 mx-auto flex justify-center gap-10 mt-7 items-center"
            >
              <div class="">
                <div class="flex justify-end">
                  <img src="/icon-atencao.png" alt="" />
                </div>
                <h1 class="text-[#FF7463] text-[36px] caslon text-right">
                  sua compra foi aprovada!
                </h1>
              </div>
              <div class="flex justify-center">
                <hr class="border border-[#FF7463] h-16 w-[1px] bg-[#FF7463]" />
              </div>
              <div class="">
                <div class="w-96">
                  <p class="leading-[109%]">
                    <strong
                      >Leia essa página para entender como acessar o
                      e-book</strong
                    >
                    “Senta, Suga e Esfrega” e como você pode entrar no meu curso
                    de Ginástica Íntima com um MEGADESCONTO.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <div class="mx-auto w-[328.57px] mt-5">
          <div
            class="
              border border-[#FFA589]
              rounded-3xl
              p-5
              relative
              flex
              justify-center
            "
          >
            <div class="absolute bg-[#FF7463] -top-2 rounded-full px-4">
              <p class="text-center text-white">IMPORTANTE:</p>
            </div>
            <p class="text-center leading-[126.5%]">
              se você fechar essa página, esse
              <strong> desconto vai EXPIRAR.</strong>
            </p>
          </div>
          <div>
            <p class="text-center">A hora de tomar a sua decisão é agora.</p>
          </div>
        </div>
        <div class="container mx-auto">
          <div class="w-11/12 mx-auto flex">
            <div class="w-5/12">
              <div class="w-96">
                <h1 class="caslon text-[56px] leading-[109%] text-[#FF7F6C]">
                  Antes de tudo… Meus parabéns!
                </h1>
              </div>
              <p class="text-[18px] mt-5">
                Você já deu um primeiro passo muito importante para o seu
                desenvolvimento pessoal.
              </p>
              <p class="text-[18px] mt-5">
                As sentadas e brincadeiras do e-book são in-crí-veis, mas a
                verdade é que se você casar as técnicas do e-book com os
                exercícios de Ginástica Íntima, você terá mais força, habilidade,
                saúde e consciência corporal para ligar o turbo na sua sentada.
              </p>
              <p class="text-[18px] mt-5">
                A boa notícia é que eu liberei um
                <strong>megadesconto</strong> para você, que agora já é minha
                cliente.
              </p>
              <p class="text-[18px] mt-5">
                Normalmente, o meu curso de Ginástica Íntima + Aplicativo Aperta &
                Solta, seu personal trainer virtual,
                <strong>custa 646 reais.</strong>
              </p>
              <p class="text-[18px] mt-5">
                Nessa oferta, você vai pagar apenas
                <strong>12x de R$29,90.</strong>
              </p>
              <p class="text-[18px] mt-5">Ou Seja:</p>
              <div class="mt-5 mb-28">
                <div class="flex items-center gap-5 border border-[#FF7463] w-[435.74px] h-[114.8px] justify-center bg-white rounded-3xl">
                  <div class="">
                    <p class="text-[67px] text-[#FF7463] font-extrabold">50%</p>
                    <p class="uppercase text-[19px] text-[#FF7463] -mt-5 font-bold"> de desconto</p>
                  </div>  
                  <div class="w-40">
                    <p class="font-bold"> no valor do curso + aplicativo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center items-center bg-[#D8F2ED] p-5">
      <p> <strong>Veja o vídeo abaixo</strong>  para entender todos os benefícios dessa prática.</p>
    </div>
</div>
</template>

<script>
export default {
  name: 'UpsellTopo',
}
</script>

<style scopped>
body {
  font-family: 'Inter', sans-serif;
}
.bg-topo-upesell {
  background-image: url('/bg-topo-upesell.png');
  height: 175.8px;
  background-size: cover;
  background-position: bottom;
}

.bg-banner-upsell {
  background-image: url('/banner-upsell.gif');
  background-size: cover;
  background-position: right;
}

@media(max-width: 1800px){
  .bg-banner-upsell {
    background-image: url('/banner-upsell.gif');
    background-size: 101% 80%;
    background-repeat: no-repeat;
    background-position: bottom;
    background-color: #f3f3f3;
  }
}
</style>