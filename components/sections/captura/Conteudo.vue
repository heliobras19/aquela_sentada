<template>
  <div class="relative banner py-16">
    <img class="hidden lg:block absolute -top-12 left-[30rem]" src="/fire-icon.svg" alt="Fire Icon">
    <VContainer>
      <div class="flex flex-col lg:w-2/3 lg:mx-auto items-center text-white text-center lg:mb-16">
        <h1 class="rubik text-[25px] lg:text-[36px] font-bold text-white leading-[29.63px] m-5">Conteúdo do Livro</h1>
        <p class="text-[14px] lg:text-[18px] leading-[18.2px] lg:font-light text-[300]">
          Ao todo, você vai aprender 12 movimentos que vão trazer estímulos diferentes. Alguns, com certeza, você nunca nem sonhou em experimentar
        </p>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-x-2 lg:gap-x-8 lg:gap-y-9  gap-y-3 text-white mt-5">
        <div v-for="(conteudo, index) in conteudoLivro" :key="conteudo.livro" :class="`border rounded-2xl min-h-[90px] lg:min-h-[140px] py-3 px-4 text-center ${ index % 2 === 0 ? 'bg-[#D01E4E] border-transparent' : 'bg-transparent border-[#FF0246]' }`">
          <h1 class="rubik text-[11.44px] lg:text-[19px] font-bold">
            {{ conteudo.titulo }}
          </h1>
          <p class="text-[12.04px] lg:text-[20px] font-normal mt-2">
            {{ conteudo.descricao }}
          </p>
        </div>
      </div>
      <div class="rounded-full lg:rounded-2xl bg-[#D01E4E] w-1/2 lg:w-1/4 mx-auto text-center mt-7 py-3 px-3">
        <p class="rubik text-[14px] lg:text-[19px] text-white font-bold">
          + Bonus especiais
        </p>
      </div>
    </VContainer>
  </div>
</template>

<script>
export default {
  name: "Conteudo",
  data() {
    return {
      conteudoLivro: [
        {
          titulo: 'Movimento 1',
          descricao: 'Pulsar: apertar e soltar rápido'
        },
        {
          titulo: 'Movimento 2',
          descricao: 'Sentadinha traiçoeira'
        },
        {
          titulo: 'Movimento 3',
          descricao: 'Quicada longa'
        },
        {
          titulo: 'Movimento 4',
          descricao: 'Sequência de quicada curta'
        },
        {
          titulo: 'Movimento 5',
          descricao: 'Rebolada mágica'
        },
        {
          titulo: 'Movimento 6',
          descricao: 'Salto com vara esfregando'
        },
        {
          titulo: 'Movimento 7',
          descricao: 'Jantadinha'
        },
        {
          titulo: 'Movimento 8',
          descricao: 'Esfregadinha nas alturas'
        },
        {
          titulo: 'Movimento 9',
          descricao: 'Carrinho de mão'
        },
        {
          titulo: 'Movimento 10',
          descricao: 'Invertida de costas'
        },
        {
          titulo: 'Movimento 11',
          descricao: 'Sentada na garupa'
        },
        {
          titulo: 'Movimento 12',
          descricao: 'Pulsando entrelaçada'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.banner {
    background: url('/conteudo-banner.svg');
    background-size: cover;
    background-position: center;
  }
@media( min-width: 1024px ) {
  .banner {
     background: url('/conteudo-banner-sm.svg');
    background-size: left;
    background-position: center;
  }
}
</style>