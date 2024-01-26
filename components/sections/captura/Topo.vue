<template>
  <div class="banner text-white bg-[#FF8A78] pb-12 lg:pt-12">
    <VContainer>
      <div class="lg:flex gap-12">
        <img
          class="block lg:hidden w-full"
          src="/banner-captura-mobile.png"
          alt="Banner Cátia Damasceno"
        />
          <div class="lg:w-6/12">
            <span
              class="rounded-full border border-white text-[11.93px] px-5 py-1 font-ligth mb-3"
            >
              Livro Digital
            </span>
            <h1 class="rubik text-[35px] lg:text-[62.44px] lg:leading-[67.93px] font-bold mb-5 lg:mt-7">
              Senta, Suga e&nbsp;Esfrega
            </h1>
            <p class="text-[14px] lg:text-[17px] font-light mb-6">
              O passo a passo dos 12 movimentos está no livro Senta, Suga e
              Esfrega. Você vai aprender técnicas incríveis para ligar o turbo na
              sua SENTADA e viver sensações indescritíveis na cama.
            </p>
            <div class="rounded-2xl bg-[rgba(255,255,255,0.81)] py-4 px-6 w-full">
              <p class="text-black text-[14px] lg:text-[17px] font-light">
                Cadastre o seu e-mail para receber as informações sobre o
                lançamento do livro:
              </p>
              <form
              accept-charset="UTF-8"
              action="https://cr244.infusionsoft.com/app/form/process/c67c58e6fd941267b313e84a31ea6e8a"
              class="infusion-form"
              id="inf_form_c67c58e6fd941267b313e84a31ea6e8a"
              method="POST"
            >
              <input
                name="inf_form_xid"
                type="hidden"
                value="c67c58e6fd941267b313e84a31ea6e8a"
              />
              <input
                name="inf_form_name"
                type="hidden"
                value="Pg - Captura - SSE Geral"
              />
              <input
                name="infusionsoft_version"
                type="hidden"
                value="1.70.0.454578"
              />
              <input name="inf_custom_LeadSource" type="hidden" value="null" />
              <input name="inf_custom_GaContent" type="hidden" value="null" />
              <input name="inf_custom_GaMedium" type="hidden" value="null" />
              <input name="inf_custom_GaCampaign" type="hidden" value="null" />
              <input name="inf_custom_GaSource" type="hidden" value="null" />
              <input
                id="inf_field_Email" name="inf_field_Email"
                class="border border-[#FF9776] w-full rounded-2xl py-3 px-4 mt-4 text-[#383838]"
                placeholder="E-mail"
                type="email"
              />
              <button
                class="bg-[#51A90C] rounded-2xl lg:rounded-full font-normal text-center text-[14px] py-4 px-8 lg:px-0 mt-2 lg:w-full lg:mb-3"
              >
                Quero saber tudo sobre o livro Senta, Suga e Esfrega
              </button>
            </form>
            </div>
            <p class="text-[14px] lg:text-[17px] font-light mb-6 mt-4">
              Esse cadastro é 100% gratuito e apenas garante que você vai receber
              as informações sobre o livro no e-mail cadastrado.
            </p>
            <p class="text-[14px] lg:text-[17px] font-light">
              Fique de olho no seu e-mail para não perder nenhuma novidade.
            </p>
          </div>
          <div class="hidden lg:flex lg:flex-col lg:w-6/12">
            <div class="flex gap-8">
              <div class="flex items-center gap-2">
                <img class="w-[43.94px] h-[43.94px]" src="/catia-avatar.png" alt="Cátia Damasceno">
                <p class="text-[14px] lg:text-[17px] font-light">Cátia Damasceno</p>
              </div>
              <div class="flex items-center gap-2">
                <img class="w-[48.57px] h-[48.57px]" src="/fire-icon.svg" alt="Cátia Damasceno">
                <p class="text-[14px] lg:text-[17px] font-light">12 movimentos que vão trazer estímulos diferentes.</p>
              </div>
            </div>
            <img class="mt-[15rem]" src="/livro-banner.png" alt="E-book Senta, Suga e Esfrega">
          </div>
      </div>
    </VContainer>
  </div>
</template>

<script>
export default {
  name: 'CapturaTopo',
}
</script>

<style lang="scss" scoped>
@media (min-width: 1024px) {
  .banner {
    background: url('/banner-vendas.png');
    background-repeat: no-repeat;
    background-position: top;
  }
}
</style>
