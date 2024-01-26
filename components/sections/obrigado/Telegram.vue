<template>
  <div class="relative">
    <div class="flex justify-center my-10">
      <div class="w-10/12 lg:w-5/12">
        <iframe
          class="w-full aspect-video rounded-2xl"
          src="https://www.youtube.com/embed/cpAyDyQ2Ams"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
    <div class="telegram bg-white">
      <img
        class="absolute -top-24 left-8 lg:left-80"
        src="/fire-icon.svg"
        alt="Fire Icon"
      />

      <VContainer class="mt-20 lg:mt-0">
        <div class="lg:flex lg:items-center">
          <div class="lg:w-6/12 order-1 lg:order-2">
            <h1 class="text-[#383838] text-[22px] font-[700]">
              Acompanhe o Canal do&nbsp;Telegram
            </h1>
            <p class="text-[#383838] text-[14px] font-[400] mt-5">
              para ficar sempre por dentro de novidades fresquinhas sobre os
              meus conteúdos.
            </p>
            <a href="https://t.me/canalcatia" target="_blank">
              <button
                class="rounded-full py-3 px-4 bg-[#38BDF6] inter font-[800] text-[18px] text-white mt-8 text-center w-full"
              >
                Entrar no grupo do Telegram
              </button>
            </a>
          </div>
          <div class="lg:w-6/12 order-2 lg:order-1">
            <img
              class="w-full lg:w-2/3 mt-20 lg:mt-0"
              src="/telegram-mao.png"
              alt="Grupo Telegram Cátia Damasceno"
            />
          </div>
        </div>
      </VContainer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ObrigadoTelegram',
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .telegram {
    background: url('/telegram-bg.png');
    background-color: white;
    background-size: cover;
  }
}
</style>
