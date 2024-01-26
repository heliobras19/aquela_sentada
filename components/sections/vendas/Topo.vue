<template>
  <div>
    <div class="bg-banner-vendas-topo lg:py-16 xl:pt-12 xl:pb-0 md:min-h-[896px]">
      <div class="lg:flex lg:max-w-4xl xl:max-w-6xl lg:mx-auto lg:items-center h-full">
        <div class="lg:w-6/12 lg:order-2">
          <img class="block lg:hidden pt-4" src="/catia-topo-vendas.png" alt="Catia Topo" />
          <img class="hidden lg:block md:absolute md:left-[45vw] md:top-0" src="/catia-topo-vendas-lg.png"
            alt="Catia Topo" />
        </div>
        <div class="lg:w-6/12 lg:order-1 md:min-h-[896px] md:flex md:flex-col md:justify-center">
          <div class="w-10/12 lg:w-8/12 mx-auto lg:mx-0 lg:mr-auto">
            <div class="rounded-full border border-[#460A16] w-28 lg:w-44 p-[3px]">
              <p class="uppercase text-[11px] lg:text-[16px] text-center text-[#460A16]">
                livro digital
              </p>
            </div>
            <div class="mt-5">
              <p class="text-[32px] lg:text-[62.44px] leading-[108.8%] font-extrabold text-[#C53828]">
                Senta, Suga e Esfrega
              </p>
              <p class="text-[14px] lg:text-[17px] mt-5 leading-[17px] lg:leading-[20px]">
                Aprenda a brincadeira da sentada e viva sensações indescritíveis
              </p>
              <a class="w-full ctalink" href="https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10"
                target="_blank">
                <button
                  class="bg-[#5ABA0F] lg:text-[20px] rounded-full w-full py-3 text-white font-extra\bold mt-10 border-b-2 border-b-[#3D8207] font-bold hover:bg-[#3D8207] transition-colors">
                  Garanta o seu
                </button>
              </a>
            </div>
          </div>
          <div
            class="w-10/12 lg:w-[90%] lg:py-4 lg:mt-16 lg:px-4 lg:gap-10 lg:flex lg:items-center lg:justify-between mx-auto lg:ml-0 lg:border lg:border-[#FFB2A9] lg:rounded-3xl">
            <div class="flex items-center lg:justify-center gap-2 mt-10 lg:mt-0 lg:w-5/12">
              <img class="w-[43.94px] h-[43.94px] rounded-full shadow" src="/catia-avatar.png" alt="Catia Damasceno" />
              <p class="text-[14px] font-normal">Cátia Damasceno</p>
            </div>
            <div class="flex gap-5 items-center lg:justify-center mt-3 lg:mt-0 pb-28 lg:pb-0 lg:w-[60%]">
              <img class="w-[43.94px] h-[43.94px] rounded-full shadow" src="/icon-hot.png" alt="Fire Icon" />
              <p class="text-[14px] font-normal">
                12 movimentos que vão trazer estímulos diferentes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VendasTopo',
}
</script>

<style>
.bg-banner-vendas-topo {
  background-image: url('/banner-vendas-topo-mob.png');
  background-size: cover;
  background-position: bottom;
}

@media (min-width: 1024px) {
  .bg-banner-vendas-topo {
    background-image: url('/banner-vendas-topo-lg.png');
    background-size: cover;
    background-position: bottom;
  }
}

.shadow {
  box-sizing: border-box;
  filter: drop-shadow(0px 4px 13px rgba(0, 0, 0, 0.25));
}
</style>