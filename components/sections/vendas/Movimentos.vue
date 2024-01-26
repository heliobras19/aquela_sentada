<template>
  <div class="relative banner pt-16">
    <img
      class="hidden lg:block absolute -top-12 left-[30rem]"
      src="/fire-icon.svg"
      alt="Fire Icon"
    />
    <VContainer>
      <div
        class="flex flex-col lg:w-2/3 lg:mx-auto items-center text-white text-center lg:mb-16"
      >
        <h1
          class="rubik text-[25px] lg:text-[36px] font-bold text-white leading-[29.63px] m-5 lg:hidden block"
        >
          Movimentos
        </h1>
        <h1
          class="rubik text-[25px] lg:text-[36px] font-bold text-white leading-[29.63px] m-5 lg:block hidden"
        >
          Outros movimentos
        </h1>
        <p
          class="text-[14px] lg:text-[18px] leading-[18.2px] lg:leading-[130.02%] lg:font-light text-[300] lg:w-10/12"
        >
          Ao desbloquear o E-book você vai ter acesso aos 12 movimentos. Cada
          movimento eu vou te ensinar como fazer, quando fazer, posições , dicas
          quentes e uma explicação fisiológica de por que funciona.
        </p>
      </div>
      <div
        class="grid grid-cols-2 lg:grid-cols-4 gap-x-2 lg:gap-x-8 lg:gap-y-9 gap-y-9 text-white mt-5"
      >
        <div
          v-for="(conteudo, index) in conteudoLivro"
          :key="conteudo.livro"
          :class="`border rounded-2xl min-h-[130px] lg:min-h-[140px] py-3 px-6 text-center relative flex flex-col items-center ${
            index % 2 === 0
              ? 'bg-[#D01E4E] border-transparent'
              : 'bg-[#9E042D] border-transparent'
          }`"
        >
          <h1 class="rubik text-[11.44px] lg:text-[19px] font-bold">
            {{ conteudo.titulo }}
          </h1>
          <p class="text-[12.04px] lg:text-[20px] font-normal mt-2">
            {{ conteudo.descricao }}
          </p>
          <div
            :class="`accessButton absolute -bottom-4 flex  justify-center w-full md:w-[189px] rounded-[10px] ${
              index % 2 === 0 ? 'bg-[#FF497A]' : 'bg-[#D01E4E]'
            } hover:bg-[#5ABA0F]`"
          >
            <a
              class="w-full ctalink"
              href="https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10"
              target="_blank"
            >
              <button
                :class="`text-[11px] flex items-center gap-2 p-2 w-full justify-center`"
              >
                <p>LIBERAR O ACESSO</p>
                <img class="lock" src="/icon-cadeado.svg" alt="" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </VContainer>
    <SectionsAppUnlockAccess />
  </div>
</template>

<script>
export default {
  name: 'VendasMovimentos',
  data() {
    return {
      conteudoLivro: [
        {
          titulo: 'Movimento 2',
          descricao: 'Sentadinha traiçoeira',
        },
        {
          titulo: 'Movimento 3',
          descricao: 'Quicada longa',
        },
        {
          titulo: 'Movimento 4',
          descricao: 'Sequência de quicada curta',
        },
        {
          titulo: 'Movimento 5',
          descricao: 'Rebolada mágica',
        },
        {
          titulo: 'Movimento 6',
          descricao: 'Salto com vara esfregando',
        },
        {
          titulo: 'Movimento 7',
          descricao: 'Jantadinha',
        },
        {
          titulo: 'Movimento 8',
          descricao: 'Esfregadinha nas alturas',
        },
        {
          titulo: 'Movimento 9',
          descricao: 'Carrinho de mão',
        },
        {
          titulo: 'Movimento 10',
          descricao: 'Invertida de costas',
        },
        {
          titulo: 'Movimento 11',
          descricao: 'Sentada na garupa',
        },
        {
          titulo: 'Movimento 12',
          descricao: 'Pulsando entrelaçada',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.banner {
  background: url('/conteudo-banner.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
@media (min-width: 1024px) {
  .banner {
    background: url('/conteudo-banner-sm.svg');
    background-size: left;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
}

.accessButton {
  transition: background 0.25s;
}

.accessButton:hover .lock {
  display: none;
}
</style>