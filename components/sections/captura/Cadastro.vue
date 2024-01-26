<template>
  <div>
    <div
      class="relative bg-[#D01E4E] w-[92%] lg:w-[70%] mx-auto rounded-3xl lg:rounded-[89px] text-white lg:mt-32"
    >
      <img
        class="block lg:hidden absolute -top-16 right-5"
        src="/captura-badge.png"
        alt="Badge Versão do Livro"
      />
      <img
        class="hidden lg:block absolute -top-16 left-28"
        src="/captura-badge.png"
        alt="Badge Versão do Livro"
      />
      <div class="lg:flex items-center">
        <div
          class="flex flex-col items-center lg:w-11/12 mt-32 lg:mt-0 pt-28 lg:pt-0 px-8 lg:px-20"
        >
          <p
            class="text-[14px] lg:text-[16.31px] text-white font-light leading-[18.9px]"
          >
            O passo a passo dos 12 movimentos está no livro Senta, Suga e
            Esfrega. Você vai aprender técnicas incríveis para ligar o turbo na
            sua SENTADA e viver sensações indescritíveis na cama.
          </p>
          <p class="text-[15px] font-bold my-10">
            Cadastre o seu e-mail para receber as informações sobre o lançamento
            do livro:
          </p>
          <div class="lg:bg-[#EF406F] lg:rounded-3xl lg:px-5 lg:py-2">
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

          <!-- <form accept-charset="UTF-8" action="https://cr244.infusionsoft.com/app/form/process/c67c58e6fd941267b313e84a31ea6e8a" class="infusion-form" id="inf_form_c67c58e6fd941267b313e84a31ea6e8a" method="POST">
    <input name="inf_form_xid" type="hidden" value="c67c58e6fd941267b313e84a31ea6e8a" />
    <input name="inf_form_name" type="hidden" value="Pg - Captura - SSE Geral" />
    <input name="infusionsoft_version" type="hidden" value="1.70.0.454578" />
    <input name="inf_custom_LeadSource" type="hidden" value="null" />
    <input name="inf_custom_GaContent" type="hidden" value="null" />
    <input name="inf_custom_GaMedium" type="hidden" value="null" />
    <input name="inf_custom_GaCampaign" type="hidden" value="null" />
    <input name="inf_custom_GaSource" type="hidden" value="null" />
    <div class="infusion-field">
        <label for="inf_field_Email">Email *</label>
        <input id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text" />
    </div>
    <div>
        <div>&nbsp;</div>
    </div>
    <div class="infusion-submit">
        <button type="submit">Submit</button>
    </div>
</form>
 -->
        </div>
        <img
          class="block lg:hidden ml-auto mt-10 w-full"
          src="/catia-livro.png"
          alt="Cátia Livro"
        />
        <img
          class="hidden lg:block ml-auto -mt-24 w-full"
          src="/catia-livro-lg.png"
          alt="Cátia Livro"
        />
      </div>
    </div>
    <div>
      <div
        class="relative shadow rounded-3xl w-[92%] lg:w-[40%] mx-auto px-8 py-7 lg:-mt-10 lg:z-10 lg:bg-white"
      >
        <img
          class="absolute inset-x-0 -top-5 mx-auto"
          src="/icon-warning.svg"
          alt="Icon Warning"
        />
        <p class="font-[300] text-[18px] leading-[25.2px] text-center">
          Esse cadastro é 100% gratuito e apenas garante que você vai receber as
          informações sobre o livro no e-mail cadastrado.
        </p>
        <p class="font-[800] text-[18px] leading-[25.2px] text-center mt-5">
          Fique de olho no seu e-mail para não perder nenhuma novidade.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cadastro',
}
</script>

<style lang="scss" scoped></style>
