<template>
  <div class="top w-full flex items-center justify-center">
    <VContainer>
      <div class="w-full flex items-center justify-center flex-col text-white">
        <h1 class=" text-6xl font-bold mb-12 -mt-16">Quase lá...</h1>
        <h3 class="text-center text-lg leading-[108%]"><strong>Enviamos um e-mail para você confirmar<br class="hidden lg:block"> o seu interesse <br class="lg:hidden">no e-book.<br><br class="lg:hidden"></strong>
Siga os passos abaixo para confirmar.</h3>
      </div>
    </VContainer>
  </div>
</template>

<script>
export default {
  name: 'ConfirmeTopo',
}
</script>

<style scoped>
.top {
  background: url('/confirme-top-bg.png');
  background-color: white !important;
  background-size: cover;
  background-position: center;
  min-height: 570px
}

@media( min-width: 1024px ) {
  .home {
    background: url('/confirme-top-bg.png');
    background-color: white !important;
    background-size: cover;
    min-height: 80vh;
  }
}
</style>
