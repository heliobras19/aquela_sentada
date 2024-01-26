<template>
  <div class="mt-8">
    <VContainer class="flex flex-col justify-center items-center w-full">
      <div class="flex gap-5 md:gap-8 items-center">
        <div class="flex items-center gap-3">
          <img src="/icon-check-garantia.png" class="md:hidden" alt="" />
          <img
            src="/icon-check-garantia-lg.png"
            class="hidden md:block"
            alt=""
          />
          <div>
            <p
              class="text-[23px] md:text-[48px] font-extrabold leading-[28px] md:leading-[51px] text-[#D01E4E]"
            >
              7 DIAS
            </p>
            <p
              class="text-[12px] md:text-[23px] uppercase leading-[14px] md:leading-[20px]"
            >
              De Garantia
            </p>
          </div>
        </div>
        <div>
          <hr class="bg-[#B40735] border border-[#B40735] h-16" />
        </div>
        <div class="w-36 md:w-80">
          <p
            class="text-[10.97px] md:text-[17px] leading-[13px] md:leading-[20px]"
          >
            Você pode comprar o livro, fazer o download e ler. Se achar que não
            foi bom,
            <strong
              >você tem até 7 dias para pedir 100% do dinheiro de volta</strong
            >
            – e ainda pode continuar com o livro.
          </p>
        </div>
      </div>
      <div
        class="bg-[#D01E4E] mt-20 rounded-3xl md:rounded-[89px] md:flex relative w-full"
      >
        <img
          src="/icon-sse.png"
          class="absolute md:hidden -top-14 right-6"
          alt="Icon SSE"
        />
        <img
          src="/icon-sse-lg.png"
          width="136"
          height="139"
          class="absolute hidden md:block -top-16 right-24"
          alt="Icon SSE"
        />
        <div
          class="px-6 md:px-0 pt-[70px] md:ml-[70px] md:pt-[125px] md:pb-[80px] md:w-[270px]"
        >
          <p
            class="text-[25px] md:text-[34px] md:leading-10 text-white leading-[30px] font-bold"
          >
            Aprenda os 12 movimentos da sentada
          </p>
          <p class="text-[14px] md:text-[16px] font-light text-white mt-5">
            E viva sensações indescritíveis nas suas relações. Você e seu
            parceiro vão sentir coisas que nunca nem sonharam viver.
          </p>
          <div
            class="border border-[#FF6D95] rounded-xl mt-10 mb-5 px-5 py-3 md:px-8 md:py-6 md:min-w-[340px]"
          >
            <p
              class="text-[12px] md:text-[15px] md:leading-5 text-white font-light leading-[108.8%]"
            >
              <span class="font-bold">OBS: </span> O LIVRO SERÁ DISPONIBILIZADO
              EM SUA VERSÃO DIGITAL (E-BOOK)
            </p>
          </div>
        </div>
        <div class="flex-col justify-end grow hidden md:flex">
          <img
            src="/catia-livro-lg.png"
            width="470"
            height="590"
            class="bottom-5 md:bottom-8 md:pb-0 mt-0 absolute w-[576px] h-[590px] -ml-[45px]"
            alt="Catia book lg"
          />
        </div>
        <div class="px-6 md:px-0 md:mr-[70px] md:pt-[160px] md:min-w-[310px]">
          <div>
            <p class="uppercase text-white text-[10px]">Apenas</p>
            <p
              class="text-[48.9361px] rubik leading-[58px] font-bold text-white"
            >
              R$29,90
            </p>
            <p class="text-[13px] uppercase text-white leading-[16px] mt-2">
              Acesso imediato
            </p>

            <a
              class="w-full ctalink"
              href="https://pay.hotmart.com/T69369502K?off=mwd4d44k&checkoutMode=10"
              target="_blank"
            >
              <button
                class="bg-[#5ABA0F] w-full border-b-2 border-b-[#3D8207] text-white mt-10 rounded-full p-4 font-bold hover:bg-[#3D8207] transition-colors"
              >
                Comprar livro agora
              </button>
            </a>
          </div>
          <div class="w-full flex justify-center mt-7">
            <img src="/pagamentos.png" alt="" />
          </div>
        </div>
        <img
          src="/catia-livro.png"
          class="mt-10 pb-5 w-full md:hidden"
          alt=""
        />
      </div>
      <div
        class="bg-white flex flex-col items-center shadow-lg px-4 rounded-2xl -mt-5 md:-mt-9 md:max-w-[580px] z-10"
      >
        <img src="/ellipse-pele.png" class="-mt-5" alt="Skin color circle" />
        <p class="text-[14px] text-center my-5">
          Após a finalização da compra o seu E-book
          <strong>será enviado para o E-mail</strong>
          que você inserir no Checkout.
        </p>
      </div>
    </VContainer>
  </div>
</template>

<script>
export default {
  name: 'VendasValores',
}
</script>

<style></style>