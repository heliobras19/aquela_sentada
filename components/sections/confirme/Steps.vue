<template>
  <div class="steps">
      <VContainer>
          <div class="flex w-full flex-col lg:items-center lg:justify-center pb-8 lg:pb-72">
            <h2 class=" text-4xl text-[#D01E4E] font-bold">Passo a passo</h2>
            <div class="w-[40px] h-[5px] bg-[#D01E4E] my-[30px]"></div>
            <h3 class="lg:text-center leading-5 text-lg mb-8">Siga os passos a baixo para <br class="hidden lg:block">confirmar sua inscrição</h3>
            <div class="w-full flex flex-col lg:flex-row justify-around items-center relative">
                <img class="absolute rotate-90 lg:rotate-0 -left-[110px] lg:left-[initial] mb-[20px] lg:mb-0" src="/steps-line.svg" alt="Steps line" />
                <div class="flex mb-10 lg:mb-0 lg:flex-col z-10 justify-center items-center relative">
                    <img class="w-[100px] lg:w-[initial]" src="/step-1.svg" alt="Step 1"/>
                    <p class="lg:absolute ml-3 lg:ml-0 lg:-bottom-[90px] lg:text-center text-lg leading-6 text-[#707070] w-[240px]"><strong>Enviamos um link para o endereço de e-mail</strong> que você informou.</p>
                </div>
                <div class="flex mb-10 lg:mb-0 lg:flex-col z-10 justify-center items-center relative">
                    <img class="w-[100px] lg:w-[initial]" src="/step-2.svg" alt="Step 2"/>
                    <p class="lg:absolute ml-3 lg:ml-0 lg:-bottom-[90px] lg:text-center text-lg leading-6 text-[#707070] w-[240px]"><strong>Abra o e-mail</strong> que você recebeu e clique no link de confirmação.</p>
                </div>
                <div class="flex mb-10 lg:mb-0 lg:flex-col z-10 justify-center items-center relative">
                    <img class="w-[100px] lg:w-[initial]" src="/step-3.svg" alt="Step 3"/>
                    <p class="lg:absolute ml-3 lg:ml-0 lg:-bottom-[90px] lg:text-center text-lg leading-6 text-[#707070] w-[240px]"><strong>Aguarde ser redirecionada</strong> para uma página de confirmação.</p>
                </div>
            </div>          
          </div>
      </VContainer>
  </div>
</template>

<script>
export default {
  name: 'ConfirmeSteps',
}
</script>

<style scoped>
.steps{
  background: url('/confirmeBg.png');
  background-size: cover;
  background-position: bottom;
}

@media( min-width: 1024px ) {
  .home {
    background: #fff;
    background-size: cover;
  }
}
</style>