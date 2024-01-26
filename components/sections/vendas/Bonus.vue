<template>
  <div>
    <VContainer>
      <div class="w-full">
        <h2
          class="text-[36px] text-center my-14 md:my-20 font-bold text-[#D01E4E]"
        >
          Bônus
        </h2>
      </div>
      <div
        class="w-full flex flex-col md:flex-row gap-20 items-center md:items-start mb-20"
      >
        <div class="flex flex-col items-center gap-5 md:w-4/12">
          <img src="/icon-produto-eroticos.png" alt="" />
          <div class="lg:text-center lg:w-52 lg:leading-[43px]">
            <p
              class="text-center text-[22px] text-[#D01E4E] font-bold lg:text-[36px]"
            >
              Produtos Eróticos
            </p>
          </div>
          <p class="text-[14px] lg:text-[17px] text-center">
            Quais são e como usar os produtos eróticos que vão deixar essa
            sentada ainda mais gostosa, se é que isso é possível – e é.
          </p>
        </div>
        <div class="flex flex-col items-center gap-5 md:w-4/12">
          <img src="/icon-contos-eroticos.png" alt="" />
          <p
            class="text-center text-[22px] lg:text-[36px] text-[#D01E4E] font-bold"
          >
            Conto erótico
          </p>
          <p
            class="font-bold text-[18px] lg:text-[22px] md:-mt-5 text-[#383838]"
          >
            A Sentada de 2 Horas
          </p>
          <p class="text-[14px] lg:text-[17px] text-center">
            Uma relação íntima" não é apenas um ato físico, mas também é
            emocional, principalmente para a mulher. Ao comprar o livro, você
            vai ter acesso a uma história sensual de uma mulher que fez todos os
            movimentos do livro, contando detalhes do que viveu e sentiu.
            Estimular sua imaginação é o passo mais importante da sexualidade.
          </p>
        </div>
        <div class="flex flex-col items-center gap-5 md:w-4/12">
          <img src="/icon-encaixe.png" alt="" />
          <div class="lg:text-center lg:w-52 lg:leading-[43px]">
            <p
              class="text-center text-[22px] lg:text-[36px] text-[#D01E4E] font-bold"
            >
              O Encaixe Perfeito
            </p>
          </div>
          <p class="text-[14px] text-center lg:text-[17px]">
            Como tirar o melhor proveito de cada tamanho e formato do órgão
            masculino
          </p>
        </div>
      </div>
    </VContainer>
    <div class="bg-comprovado relative">
      <VContainer class="flex flex-col md:flex-row">
        <div class="pt-16 md:w-6/12 md:pb-20">
          <div
            class="w-[52px] h-[52px] bg-[#FF9776] hidden md:block absolute -top-[26px]"
          ></div>
          <p
            class="text-[25px] md:text-[36px] leading-[30px] md:leading-10 rubik font-bold text-[#B40735]"
          >
            Comprovado<br class="hidden md:block" />
            cientificamente
          </p>
          <p
            class="text-[#383838] text-[14px] md:text-[18px] md:max-w-[520px] mt-8"
          >
            <strong
              >Pesquisas nacionais já mostraram que um terço das mulheres nunca
              chegaram ao ápice.
            </strong>
            De 18% a 20% delas não conseguem atingir o clímax durante a
            penetração.
          </p>
          <p
            class="text-[#383838] text-[14px] md:text-[18px] md:max-w-[520px] mt-5"
          >
            Isso acontece porque a
            <strong>
              mulher não sabe ativar as terminações nervosas da região íntima
              durante a relação,</strong
            >
            ou porque não experimentam alternar estímulos, ou até combinar mais
            de um estímulo ao mesmo tempo.
          </p>
          <p
            class="text-[#383838] text-[14px] md:text-[18px] md:max-w-[520px] mt-5"
          >
            A penetração não tem que ser boa só para o homem. Chega!
          </p>
        </div>
        <div class="mt-5 pb-16 flex justify-center md:hidden">
          <img src="/img-artigo-orgasmo.png" alt="" />
        </div>
        <div class="hidden md:block w-6/12 -mt-20">
          <img src="/img-artigo-orgasmo-lg.png" alt="" />
        </div>
      </VContainer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VendasBonus',
}
</script>

<style scoped>
.bg-comprovado {
  background-image: url('/bg-comprovado.png');
  background-size: cover;
}
</style>
