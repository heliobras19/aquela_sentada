<template>
  <div class="bg-[#9E042D] mt-20 py-10 w-full">
    <VContainer class="flex flex-col md:flex-row justify-center items-center">
      <div class="flex gap-10 md:w-6/12">
        <div>
          <hr class="bg-[#FF497A] border border-[#FF497A] w-[2px] h-full" />
        </div>
        <div class="pr-12">
          <p class="text-[18px] font-bold text-white leading-[22px]">
            Comprar livro e desbloquear o acesso
          </p>
          <p class="font-light text-white">a todos os 12 movimentos.</p>
        </div>
      </div>
      <div
        class="w-full flex justify-center items-center md:justify-end mt-10 md:mt-0 md:w-6/12"
      >
        <a
          class="w-full md:max-w-[385px] ctalink"
          href="https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10"
          target="_blank"
        >
          <button
            class="font-bold font-[18px] bg-[#5ABA0F] w-full border-b-4 border-b-[#3D8207] text-white p-3 rounded-full md:max-w-[385px] hover:bg-[#3D8207] transition-colors"
          >
            Desbloquear meu acesso
          </button>
        </a>
      </div>
    </VContainer>
  </div>
</template>

<script>
export default {
  name: 'UnlockAccess',
}
</script>