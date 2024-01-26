<template>
  <div class="banner py-24 mt-3">
    <VContainer>
      <div class="lg:flex lg:items-center lg:justify-center lg:gap-28">
        <div class="lg:w-1/2">
          <img
            class="block lg:hidden mx-auto w-full"
            src="/foto-catia.png"
            alt="Cátia Damasceno"
          />
          <img
            class="hidden lg:block mx-auto w-full"
            src="/foto-catia-lg.png"
            alt="Cátia Damasceno"
          />
        </div>
        <div class="lg:w-1/2">
          <h1
            class="rubik font-bold text-[#D01E4E] text-[25px] lg:text-[36px] mt-8"
          >
            Cátia Damasceno
          </h1>
          <p class="text-[14px] lg:text-[18px] font-light mt-6">
            Cátia Damasceno é reconhecida como a maior especialista em
            relacionamento e intimidade do mundo. Seu canal no Youtube bateu a
            incrível marca de mais de 9 milhões de inscritos. Ela já foi eleita
            várias a influenciadora digital na categoria comportamento, nos
            prêmios Influence Me e Influenciadores Digitais. Cátia já fez parte
            de um quadro da Rede Globo no programa Se Joga, e participou como
            especialista em vários programas de TV. Seu trabalho impacta mais de
            30 milhões de pessoas todos os meses.
          </p>
          <p class="text-[14px] lg:text-[18px] font-light mt-5">
            "Minha missão é fazer a vida íntima das pessoas feliz. Todo mundo
            merece ser feliz na cama"
          </p>
          <p class="text-[16px] text-[#D01E4E] font-semibold mt-9">
            @catiadamasceno
          </p>
        </div>
      </div>
    </VContainer>
  </div>
</template>

<script>
export default {
  name: 'Catia',
}
</script>

<style scoped>
.banner {
  background: url('/banner-catia-onda.png');
}
@media (min-width: 1024px) {
  .banner {
    background: url('/banner-catia-onda.svg');
    background-size: cover;
    background-position: top;
  }
}
</style>
