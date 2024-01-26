<template>
  <div class="mt-10">
    <VContainer
      class="flex flex-col md:flex-row md:flex-wrap md:justify-center md:relative"
    >
      <div class="flex justify-center lg:justify-start mb-10 md:w-full">
        <p class="text-[25px] lg:text-[36px] text-[#B40735] font-bold lg:ml-20">
          Benefícios
        </p>
      </div>
      <div class="md:w-5/12">
        <SectionsVendasCardBeneficios :dados="dados1" />
      </div>
      <div class="flex justify-center -mt-5 md:w-[32px]">
        <img
          class="md:absolute md:top-[55%] md:w-[60px] md:h-[60px]"
          src="/icon-feminino.png"
          alt=""
        />
      </div>
      <div class="-mt-5 md:w-5/12 md:flex md:flex-col md:gap-[85px]">
        <div
          class="hidden md:block mt-16 w-full max-w-[340px] text-[18px] font-light pl-[37px] border-l-[9px] border-[#D01E4E]"
        >
          Aprenda a brincadeira da sentada e viva sensações indescritíveis.
        </div>
        <SectionsVendasCardBeneficios :dados="dados2" />
      </div>
    </VContainer>
    <div class="bg-onda mt-4">
      <VContainer
        class="flex flex-col md:flex-row md:flex-wrap md:gap-[32px] md:justify-center"
      >
        <div class="flex justify-center pt-52 md:text-left md:w-full">
          <p
            class="text-[#D01E4E] text-[25px] md:text-[42px] leading-[30px] md:leading-[46px] font-bold md:w-full md:mb-10"
          >
            Relatos de Mulheres<br class="hidden md:block" />
            que testaram
          </p>
        </div>
        <div
          class="w-full bg-white flex flex-col items-center mt-20 rounded-3xl md:w-[30%] md:mt-40"
        >
          <img src="/icon-aspas-red.png" class="-mt-7" alt="" />
          <div class="my-10 text-[14px] px-10 text-center">
            <p>
              Gostei muito já experimentei algumas técnicas sua com meu esposo e
              ele subiu pelas paredes agora ele que quer todo dia.
            </p>
          </div>
        </div>
        <div
          class="w-full flex flex-col items-center mt-20 rounded-3xl md:w-[30%] md:h-fit border border-[#BABABA]"
        >
          <img src="/icon-aspas-white.png" class="-mt-7" alt="" />
          <div class="my-10 text-[14px] px-10 text-center">
            <p>
              Ontem, fiquei com meu namorado, sentei de frente pra ele e fiz a
              contração vaginal, o meu namorado falou “assim não tem condições
              meu amor, você é Divina” Super amei sua dica Cátia
            </p>
          </div>
        </div>
        <div
          class="w-full bg-white flex flex-col items-center mt-20 rounded-3xl md:w-[30%] md:mt-40"
        >
          <img src="/icon-aspas-red.png" class="-mt-7" alt="" />
          <div class="my-10 text-[14px] px-10 text-center">
            <p>
              Fiz a sentada de costa com o aperta e solta. Ele urrou, amou e eu
              também. Somos maduros acima dos 60 e imagina... foi maravilhoso.
            </p>
          </div>
        </div>
      </VContainer>
      <SectionsAppUnlockAccess />
    </div>
  </div>
</template>

<script>
export default {
  name: 'VendasBeneficios',
  data() {
    return {
      dados1: [
        {
          text: 'Aumento da autoestima íntima',
        },
        {
          text: 'Melhora a química entre o casal',
        },
        {
          text: 'Controla o ápice masculino, retardando ou estimulando, de acordo com seus comandos',
        },
        {
          text: 'Proporciona o tão esperado ápice vaginal',
        },
        {
          text: 'O controle fica na suas mãos: você guia o ritmo a velocidade',
        },
        {
          text: 'Propicia o estímulo do ponto G',
        },
        {
          text: 'Propicia o estímulo da região íntima',
        },
      ],
      dados2: [
        {
          text: 'Propicia beijo na boca durante a penetração',
        },
        {
          text: 'Propicia o estímulo visual',
        },
        {
          text: 'Propicia o contato olho no olho',
        },
        {
          text: 'Aumento do desejo',
        },
        {
          text: 'Facilita e intensifica o ápice da mulher',
        },
        {
          text: 'Aumenta o tempo de penetração',
        },
        {
          text: 'Propicia o estímulo nos seios',
        },
      ],
    }
  },
}
</script>

<style scoped>
.bg-onda {
  background-image: url('/bg-onda.png');
  background-size: cover;
}

@media (min-width: 768px) {
  .bg-onda {
    background: url('/banner-catia-onda.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
}

@media (min-width: 1024px) {
  .bg-onda {
    background: url('/banner-catia-onda.svg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
  }
}
</style>
